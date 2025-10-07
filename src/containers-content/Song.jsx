
import { useWindowSize } from 'react-use';
import songCover from '../assets/SongCover.png';
import song from '../assets/songPichu.mp3';

export default function Song() {
    const { width } = useWindowSize();

    return (
        <> 
            <h1 className="container-title">Song for Pichu</h1>
            <div className="song-container">
                <img src={songCover} className='song-cover'/>
                <div className="song-info">
                    {width > 480 && <h2 className='song-title'>Don't go, Pichu</h2>}
                    <audio controls className="song-audio">
                        <source src={song} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
            <div className="lyrics-container">
                    <p className="lyrics">
                        She walks in with that smile, and the code feels new, <br />
                        turning logic into something bright and true. <br />
                        Every if and while, she makes it clear, <br />
                        we'd debug the world if Pichu's near. <br />
                        <br />
                        Half our class is gone in lab despair, <br />
                        we're moving chairs like it's musical chairs! <br />
                        Yet through the mess, she laughs with grace, <br />
                        we swear the chaos is our happy place. <br />
                        <br />
                        Oh, Pichu, don't you see? <br />
                        We're your masterpiece in memory. <br />
                        <br />
                        Don't go, Pichu, stay a little while, <br />
                        no one explains like you what a “while” does. <br />
                        Your jokes, your travels, your endless smile, <br />
                        you're the Royal Caribbean of our class. <br />
                        Don't go, Pichu, stay and code some more, <br />
                        'cause without you the program won't run anymore. <br />
                        <br />
                        Mamma Mia's playing, the dream's so near, <br />
                        Caribbean sunsets calling clear. <br />
                        But London's waiting for our scene, <br />
                        it's not the same without our queen. <br />
                    </p>
                    <p className="lyrics">
                        You say it's time to sail away, <br />
                        but we still have one more print(“Pichu, stay!”) <br />
                        <br />
                        Don't go, Pichu, stay a little while, <br />
                        no one explains like you what a “while” does. <br />
                        Your jokes, your travels, your endless smile, <br />
                        you're the Royal Caribbean of our class. <br />
                        Don't go, Pichu, stay and code some more, <br />
                        'cause without you the program won't run anymore. <br />
                        <br />
                        Oh Pichu… stay with us tonight, <br />
                        our dancing queen of Python light. <br />
                        <br />
                        Don't go, Pichu, stay a little while, <br />
                        no one explains like you what a “while” does. <br />
                        Your jokes, your travels, your endless smile, <br />
                        you're the Royal Caribbean of our class. <br />
                        Don't go, Pichu, stay and code some more, <br />
                        'cause without you the program won't run anymore. <br />
                        <br />
                        Oh Pichu… stay with us tonight, <br />
                        our dancing queen of Python light. <br />
                    </p>
            </div>
        </>
    )
}