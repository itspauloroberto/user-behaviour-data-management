export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  birthday: string;
}

export interface UsersList {
  users: Array<User>
}