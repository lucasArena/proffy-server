export interface IUser {
  id?: string;
  name: string;
  surname: string;
  password: string;
  email: string;
  avatar?: string;
  whatsapp?: string;
  bio?: string;
  created_at?: Date;
  updated_at?: Date;
}
