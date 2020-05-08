import React from 'react'

function Movie({result}) { 
    // console.log({result})
    return (
        <div className="movie">
            <div className="movie-wrap">
            <h2 className='movie-title'>{result.Title}</h2>
            <img src={result.Poster} alt={result.Title}></img>
            </div>
        </div>
    )
}

export default Movie
