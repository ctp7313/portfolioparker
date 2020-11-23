import React from "react";

// Destructuring the type, classNameName, children and onClick props, applying them to the button element
const Nav = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">        
    <a class="navbar-brand" href="/">Chris Parker</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMenu">
        <div class="navbar-nav ml-auto">
          <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="/portfolio">Portfolio</a>
          <a class="nav-item nav-link" href="/contact">Contact</a>      
        </div>
      </div>
  </nav>
        // <nav className="navbar navbar-light bg-light">
        //      <a className="navbar-brand" href="/">
        //         Chris Parker
        //      </a>
        //   <form className="form-inline">
        //       <a href="/portfolio">
        //         <button className="btn btn-danger" type="button">
        //           Portfolio
        //         </button>
        //       </a>
        //       <a href="/contact">
        //         <button className="btn btn-danger" type="button">
        //           Contact
        //         </button>
        //       </a>
        //     </form>
        // </nav>
  ); 
}
export default Nav;


  