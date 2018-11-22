import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';

class App extends Component {
  constructor(){
    super();
    this.state={
      searchField:'',
      rows:10,   //Number of Rows are 10 by default and offset is 2, can be changed as per requirement
      offset:2,
      searchResults:[],
      clicked:false
    }
  }

    onChange=(e)=>{
      this.setState({
        searchField: e.target.value
      })
    }

    onSubmit=()=>{
      fetch('https://api.piggy.co.in/v2/mf/search/',{
        method: "post",
        headers:{
          'Authorization': 'Token a41d2b39e3b47412504509bb5a1b66498fb1f43a',
          'cache-control': 'no-cache',
          'Content-type':'application/json'
        },
        body:JSON.stringify({
          search:this.state.searchField,
          rows:this.state.rows,
          offset:this.state.offset
        })
      })
      .then(res=>res.json())
      .then(res=>this.updateData(res))
    }

    updateData = (data) => {
      this.setState({
      searchResults: data.data.search_results,
      clicked: true
    })
      
      
    }


  render() {
    return (
      <div className="App basic">
        <div>
          <SearchBox onChange={this.onChange} onSubmit={this.onSubmit} />
        </div>
        {
          this.state.clicked
          ?<div  className='basic'>
            <CardList searchResults={this.state.searchResults}/>
          </div>
          :<div  className='basic'>
          </div>
        }
        
      </div>
    );
  }
}
//{<Cards searchResults={this.state.searchResults} />}
export default App;
