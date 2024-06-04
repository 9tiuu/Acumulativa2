
function NameValidation(element) {
    const conditionOk01 = document.getElementById('ok01');
    const name = form[element];
    let elementValue = name.value;

    if (elementValue.trim() === '') {
        RedValidate(conditionOk01);

    } else {
        GreenValidate(conditionOk01);
        return elementValue;
    };
};

function DestinyValidation(element) {
    const conditionOk02 = document.getElementById('ok02');
    const destiny = form[element];
    let elementValue = destiny.value;

    if (elementValue.trim() === '') {
        RedValidate(conditionOk02)

    } else {
        GreenValidate(conditionOk02);
        return elementValue;
    };
};

function NumberValidation(number1, number2) {
    const conditionOk03 = document.getElementById('ok03');
    const conditionOk04 = document.getElementById('ok04');
    const num1 = form[number1];
    const num2 = form[number2]; 

    let elementValue1 = num1.value;
    let elementValue2 = num2.value;

    if (elementValue1.trim() === '' || elementValue2.trim() === '') {
        RedValidate(conditionOk03);
        RedValidate(conditionOk04);

    } else { GreenValidate(conditionOk03) };

    if (parseInt(elementValue1) < parseInt(elementValue2)) {
        GreenValidate(conditionOk04);
        return [elementValue1, elementValue2].toString();
        
    } else { RedValidate(conditionOk04) }
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

    if (formPassword.length > 2 && formPassword.length < 5) {
        GreenValidate(conditionOk05);
        return formPassword;

    } else { RedValidate(conditionOk05) };
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

    if (name && numbers && passwd && destiny) {
        let formData = {nombre:name, numeros:numbers, contraseña:passwd, destino:destiny}
        console.log(formData);
    };
});
