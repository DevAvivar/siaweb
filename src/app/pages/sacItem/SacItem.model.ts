

export interface SacItem{
    
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
    requiredClientContact: boolean
}