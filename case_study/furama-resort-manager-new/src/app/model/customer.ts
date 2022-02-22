import {TypeCustomer} from './type-customer';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: number;
  phone: string;
  email: string;
  address: string;
  typeOfCustomer: TypeCustomer;
}
