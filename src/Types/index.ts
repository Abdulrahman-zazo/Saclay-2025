export interface Specialty {
  id: number;
  name: string;
  image_url: string;
  one_description: string;
  second_description: string;
  phone_number: string;
  created_at: string;
  updated_at: string;
  header_image_url: string;
}

export interface Service {
  id: number;
  name: string;
  image_url: string;
  one_description: string;
  second_description: string;
  specialty_id: number;
  created_at: string;
  updated_at: string;
  specialty_name: string;
}
export interface ServicesResponse {
  Services: Service[];
}

// types.ts
export interface Doctor {
  id: number;
  name: string;
  description: string;
  image_url: string;
  specialties_names: string[];
}

export interface Contact {
  email?: string;
  phone_number?: string;
  whatsapp_url?: string;
  facebook_url?: string;
  doctolib_url?: string;
}

export interface Recommendation {
  id: number;
  name: string;
  message: string;
}
