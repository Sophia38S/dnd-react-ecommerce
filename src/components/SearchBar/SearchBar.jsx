import { useState } from 'react';

function SearchBar() {
    const [search, setSearch] = useState('')

  return (
    <div>
      <input type="text"
       value={search} 
       onChange={(event) => setSearch(event.target.value)}
       />
    </div>
  )
}

export default SearchBar