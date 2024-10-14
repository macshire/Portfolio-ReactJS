import '../activePage.js';
import '../index.js';
import '../Layout.js';
import '../Home.css';

import homeStyle from '../Home.css';

const Home = () => {
    return (
      <>
      <head>
        <link rel="stylesheet" type="text/css" href="App.css"/>
        <script defer src='activePage.js'></script>
      </head> 
      <div id="home">
        <div id="titleBackground">
          <div id="titleName">
            <p>「✦ Maximilian Macshire Lionel ✦」</p>
          </div>
          <div id="titleWords">
            <p>👉 welcome to my website 👈</p>
          </div>
        </div>
        <h1 className='Heading'>WHO I AM</h1>
          <div className='flex-container'>
            <div id="avatar"></div>
            <div id="desciption" className={homeStyle.red}>
              I'm Maximilian but I usually go by Max. <br /><br />
              I was born in Singapore and I am Eurasian-Indian. <br /><br />
              Good to see you here.
            </div>
          </div>
          {/* <div className="flex-container">
            <div id="desciption2">
              I come from the school of Temasek Polytechnic, <br/><br/>
              where I study Game Design and Development. <br /><br />
              This is where I learnt coding.
            </div>
            <div id='avatar2'></div>
          </div> */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className='Heading'>WHAT I KNOW</h1>
          <br></br>
          <br></br>
          <div className="flex-container-logos">
            <div className='logoContainer'>
              <img className='codeLogos' src='https://github.com/macshire/Portfolio-ReactJS/blob/main/react-miniproject/C%23.png?raw=true'></img>
              <h2 className='Heading2'>C#</h2>
            </div>
            <div className='logoContainer'>
              <img className='codeLogos' src='https://github.com/macshire/Portfolio-ReactJS/blob/main/react-miniproject/Python.png?raw=true'></img>
              <h2 className='Heading2'>Python</h2>
            </div>
            <div className='logoContainer'>
              <img className='codeLogos' src='https://github.com/macshire/Portfolio-ReactJS/blob/main/react-miniproject/JavaScript.png?raw=true'></img>
              <h2 className='Heading2'>JavaScript</h2>
            </div>
            <div className='logoContainer'>
              <img className='codeLogos' src='https://github.com/macshire/Portfolio-ReactJS/blob/main/react-miniproject/CSS.png?raw=true'></img>
              <h2 className='Heading2'>CSS</h2>
            </div>
            <div className='logoContainer'>
              <img className='codeLogos' src='https://github.com/macshire/Portfolio-ReactJS/blob/main/react-miniproject/React.png?raw=true'></img>
              <h2 className='Heading2'>React</h2>
            </div>
            <div className='logoContainer'>
              <img className='codeLogos' src='https://github.com/macshire/Portfolio-ReactJS/blob/main/react-miniproject/Unity3.png?raw=true'></img>
              <h2 className='Heading2'>Unity</h2>
            </div>
          </div>
          <h1 className='Heading'>WHAT I'VE DONE</h1>
      </div>
      </>
    )
};

export default Home;