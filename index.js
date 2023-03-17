
const form = document.querySelector('.form')
const thanksContainer = document.querySelector('.thanks-container')
const error = document.querySelector('.error')
const rating = document.querySelector('.rating')

let isSelected = false
document.addEventListener('click',function(e){
 
 if(e.target.id){
  handleClick(e.target.id)
 }
})


function handleClick(id){
 const input = document.getElementById(id)

 
 
 const labels = document.getElementsByTagName('label')

 for(const label of labels){
  label.classList.remove('label-bg')
 }
 const label = document.getElementById(id).parentElement
 console.log(label)



 label.classList.add('label-bg')

 rating.textContent = `You selected ${input.value} out of 5`

 isSelected = true
 
 
}
form.addEventListener('submit',function(e){
 e.preventDefault()
 if(!isSelected){
   error.style.display = 'block'
 }else{
   form.style.display = 'none'
   thanksContainer.style.display = 'block'
   setTimeout(()=>{
    window.location.reload()
    },1500)
 }



})