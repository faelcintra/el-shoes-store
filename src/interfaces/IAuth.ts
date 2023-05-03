export interface IAuth {
  name: string;
  surname: string;
  email: string;
  birthDate: Date;
  password: string;
  confirmPassword: string;
  registered: boolean;
  emailLogin: string;
  passwordLogin: string;
}
