import React,{Component} from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox'; 
//define function to return the component
//define states  using a class


 class App extends Component{
     constructor(){
         super(); 

         this.state={
            robots:robots,
            searchField:''
         }

     }

     //let's create an event to handle instances where the search changes
     onSearchChange=(event)=>{
         //this is a side effect. avoid it
         //filtering the robots.
         //its a react rule to use this.setState to set state values
         this.setState({searchField:event.target.value})
     }

    render(){
            const filteredRobots=this.state.robots.filter(robots=>{

            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())

        })
     //   console.log(filteredRobots)
         return(
             <div className="tc">
                 <h1>RoboFriends</h1>
                 <SearchBox searchChange={this.onSearchChange}/>
                 <CardList robots={filteredRobots}/>
             </div>
    )
}




}


    




export default App;