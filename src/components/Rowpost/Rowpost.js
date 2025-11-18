import React,{useState,useEffect} from 'react'
import './Rowpost.css'
import axios from "../../Axios"
import {ApiKey, ImageUrl} from"../../Constants/Constants"
import YouTube from 'react-youtube';
function Rowpost(props) {
  const [movies,setMovies]=useState([])
  const [UrlId,setUrlId]=useState("")
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    })
  },[])
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
  const HandleMovie = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${ApiKey}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
    })

  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
      {  movies.map((obj)=>
          <img onClick={()=>HandleMovie(obj.id)} className={props.isSmall ? 'small-poster':'poster'} src={`${ImageUrl+obj.backdrop_path}`} alt="poster" />
        )}
        
      </div>
     { UrlId && <YouTube videoId={UrlId.key} opts={opts}/> }
    </div>
  )
}

export default Rowpost
