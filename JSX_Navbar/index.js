const h1 = document.createElement("h1")

const navbar = (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">NAVBAR </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">HOME <span className="sr-only">(CURRENT)
                        </span></a>
                        </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">LINK </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            DROPDOWN 
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">ACTION </a>
                        <a className="dropdown-item" href="#">ANOTHER ACTION </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">SOMETHING ELSE HERE</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">DISABLED </a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="SEARCH"
                        aria-label="search" />
                        <button className="btn btn-outline-success my-2 my-sm-0"
                        type="submit">SEARCH </button>
                </form>
            </div>
        </nav>
)


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
    
    navbar, 
    document.getElementById("root")
)