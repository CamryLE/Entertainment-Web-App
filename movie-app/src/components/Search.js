import { React, useState } from "react";
import Glass from '../assets/icon-search.svg'

const Search = () => {
   const [search, setSearch] = useState('');
  return (
    <div className="search">
        <img src={Glass} className='search-icon'></img>
        <input className="searchbar" placeholder="Search for movies or TV series"
            style={{
                    border: 'none', background:'none', color: '#fff', fontFamily: 'Outfit',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '24px',
                    lineHeight: '30px',
                }}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            >
        </input>
    </div>
    
  )
}

export default Search
