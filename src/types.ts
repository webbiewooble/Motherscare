export interface ServiceItem {
  name: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: ServiceItem[];
}

export interface ChoiceReason {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DonationOption {
  amount: number;
  label: string;
  impact: string;
  icon: string;
}

export interface FeedbackMessage {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
