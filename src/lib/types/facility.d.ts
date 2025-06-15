type Facility = {
  id: number;
  slug: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  imageUrls: string[]; // parsed from string
  createdAt: string;
  updatedAt: string;
  locationId: number | null;
  location: any | null; // bisa diganti dengan tipe spesifik kalau kamu tahu struktur `location`
};

type FacilityResponse = {
  success: boolean;
  data: Facility[];
};
