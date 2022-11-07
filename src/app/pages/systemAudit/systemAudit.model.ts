export interface SystemAudit{

    code: number,//codigo gerado como chave primaria
    userCode: number,//codigo do usuario que foi auditado
    userLogin: string,//login do usuario que foi auditado
    local: number,//modelo onde aconteceu a operação
    operation: number,//tipo de operação ex: create, update, login etc.
    dateTime: Date,//datetime do momento que aconteceu a operação
    change: any//chave que pode receber um modelo do banco de dados

}