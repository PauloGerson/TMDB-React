import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import apyKey from "../../components/apikey";
import { Container} from "./style";
import { Link } from "react-router-dom";



setInterval(function(){
  Details()
}, 1000)

function Details(){
    const {id} = useParams();

    const [movie, setMovies] = useState({});
    const imgUrl = `https://image.tmdb.org/t/p/w500`

    useEffect( () => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apyKey}&language=en-US`)
        .then(baseUrl => baseUrl.json())
        .then(urlJson =>{
            console.log(urlJson)     
            const {title, poster_path, overview, release_date} = urlJson;
           const movie ={
               id,
               title,
               sinopse: overview,
               image: `${imgUrl}${poster_path}`,
               releaseDate: release_date
           } 
           console.log(movie)
           setMovies(movie)
     
        })
       
    }, [id])
    
    return(
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse} />

                <div className="details">
                    <h2>{movie.title}</h2>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release-date">Release date: {movie.releaseDate}</span>
                    <Link to={'/'}>
                        <button>Go Back</button>
                    </Link>
                </div>
            </div>
         
            
        </Container>

    );
}

export default Details;