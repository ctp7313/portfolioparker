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
          <a class="nav-item nav-link" href="/">Home</a>
          <a class="nav-item nav-link" href="/portfolio">Portfolio</a>
          <a class="nav-item nav-link" href="/contact">Contact</a>      
        </div>
      </div>
    </nav>
  
  ); 
}
export default Nav;


  