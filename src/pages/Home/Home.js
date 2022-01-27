import React from 'react'
import CardList from '../../Components/CardList/Card.List';
import Search from '../../Components/Search/Search.Components';
import './Home.styles.css'

{/*function Home() {
  return(
    <>
     <div>Hello World</div>;
     <p>Rohith</p>
     </>
  )
}
export default Home; */}

{/*class Home extends React.Component{
  constructor(){
    super();
    this.state={
      name: 'Rohith'
    }
  }

handleUpdateState = () => {
  this.setState({name:'xxxxxxx'})
}

render(){
  return(
    <>
      <h1 className='title'>Monster's Rollodex</h1>
        <form>
          <input />
          <button >Search</button>
          <p>{this.state.name}</p>
          <button onClick={this.handleUpdateState}>Change Name</button>
          </form>
    </>
  )
}
}
export default Home */}

class Home extends React.Component{
  constructor(){
      super();
      this.state = {
          monsters: [],
           searchField: ''
      }
    }

 componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}));
  }

 handleSearch = (event)=>{
 this.setState({searchField:event.target.value})
 }

 render(){
  const {monsters,searchField } = this.state   
  const filteredmonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
          <>
          <div className='App'>
              <h1>Monsters Rolodex</h1>
            <Search handleSearch={this.handleSearch} />
            <CardList monsters={filteredmonsters} />
          </div>
          </>
      )
  }
}
export default Home