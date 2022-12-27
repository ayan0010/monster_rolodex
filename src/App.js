import { useState,useEffect } from 'react';
import './App.css';
import  CardList from './components/card-list/card-list.component';
import  SearchBox from './components/search-box/search-box.component';

import React from 'react'

const App = () => {

  const [searchField , setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const[filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log('render');
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=>setMonsters(users));
  },[]);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
        return monster.name.toLowerCase().includes(searchField);       
        });

    setFilteredMonsters(newFilteredMonsters);    
  },[searchField,monsters]);

  const onSearchChange = (event) => {
            const searchFieldString = event.target.value.toLocaleLowerCase();
            setSearchField(searchFieldString);
    }

  

  return (
      <div className="App">
       <h1 className='app-title'>Monster Rolodex</h1>

       <SearchBox 
      onChangeHandler={onSearchChange} 
      placeholder='search monsters'
      className='search-box' 
      />
     <CardList monsters={filteredMonsters} />   

       {/* {
         filteredMonsters.map((monster)=>{
                    return (
                      <div key={monster.id}>
                      <h1>{monster.name}</h1>
                      </div>
                    )                   
         })
       } */}

       </div>
  )
};

// export default App
// class App extends Component {
//   constructor(){
//     super(); //calling component class
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }
//     componentDidMount() {
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users)=>{this.setState(()=>{
//           return {monsters: users}
//         },
//         ()=>{console.log(this.state.monsters)}
//       )});
//     }

//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLowerCase();
//         this.setState(()=>{
//         return {searchField};      
//   });
// }
    

//   render(){

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//      

//     return (
//       <>
//       <div className="App">
//        <h1 className='app-title'>Monster Rolodex</h1>
//      
//        {/* {
//          filteredMonsters.map((monster)=>{
//                     return (
//                       <div key={monster.id}>
//                       <h1>{monster.name}</h1>
//                       </div>
//                     )                   
//          })
//        } */}
//        </div>
//      </>
//      );
//   }  
// }
export default App;
