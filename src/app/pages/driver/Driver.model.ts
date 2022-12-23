
export interface Driver
{
    code: number,
    userCreator: number,
    name: string,
    note: string,
    inactive: boolean,
    excluded: boolean,
    dateCreation: Date,
    driverErp: number,
    cpf: string,
    category: string,
    address: string,
    city: string,
    states: string,
    nation: string,
    neighborhood: string,
    zipeCode: string,
    phone: string,
    dateBirth: Date
}