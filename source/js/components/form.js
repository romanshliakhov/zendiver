import JustValidate from "just-validate";

const form = document.getElementById('form');
const menuForm = document.getElementById('menuForm');
const orderForm = document.getElementById('orderForm');

if(form){
        const validator = new JustValidate('#form');
       
        validator.addField('input[type="tel"]', [
            {
                rule: 'required',
                errorMessage: 'This field is required!',
              }
        ]);	
    }

    if(menuForm){
        const validator = new JustValidate('#menuForm');
       
        validator.addField('input[type="tel"]', [
            {
                rule: 'required',
                errorMessage: 'This field is required!',
              }
        ]);	
    }

    if(orderForm){
        const validator = new JustValidate('#orderForm');
       
        validator.addField('input[type="tel"]', [
            {
                rule: 'required',
                errorMessage: 'This field is required!',
              }
        ]);	
    }
