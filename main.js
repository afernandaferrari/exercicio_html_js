const form = document.getElementById('verifica_numeros')
const btn = document.querySelector("btn=verificar")
const a = document.querySelector("A")
const b = document.querySelector("B")

function valida(a,b) {
        if(a>b){

        }
}

form.addEventListener('submit', function (e) {
        e.preventDefault();

        const valorA = a.value;
        const valorB = b.value;
        const sucessMsg = ('O número B=${ valorB }, é maior que o número A=${ valorA }')

console.log(sucessMsg)

formEValido = valida(b.value)
        if(formEValido) {
                const containnerMsgSucess = document.querySelector('.mensagem_sucess');
                containnerMsgSucess.innerHTML = sucessMsg;
                containnerMsgSucess.getElementsByClassName.display = 'block';

                valorA.value = '';
                valorB.value = '';
        }
});