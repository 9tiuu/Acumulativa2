
function NameValidation(element) {
    const ok01 = document.getElementById('ok01');
    const name = form[element];
    let elementValue = name.value;

    if (elementValue.trim() === '') {
        ok01.classList.add('rojo');
        ok01.classList.remove('verde');

    } else {
        ok01.classList.add('verde');
        ok01.classList.remove('rojo');
        return elementValue;
    };
};

function DestinyValidation(element) {
    const ok02 = document.getElementById('ok02');
    const destiny = form[element];
    let elementValue = destiny.value;

    if (elementValue.trim() === '') {
        ok02.classList.add('rojo');
        ok02.classList.remove('verde');

    } else {
        ok02.classList.add('verde');
        ok02.classList.remove('rojo');
        return elementValue;
    };
};

function Number1Validation(number1, number2) {
    const ok03 = document.getElementById('ok03');
    const ok04 = document.getElementById('ok04');
    const num1 = form[number1];
    const num2 = form[number2]; 

    // return [elementValue1, elementValue2].toString();

    let elementValue1 = num1.value;
    let elementValue2 = num2.value;

    if (elementValue1.trim() === '' || elementValue2.trim() === '') {
        ok03.classList.add('rojo');
        ok03.classList.remove('verde');
        ok04.classList.add('rojo');
        ok04.classList.remove('verde');

    } else {
        ok03.classList.add('verde');
        ok03.classList.remove('rojo');
    };

    if (parseInt(elementValue1) < parseInt(elementValue2)) {
        ok04.classList.add('verde');
        ok04.classList.remove('rojo');
        return elementValue1;
        
    } else {
        ok04.classList.add('rojo');
        ok04.classList.remove('verde');
    }
};

function Number2Validation(number1, number2) {
    const ok03 = document.getElementById('ok03');
    const ok04 = document.getElementById('ok04');
    const num1 = form[number1];
    const num2 = form[number2]; 

    // return [elementValue1, elementValue2].toString();

    let elementValue1 = num1.value;
    let elementValue2 = num2.value;

    if (elementValue1.trim() === '' || elementValue2.trim() === '') {
        ok03.classList.add('rojo');
        ok03.classList.remove('verde');
        ok04.classList.add('rojo');
        ok04.classList.remove('verde');

    } else {
        ok03.classList.add('verde');
        ok03.classList.remove('rojo');
    };

    if (parseInt(elementValue1) < parseInt(elementValue2)) {
        ok04.classList.add('verde');
        ok04.classList.remove('rojo');
        return elementValue2;
        
    } else {
        ok04.classList.add('rojo');
        ok04.classList.remove('verde');
    }
};

function PasswordValidate(pass1, pass2 ) {
    const password = pass1.value;
    const passConfirm = pass2.value;

    const ok05 = document.getElementById('ok05');
    const ok06 = document.getElementById('ok06');

    if (password.lenght > 7 && password.lenght < 25) {
        
    };
};

const form = document.forms['frm'];

form.addEventListener('submit', function(formEvent) {
    formEvent.preventDefault();
    const name = NameValidation('nombre');
    const destiny = DestinyValidation('destino');
    const number1 = Number1Validation('numero1', 'numero2');
    const number2 = Number2Validation('numero1', 'numero2');

    if (name && number1 && number2 && destiny) {
        let formData = {nombre:name, num1:number1, num2:number2, destino:destiny }
        console.log(formData);
    };

});
