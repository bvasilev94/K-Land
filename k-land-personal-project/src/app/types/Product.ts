export interface AddProductData {
  _id: string;
  category: string;
  description: string;
  imageUrl: string;
  manufacturer: string;
  name: string;
  price: number;
  year: string;
  quantity: undefined | number
  cartId: undefined | string
  _ownerId: string;
}
