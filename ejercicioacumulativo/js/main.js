
function NameValidation(element) {
    const conditionOk01 = document.getElementById('ok01');
    let elementValue = form[element].value;

    if (elementValue.trim() === '') {
        RedValidate(conditionOk01);

    } else {
        GreenValidate(conditionOk01);
        return elementValue;
    };
};

function DestinyValidation(element) {
    const conditionOk02 = document.getElementById('ok02');
    let elementValue = form[element].value;

    if (elementValue.trim() === '') {
        RedValidate(conditionOk02);

    } else {
        GreenValidate(conditionOk02);
        return elementValue;
    };
};

function NumberValidation(number1, number2) {
    const conditionOk03 = document.getElementById('ok03');
    const conditionOk04 = document.getElementById('ok04');

    let elementValue1 = form[number1].value;
    let elementValue2 = form[number2].value; 

    if (elementValue1.trim() === '' || elementValue2.trim() === '') {
        RedValidate(conditionOk03);
        RedValidate(conditionOk04);

    } else { GreenValidate(conditionOk03) };

    if (parseInt(elementValue1) < parseInt(elementValue2)) {
        GreenValidate(conditionOk04);
        return [elementValue1, elementValue2].toString();
        
    } else { RedValidate(conditionOk04) };
};

function PasswordValidate(pass1, pass2) {
    const conditionOk05 = document.getElementById('ok05');
    const conditionOk06 = document.getElementById('ok06');

    let formPassword = form[pass1].value;
    let passConfirm = form[pass2].value;

    if (formPassword.trim() === '' || passConfirm.trim() === '') {
        RedValidate(conditionOk05);
        RedValidate(conditionOk06);

    } else {
        if (formPassword === passConfirm) {
            GreenValidate(conditionOk06);
    
        } else { RedValidate(conditionOk06) };
    };

    if (formPassword.length > 7 && formPassword.length < 25) {
        GreenValidate(conditionOk05);
        return formPassword;

    } else { RedValidate(conditionOk05) };
};

function CheckBoxValidation(conditionid) {
    const ok07 = document.getElementById(conditionid);

    const A = document.querySelector('[name="opcion_1"]');
    const B = document.querySelector('[name="opcion_2"]');
    const C = document.querySelector('[name="opcion_3"]');
    const D = document.querySelector('[name="opcion_4"]');
    const E = document.querySelector('[name="opcion_5"]');
    const F = document.querySelector('[name="opcion_6"]');

    const checkboxes = [A, B, C, D, E, F];
    const checkboxes2 = []
    let contador = 0

    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            checkboxes2.push(checkbox.value);
            contador++;
        }
    }

    if(contador>=3){
        ok07.classList.add('verde');
        ok07.classList.remove('rojo');
        return checkboxes2.toString();

    }
    else{
        ok07.classList.add('rojo');
        ok07.classList.remove('verde');
    }
};

function GreenValidate(id) {
    id.classList.add('verde');
    id.classList.remove('rojo');
};

function RedValidate(id) {
    id.classList.add('rojo');
    id.classList.remove('verde');
};

const form = document.forms['frm'];

form.addEventListener('submit', function(formEvent) {
    formEvent.preventDefault();

    const name = NameValidation('nombre');
    const numbers = NumberValidation('numero1', 'numero2');
    const passwd = PasswordValidate('password1', 'password2');
    const destiny = DestinyValidation('destino');
    const checkbox = CheckBoxValidation('ok07');

    if (name && numbers && passwd && destiny && checkbox) {
        let formData = {nombre:name, numeros:numbers, contraseña:passwd, destino:destiny, opciones:checkbox}
        console.log(formData);
    };
});
