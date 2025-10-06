import './index.css'
import './background.css'

import { useWindowSize } from 'react-use'
import { useRef, useEffect, useState} from 'react'
import gsap from 'gsap'; // for animations 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FaPlay, FaFlag } from 'react-icons/fa';

import Container from './Container'
import Python from './containers-content/Python'
import Timeline from './containers-content/Timeline';
import Spans from './Spans'
import Title from './Title'
import Carousel from './containers-content/Carousel';
import IssueTracker from './containers-content/IssueTracker';
import Menu from './Menu';
import Warning from './Warning';
import EligeTuAventura from './containers-content/EligeTuAventura';
import Playlist from './containers-content/Playlist';
import Footer from './Footer';
import ConfettiComponent from './Confetti';

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function App() {
  const containers = useRef()
  const [warning, setWarning] = useState(false);
  const [confettiState, setConfettiState] = useState(false);
  const { width } = useWindowSize();


  const containersData = [
    {
      id: 0,
      name: 'Choose your own adventure',
      component: <EligeTuAventura />,
    },
    {
      id: 1,
      name: 'Time Line',
      component: <Timeline />,
    },
    {
      id: 2,
      name: 'Python',
      component: <Python />,
    },
    {
      id: 3,
      name: 'Spotify playlist',
      component: <Playlist />,
    },
    {
      id: 4,
      name: 'Carousel',
      component: <Carousel />,
    },
    {
      id: 5,
      name: 'Issue Tracker',
      component: <IssueTracker />,
    }
  ] // Data and content for each container

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []) // Always scroll to top on initial render and when reloading the page

  useGSAP(() => {
    const containerElements = containers.current?.children;
    
    if (containerElements) {
      Array.from(containerElements).forEach((container, index) => { // Creates an array with all containers and does the animation for each one
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse", // on enter, on leave, on enter back, on leave back
            markers: false,
          } // animation on scroll
        }); // Create a timeline for each container

        tl.fromTo(container, 
          {
            opacity: 0,
            y: 5,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out"
          }
        );
      });
    }
  }, { dependencies: [containers] }) // Animation for each containers on scroll

  function scrollTo(id) {
    if (!containers.current) return;
    const containerElement = Array.from(containers.current.children).find(c => c.dataset.id === String(id));
    if (containerElement) {
      const elementTop = containerElement.offsetTop;
      const offset = width > 1100 ? -50 : -200;
      window.scrollTo({
        top: elementTop + offset,
        behavior: 'smooth'
      })
    }
  } // Scroll to specific container from menu

  function end() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setWarning(true);
  }

  return (
    <>
      <section className="background">
        <Spans />
        {confettiState && <ConfettiComponent setConfettiState={setConfettiState} />}
        <Menu scrollTo={scrollTo} containersData={containersData} />

        <Title />
        <div className='run-end-button-div'>
          <button className='run-end-button' onClick={() => containers.current.scrollIntoView({ behavior: 'smooth'})}>
            <FaPlay size={30} style={{ marginRight: 10, filter: 'drop-shadow(rgba(0, 0, 0, 0.3) 0px 0px 10px)'}} />
            Run
          </button>
        </div>
        <div className="spacer"></div>
        <section ref={containers} className="containers">
          {containersData.map((data) => (
            <Container key={data.id} id={data.id} FlexDirection={data.flexDirection}>
              {data.component}
            </Container>
          ))}
        </section>
        <div className='run-end-button-div end-button-div'>
          <button className='run-end-button' onClick={end}>
            <FaFlag size={30} style={{ marginRight: 10, filter: 'drop-shadow(rgba(0, 0, 0, 0.3) 0px 0px 10px)'}} />
            THE END
          </button>
        </div>
        <Footer />
      </section>
      {warning ? ( <Warning setWarning={setWarning} confetti={() => setConfettiState(true)} /> ) : null}
    </>
  )
}

