import React from "react";

export function Header() {
  return(
    <header>
      <div> Apolo </div>
      <nav>
        <ul>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/" className="active">About</a></li>
          <li><a href="/" className="active">Project</a></li>
          <li><a href="/" className="active">Setup</a></li>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/" className="active">Ability</a></li>
        </ul>
      </nav>
      <div className="manu-toggle"></div>
    </header>
  )
}