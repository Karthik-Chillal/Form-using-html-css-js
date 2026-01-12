const form = document.querySelector('form');

function validate(pass, cpass){
  if(pass===cpass){
    return true;
  }
  else{
    return false;
  }
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  const pass=document.getElementById(`password`).value;
  const cpass=document.getElementById(`cpassword`).value;
  if(validate(pass, cpass)){
    alert(`Account Created Successfully!`);
    form.reset();
  }
  else{
    alert(`Passwords don't match!`)
  }
});