import React from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './components/About'
import Login from "./components/Login"
import './App.css';
import MarsRover from './components/MarsRover';
import MarsCard from './components/MarsCard';
import UserProfile from './components/UserProfile'

class App extends React.Component {
   state={
      marsRoverArray: [],
      loading: false,
      currentUser: null,
      favorites: []
      
      
    }
     
    updateCurrentUser=(user)=>{
      this.setState({
        currentUser: user.user,
        loading: true,
        favorites: user.favorites
      })
      
    }
  
  componentDidMount(){
    fetch("http://localhost:4000/mars_cards")
    .then(res=>res.json())
    .then(array=>this.setState({
      marsRoverArray: array
    }))
    }
    
    
    addCardToFavorites=(card)=>{
      let ids =this.state.favorites.map(card=> card.id)

     if(ids.includes(card.id)){
        alert("You already saved this to your libraby")
      }else{
      let newArray = [...this.state.favorites, card]
        this.setState({
        favorites: newArray})
      }
    }

    onClickHandler = (card) => {

      fetch('http://localhost:4000/favorites', {
         method: 'POST',
         headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
         },
         body: JSON.stringify({user_id: this.state.currentUser.id, mars_card_id: card.id}),
       })
       .then(res=> res.json())
       .then(card=> {
         this.addCardToFavorites(card)
       })
        
    }

    removeFromFavorites=(card)=>{
      let cardId =card.id
      fetch(`http://localhost:4000/favorites/${this.state.currentUser.id}/`+ cardId,{
        method: "DELETE"
      })
      .then(()=>{
       this.removeCardFavorites(card)
        
      })
    }
     
      removeCardFavorites = (card) => {
      let newArray= this.state.favorites.filter(c=> c!==card)
         this.setState({
         favorites: newArray})
       
       }
  
  render(){
  return (
    
    <div className="App">
     

        <Router>
        <NavBar
        user= {this.state.currentUser} 
        />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/marsrover/:id" render={(props)=>{
          let id=parseInt(props.match.params.id)
          let foundCard= this.state.marsRoverArray.find(card =>card.id === id)
        return <MarsCard
          card ={foundCard}
          id={id}
          onClickHandler={this.onClickHandler}
          remove={false}
          userId={this.state.currentUser.id}

   
          />
        }}/>
        <Route exact path="/marsrover" render={()=>
        <MarsRover 
        marsRoverArray={this.state.marsRoverArray}/>
      }/>
        <Route exact path ="/profile" render={()=>
        <UserProfile 
        user ={this.state.currentUser}
        favorites ={this.state.favorites}
        onClickHandler={this.removeFromFavorites}
        

        />}/>
        <Route exact path="/login" render={() => {
          return this.state.currentUser ? <Redirect to="/profile"/> : <Login
          updateCurrentUser={this.updateCurrentUser}
          />
        }} /> 
        <Route exact path="/about" component={About}/>
        
        </Router>
       
       </div>
       )
      }
}

export default App;
