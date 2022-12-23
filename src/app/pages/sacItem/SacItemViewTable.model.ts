


export interface SacItemViewTable{
    
    code: number,
    sac: number,
    senderSector: number,
    responsableSector: number,
    userCreator: number,
    responsibleUser: number,
    status: number,
    dateCreation: Date,
    dateAttendance: Date,
    closingDate: Date,
    traceability: string,
    correctiveAction: string,
    preventiveAction: string,
    emailComplemente: string,
    nameResponsableSector: string,
    nameResponsableUser: string,
    nameStatus: string,
    requiredClientContact: boolean
}