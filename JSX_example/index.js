const h1 = document.createElement("h1")

h1.textContent = "Hey Mom! this is vanilla JS, the imperative way to program"
h1.className = "header"
console.log(h1)

const element = (
    <div>
        <h1 className="header"> This is JSX, Mom! </h1>
        <p> Here's a paragraph...</p>
    </div>
)
console.log(element)

ReactDOM.render(
    element, 
    document.getElementById("root")
    )