import {useState} from 'react';
export default function Info ({name, email, phone, website}){
 
  return (
    <div className='info'>
      <h2>{name}</h2>
      <h3><i class="fal fa-envelope"></i><a href={`mailto://${email}`}>{email}</a></h3>
      <h3><i class="fal fa-phone"></i>{phone}</h3>
      <h3><i class="fal fa-globe"></i><a href={website}>{website}</a></h3>
    </div>
  )
}