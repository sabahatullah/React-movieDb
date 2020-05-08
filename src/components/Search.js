import React from 'react'

function Search(props) {
    return (
        <div className="search-box">
            <input type="text" placeholder="Please type here..." onChange={props.keyEvent} onKeyPress={props.enterEvent}/>
        </div>
    )
}

export default Search
