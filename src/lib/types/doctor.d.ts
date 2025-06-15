declare type Doctor = {
  id: number;
  prefix?: string | null;
  name: string;
  postfix?: string | null;
  email: string;
  specialty: string;
  bio?: string | null;
  photoUrl?: string | null;

  educations: Education[];
  experience: Experience[];

  createdAt: Date;
  updatedAt: Date;
};

type Education = {
  year: number;
  university: string;
};

type Experience = {
  year: number;
  workplace: string;
};
