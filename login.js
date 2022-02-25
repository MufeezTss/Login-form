const myFunc = () => {
  
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

  
};


window.addEventListener('load', () => {
  
  const params = (new URL(document.location)).searchParams;
  const name = params.get('name');
  const email = params.get('email');
  const contact =params.get('contact');
  const date = params.get('date');
  const password =params.get('password');
  
  document.getElementById('name').innerHTML = name;
  document.getElementById('email').innerHTML = email;
  document.getElementById('contact').innerHTML = contact;
  document.getElementById('date').innerHTML = date;
  document.getElementById('password').innerHTML = password;
  
  
});


// 
// var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
// var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");

// document.getElementById("myform").innerHTML = encrypted;
// document.getElementById("myform").innerHTML = decrypted;


// var encryptedAES = CryptoJS.AES.encrypt("Message", "My Secret Passphrase");
// var decryptedBytes = CryptoJS.AES.decrypt(encryptedAES, "My Secret Passphrase");
// var plaintext = decryptedBytes.toString(CryptoJS.enc.Utf8);