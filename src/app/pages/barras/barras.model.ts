/**
 * classe para modelar um Objeto do tipo Barras
 */
 export interface Barras{
    id: number,//codigo no banco de dados
    barra: string,//a barra lida no qrcode
    data: Date,// data de produção (Date)
    dtapont: Date,//data de apontamento (Timestamp)
    barsta: number,// numero indicado para definir o tipo do log
    barlog: string,// string contendo algum tipo de informação vindo do agrosys
    ipCamRead: string,//ip da camera que capturou a barra
    turno: any,// turno de produção  que foi capturada a barra
    hora: string// hora da captura da barra
    
    
    }
    