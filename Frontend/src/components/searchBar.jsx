import React from 'react'

export default function Search(prop){
   
    return(
        <div>
            <form className='searchbar'>
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
                <button>
                    O
                </button>
                <button>
                    X
                </button>
            </form>
        </div>
    )
}