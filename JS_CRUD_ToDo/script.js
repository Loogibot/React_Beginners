/*
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
*/


/* Grabs elements instead of having to use the above 
commented-out document.getElementById's for each item...
*/
const selectElement = (selector) => {
	const element = document.querySelector
	(selector);

	if (element) { return element }
	throw new Error(`Something when wrong! Make
	sure that ${selector} exists/is typed
	correctly.`)
};

//Nav styles on scroll
const scrollHeader = () => {
	const navbarElement = selectElement('#header');
	if(this.scrollY >= 15) {
		navbarElement.classList.add('activated');
	} else { 
		navbarElement.classList.remove('activated');
	}
}

window.addEventListener('scroll', scrollHeader);
//... up to here

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});



let formValidation = () => {
    if (textInput.value === "") {
        console.log("failure");
        msg.innerHTML = "Task cannot be blank";
    } else {
        console.log("success");
        msg.innerHTML = "";
        
        acceptData();

        // this closes the modal automatically
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        (() => {
            add.setAttribute("data-bs-dismiss", "");
        })();
    }
};

let data = [];

let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,
    });

    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);

    createTasks();
};

let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
        return (tasks.innerHTML += `
        <div id=${y}>
                <span class="fw-bold">${x.text}</span>
                <span class="small text-secondary">${x.date}</span>
                <p>${x.description}</p>

                <span class="options">
                <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
                <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
            </span>
        </div>
        `);
    });

    resetForm();
};

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
  
    data.splice(e.parentElement.parentElement.id, 1);
  
    localStorage.setItem("data", JSON.stringify(data));
  
    console.log(data);
};

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;
  
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[2].innerHTML;
  
    deleteTask(e);
  };

let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
};

// get data from local storage with an Immediately invoked function expression
(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    createTasks();
  })();