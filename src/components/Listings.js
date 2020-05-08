import React from 'react'
import Movie from './Movie'

function Listings({results}) {
    // console.log(results);
    return (
        <section className="listings">
            {results.map((result, index) => (
                <Movie result={result} key={index}  />
            ))}
        </section>
        
    )
}

export default Listings
