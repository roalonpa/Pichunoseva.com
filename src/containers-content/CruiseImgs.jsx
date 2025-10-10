import cruiseImg1 from '../assets/CruiseImg1.png';
import cruiseImg2 from '../assets/CruiseImg2.png';
import cruiseImg3 from '../assets/CruiseImg3.png';
import cruiseImg4 from '../assets/CruiseImg4.png';
import cruiseImg5 from '../assets/CruiseImg5.png';
import cruiseImg6 from '../assets/CruiseImg6.png';
import cruiseImg7 from '../assets/CruiseImg7.png';
import cruiseImg8 from '../assets/CruiseImg8.png';
import { useState } from 'react';

export default function CruiseImgs({ returnToTop }) {

    const images = [
        {
            id: 0,
            src: cruiseImg1
        },
        {
            id: 1,
            src: cruiseImg2
        },
        {
            id: 2,
            src: cruiseImg3
        },
        {
            id: 3,
            src: cruiseImg4
        },
        {
            id: 4,
            src: cruiseImg5
        },
        {
            id: 5,
            src: cruiseImg6
        },
        {
            id: 6,
            src: cruiseImg7
        },
        {
            id: 7,
            src: cruiseImg8
        }
    ];
    const [imgState, setImgState] = useState(() => {return images[0]});
    const [fadeState, setFadeState] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const imgPointStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    };

    const activeImgPointStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        transition: 'background-color 0.5s ease-in-out',
    };

    function handleImageChange() {
        if (isLoading) return; // Prevent multiple clicks during transition
        
        setIsLoading(true);
        setFadeState(true);
        
        setTimeout(() => {
            const currentId = imgState.id;
            const nextId = currentId === images.length - 1 ? 0 : currentId + 1;
            setImgState(images[nextId]);
        }, 150);
    }

    function handleImageLoad() {
        setFadeState(false);
        setIsLoading(false);
    }

    return (
        <>
            <h1 className='container-title'>Our Cruise Trip</h1>
            <div className="cruise-img-container">
                <img 
                    src={imgState.src} 
                    className={`cruise-img ${fadeState === true && 'cruise-img-fade'}`}
                    onLoad={handleImageLoad}
                    onError={handleImageLoad} // Fallback in case of error
                />
                <button 
                    className="img-tap-btn" 
                    onClick={handleImageChange}
                    disabled={isLoading}
                ><h2>Tap here</h2></button>
            </div>
            <div className='img-points'>
                {images.map((point, index) => (
                    <button 
                        key={index} 
                        className='img-point-btn' 
                        style={imgState.id === point.id ? activeImgPointStyle : imgPointStyle} 
                        onClick={() => {
                            if (imgState.id !== point.id && !isLoading) {
                                setIsLoading(true);
                                setFadeState(true);
                                setTimeout(() => {
                                    setImgState(point);
                                }, 150);
                            }
                        }}
                        disabled={isLoading}
                    ></button>
                ))}
            </div>
            <button className='go-to-top' onClick={returnToTop}>Return to top</button>
        </>
    );
}