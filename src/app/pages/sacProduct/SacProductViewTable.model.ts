
export interface SacProductViewTable
{
    code: number,
    sac: number,
    product: number,
    nfe: string,
    romaneio: string,
    lot: string,
    reasonComplaint: number,
    userCreator: number,
    shiftLot: number,
    typePacking: number,
    description: string,
    revenuesDate: Date,
    manufacturingDate: Date,
    expirationDate: Date,
    criationDate: Date,
    priceKg: number,
    quantityPurchased: number,
    quantityComplaint: number,
    excluded: boolean,
    //atributos adicionados apenas para a visualização da tabela interna de produto SAC
    nameProduct: string
    nameReasonComplaint: string

}