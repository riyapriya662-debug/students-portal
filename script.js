let students = [];

function addStudent() {
  let name = document.getElementById("name").value;
  let reg = document.getElementById("reg").value;
  let marks = document.getElementById("marks").value;

  let student = {name, reg, marks};
  students.push(student);

  displayStudents();
}

function displayStudents() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  students.forEach((s) => {
    let li = document.createElement("li");
    li.textContent = s.name + " - " + s.reg + " - " + s.marks;
    list.appendChild(li);
  });
}
