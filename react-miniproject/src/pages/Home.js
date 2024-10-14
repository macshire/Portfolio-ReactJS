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
              Hello, I'm Maximilian but I usually go by Max. <br /><br />
              I was born in Singapore and I am half Eurasian, <br /><br />
              half Indian. Nice to meet you!
            </div>
          </div>
          <div className="flex-container">
            <div id="desciption2">
              I come from the school of Temasek Polytechnic, <br/><br/>
              where I study Game Design and Development. <br /><br />
              This is where I learnt coding, some languages <br /><br />
              I know are C#, JavaScript and Python.
            </div>
            <div id='avatar2'></div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className='Heading'>WHAT I KNOW</h1>
          <br></br>
          <br></br>
          <div className="flex-container">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ599EeQesSEW0pWStIaIQUEQs2P0D7I12RW-LnCPbbtOtkKNpBiIDkBzwq4Et1aQoU4ts&usqp=CAU'></img>
          </div>
      </div>
      </>
    )
};

export default Home;