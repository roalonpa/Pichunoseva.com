export default function Playlist() {
    return (
        <>
            <h1 className='container-title'>Spotify playlist for Pichu</h1>
            <iframe 
                src="https://open.spotify.com/embed/playlist/40YqTqOYeSuZ8w4OsS3ltR?utm_source=generator&theme=0" 
                width="100%" 
                height="415" 
                frameBorder="0" 
                allow="encrypted-media"
                className='playlist-iframe'
            ></iframe>
        </>
    )
}