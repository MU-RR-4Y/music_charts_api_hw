import React from "react";
import Song from "./Song";

const SongList = ({songs})=>{

     
     
    const chartList = songs.map((song,index)=>{
        console.log(song)
        return <Song key={index} index={index+1} song={song}/>;
    });
    
    return(

        <div>
            <ul>
                {chartList}
            </ul>
        </div>

    )
}

export default SongList