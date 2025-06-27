declare type Service = {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  content: string;
  videoUrl: string;
  beforeImgs: string[];
  afterImgs: string[];
  priceTable: {
    type: string;
    price: number;
  }[];
  created_at: string;
  updated_at: string;
};
