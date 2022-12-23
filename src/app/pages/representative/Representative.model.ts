

export interface Representative 
{
    code: number,
    userCreator: number,
    name: string,
    note: string,
    inactive: boolean,
    excluded: boolean,
    dateCreation: Date,
    representativeErp: number,
    supervisor: number,
    isSupervisor: boolean,
    email: string
}