export interface Sac{

    driver: number,
    code: number,
    client: number,
    status: number,
    unit: number,
    userCreator: number,
    careChannel: number,
    typeContact: number,
    responsibleForTheAttendance: number,
    attendanceClassification: number,
    sectorStart: number,
    numberComplaints: number,
    mediaDeliveryChannel: number,
    representative: number,
    supervisorRepresentative: number,
    managerRepresentative: number,
    shippingCompany: number,
    nfeDevolution: number,
    nfeSeriesDevolution: number,
    crossCd: number,
    responsibleSector: number,
    protocol: string,
    contactPerson: string,
    note: string,
    video1: string,
    video2: string,
    plate: string,
    clientResponsible: string,
    otherClientPhone: string,
    plate2: string,
    returnClient: string,
    cellPhoneSms: string,
    nameSms: string,
    dateCreation: Date,
    closingDate: Date,
    clientContactDate: Date,
    clientReturnDate: Date,
    mediaDeliveryDate: Date,
    dateProgress: Date,
    purchaseFrequency: any,
    image1: any,
    image2: any,
    image3: any,
    image4: any,
    excluded: boolean,
    averagePurchase: any

}