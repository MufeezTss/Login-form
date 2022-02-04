
function myFunc() {

    var sub = {
      name:document.getElementById('name').value,
      email:document.getElementById('email').value,
      pass:document.getElementById('pass').value
    }

    localStorage.setItem('sub', JSON.stringify(sub));
    alert(localStorage.getItem('sub'));

}