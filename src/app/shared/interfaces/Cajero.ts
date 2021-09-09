export interface Cajero {
    id: number;
    quinientos: number;
    doscientos: number;
    cien: number;
    cincuenta: number;
}

export class CajeroClass implements Cajero{
    id = 0;
    quinientos = 0;
    doscientos = 0;
    cien = 0;
    cincuenta = 0;
}
