import { RentalItem } from '../types/Rental';

export const VisionaryCatelog: RentalItem[] = [
  {
    id: 'canon-5d-mark-iii',
    name: 'Canon 5D mark III (Body Only)',
    available_locations: ['Montreal', 'Ottawa', 'Toronto', 'Vancouver'],
    category: ['photography', 'camera:dslr'],
    description: {
      short: 'Great versatile camera for all situations.',
      full:
        '22.3MP Full-Frame CMOS Sensor; 3.2" High-Res LCD; DIGIC 5+ Processor; 61-Point AF; Full HD 1080/30p & 720/60p Formats. Includes: 2 batteries, battery charger, Canon software.',
    },
    price_per_day: 120,
    preview_image_url: 'https://img.vistek.net/prodimg/large/261855.jpg',
    loading: false,
    slug: 'canon-5d-mark-iii',
  },
];
