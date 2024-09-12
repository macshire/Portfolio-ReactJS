import '../activePage.js';
import '../index.js';
import '../Layout.js';
import '../Home.css';

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
            <p>Maximilian Macshire Lionel</p>
          </div>
          <div id="titleWords">
            <p>welcome to my website :)</p>
          </div>
        </div>
          <div className='flex-container'>
            <div id="avatar"></div>
            <div id="desciption">
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
          <div className='flex-container'>
            <div id="avatar3"></div>
            <div id='desciption'>
              I've come to Vietnam to learn more<br /><br />
              about the culture, experience the overseas<br /><br />
              work life and develop my knowledge in <br /><br />
              coding and professionalism further.
            </div>
          </div>
      </div>
      </>
    )
};

export default Home;