import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker'
import { fetchData } from './api'
import styles from './App.module.css';

class App extends Component{

  state={
    data:{},
    country:'',
  }
    
    async componentDidMount()
    {
      const fetchedData =await fetchData();
      // console.log(data)
      this.setState({data:fetchedData})

    }

    handleCountryChange=async(country)=>{
      const fetchedData =await fetchData(country);
     // console.log(fetchedData)
     this.setState({data:fetchedData,country:country})

    }

    render(){
      const {data,country}=this.state;
      return (
        <div className={styles.container}>
        <h4 className={styles.txtstyle}>Covid-19 Tracker</h4>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <h5 className={styles.txtstyle}>Developed by Rajveer Mewara</h5>
        </div>
      );
    }
}

export default App;
