//divisível por 3 = fizz;
//divisivel por 5 = buzz;
//divisivel por 3 e 5 = fizzbuzz;
//não divisivel por 3 e 5 = entrada;
//não é um número = 'não é um número';
const resultado = fizzbuzz(25);
   console.log(resultado);

function fizzbuzz (entrada){
        if (typeof entrada !== 'number')
        return 'nao é um número';

        if (entrada % 3 ===0)
        return 'fizz';

        if (entrada % 5 ===0)
        return 'buzz';

        if ((entrada % 3 ===0) && (entrada % 5 ===0))
        return 'fizzbuzz';

        return entrada;




}   