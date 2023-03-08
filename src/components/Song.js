import React from "react";

const Song= ({song, index})=>{

//    console.log(song)
   const songPreview = song['link'][1]['attributes']['href']
   
    
    return(
        <li className="chart-entry">
            <p>
            {index}. {song['im:name']['label']} by {song['im:artist']['label']} 
            </p>
            
            <audio controls>
                <source src={songPreview}/>
            </audio>

                    
        </li>
    )
}

export default Song