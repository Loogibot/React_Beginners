import React from "react"
import ReactDOM from "react-dom"

const navbar = (
    <nav>
        <h1>Mom's Pizzaria</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>            
    </nav>
)

ReactDOM.render(
    navbar, 
    document.getElementById("root")
)