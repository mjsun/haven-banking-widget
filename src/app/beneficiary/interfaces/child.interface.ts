import {iAddress} from './address.interface';

export interface iChild {
    name?: string,
    address?: iAddress,
    phoneNumber?: string,
    dateOfBirth?: string,
    ssn?: string,
    perStirpes?: boolean,
}