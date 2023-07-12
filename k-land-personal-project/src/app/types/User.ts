export interface RegisterData {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
  seller: boolean;
}

export interface LoginData {
  email: string;
  password: string;
}
