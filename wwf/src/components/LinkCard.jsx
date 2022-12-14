import React from "react";

import logo from '../logo.svg';
import '../App.css';

const LinkCard = (props) => {

    return (
        <div>
            <p className="section-header">{props.trackTitle}</p>
            <section>
                <div>
                    <img src="./NoChemistry.jpg" className="no-chemistry-img" alt="No Chemistry album cover"/>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <iframe src={`https://bandcamp.com/EmbeddedPlayer/album=3204637782/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=${props.track}/transparent=true/`} seamless><a href="https://nochemistry.bandcamp.com/album/dead-wait">Dead Wait by No Chemistry</a></iframe>
            </section>
        </div>
    )
}

export default LinkCard;