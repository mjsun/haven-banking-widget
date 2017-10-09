import {iAddress} from './address.interface';
import {iChild} from './child.interface';

export interface iBene {
    relationship: any,
    otherRelationship?: string,
    certainMarriage?: string,
    children?: iChild[],
    name?: string,
    address?: iAddress,
    phoneNumber?: string,
    date?: string,
    ssn?: string,
    perStirpes?: boolean,
    percent?: number,
    type: string,
    custodian?: string,
    custodianState?: string
}