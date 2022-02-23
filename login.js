
const myFunc = e => {

  const  name = document.getElementById('name').value;
  const  email = document.getElementById('email').value;
  const  contact = document.getElementById('contact').value;
  const  date = document.getElementById('date').value;
  const  password = document.getElementById('password').value;


  localStorage.setItem('name',name);
  localStorage.setItem('email',email);
  localStorage.setItem('contact',contact);
  localStorage.setItem('date',date);
  localStorage.setItem('password',password);
  
  return;
}

