
window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
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
})

