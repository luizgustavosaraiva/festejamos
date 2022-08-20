export enum FacilityType {
  livingRoom,
  bedRoom,
  bathRoom,
  wifi,
  airConditioner,
  cableTv,
  grill,
  kitchenUtensils,
}

export type Facility = {
  name: string;
  type: FacilityType;
  quantity: number;
};
