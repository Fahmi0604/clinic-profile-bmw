type Service = {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  beforeImgs: string[]; // parsed from string
  afterImgs: string[]; // parsed from string
  videoUrl: string;
  priceTable: {
    name: string;
    price: number;
    description: string;
    unit: string;
  }[]; // parsed from string
  createdAt: string;
  updatedAt: string;
};

type ServiceResponse = {
  success: boolean;
  data: {
    data: Service[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
  message: string;
};
