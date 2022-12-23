
/**
 * Class ReasonComplaint
 */
export interface ReasonComplaint{

    code: number,
    userCreator: number,
    name: string,
    note: string,
    inactive: boolean,
    excluded: boolean,
    dateCreation: Date
}