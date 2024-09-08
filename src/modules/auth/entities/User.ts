export default class User {
  name: string = "";
  email: string = "";
  password?: string;
  password_confirmation?: string;
  constructor(user: Partial<IUser> = {}) {
    this.name = user.name || "";
    this.email = user.email || "";
    this.password = user.password || "";
    this.password_confirmation = user.password_confirmation || "";
  }

  login(): ILogin {
    return {
      email: this.email,
      password: this.password!,
    };
  }
}

export interface IUser {
  name: string;
  email: string;
  password?: string;
  password_confirmation?: string;
}

export interface ILogin {
  email: string;
  password: string;
}
