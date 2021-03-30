import {useState, useEffect} from 'react';
import {ReactComponent as LoadingBig} from './LoadingBig.svg';

import ProfileCard from './ProfileCard'
import AppDataService from '../services/AppDataService';


export default function Home () {
  const [usersData, setUsersData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getUsersData();
  }, [])

  const getUsersData = async () => {
    
    const res = await AppDataService.getUsersData();
    setUsersData(res.data);
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <LoadingBig className='loading-big'/>}
      <div className='home'>
      { 
        usersData && usersData.map((user, i) => ( 
          <ProfileCard user={user} key={i}/>
        ))
      }
    </div>
    </div>

    
  )
}