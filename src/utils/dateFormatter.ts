export interface ProductType {
  id?: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};
