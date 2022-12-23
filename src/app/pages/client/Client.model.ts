
/**
 * Class Client
 */
export interface Client{

    code: number,
    userCreator: number,
    name: string,
    note: string,
    inactive: boolean,
    excluded: boolean,
    dateCreation: Date,
    clientErp: number,
    representative: number,
    typeClient: number,
    quantityPurchases: any,
    amountSecuritiesArrears: any,
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
    nation: string,
    whatsapp: string,
    dateLastRequest: Date,
    dateCreationErp: Date,
    averagePurchaseValue: any,
    valueSecuritiesArrears: any
}