// Common types used throughout the application

export type Language = 'en' | 'hi';

export interface LocaleText {
  en: string;
  hi: string;
}

export interface ContactInfo {
  name: LocaleText;
  position: LocaleText;
  phone: string;
  email?: string;
  officeHours?: LocaleText;
}

export interface LocationInfo {
  name: LocaleText;
  description: LocaleText;
  address: LocaleText;
  contactPerson?: string;
  phone?: string;
  email?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface ServiceCategory {
  id: string;
  name: LocaleText;
  description: LocaleText;
  icon: string;
  locations: LocationInfo[];
}