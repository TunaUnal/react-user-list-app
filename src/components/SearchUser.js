import React from 'react'

function SearchUser({setSearch}) {
    return (
        <div className="row p-0 m-0 ">
            <div className="col-12">
                <input type="text" onChange={(e)=>setSearch(e.target.value)} className='form-control' placeholder='Serach User...' />
            </div>
        </div>
    )
}

export default SearchUser