import React from 'react';
import './content.css'
 
 const Content = ({rating,riskometer,minimum_subscription,category,asset_aum,return_3yr,benchmark_text}) => {
 	return(
 		<div className='display'>
 			<ul>
 				<li>Rating: {rating}/5 </li>
 				<li>Riskometer: {riskometer} </li>
 				<li>Minimum Subscription: {minimum_subscription}</li>
 				<li>Category: {category}</li>
 				<li>Asset Num: {asset_aum}</li>
 				<li>Return After 3yrs: {return_3yr}</li>
 				<li>Benchmark: {benchmark_text}</li>
 			</ul>
 		</div>
 	)
 }

 export default Content;