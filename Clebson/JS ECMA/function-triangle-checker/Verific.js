function triangulo(a, b, c){
    if (a>=b+c || b>=a+c || c>= a+b) return 'none';
    else
      switch (true){
        case a===b && b===c:
           return 'equilatero';
        case a!==b && b!==c && a!==c:
            return 'escaleno';
        default:
            return 'isoceles';
        }
}

console.log(triangulo(22,22,22));
console.log(triangulo(2,4,4));
console.log(triangulo(0,0,0));
console.log(triangulo(7,8,9));