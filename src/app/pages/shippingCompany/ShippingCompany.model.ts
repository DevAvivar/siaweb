

export interface ShippingCompany
{
    code: number,
    userCreator: number,
    name: string,
    note: string,
    inactive: boolean,
    excluded: boolean,
    dateCreation: Date,
    nickname: string,
    cpfCnpj: string,
    rgStateRegistration: string,
    telephone: string,
    email: string,
    address: string,
    houseNumber: string,
    complement: string,
    neighborhood: string,
    zipCode: string,
    city: string,
    state: string,
    nation: string
}