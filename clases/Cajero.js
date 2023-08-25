/* cuenta Automatico
   - [ok] Agregar Saldo: NO Saldo Negativo 
   - [ok] Remover Saldo: NO Remover saldo no disponible
   - [ok] Mostrar Saldo
   - [ok] Mostrar Operaciones

   - [ok] Agrege el nombre del titular de la cuenta
   - Historial registre intentos fallidos
   - Simule usuario y contraseña
   - Tranferencias entre cuentas
   - Pagos de Servicios Publicos
   - (Opcional): Agregar una tercera entidad
*/


class Cliente {
    id;         // C.C.
    username;   // alias/nickname
    name;       // Nombre Real
    password;   // Contrasenia

    constructor( id, username, name, password ) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
    }
}

class Cuenta {

    constructor( cliente, saldo = 0 ) {
        this.cliente = cliente;
        this.saldo = saldo;
        this.historial = [{ operacion: 'Crea cuenta', saldo: this.saldo }];
    }

    consignar( valor ) {
        if( valor < 0 )     throw Error( 'Valor a consignar no valido' );

        this.saldo += valor;
        this.historial = [
            { operacion: 'Consignación', valor, saldo: this.saldo },
            ...this.historial
        ];
    }

    retirar( valor ) {
        if( valor < 0 )             throw Error( 'No se pueden retirar saldos negativos' )
        if( valor > this.saldo )    throw Error( 'No hay saldo suficiente' );
        
        this.saldo -= valor;
        this.historial = [
            { operacion: 'Retiro', valor, saldo: this.saldo },
            ...this.historial
        ];
    } 

    mostrar() {
        this.historial = [
            { operacion: 'Mostrar', saldo: this.saldo },
            ...this.historial
        ];
        return this.saldo;
    }

    operaciones() {
        return this.historial;
    }

}

/** Implementacion */
const clienteAna = new Cliente( 2312324, 'amapola', 'Ana Maria', 'holasoyana');
const clienteDaniela = new Cliente( 1233223, 'danny', 'Daniela', 'holasoydaniela');

const cuentaAna = new Cuenta( clienteAna, 1200 );
const cuentaDaniela = new Cuenta( clienteDaniela );
console.log( cuentaAna );
console.log( cuentaDaniela );

// cuenta.consignar( 200 );
// cuenta.retirar( 100 );
// cuenta.retirar( 190 );
// cuenta.retirar( 50 );
// cuenta.consignar( 100 );
// cuenta.mostrar();

// console.log( cuenta );

// const historial = cuenta.operaciones();
// console.log( historial );


