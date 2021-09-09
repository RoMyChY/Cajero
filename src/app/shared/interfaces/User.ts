export interface User {
    id: number;
    nombre: String;
    apellido: String;
    saldo: number;
}

export class UserClass implements User{
    id = 0;
    nombre = '';
    apellido = '';
    saldo = 0;
}
