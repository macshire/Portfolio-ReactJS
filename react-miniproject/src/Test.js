import logo from './logo.svg';
import './App.css';
import './activePage.js';

function Profile() {
  return (
    <>
    <head>
      <script type="text/javascript" src="App.js"></script>
      <link rel="stylesheet" type="text/css" href="App.css" />
    </head>
    <div id="topNav">
      <a id="active" href='#home'>Home</a>
      <a href='#about'>About</a>
      <a href='#goals'>Goals</a>
      <a href="#conclusion">Conclusion</a>
    </div>
    <div id="home">
      <div id="titleBackground">
        <div id="titleName">
          <p>Maximilian Macshire Lionel</p>
        </div>
        <div id="titleWords">
          <p>An Introduction</p>
        </div>
      </div>
        <div id="avatar">
        <div id="desciption">
          Hello, I'm Maximilian but I usually go by Max. <br /><br />
          I am from Temasek Polytechnic in Singapore. <br /><br />
          I study coding through my course, <br /><br />
          Game Design and Development. I've come to <br /><br />
          Vietnam to learn more about the culture, <br /><br />
          experience the overseas work life and develop <br /><br />
          my knowledge and professionalism.
        </div>
        </div>
        <button onClick={linkedinTest}>Linkdein</button>
    </div>
    </>
    
  );

function linkedinTest() {
  return (
    window.open("https://sg.linkedin.com/in/maximilian-lionel-2025b523a?trk=people_directory")
  );
}

function loadjscssfile(filename, filetype){
  if (filetype=="js"){ //if filename is a external JavaScript file
      var fileref=document.createElement('script')
      fileref.setAttribute("type","text/javascript")
      fileref.setAttribute("src", filename)
  }
  else if (filetype=="css"){ //if filename is an external CSS file
      var fileref=document.createElement("link")
      fileref.setAttribute("rel", "stylesheet")
      fileref.setAttribute("type", "text/css")
      fileref.setAttribute("href", filename)
  }
}

function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, topNavs;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click(); 

}