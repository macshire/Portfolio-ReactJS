import { useCallback, useEffect, useState } from "react";
import { imageList } from "../data";
import "../Projects.css";

  const Projects = () => { 
    const [index, setIndex] = useState(0);
    const [activeAnimation, setActiveAnimation] = useState(false);

    const handleClick = useCallback(() => {

      setActiveAnimation(false)
      if (index >= imageList.length -1) {
        setIndex(0);
        return;
      }
      setIndex(index + 1);
    }, [index]);

    useEffect(() => {
      setTimeout(() => {
        setActiveAnimation(true)
      }, 100)
    }, [index])

    let image = imageList[index];
    return (
      <>
        <div id="aboutBackground">
            <div id="titleName">
              <p>Projects</p>
            </div>
            <div id="titleWords">
              <p>Who I am, What I do</p>
            </div>
          </div>
        <h2>
          <i className={`aboutTitle ${activeAnimation ? 'aboutTitle-for-animation' : ''}`}>{image.title}</i>
        </h2>
        <div className="flex-container">
          <div className={`first-item ${activeAnimation ? 'first-item-for-animation' : ''}`}>
            <img id="aboutImage" src = {image.url}/>
          </div>
          <div className={`second-item ${activeAnimation ? 'second-item-for-animation' : ''}`}>
            <p id="aboutDesciption">
              {image.description}
            </p>
          </div>
        </div>
        
        <button onClick={handleClick} className="nextButton">
          Next
        </button>
      </>
    );
  }
  
  export default Projects;