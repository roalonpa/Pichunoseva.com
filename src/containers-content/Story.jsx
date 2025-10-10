import BlackoutChapters from './BlackoutChapters.json';
import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'; // for animations
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Story() {
    const allChaptersRef = useRef();
    useGSAP(() => {
        if (allChaptersRef.current) {
        Array.from(allChaptersRef.current.children).forEach((chapter, index) => {
            if (!chapter) return;

            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: chapter,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse",
                markers: false,
            }
            });

            tl.fromTo(chapter, 
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
    }, {allChaptersRef} )
    
    return (
        <>
            <h1 className="container-title">The Blackout</h1>
            <div className="all-chapters-container" ref={allChaptersRef}>
                {BlackoutChapters.chapters.map((chapter, index) => {
                    const [chapterOpenState, setChapterOpenState] = useState(false);
                    return (
                        <div className={`chapter-container ${chapterOpenState ? "open" : "closed"}`} key={index}>
                            <h3 className="chapter-title">{chapter.chapter === "Epilogue" ? "Epilogue" : `Chapter ${chapter.chapter}: ${chapter.title}`}</h3>
                            {chapterOpenState && (
                                <div className="chapter-text">
                                    {chapter.text.split('\n').map((paragraph, pIndex) => (
                                        <p key={pIndex}>{paragraph}</p>
                                    ))}
                                </div>
                            )}
                            <button onClick={() => setChapterOpenState(!chapterOpenState)} className='chapter-toggle-button'>
                                {chapterOpenState ? "^" : "v"}
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}