export interface iProduct {
  id: number;
  name: string;
  bathrooms: number;
  rooms: number;
  x_country: [number, string];
  x_city: [number, string];
  x_state: [number, string];
  building_area: number;
  rental: boolean;
  ptype: string;
  rental_fee: number;
  x_estrato: string;
  constructed: string;
  code: string;
  age?: string;
  image_1920?: string;
  parking?: number;
  note?: string;
  sale_lease?: string;
  latitude: string;
  longitude: string;
  status?: string;
  x_street_id?: [string, string];
}

export interface iLocation {
  country: any;
  country_id: any[];
  state: any;
  state_id: any[];
  id: number;
  name: string;
}

export interface iFilters {
  price: [string, string];
  stratum?: string;
  age?: string;
  building_area: [string, string];
  rooms: string;
  baths: string;
  parking: boolean;
}

export interface iTypeProperty {
  name: string;
  status: boolean;
}

export const Stratum: string[] = [
  "Todos",
  "Campestre",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
];
export const Age: string[] = [
  "Todos",
  "1 A 8",
  "9 A 15",
  "16 A 30",
  "Más De 30",
];
export const Rooms: string[] = ["1", "2", "3", "4+"];
export const Baths: string[] = ["1", "2", "3", "4+"];
