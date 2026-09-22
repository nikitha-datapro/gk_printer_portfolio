export type Service = {
  icon: string;
  title: string;
  description: string;
};

export type PortfolioItem = {
  title: string;
  category: 'Business' | 'Marketing' | 'Events' | 'Packaging';
  image: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Feature = {
  icon: string;
  title: string;
  description: string;
};
