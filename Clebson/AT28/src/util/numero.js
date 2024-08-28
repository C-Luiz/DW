export function calc (valor, acao){
    switch (acao) {
        case 'minimo':
            return Math.min(...valor);
        case 'maximo':
            return Math.max(...valor);
    }
}