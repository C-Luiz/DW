export function formato (texto, acao){
    switch(acao){
        case 'lowercase':
            return texto.toLowerCase();
        case 'uppercase':
            return texto.toUpperCase();
    }
}