export type RentalLocation = 'Toronto' | 'Ottawa' | 'Montreal' | 'Vancouver';

export interface RentalItem {
  id: string;
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
