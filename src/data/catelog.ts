export type RentalLocation = 'Toronto' | 'Ottawa' | 'Montreal' | 'Vancouver';

export interface RentalItem {
  name: string;
  preview_image_url?: string;
  slug: string;
  description: {
    short: string;
    full?: string;
  };
  price_per_day: number;
  available_locations: RentalLocation[];
  category: string[];
  loading: boolean;
}

export const VisionaryCatelog: RentalItem[] = [
  {
    name: 'Canon 5D mark III (Body Only)',
    available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
    category: ['photography', 'camera:dslr'],
    description: {
      short: 'Great versatile camera for all situations.',
    },
    price_per_day: 120,
    preview_image_url: 'https://img.vistek.net/prodimg/large/261855.jpg',
    loading: false,
    slug: 'canon-5d-mark-iii',
  },
];
