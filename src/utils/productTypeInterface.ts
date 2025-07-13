export interface ProductTypePayload {
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export interface ProductTypeResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}
