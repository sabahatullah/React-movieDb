import React, {useState} from 'react'
import Search from './components/Search'
import axios from "axios";
import Listings from './components/Listings';
import './index.css'



function App() {
    const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=e3848925';
    const [state, setState] = useState({
        value : '',
        results: [],
        total: ''
    });
    
    function keyEvent(e){
        const newValue = e.target.value
        // console.log(newValue)
        setState(prevState => {
            return {...prevState, value: newValue}
        })
    }

    const enterEvent = (e) => {
        // console.log(e.key)
        if(e.key === 'Enter'){
            axios(api + "&s=" + state.value).then(({data: {Search}}) => {
                console.log(Search);
                setState(prevState => {
                    return {...prevState, results: Search, total: Search.length}
                })
            });
           

        }
    }

    return (
        <div className="App">
            <header>
                <h1>My Movie Database</h1>
            </header>
            <main>
                <Search keyEvent={keyEvent} enterEvent={enterEvent} />
                <h3>Total Results: {state.total}</h3>
                <Listings results={state.results}/>
                {/* {state.results.map(state.result => {state.result.Title</div> })} */}
            </main>
        </div>
    )
}

export default App
