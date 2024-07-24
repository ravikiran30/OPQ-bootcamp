import React from "react";  
import { useState, useEffect } from "react";

const Movies=()=>{
    const [movies ,setMovies] = useState([])
    // let getTrendingMovies =async()=>{
    //     try{
    //         let response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=ed9945885ba0c6f7a7edc57b379191ae&page=1")
    //         let data = await response.json()
    //         movies=data.results
    //     }
    //     catch{
    //         console.log("Getting Trending movies failed")
    //     }
    // }
    let getTrendingMovies=() =>{
       let response= fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=ed9945885ba0c6f7a7edc57b379191ae&page=1`)
        response.then((value)=>{
            return value.json()
        }).then((value)=>{
            setMovies(value.results)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getTrendingMovies()
    })
    
    return(
        <div>
            <div className="text-2xl mb-8 font-bold text-centr">Trending Movies</div>
            <div className="flex flex-wrap">
                {
                    response.results.map((movie)=>{
                        return(
                            <div className="w-[200px] h-[40vh] bg-gray-700 bg-center bg-cover flex items-end m-4 rounded-x1"
                                style={
                                    {
                                        backgroundImage:`url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`
                                    }
                                }><div className="text-white font-bold text-center bg-gra-900 bg-opacity-60 w-full rounded-b-xl">
                                    {movie.original_title}</div></div>
                        )

                    })
        
                }
            </div>

        </div>
    )

}
export default Movies