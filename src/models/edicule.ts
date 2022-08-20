import { Facility } from './facility';
import { Image } from './image';

export type Address = {
  street: string;
  number: number;
  city: string;
  zipCode: string;
  province: string;
  country: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type Edicule = {
  id: number;
  name: string;
  address: Address;
  images: Array<Image>;
  facilities: Array<Facility>;
  price: number;
};
