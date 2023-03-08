import React,{useState, useEffect} from "react";
import SongList from "../components/SongList";

const ChartBox = ()=>{

const [songs,setSongs] = useState([])

useEffect(()=>{
    getSongs();
},[])

const getSongs = function (){
    const request = fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(response=>response.json())
    .then (data => setSongs(data['feed']['entry']))
    
}

// console.log('this is songs',songs)

    return(
        <div>
        <SongList songs={songs}/>
        </div>
    )
}

export default ChartBox