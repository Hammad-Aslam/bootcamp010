import React, { useState, useEffect } from 'react';
import { fetchdailydata } from '../../api/Index';
import { Bar } from 'react-chartjs-2';
import styles from './chart.module.css';
const Charts = ({data: { confirmed, recovered, deaths }, country}) => {
    const [dailydata, setdailydata] = useState([]);


    useEffect(() => {
        const fetchAPI = async () => {
            setdailydata(await fetchdailydata())
        }
        fetchAPI();
    },[])

    // const lineChart = (
    //     dailydata.length ? (
    //         <Pie
    //         data={{
    //             labels: dailydata.map(( { date }) => date),
    //             datasets: [{
    //                 data: dailydata.map(({ confirmed }) => confirmed),
    //                 label: 'Infected',
    //                 borderColor: 'Blue',
    //                 fill: true,
    //             }, {
    //                 data: dailydata.map(({ deaths }) => deaths),
    //                 label: 'Deaths',
    //                 borderColor: 'Red',
    //                 backgroundColor: 'rgb(255, 0, 0)',
    //                 opacity: '0.5',
    //                 fill: true,
    //             }],
    //         }}
    //         />) : null
    //     );


const BarChart = (
    confirmed
    ?(
        <Bar 
        data = {{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People',
                backgroundColor: [
                        'rgba(0,0,255, 0.5)',
                        'rgba(0,255,0, 0.5)',
                        'rgba(255,0,0, 0.5)',
                    ],
                data: [confirmed.value, recovered.value, deaths.value]
            }]
            
        }}
        options={{
            legend: { display: false},
            title: { display: true, text: `Current state in ${country}` } }}/>
    ) : null
);

    return(
        <div className={styles.container}>
            {BarChart}
        </div>
    )
};
export default Charts;