import EyeColor from "../enum/eye-color.enum";
import { Address } from "./address.interface";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  eyeColor: EyeColor;
}
