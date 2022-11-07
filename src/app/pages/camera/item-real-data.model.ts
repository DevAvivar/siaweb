export interface ItemRealData {

    camCode: number,
    camName: string,
    camIp: string,
    camPort: number,
    camStarted: boolean,
    camInactive: boolean,
    camLocalTunnel: number,//valor 0 => Entrada do Túnel |  1 => Saída do Túnel
    camShift: number,
    camProductionDate: string//valor default null => seta a data de produção
}