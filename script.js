function Submitform(){

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwcPQK87Vx_Or5FexnvgbA8DHUjD7FdQFD5UTmvFAEPNQ7tu-THjFmBe1CQW3zImQNB/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

      document.getElementById('name').value = ' ';
      document.getElementById('email').value = ' ';
      document.getElementById('number').value = ' ';
      document.getElementById('message').value = ' ';
  })
}