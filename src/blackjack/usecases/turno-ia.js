import { crearCarta, pedirCarta, valorCarta } from "./";





// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos puntos minimos para que Blackjack master gane
 * @param {HTMLElement} puntosHTM muestra los puntosL 
 * @param {HTMLElement} divCartasComputadora muestra las cartas
 * @param {Array<String>} deck 
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck = [] ) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = crearCarta(carta);
        divCartasComputadora.append(imgCarta);
        
        
        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Tie Game!!! :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Blackjack Master Wins!!!')
        } else if( puntosComputadora > 21 ) {
            alert('You Win!!!');
        } else {
            alert('Blackjack Master Wins!!!')
        }
    }, 100 );
}

