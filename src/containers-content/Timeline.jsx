import { 
  FaHeart, 
  FaUsers,
  FaPython,
  FaMapMarkerAlt,
  FaTree,
  FaCode
} from 'react-icons/fa';
import './Timeline.css';
import { useRef } from 'react';
import gsap from 'gsap'; // for animations
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useWindowSize } from 'react-use';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Timeline() {
  const { width } = useWindowSize();
  const timelineEvents = [
    {
      id: 1,
      date: "Before 2024",
      title: "First Encounters",
      description: "CS classes in previous years",
      icon: <FaCode />
    },
    {
      id: 2,
      date: "Since March 2024",
      title: "Getting to Know Pichu",
      description: "First CS classes with Pichu and Pichu as a tutor",
      icon: <FaUsers />
    },
    {
      id: 3,
      date: "2024",
      title: "Python Part 1",
      description: "Students go into crisis, +50% fail by December",
      icon: <FaPython />
    },
    {
      id: 4,
      date: "August 21-23, 2024",
      title: "Santa Fe Part 1",
      description: "First Santa Fe trip with Pichu",
      icon: <FaMapMarkerAlt />
    },
    {
      id: 5,
      date: "2025",
      title: "Second Year with Pichu",
      description: "Pichu becomes our reason to come to school on Mondays and our greatest emotional support",
      icon: <FaHeart />
    },
    {
      id: 6,
      date: "May 12, 2025",
      title: "Jardin Japones & Feria del Libro",
      description: "Pichu is in for everything",
      icon: <FaTree />
    },
    {
      id: 7,
      date: "May 14-19, 2025",
      title: "Santa Fe Part 2",
      description: "Second Santa Fe trip with Pichu, +3 extra days stranded",
      icon: <FaMapMarkerAlt />
    },
    {
      id: 8,
      date: "2025",
      title: "Python Part 2",
      description: "Rochi and Delfi are so intelligent that they become your favorites",
      icon: <FaPython />
    },
  ];

  const timelineItemsLeftRef = useRef();
  const timelineItemsRightRef = useRef();
  const endItemRef = useRef();
  const timelineLineRef = useRef();
  const timelineItemsRef = useRef();

  useGSAP(() => {
    const timelineItemsLeft = width > 520 ? timelineItemsLeftRef.current?.children : null;
    const timelineItemsRight = width > 520 ? timelineItemsRightRef.current?.children : null;
    const allItems = timelineItemsLeft && timelineItemsRight ? [...Array.from(timelineItemsLeft), ...Array.from(timelineItemsRight), endItemRef.current] : width <= 520 ? [...Array.from(timelineItemsRef.current?.children || []), endItemRef.current] : [];

    // Animate the timeline line growing with scroll
    if (width > 520 && timelineLineRef?.current) {
      gsap.fromTo(timelineLineRef.current, 
        {
          scaleY: 0,
          transformOrigin: "top center"
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineItemsRightRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true, // Makes it follow the scroll smoothly
            markers: false
          }
        }
      );
    }

    if (allItems.length > 0) {
      allItems.forEach((item, index) => { // Creates an array with all containers and does the animation for each one
        if (!item) return; // Skip if item is null

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse", // on enter, on leave, on enter back, on leave back
            markers: false,
          } // animation on scroll
        }); // Create a timeline for each container

        tl.fromTo(item, 
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
            ease: "back.out(1.7)"
          }
        );
      });
    }
  }, { dependencies: [width, timelineItemsRightRef.current, timelineItemsLeftRef.current, timelineItemsRef.current] }) // Animation for each containers on scroll

  function mapEvents(index) {
    return timelineEvents
      .filter((_, i) => {
      if (width > 520) {
        return index === 'even' ? i % 2 === 0 : i % 2 !== 0;
      }
      return true;
      })
      .map((event, idx) => (
        <div key={event.id}>
          {index === 'odd' && width > 520 && <div className="timeline-spacer"></div>}
          <div className={`timeline-item timeline-item-${idx + 1}`}>
          <div className="timeline-icon">
            {event.icon}
          </div>
          <div className="timeline-card">
            <div className="timeline-date">
            {event.date}
            </div>
            <h3 className="timeline-title">
            {event.title}
            </h3>
            <p className="timeline-description">
            {event.description}
            </p>
          </div>
          </div>
          {index === 'even' && width > 520 && <div className="timeline-spacer"></div>}
        </div>
      ));
  }

  return (
    <>
        <h1 className='container-title'>Loading… Pichu</h1>
        <div className="timeline-container">
            {width > 520 ? (
              <>
                <div ref={timelineItemsLeftRef} className='timeline-items-left'>
                    {mapEvents('even')}
                </div>
                <div className="timeline-line" ref={timelineLineRef}></div>
                <div ref={timelineItemsRightRef} className='timeline-items-right'>
                    {mapEvents('odd')}
                </div>
              </>
            ) : (
              <div ref={timelineItemsRef} className='timeline-items'>
                {mapEvents()}
              </div>
            )}
        </div>
        <div className='timeline-end' ref={endItemRef}>
            <div className="timeline-end-content">
                <div className="timeline-card">
                    <div className="timeline-date">End of 2025</div>
                    <h3 className="timeline-title">The End?</h3>
                    <p className="timeline-description">I hope not</p>
                </div>
            </div>
        </div>
    </>
    
  )
}