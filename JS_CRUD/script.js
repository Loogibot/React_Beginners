let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// creates data object
let data = {};
// stores input to data
let acceptData = () => {
    data["text"] = input.value;
    console.log(data)
    createPost();
};


let deletePost = () => {};

// backticks `` are template literals, don't use ''
// creates posts with that id
let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
        <i onClick="editPost(this)" class="fa fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>        
        </span>
    </div>    
    `;
    input.value = "";
}

// this event listener prevents the default behaviour, in this case the submit button send a form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation()
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("falure");
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};