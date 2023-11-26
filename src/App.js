/* eslint-disable jsx-a11y/anchor-is-valid */
//import logo from './logo.svg';
//import { useEffect, useState, useRef } from 'react';
import './App.scss';
//import SonicDashIcon from './SonicDashIcon.webp';
//import stretched from './stretched.png';

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    //console.log('responsive class added');
  } else {
    x.className = "topnav";
  }
}

function Navbar() {

  return (
    <div className="topnav" id="myTopnav">
      <a href="#home" className="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );

}

function App() {
  return (
    <>
      <div style={{"background":"rgb(0, 132, 255)","padding":"5px"}} id="info">
        <h4 style={{"textAlign":"center"}}>Resize1 the browser window to see the responsive effect.</h4>
      </div>
      
      <div className="header">
        <h1>My Website</h1>
        <p>With a <b>flexible</b> layout.</p>
      </div>
      
      <Navbar />
      
      <div className="row content" id="row">
        <div className="side">
          <h2>About Me</h2>
          <h5>Photo of me:</h5>          
          <div className="fakeimg" style={{"height":"200px"}}>Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <div className="fakeimg" style={{"height":"60px"}}>Image</div><br />
          <div className="fakeimg" style={{"height":"60px"}}>Image</div><br />
          <div className="fakeimg" style={{"height":"60px"}}>Image</div>
        </div>
        <div className="main">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div className="fakeimg" style={{"height":"200px"}}>Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <br />
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div className="fakeimg" style={{"height":"200px"}}>Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>
      
      <div className="footer">
        <h2>Footer</h2>
      </div>
    </>
  );
}

export default App;
