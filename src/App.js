import React from 'react';
import { Cards, Charts, CountryPicker, heading } from './components';
import styles from './App.module.css';
import { fetchData } from './api/Index.js';
import Heading from './components/comp1/headind';
class App extends React.Component {

state = {
  data: {},
  country: '',
}

  async componentDidMount (){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData})
  }

handlecountrychange = async (country) => {
  const fetchedData = await fetchData(country);
  this.setState({ data: fetchedData, country: country})
}


  render(){

    const{ data, country } = this.state;

  return (
    <div className={styles.container}>
      <br />
      <Heading />
      < br />
      <br />
      <br />
      <CountryPicker handlecountrychange={this.handlecountrychange}/>
      <Cards data = {data}/>
      <Charts data={data} country={country}/>
    </div>
  );
  }
}

export default App;
