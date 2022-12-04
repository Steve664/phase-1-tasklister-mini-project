document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTask;
  let priority;
  //handles form submit event
  const myForm = document.querySelector("#create-task-form")
  myForm.addEventListener('submit',
    (event) => {
      event.preventDefault();
      //gets value from inpt field
      newTask = event.target.querySelector('#new-task-description').value
      priority = event.target.querySelector('#priority option:checked').value
      //calls function to add task to list
      let list = document.createElement("li")
      let ul = document.querySelector("#tasks")
      ul.appendChild(list)
      list.textContent = newTask
      list.style.color = priority
    })
});
