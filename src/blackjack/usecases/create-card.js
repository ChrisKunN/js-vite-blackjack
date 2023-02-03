
/**
 * 
 * @param {String} carta  recibe una carta
 * @returns {HTMLImageElement} imagen de retorno 
 * 
 */

export const crearCarta = (carta) =>{

    if( !carta ) throw new Error('la carta es un argumento obligatorio')

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
    
}


