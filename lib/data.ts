export interface ClinicInfo {
  name: string;
  tagline: string;
  category: string;
  address: {
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  operatingHours: {
    days: string;
    hours: string;
    sunday: string;
  };
  googleMapsQueryUrl: string;
}

export const CLINIC_INFO: ClinicInfo = {
  name: "Shree Hari Physio Care",
  tagline: "Restoring Movement, Relieving Pain, Renewing Life",
  category: "Physiotherapy Clinic / Rehabilitation Center",
  address: {
    street: "Nagina Garden Front Road",
    landmark: "Near Shree Ram Colony",
    area: "Saidpur",
    city: "Bhiwadi",
    state: "Rajasthan",
    pincode: "301019",
    fullAddress: "Nagina Garden Front Road, Near Shree Ram Colony, Saidpur, Bhiwadi, Rajasthan - 301019",
  },
  phone: "9306584551",
  phoneFormatted: "+91 9306584551",
  whatsappUrl: "https://wa.me/919306584551",
  operatingHours: {
    days: "Monday to Saturday",
    hours: "9:00 AM – 8:00 PM",
    sunday: "Emergency / By Appointment Only",
  },
  googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Shree+Hari+Physio+Care+Nagina+Garden+Front+Road+Near+Shree+Ram+Colony+Saidpur+Bhiwadi+Rajasthan+301019",
};

export interface BodyPainZone {
  id: string;
  title: string;
  shortLabel: string;
  category: "Spine & Posture" | "Joints & Limbs" | "Neuro & Sports";
  symptoms: string[];
  treatmentApproach: string[];
  recommendedSessions: string;
  description: string;
  iconName: string;
  color: string;
}

export const BODY_PAIN_ZONES: BodyPainZone[] = [
  {
    id: "cervical-neck",
    title: "Neck & Cervical Spine Pain",
    shortLabel: "Neck & Shoulders",
    category: "Spine & Posture",
    symptoms: [
      "Stiff neck & difficulty turning head",
      "Radiating tingling or numbness down the arm",
      "Cervical spondylosis or posture-related strain",
      "Vertigo, dizziness, or tension headache",
    ],
    treatmentApproach: [
      "Interferential Therapy (IFT) & TENS for nerve pain relief",
      "Gentle cervical traction & spinal mobilization",
      "Deep tissue release & trigger point therapy",
      "Ergonomic desk posture correction & strengthening exercises",
    ],
    recommendedSessions: "5 to 10 sessions depending on chronicity",
    description:
      "Cervical pain is frequent among desk workers and seniors. Our non-invasive protocol relieves nerve root compression and restores full neck rotation.",
    iconName: "Activity",
    color: "emerald",
  },
  {
    id: "lumbar-back",
    title: "Lower Back & Lumbar Spine Pain",
    shortLabel: "Lower Back & Sciatica",
    category: "Spine & Posture",
    symptoms: [
      "Sharp or dull aching in lower back",
      "Sciatica (shooting electric pain down the buttock & leg)",
      "Slipped disc (Herniated / Bulging disc)",
      "Morning stiffness & trouble standing straight",
    ],
    treatmentApproach: [
      "Targeted Ultrasound & IFT to reduce deep inflammation",
      "McKenzie extension & lumbar core stabilization protocol",
      "Myofascial release for tight lumbar paraspinal muscles",
      "Safe lifting & daily posture guidance",
    ],
    recommendedSessions: "7 to 14 sessions for lasting disc & sciatica relief",
    description:
      "Whether caused by heavy lifting or prolonged sitting, our spinal care program reduces disc pressure without surgery.",
    iconName: "ShieldAlert",
    color: "teal",
  },
  {
    id: "knee-joints",
    title: "Knee Joint & Leg Pain",
    shortLabel: "Knees & Joints",
    category: "Joints & Limbs",
    symptoms: [
      "Osteoarthritis knee pain & creaking sounds",
      "Swelling or stiffness when climbing stairs",
      "Ligament sprain (ACL, PCL, LCL injury)",
      "Post-Total Knee Replacement (TKR) stiffness",
    ],
    treatmentApproach: [
      "Ultrasonic therapy & Cryo-compression for joint swelling",
      "Quadriceps, VMO & hamstring muscle strengthening",
      "Joint gliding & range-of-motion mobilization",
      "Gait (walking) re-training & balance drills",
    ],
    recommendedSessions: "10 to 15 sessions for significant mobility gain",
    description:
      "Don't let knee pain restrict your daily walks. We help lubricate joints, strengthen supporting thigh muscles, and improve walking stability.",
    iconName: "HeartPulse",
    color: "cyan",
  },
  {
    id: "shoulder-arm",
    title: "Shoulder & Upper Limb Disorders",
    shortLabel: "Shoulder & Elbow",
    category: "Joints & Limbs",
    symptoms: [
      "Frozen shoulder (Adhesive Capsulitis) with restricted reach",
      "Rotator cuff tendonitis or shoulder impingement",
      "Tennis elbow or Golfer's elbow outer arm pain",
      "Carpal tunnel wrist numbness",
    ],
    treatmentApproach: [
      "Capsular stretch & joint mobilization techniques",
      "Therapeutic ultrasound for tendon repair",
      "Scapular stabilization & rotator cuff resistance training",
      "Kinesiology taping to offload inflamed tendons",
    ],
    recommendedSessions: "8 to 12 sessions for overhead arm movement",
    description:
      "We gently break down adhesions in frozen shoulders and repair repetitive strain injuries in the elbow and wrist.",
    iconName: "Move",
    color: "blue",
  },
  {
    id: "sports-injury",
    title: "Sports & Athletic Injuries",
    shortLabel: "Sports Injuries",
    category: "Neuro & Sports",
    symptoms: [
      "Ankle sprains & ligament tears",
      "Hamstring or calf muscle strains",
      "Shin splints & running over-use injury",
      "Post-dislocation shoulder or knee rehab",
    ],
    treatmentApproach: [
      "PRICE protocol with advanced electrotherapy",
      "Proprioceptive balance & agility rehabilitation",
      "Sports-specific return-to-play conditioning",
      "Dynamic taping & injury prevention biomechanics",
    ],
    recommendedSessions: "6 to 12 sessions with progressive loading",
    description:
      "Get back on the field safely. We treat athletes, runners, and fitness enthusiasts in Bhiwadi with sports science protocols.",
    iconName: "Zap",
    color: "amber",
  },
  {
    id: "neuro-rehab",
    title: "Neurological & Stroke Rehabilitation",
    shortLabel: "Neuro Rehab",
    category: "Neuro & Sports",
    symptoms: [
      "Post-stroke hemiplegia / muscle weakness",
      "Facial palsy (Bell's Palsy)",
      "Parkinson's balance & tremor challenges",
      "Peripheral neuropathy or nerve palsy",
    ],
    treatmentApproach: [
      "Neuro-developmental therapy (NDT / Bobath approach)",
      "Electrical Muscle Stimulation (EMS) for weakened nerves",
      "Balance, coordination & fall-prevention drills",
      "Functional daily activity re-training",
    ],
    recommendedSessions: "Long-term structured rehabilitation plan",
    description:
      "Compassionate, specialized neurological physical therapy to help patients regain motor control, independence, and confidence.",
    iconName: "Brain",
    color: "purple",
  },
  {
    id: "post-surgery",
    title: "Post-Operative & Fracture Rehab",
    shortLabel: "Post-Surgery Rehab",
    category: "Joints & Limbs",
    symptoms: [
      "Stiff joints after plaster cast removal",
      "Post-fracture surgical plate/screw recovery",
      "Spinal surgery or arthroscopy rehabilitation",
      "Scar tissue adhesion & muscle wasting",
    ],
    treatmentApproach: [
      "Graded passive and active range-of-motion therapy",
      "Scar tissue massage and ultrasonic softening",
      "Progressive weight-bearing & resistance exercises",
      "Functional independence training",
    ],
    recommendedSessions: "10 to 20 sessions overseen by specialist",
    description:
      "Surgery is only half the cure—expert physiotherapy ensures proper joint flexibility and prevents permanent stiffness.",
    iconName: "ShieldCheck",
    color: "indigo",
  },
];

export interface TreatmentService {
  id: string;
  name: string;
  category: "Electrotherapy" | "Manual Therapy" | "Specialized Rehab";
  tagline: string;
  description: string;
  benefits: string[];
  duration: string;
  suitableFor: string;
  icon: string;
}

export const CLINIC_SERVICES: TreatmentService[] = [
  {
    id: "electrotherapy-ift-tens",
    name: "Advanced Electrotherapy (IFT, TENS & Ultrasound)",
    category: "Electrotherapy",
    tagline: "FDA-Grade Non-Invasive Pain & Inflammation Relief",
    description:
      "Our clinic is equipped with advanced therapeutic modalities including Interferential Therapy (IFT), TENS, Ultrasonic Therapy, and Muscle Stimulators that penetrate deep tissues to block pain signals and boost local circulation.",
    benefits: [
      "Rapid reduction of acute & chronic nerve pain",
      "Accelerated tissue repair and swelling reduction",
      "Relief from muscle spasm and stiffness",
      "Non-pharmacological pain management without side effects",
    ],
    duration: "30–40 Minutes per session",
    suitableFor: "Sciatica, Cervical Spondylosis, Arthritis, Sports Sprains",
    icon: "Zap",
  },
  {
    id: "manual-therapy",
    name: "Manual Therapy & Joint Mobilization",
    category: "Manual Therapy",
    tagline: "Hands-on Joint Gliding & Soft Tissue Release",
    description:
      "Skilled hands-on techniques performed by our physiotherapists to mobilize stiff joints, stretch tight capsules, and release myofascial adhesions for immediate gain in mobility.",
    benefits: [
      "Instant improvement in joint range of motion",
      "Breakdown of scar tissue and trigger points",
      "Correction of minor vertebral and joint misalignments",
      "Deep relaxation of chronically guarded muscles",
    ],
    duration: "45 Minutes per session",
    suitableFor: "Frozen Shoulder, Stiff Neck, Post-cast Stiffness, Back Lock",
    icon: "Hand",
  },
  {
    id: "ortho-spine-rehab",
    name: "Spine & Orthopedic Rehabilitation",
    category: "Specialized Rehab",
    tagline: "Evidence-Based Spine & Joint Reconstruction",
    description:
      "Comprehensive treatment plans for cervical and lumbar disc problems, osteoarthritis, spinal stenosis, and post-fracture recovery using McKenzie and stabilization protocols.",
    benefits: [
      "Long-term relief from slip disc and radiating pain",
      "Core muscle strengthening to prevent recurrence",
      "Restoration of natural spinal curvature",
      "Improved posture for desk workers and factory personnel",
    ],
    duration: "45–60 Minutes per session",
    suitableFor: "Slipped Disc, Sciatica, Scoliosis, Posture Disorders",
    icon: "Activity",
  },
  {
    id: "sports-injury-clinic",
    name: "Sports Injury & Athletic Rehab",
    category: "Specialized Rehab",
    tagline: "Return to Sports Faster and Stronger",
    description:
      "Specialized rehabilitation for ligament tears (ACL, MCL), tendonitis, muscle pulls, and ankle sprains with dynamic loading and proprioceptive drills.",
    benefits: [
      "Accelerated healing of ligament and tendon micro-tears",
      "Agility and joint stability training",
      "Prevention of re-injury through biomechanical correction",
      "Kinesio taping for athletic support",
    ],
    duration: "45 Minutes per session",
    suitableFor: "Athletes, Gym-goers, Runners, Weekend Warriors",
    icon: "Trophy",
  },
  {
    id: "neuro-paralysis-care",
    name: "Neurological & Stroke Rehabilitation",
    category: "Specialized Rehab",
    tagline: "Restoring Motor Function & Independence",
    description:
      "Dedicated neuro-rehabilitation protocols for stroke survivors, facial palsy (Bell's Palsy), Parkinson's disease, and nerve injuries to regain balance and functional skills.",
    benefits: [
      "Enhanced motor coordination and muscle activation",
      "Balance and fall-prevention exercises",
      "Electrical muscle stimulation for paralyzed nerves",
      "Improved confidence in daily activities",
    ],
    duration: "45–60 Minutes per session",
    suitableFor: "Stroke, Facial Palsy, Parkinson's, Nerve Palsy",
    icon: "Brain",
  },
  {
    id: "dry-needling-taping",
    name: "Dry Needling & Kinesiology Taping",
    category: "Manual Therapy",
    tagline: "Precision Trigger Point Release & Functional Taping",
    description:
      "Targeted intramuscular dry needling to deactivate stubborn myofascial trigger points, combined with therapeutic kinesio taping to support joints and improve lymphatic drainage.",
    benefits: [
      "Quick release of chronic muscle knots",
      "Improved blood flow to ischemic muscle zones",
      "Continuous support during daily work or exercise",
      "Reduced medication dependency",
    ],
    duration: "30–45 Minutes per session",
    suitableFor: "Chronic Shoulder Knots, Runner's Knee, Tennis Elbow",
    icon: "Target",
  },
  {
    id: "geriatric-elderly-care",
    name: "Geriatric (Elderly) Physiotherapy",
    category: "Specialized Rehab",
    tagline: "Gentle Care for Seniors & Arthritis Management",
    description:
      "Safe, gentle physical therapy designed specifically for seniors to manage arthritis pain, prevent falls, maintain joint flexibility, and enhance daily independence.",
    benefits: [
      "Pain-free joint lubrication and gentle movement",
      "Better walking balance and reduced fear of falling",
      "Osteoporosis-safe strengthening exercises",
      "Compassionate, patient-centered care",
    ],
    duration: "40 Minutes per session",
    suitableFor: "Seniors with Knee Pain, Stiff Gait, General Weakness",
    icon: "HeartHandshake",
  },
  {
    id: "post-operative-rehab",
    name: "Post-Surgery & Fracture Rehabilitation",
    category: "Specialized Rehab",
    tagline: "Full Recovery After Joint & Bone Surgery",
    description:
      "Structured rehabilitation following Total Knee/Hip Replacement, ACL reconstruction, spinal fusion, or plaster cast removal to regain full range of motion.",
    benefits: [
      "Prevention of permanent joint contractures",
      "Restoration of normal muscle strength",
      "Scar mobilization and edema reduction",
      "Step-by-step guidance back to normal work",
    ],
    duration: "45–60 Minutes per session",
    suitableFor: "Post-TKR, Post-Fracture, ACL Surgery, Arthroscopy",
    icon: "ShieldPlus",
  },
];

export interface Testimonial {
  id: string;
  patientName: string;
  condition: string;
  location: string;
  rating: number;
  comment: string;
  recoveryTime: string;
  category: "Spine & Back" | "Knee & Ortho" | "Sports & Injury";
}

export const CLINIC_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    patientName: "Rajesh Kumar Sharma",
    condition: "Severe Lumbar Slip Disc & Sciatica",
    location: "Saidpur, Bhiwadi",
    rating: 5,
    comment:
      "I was suffering from unbearable shooting pain down my right leg and could barely stand for 5 minutes. After 10 days of IFT electrotherapy and spinal exercises at Shree Hari Physio Care, my pain reduced by 90%. I am back to my daily work without surgery!",
    recoveryTime: "2 Weeks",
    category: "Spine & Back",
  },
  {
    id: "t2",
    patientName: "Sunita Devi",
    condition: "Osteoarthritis Knee Pain",
    location: "Shree Ram Colony, Bhiwadi",
    rating: 5,
    comment:
      "At 62, climbing stairs at home had become very painful. The doctor here explained everything so politely and gave me ultrasound therapy and knee strengthening exercises. My knee stiffness is gone and I can walk to the temple comfortably now.",
    recoveryTime: "3 Weeks",
    category: "Knee & Ortho",
  },
  {
    id: "t3",
    patientName: "Amit Verma",
    condition: "Ankle Ligament Sprain (Sports)",
    location: "Phool Bagh / Alwar Bypass",
    rating: 5,
    comment:
      "Sprained my ankle badly during a weekend football match. The combination of cold therapy, ultrasound, and Kinesio taping at Shree Hari Physio Care got me walking without a limp in just 5 sessions. Highly professional setup in Bhiwadi!",
    recoveryTime: "10 Days",
    category: "Sports & Injury",
  },
  {
    id: "t4",
    patientName: "Meenakshi Yadav",
    condition: "Frozen Shoulder (Right Arm)",
    location: "Nagina Garden Road, Bhiwadi",
    rating: 5,
    comment:
      "I couldn't lift my arm to comb my hair or reach shelves. With patient manual therapy and joint mobilization here, my shoulder movement is 100% normal. Very clean clinic and caring doctor.",
    recoveryTime: "4 Weeks",
    category: "Knee & Ortho",
  },
  {
    id: "t5",
    patientName: "Vikram Singh",
    condition: "Cervical Spondylosis & Neck Stiffness",
    location: "RIICO Industrial Area, Bhiwadi",
    rating: 5,
    comment:
      "Working 9 hours on a computer gave me chronic neck pain and dizziness. The cervical traction and ergonomic advice from Shree Hari Physio Care completely resolved my headache and neck strain.",
    recoveryTime: "2 Weeks",
    category: "Spine & Back",
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const CLINIC_FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "Do I need a doctor's referral to consult at Shree Hari Physio Care?",
    answer:
      "No, you do not need a prior referral for a physiotherapy evaluation. Our qualified physiotherapists perform a thorough clinical assessment during your first visit. However, if you already have MRI, X-ray reports, or an orthopedic doctor's prescription, please bring them along.",
    category: "Consultation",
  },
  {
    id: "f2",
    question: "What should I wear for my physiotherapy appointment?",
    answer:
      "We recommend wearing comfortable, loose-fitting clothes (like track pants, shorts, or a comfortable t-shirt) that allow easy movement and access to the area being treated (e.g., knee, shoulder, or lower back).",
    category: "Consultation",
  },
  {
    id: "f3",
    question: "How long is each physiotherapy session?",
    answer:
      "A typical session lasts between 30 to 45 minutes depending on the condition and treatment modalities required (such as IFT, Ultrasound, manual mobilization, or therapeutic exercises).",
    category: "Treatments",
  },
  {
    id: "f4",
    question: "Is electrotherapy (IFT, TENS, Ultrasound) painful or safe?",
    answer:
      "Electrotherapy is completely non-invasive and safe. Patients usually feel only a gentle, pleasant tingling or soothing warmth during IFT or Ultrasound. Our machines are calibrated to ensure your comfort and safety.",
    category: "Treatments",
  },
  {
    id: "f5",
    question: "What are your operating hours and clinic location in Bhiwadi?",
    answer:
      "We are open Monday to Saturday from 9:00 AM to 8:00 PM. Our clinic is conveniently located at Nagina Garden Front Road, Near Shree Ram Colony, Saidpur, Bhiwadi, Rajasthan - 301019. You can call or WhatsApp us at 9306584551.",
    category: "General",
  },
  {
    id: "f6",
    question: "How can I book an appointment?",
    answer:
      "You can book directly through our online booking form on this website, call us at +91 9306584551, or message us instantly on WhatsApp. We offer convenient morning, afternoon, and evening slots.",
    category: "Booking",
  },
];
