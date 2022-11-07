export interface Camera{
    code: number,
    name: string,
    ip: string,
    port: number,
    started: any,//seguindo a modelagem do backend o tipo é boolean, mas para melhor apresentação dentro da tabela mudei para tipo any para poder trocar para string sem erros no futuro
    inactive: boolean,
    localTunnel: number,//valor 0 => Entrada do Túnel |  1 => Saída do Túnel
    shift: number,
    productionDate: string//valor default null => seta a data de produção

}