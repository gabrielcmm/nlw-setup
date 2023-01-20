const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const addButton = document.querySelector('header button')
addButton.addEventListener('click', addEvent)
form.addEventListener('change', saveEvent)

function addEvent() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, 5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert(`O dia ${today} já está incluso no sistema!`)
    return
  }
  nlwSetup.addDay(today)
  alert(`Dia ${today} Adicionado com sucesso!`)
}

function saveEvent() {
  localStorage.setItem('NlwSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NlwSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()
