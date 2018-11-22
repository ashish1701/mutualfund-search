import React from 'react';
import Card from './Card';

const CardList = ({ searchResults }) => {
	return(
		<div>
		{
			searchResults.length>0 ?
			<div>
			{
				searchResults.map((user,i) => {
				return <Card
				key = {i} 
				name={searchResults[i].name} 
				schemeKey={searchResults[i].scheme_key}
				/>
				})
			}
			</div>
			:<div>
				<p> No result found </p>
			</div>
		}
		</div>
		)
}
export default CardList;