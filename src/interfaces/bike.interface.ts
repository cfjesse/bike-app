export interface IBaseBikeEntity {
  manufacturer: number;
  model: string;
  frameSize: number;
  price: number;
}

export interface IBikeEntity extends IBaseBikeEntity {
  imageUrl?: string
  id: number;
}

export interface IManufacturer {
  name: string;
  id: number;
}
