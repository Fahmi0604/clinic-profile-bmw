type Education = {
  year: number;
  university: string;
};

type Experience = {
  year: number;
  workplace: string;
};

type Doctor = {
  id: number;
  slug: string;
  prefix: string;
  name: string;
  postfix: string;
  email: string;
  specialty: string;
  bio: string | null;
  photoUrl: string;
  educations: Education[];
  experience: Experience[];
  schedules: any | null; // Bisa diubah kalau kamu tahu struktur jadwal
  socialLinks: any | null; // Sama, tergantung isi sebetulnya
  createdAt: string;
  updatedAt: string;
};

type DoctorResponse = {
  success: boolean;
  data: Doctor[];
};
