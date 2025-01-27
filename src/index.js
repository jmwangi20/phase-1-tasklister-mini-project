// document.addEventListener("DOMContentLoaded", () => {
//   let form = document.querySelector("form")
//   form.addEventListener("submit",function(e){
//     e.preventDefault()
//     buildToDo(e.target["new-task-description"].value)
//     form.reset()
//   })
// });

// function buildToDo(todo){
//   let p = document.createElement("p")
//   p.textContent = todo
//   console.log(p)
//   let btn = document.createElement("button")
//   btn.addEventListener("click",handleDelete)
//   btn.textContent = "x"
//   // Append the button to the p element 
//   p.appendChild(btn)
//   document.querySelector("#list").appendChild(p)
// }


// function handleDelete(e){
//   e.target.parentNode.remove()
// }
document.addEventListener("DOMContentLoaded",() => {
  document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault()
    buildToDo(e.target["new-task-description"].value)
  })
})

function buildToDo(todo){
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.textContent = "x"
  btn.addEventListener("click",handleDelete)
  p.textContent = todo
  p.appendChild(btn)
  document.querySelector("#list").appendChild(p)
  console.log(p)
}

// lets make this modulus by creating a function to handle delete 

function handleDelete(e){
  e.target.parentNode.remove()
}