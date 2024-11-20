
import React from 'react';

export default function TextForm(props) {
  return (
    <div className="container">
      <h1>{props.heading}</h1>
      <nav className="navbar1 navbar-expand-lg bg-body-tertiary">
        <p>Your content goes here without video upload functionality.</p>
      </nav>
    </div>
  );
}
