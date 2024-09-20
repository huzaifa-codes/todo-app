var input = document.querySelector("#input")
var output = document.querySelector("#output")
var array = [];

function button() {
  array.push(input.value)
  output.innerHTML = ""
  for (var i = 0; i < array.length; i++) {
    output.innerHTML += `${array[i]} <button onclick="deletebtn(${i})">Delete</button> <button onclick="editbtn(${i})">Edit</button> <br/>`
  }
  input.value = ""
}

function deletebtn(index) {
  array.splice(index, 1)
  output.innerHTML = ""
  for (var i = 0; i < array.length; i++) {
    output.innerHTML += `${array[i]} <button onclick="deletebtn(${i})">Delete</button> <button onclick="editbtn(${i})">Edit</button> <br/>`
  }
}

function editbtn(index) {
  var newValue = prompt("Enter new value:", array[index])
  if (newValue !== null) {
    array[index] = newValue
    output.innerHTML = ""
    for (var i = 0; i < array.length; i++) {
      output.innerHTML += `${array[i]} <button onclick="deletebtn(${i})">Delete</button> <button onclick="editbtn(${i})">Edit</button> <br/>`
    }
  }
}