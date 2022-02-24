
window.addEventListener('load', () => {

    const params = (new URL(window.location.href="http://127.0.0.1:5500/data.html?name=&email=&contact=&date=&password=")).searchParams;
    // let uri = 'http://127.0.0.1:5500/data.html?name=&email=&contact=&date=&password=';
    const encoded = encodeURIComponent(params) ;
    const name = params.get('name');
    const email = params.get('email');
    const contact = params.get('contact');
    const date = params.get('date');
    const password = params.get('password');

    document.getElementById('name').innerHTML = name;
    document.getElementById('email').innerHTML = email;
    document.getElementById('contact').innerHTML = contact;
    document.getElementById('date').innerHTML = date;
    document.getElementById('password').innerHTML = password;
    // document.write(encoded);
})

