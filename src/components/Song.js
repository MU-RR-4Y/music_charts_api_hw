import React from "react";

const Song= ({song, key})=>{

//    console.log(song)
   const songPreview = song['link'][1]['attributes']['href']
   console.log(songPreview)
    
    return(
        <li className="chart-entry">
            <p>
            {song['title']['label']} <audio controls><source src={songPreview}/>
            </audio>
            </p>

        
        </li>
    )
}

export default Song