export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  url: string;
  description: string;
  image: string;
  highlights: string[];
  servicesDelivered: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  deliverables: string[];
}

export interface WhyReason {
  id: string;
  title: string;
  description: string;
}
