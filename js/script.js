
let fullname = document.getElementById('name').value;
console.log(fullname);

let email = document.getElementById('email').value;
console.log(email);

myForm.addEventLinster('submit',(event) => {
    event.preventDefault();
    myForm.submit();
});