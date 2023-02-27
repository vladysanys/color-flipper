const buttonMain = document.querySelector('.main-button')
const background = document.querySelector('section')
const span = document.querySelector('span')
const buttonSimple = document.querySelector('.margin-left')
const buttonHex = document.querySelector('.margin-left-2')
let sum = 0
let simple = true
buttonSimple.addEventListener('click',()=>{
  simple = true
})
buttonHex.addEventListener('click',()=>{
  simple = false
})
buttonMain.addEventListener('click',(event)=>{
  const colorArraySimple = ['red','yellow','green','white','blue']
  if(simple){
  if(event && sum <= colorArraySimple.length -2){
    background.style.backgroundColor = `${colorArraySimple[sum]}`
    span.textContent = `${colorArraySimple[sum]}`
    sum = sum + 1
  } else {
    sum = 0
    background.style.backgroundColor = `${colorArraySimple[sum++]}`
    span.textContent = `${colorArraySimple[sum-1]}`
  }
}
})