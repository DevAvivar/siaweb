
/**
 * Class Sector
 */
export interface Sector{

    code: number,
    userCreator: number,
    name: string,
    note: string,
    inactive: boolean,
    excluded: boolean,
    dateCreation: Date,
    manager: number
}