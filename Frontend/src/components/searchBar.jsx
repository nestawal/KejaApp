import React from 'react'

export default function Search(prop){
   
    return(
        <div>
            <div className='searchbar'>
                <input
                name="title"
                placeholder="title"
                onChange={prop.writeSearch}
                className="search"
                value={prop.content.title} 
                />
                <input
                name="location"
                onChange={prop.writeSearch}
                placeholder="location" 
                className="search"
                value={prop.content.location} 
                />
                <button onClick={prop.filter}>
                    O
                </button>
                <button>
                    X
                </button>
            </div>
        </div>
    )
}