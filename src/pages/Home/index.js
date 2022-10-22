//import apykey from "./apykey"
import {Container, MovieList,Movie} from "./style"
import {useState, useEffect} from 'react'
import apyKey from "../../components/apikey";
import { Link } from "react-router-dom";


function Home(){
 const [movie, setMovies] = useState([]);
const imgUrl = `https://image.tmdb.org/t/p/w500`
 useEffect( ()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apyKey}&language=en-US&page=1`)
        .then( result => result.json())
        .then( data => setMovies(data.results) )
        
 }, [])

    
    return(
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {
                    
                    movie.map( el => {
                        return(
                        <Movie>
                            <Link to={`/details/${el.id}`}>
                            <img  src={`${imgUrl}${el.poster_path}`} alt={el.title} /> 
                            </Link>                                                                          
                         <span>{el.title}</span>
                           
                        </Movie>
                        )
                    })
               
                }
            </MovieList>
        </Container>
        
    );
}

export default Home;