require('../../../../../../node_modules/inputmask/dist/jquery.inputmask')

$(function(){
    $(".text-field-masked").inputmask("99.99.9999", 
    { "placeholder": "ДД/ММ/ГГГГ" },
    );
});
