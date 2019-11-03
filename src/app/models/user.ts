export class User {
  constructor(
    public id: number,
    public  login: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public middleName: string,
    public email: string,
    public phoneNumber: string,
    public country: string,
    public city: string,
    public street: string,
    public house: string,
    public flat: string,
  ) {}
}
