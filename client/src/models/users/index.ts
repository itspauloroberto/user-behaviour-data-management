import { SelectValue } from "antd/lib/select";

export interface User {
  id: number;
  name: string;
  email: string;
  gender: UserGender | SelectValue;
  birthday: string;
}

export interface UserWithoutId {
  name: string;
  email: string;
  gender: UserGender | SelectValue;
  birthday: string;
}

export type UserGender = 'undefined' | 'male' | 'female'

export enum UserGenderEnum {
  'undefined' = 0,
  'male' = 1,
  'female' = 2
}

export interface UsersList {
  users: Array<User>
}