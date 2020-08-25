import React from 'react';

const SearchBox = ({searchChange}) =>{
    return(
        <div className='pa2 '>
        <input onChange={searchChange} className='pa3 ba b--green bg-lightest-blue'
        type='search' placeholder='Search Robot...' style={{position:'sticky'}} />
        </div>
    );
}


export default  SearchBox;