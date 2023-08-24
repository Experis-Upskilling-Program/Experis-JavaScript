/* Cajero Automatico
   - Agregar Saldo: NO Saldo Negativo 
   - Remover Saldo: NO Remover saldo no disponible
   - Mostrar Saldo
   - Mostrar Operaciones

   - Agrege el nombre del titular de la cuenta
   - Historial registre intentos fallidos
   - Simule usuario y contraseña
*/

class Cajero {
    saldo = 0;
    historial = [];

    constructor( saldo = 0 ) {
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
const cajero = new Cajero( 1200 );
cajero.consignar( 200 );
cajero.retirar( 100 );
cajero.retirar( 190 );
cajero.retirar( 50 );
cajero.consignar( 100 );
cajero.mostrar();

console.log( cajero );

const historial = cajero.operaciones();
console.log( historial );


