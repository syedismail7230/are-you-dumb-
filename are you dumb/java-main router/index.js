document.getElementById('btn-yes').addEventListener('click', function() {
  document.getElementById('btn-container').setAttribute('class', 'hide')
  document.getElementById('heading').innerText = 'I knew it!🤣🤣😂😂😂'
})
document.getElementById('btn-no').addEventListener('click', function() {
  let a = Math.random()*15
  let b = Math.random()*15
  document.getElementById('btn-no').style = `transform: translate(${a}em, ${b}em)`
})