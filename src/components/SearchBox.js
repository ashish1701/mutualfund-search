import React from 'react';
import './searchbox.css'

const SearchBox = ({onChange, onSubmit}) => {
	return(
		<div className='app-form'>
			<input className='app-form-input' type='text' placeholder="Search for Mutual Funds" onChange={onChange}/>
			<button className='app-form-button' onClick={onSubmit}>Search</button>
		</div>
	)
}

export default SearchBox;