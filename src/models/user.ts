import { Address } from './edicule';

export type User = {
  id: string;
  name: string;
  email: string;
  billingAddress?: Address;
};
