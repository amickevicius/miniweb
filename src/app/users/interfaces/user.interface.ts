import { EyeColor } from "../../shared/enum/eye-color.enum";
import { Address } from "../../shared/interfaces/address.interface";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  eyeColor: EyeColor;
}
