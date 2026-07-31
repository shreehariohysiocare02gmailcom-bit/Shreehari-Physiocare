import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { CLINIC_INFO } from "@/lib/data";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { question, condition } = body;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Please provide a valid question." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // If API key is not yet set in environment, provide a structured clinical response
    if (!apiKey) {
      const fallbackText = `### Clinical & Ergonomic Guidance from ${CLINIC_INFO.name}

Thank you for your question regarding **"${question}"**${condition ? ` (${condition})` : ""}.

**General Physiotherapy Advice:**
*   **Rest & Activity Modification:** Avoid movements that reproduce sharp radiating pain. During acute flare-ups, gentle supported postures are safer than complete bed rest.
*   **Ice vs. Heat:** For acute injury or swelling within 48 hours, apply a cold pack for 15–20 minutes. For chronic stiffness or muscle tightness, a warm compress helps relax muscle fibers.
*   **Postural Ergonomics:** Keep your spine neutral when sitting or lifting. Support your lumbar curve with a small cushion and keep screens at eye level.

**Why Professional Assessment Matters:**
Every musculoskeletal condition requires careful physical evaluation to identify the exact root cause—whether ligamentous, muscular, or neurological.

**We are ready to help you at our Bhiwadi clinic:**
*   **Address:** ${CLINIC_INFO.address.fullAddress}
*   **Call / WhatsApp:** ${CLINIC_INFO.phoneFormatted}
*   **Hours:** ${CLINIC_INFO.operatingHours.days}, ${CLINIC_INFO.operatingHours.hours}`;

      return NextResponse.json({
        answer: fallbackText,
        isFallback: true,
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemPrompt = `You are the empathetic, expert AI Physiotherapy & Ergonomics Assistant for "${CLINIC_INFO.name}", a premier physiotherapy clinic and rehabilitation center located at ${CLINIC_INFO.address.fullAddress}.
Phone number: ${CLINIC_INFO.phoneFormatted}
Operating Hours: ${CLINIC_INFO.operatingHours.days}, ${CLINIC_INFO.operatingHours.hours}

Your role:
1. Provide clear, empathetic, evidence-based general physiotherapy, posture, and pain management advice for the user's question.
2. Structure your answer clearly using Markdown headings, short bullet points, and practical home tips (e.g., posture adjustments, safe stretches, or hot/cold therapy guidance).
3. Explain how clinical physiotherapy modalities (like IFT, Ultrasound, manual therapy, or supervised exercises) help treat such issues.
4. Encourage the user to visit or contact Shree Hari Physio Care in Saidpur, Bhiwadi for a comprehensive physical evaluation.
5. Include a brief medical disclaimer at the bottom stating that this advice is for educational/ergonomic guidance and not a replacement for an in-person diagnosis.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `${systemPrompt}\n\nUser Question: "${question}"\nContext Condition: "${condition || "General Physio Question"}"`,
    });

    return NextResponse.json({
      answer: response.text || "Thank you for reaching out. Please call us at 9306584551 for a consultation.",
      isFallback: false,
    });
  } catch (error) {
    console.error("AI Physio Advisor error:", error);
    return NextResponse.json(
      {
        error: "Unable to generate advice right now. Please call or WhatsApp us at 9306584551.",
      },
      { status: 500 }
    );
  }
}
