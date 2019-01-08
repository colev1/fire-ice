import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {CardContainer} from '../../containers/CardContainer/CardContainer'
import { connect } from 'react-redux'
import {fetchHouses} from '../../thunks/fetchHouses';
import {Loading} from '../../containers/Loading/Loading';
// import {CardContainer} from '../../containers/CardContainer/CardContainer';
import {Card} from '../../components/Card/Card';


class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    const url = 'http://localhost:3001/api/v1/houses'
    this.props.fetchHouses(url)
  }

  render() {
    const cards = this.props.houses.map(house => (
      <Card house={house}/>
    ))

    if(this.props.isLoadingHouses) {
      return (
        <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <Loading />
        </div>
      </div>
      )
    } else {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <div className='Container'> 
          {cards}

          </div>
        </div>
      </div>
    );
    }
  }
}

const mapStateToProps = (state) => ({
  houses: state.houses,
  isLoadingHouses: state.isLoadingHouses
})

const mapDispatchToProps = (dispatch) => ({
  fetchHouses: (url) => dispatch(fetchHouses(url))
})



export default connect(mapStateToProps, mapDispatchToProps)(App)
