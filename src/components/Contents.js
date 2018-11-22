import React from 'react';
 
 const Content = ({rating,riskometer,minimum_subscription,category,asset_aum,return_3yr,benchmark_text}) => {
 	return(
 		<div>
 			<p>Rating:{rating}/5</p>
 			<p>Riskometer{riskometer}</p>
 			<p>Return After 3 years: {return_3yr}</p>
 			<p>Minimum Subscription: {minimum_subscription}</p>
 			<p>Category: {category} </p>
 			<p> Asset Aum: {asset_aum} </p>
 			<p>Benchmark: {benchmark_text} </p>
 		</div>
 	)
 }

 export default Content;