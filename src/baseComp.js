import axios from 'axios'

import EkstraUrl from './extrafetch'
import React, { useState, useEffect } from 'react';

const BaseComp=()=>{

    const [Data,setMainData,]=useState({
        //Company:'',
        //Description:'',
        name:"",
        pantone_value:"",
    })
    const [colorsData,setColorsData]=useState([])
    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Home Data: ',res.data.data)
                console.log('Home Data: ',res.data)
                //let companyData=res.data.ad;
                let MainData=res.data.name
                setMainData({name:MainData.name,pantone_value:MainData.text})

                //setData({Company:companyData.company,Description:companyData.text})
                console.log('Colors Data: ',res.data.data)
                setColorsData(res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <h1>{Data.name}</h1>
            <p>{Data.pantone_value}</p>
            <EkstraUrl data={colorsData}/>
        </>
    )
}

export default BaseComp;