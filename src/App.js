import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Header from './Components/Header/header.component';
import SignPage from './pages/sign-in-sign-up/sign-page';
import { Switch, Route, Redirect } from 'react-router-dom'
import CheckoutPage from './pages/checkoutpage/checkout.component';
import ShopPage from './pages/shopage/shopage.component';
import {auth, createUserProfileDoc} from './firbase/firebase.utils'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { setCurrentUser } from './redux/user/user.action';

const Hats = () => {
  return (
    <h1>
      Hats page
    </h1>)
}

class App extends React.Component {


  closeSubFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.closeSubFromAuth = auth.onAuthStateChanged(async userAuth=>{
     if(userAuth){
       const userRef = await createUserProfileDoc(userAuth)
       userRef.onSnapshot(snapshot =>{
         setCurrentUser({
             id: snapshot.id,
             ...snapshot.data()
         })  
       })
       console.log(this.state)
     }else{
       setCurrentUser(userAuth)
     }
      
    })
  }
  componentWillUnmount(){
    this.closeSubFromAuth()
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render= {()=> this.props.currentUser ? <Redirect to='/'/> : <SignPage/> } />
        </Switch>

      </div>
    );
  }
 
}

// this method of passing in state is using createStructuredSelector which handles 
// mutliple selectors and passes in the state automatically
// please see cart-dropdown mapStateToProps
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
