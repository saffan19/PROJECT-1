const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const successelement=document.getElementById('success')
/*var pattern=/^[A-Za-z]{3,}.{1}[A-Za-z]{2}[0-9]{2}@bmsce.ac.in{1}$/;*/
var pattern=/^[A-Za-z1-9.-_]{3,}@bmsce.ac.in{1}$/;


form.addEventListener('submit',(e)=>{
    let messages = [];
    var check=0;
  if (email.value === '' || email.value == null) {
    messages.push('Enter email id')
  }
  if(!pattern.test(email.value))
  {
    messages.push('Not a valid BMSCE email');
    successelement.innerHTML='';
  }
  if(pattern.test(email.value))
  {
    successelement.innerHTML='Valid email';
    check=1
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }
  errorElement.innerText = '';
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }


})


