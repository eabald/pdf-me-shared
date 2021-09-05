export interface User {
  id: number;
  email: string;
  password: string;
  stripeCustomerId: string;
  name: string;
  isResettingPassword: boolean;
  key: string
}
