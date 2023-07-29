export interface OrderData {
  products: string[];
  totalPrice: number;
  userEmail: string;
  adress: string;
  phoneNumber: number;
  _ownerId: string;
}

export interface GetOrders {
  products: string[];
  totalPrice: number;
  userEmail: string;
  adress: string;
  phoneNumber: number;
  _ownerId: string;
  _id: string
}