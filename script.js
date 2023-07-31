const inputUpperCase = document.querySelector('#upperCase')
const btnConvert = document.querySelector('#btnConvert')
const result = document.querySelector('#result')
const result10975 = document.querySelector('#result10975')
const inputIPI10975 = document.querySelector('#ipi10975')
const btnConvertIpi10975 = document.querySelector('#btnConvertIpi10975')
const inputIPI105 = document.querySelector('#ipi105')
const btnConvertIpi105 = document.querySelector('#btnConvertIpi105')
const result105 = document.querySelector('#result105')


const copiar = (valor) => {
  navigator.clipboard.writeText(valor)
  }

//Conversor de letras Maisculas 
btnConvert.addEventListener('click', () => {
  let text = inputUpperCase.value 
  const textUpper = text.toUpperCase()
  let p = document.createElement('p')
  p.innerHTML = `${textUpper}<button id ='btn' onclick='copiar(${textUpper})'>Copiar</button>`
  result.appendChild(p) 
  inputUpperCase.value = ''
})

const multiplica = (resultado) =>{
  const teste = prompt(`Deseja multiplicar ${resultado} por quanto ?`)
  const valorFinal = teste * resultado
  
  const x = valorFinal.toString().replace(".",",")
  
  const p = document.createElement('p')
  p.innerHTML = `${x} <button id ='btn' onclick='copiar(${x})'>Copiar</button>`
  result10975.appendChild(p)
}



//Conversor de IPI 1,0975
btnConvertIpi10975.addEventListener('click',() => {
  const divisaoDoValor = inputIPI10975.value/1.0975
  const valorFinal = divisaoDoValor.toString().replace(".",",")
  const p = document.createElement('p')
 
  p.innerHTML = `${valorFinal} <button id ='btn' onclick='multiplica(${divisaoDoValor})'>Multiplicar</button>
  <button id ='btn' onclick='copiar(${divisaoDoValor})'>Copiar</button>`
  result10975.appendChild(p)
  inputIPI10975.value = ''
})

//Conversor de IPI 1,05
btnConvertIpi105.addEventListener('click',() => {
  const divisaoDoValor = inputIPI105.value/1.05
  const valorFinal = divisaoDoValor.toString().replace(".",",")
  const p = document.createElement('p')

  p.innerHTML = `${valorFinal}<button id ='btn' onclick='copiar(${divisaoDoValor})'>Copiar</button>`
  result105.appendChild(p)
  inputIPI105.value = ''
})
