import React,{ useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './countrypicker.module.css';
import { fetchcountries } from '../../api/Index';
const CountryPicker = ( { handlecountrychange }) => {
    const [fetchedcountries, setfetchedcountries] = useState([]);

    useEffect(() => {
        const fetchPI = async () => {
            setfetchedcountries(await fetchcountries());
        }

        fetchPI();

    }, [setfetchedcountries]);
    console.log(fetchedcountries)
    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handlecountrychange(e.target.value)}> 
                <option className={styles.Option} value='global'>Search Countries</option>
    {fetchedcountries.map ((country, k) => <option key={k} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
};
export default CountryPicker;