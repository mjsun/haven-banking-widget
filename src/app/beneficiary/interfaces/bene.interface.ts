import {iAddress} from './address.interface';

export interface iBene {
    relationship: number,
    otherRelationship?: string,
    name: string,
    address?: iAddress,
    phoneNumber?: string,
    dateOfBirth?: string,
    ssn?: string,
    perStirpes?: boolean,
    percent?: number
}