import { ServiceCategory, ChoiceReason, DonationOption } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: "womens-healthcare",
    title: "Women's Healthcare",
    description: "Comprehensive gynecological and health support tailored to every stage of a woman's life with absolute privacy.",
    icon: "Heart",
    items: [
      { name: "Gynecology Consultation", description: "Expert consultations for any gynecological issues and general well-being." },
      { name: "Pregnancy Care", description: "Comprehensive prenatal care to guide mothers through every trimester safely." },
      { name: "Antenatal Checkups", description: "Regular screening, blood tests, and growth monitoring for safe progression." },
      { name: "High-Risk Pregnancy Management", description: "Specialized clinical attention for advanced maternal age, hypertension, diabetes, or other conditions." },
      { name: "Menstrual Health Consultation", description: "Guidance and medical support for irregular cycles, pain, PCOS, and transitional phases." },
      { name: "Family Planning Services", description: "Compassionate counseling and access to safe, modern contraception methods." },
      { name: "Postnatal Care", description: "Physical and mental health support for new mothers during the delicate postpartum transition." }
    ]
  },
  {
    id: "maternity-services",
    title: "Maternity Services",
    description: "Safe, dignified, and comfortable delivery options managed by experienced female-led medical professionals.",
    icon: "Baby",
    items: [
      { name: "Normal Delivery", description: "Natural birth support focusing on active comfort and modern midwifery techniques." },
      { name: "Painless Normal Delivery", description: "Advanced epidural and pain relief options to ensure a smooth, comfortable experience." },
      { name: "Cesarean Section (C-Section)", description: "High-standard operating facilities for scheduled or emergency surgical deliveries." },
      { name: "Labour & Delivery Care", description: "24/7 continuous monitoring by expert labor nurses in private delivery spaces." },
      { name: "Emergency Maternity Care", description: "Rapid-response critical support for any sudden pregnancy-related complications." }
    ]
  },
  {
    id: "child-newborn-care",
    title: "Child & Newborn Care",
    description: "Pediatric care designed to give every newborn and growing child the healthiest possible start in life.",
    icon: "Sparkles",
    items: [
      { name: "Newborn Care", description: "Comprehensive newborn screening, warmth, respiratory, and breastfeeding support." },
      { name: "Pediatric Consultation", description: "Empathetic diagnosis and treatment for childhood illnesses, infections, and chronic issues." },
      { name: "Vaccination & Immunization", description: "Complete childhood vaccine regimens in strict compliance with national safety guidelines." },
      { name: "Child Growth Monitoring", description: "Continuous tracking of physical, cognitive, and sensory developmental milestones." },
      { name: "Nutritional Guidance", description: "Tailored dietary planning, weaning support, and growth boosting advice." }
    ]
  },
  {
    id: "diagnostic-support",
    title: "Diagnostic & Support",
    description: "On-site advanced support services ensuring rapid, affordable, and accurate clinical guidance.",
    icon: "Activity",
    items: [
      { name: "Ultrasound Services", description: "High-resolution obstetric and pelvic sonograms for accurate growth and diagnostic tracking." },
      { name: "Laboratory Testing", description: "Fully equipped, rapid-turnaround lab for blood, urine, screening panels, and infection tests." },
      { name: "Pharmacy Services", description: "24/7 essential medicines stored under precise temperature control and sold at transparent prices." },
      { name: "Preventive Health Programs", description: "Regular wellness checkups and screening programs for underprivileged mothers and daughters." },
      { name: "Ambulance Support", description: "Dedicated rapid transport equipped with oxygen and maternity life-support for absolute safety." }
    ]
  }
];

export const choiceReasons: ChoiceReason[] = [
  {
    id: "dedicated",
    title: "Dedicated Women & Child Healthcare",
    description: "Our center does not treat general ailments. Every facility, ward, and machine is exclusively optimized for gynecological, obstetric, and pediatric care.",
    icon: "ShieldAlert"
  },
  {
    id: "female-team",
    title: "Experienced Female Healthcare Team",
    description: "Led by highly skilled, empathetic female doctors who understand the medical, physical, and emotional nuances of motherhood and women's wellness.",
    icon: "Users"
  },
  {
    id: "female-support",
    title: "Female Support Staff Throughout",
    description: "From ward assistance to labs, women patients are supported by female nurses and staff to ensure complete ease, comfort, and physical modesty.",
    icon: "Heart"
  },
  {
    id: "privacy-dignity",
    title: "Privacy, Dignity & Comfort First",
    description: "We maintain strict patient confidentiality and secure, isolated private consultation chambers where your questions can be discussed freely.",
    icon: "Lock"
  },
  {
    id: "affordable-transparent",
    title: "Affordable & Transparent Pricing",
    description: "As an upcoming NGO-supported facility, we operate at a fraction of commercial rates. No hidden fees, clear itemized bills, and complete honesty.",
    icon: "Coins"
  },
  {
    id: "modern-standards",
    title: "Modern Healthcare Standards",
    description: "Equipped with state-of-the-art diagnostic tools, labor monitoring technology, and hygienic post-op rooms designed to prevent any infections.",
    icon: "CheckCircle"
  }
];

export const donationOptions: DonationOption[] = [
  {
    amount: 500,
    label: "Sponsor basic antenatal scan & checkup",
    impact: "Provides a vital diagnostic ultrasound and high-risk screening for an expectant mother from a financially vulnerable village family.",
    icon: "Activity"
  },
  {
    amount: 1500,
    label: "Sponsor complete childhood immunization package",
    impact: "Ensures an infant receives all essential government-approved vaccinations for their first year, guarding them from highly infectious diseases.",
    icon: "Shield"
  },
  {
    amount: 3500,
    label: "Sponsor a safe, hygienic normal delivery",
    impact: "Covers all hospital resources, clean delivery kit, expert midwifery fees, and postpartum observations for a mother in need.",
    icon: "Baby"
  },
  {
    amount: 8000,
    label: "Sponsor high-risk C-section surgical care",
    impact: "Funds operating theater costs, sterile consumables, anesthesia, and senior surgeon oversight to save both mother and child during crisis.",
    icon: "Heart"
  }
];
