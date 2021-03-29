import React, {useState, useEffect} from 'react';
import AppDataService from '../services/AppDataService'
import {ReactComponent as Loading} from './Loading.svg';

export default function Avataar({name}) {
  const [AvataarSVG, setAvataarSVG] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    getAvataar();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const getAvataar = async () => {
    const res = await AppDataService.getAvataar(name);
    setAvataarSVG(res.data);
    console.log('svg', res);
    setIsLoading(false);
  }
  return(
    <div className='avataar'>
      {!isLoading ?
        <div dangerouslySetInnerHTML={{__html: `${AvataarSVG}`}} />
        : 
        <Loading className='loading'/>
    }
    </div>

 )
}