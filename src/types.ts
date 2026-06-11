export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface WhyChooseUsFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ClinicFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string;
}

export interface EducationalTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  description: string;
  fullContent: string[];
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BookingData {
  fullName: string;
  mobile: string;
  email: string;
  treatment: string;
  preferredDate: string;
  message: string;
}
