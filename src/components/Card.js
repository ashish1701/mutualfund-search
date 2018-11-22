import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import Contents from './Contents'

class Card extends React.Component{

	constructor(){
		super();
		this.state={
			mutual:[]
		}
	}

	componentDidMount(){
		fetch(`https://api.piggy.co.in/v1/mf/?key=${this.props.schemeKey}`)
 		.then(res=>res.json())
 		.then(res=>this.setState({
 			mutual: res.data.mutual_fund.details
 		}))
 		.catch(error=>console.log(error))
	}

	render(){
		const {mutual} = this.state;
		return(
		<div>
			<Accordion atomic={true}>
			    <AccordionItem title={this.props.name}>
				    <Contents
				    rating={mutual.rating}
				    riskometer={mutual.riskometer}
				    minimum_subscription={mutual.minimum_subscription}
				    category={mutual.category}
				    asset_aum={mutual.asset_aum}
				    return_3yr={mutual.return_3yr}
				    benchmark_text={mutual.benchmark_text}
				    />
			    </AccordionItem>
			</Accordion>
		</div>

		);
	}
	
}

export default Card; 