import {iAddress} from './address.interface';

export interface iBene {
    relationship: any,
    otherRelationship?: string,
    certainMarriage?: string,
    name?: string,
    address?: iAddress,
    phoneNumber?: string,
    date?: string,
    ssn?: string,
    perStirpes?: boolean,
    percent?: number,
    type: string
}