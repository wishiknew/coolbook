import Popup from './Popup';
import {useState, useEffect} from 'react';
export default function Modal ({user, setDisplayModal}) {
  const [isEmpty, setIsEmpty] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);


  const onOk = () => {
    if(name.length > 0 && email.length> 0 && phone.length>0 && website.length> 0 ) {
      setDisplayModal(false);
      user.name = name;
      user.email = email;
      user.phone = phone;
      user.website = website;
    }
    setIsEmpty(true);
    
  }
  
  const onCancel = () => {
    setDisplayModal(false);
  }
  const onClose = () => {
    setDisplayModal(false);
  }
  return (
    <div className='modal-fixed'>
      <div className='modal-flex'>
        <div className='modal-title'>
          <h2> Edit User Details</h2>
          <i className="far fa-times" onClick={onClose}></i>
        </div>
        <div className='modal-body'>
          {
            isEmpty && <Popup/>
          }
          <div>
          <label required> Name</label>
           
           <input type='text' defaultValue={name} onChange={(e)=> {setName(e.target.value)}}/>

          </div>
          <div> <label  required>
            Email</label>
          <input type='email'  defaultValue={email} onChange={(e)=> {setEmail(e.target.value)}}/></div>
          <div>
          <label required>
            Phone</label>
          <input type='text'  defaultValue={phone} onChange={(e)=> {setPhone(e.target.value)}}/></div>
          <div> 
            <label  required>
            Website</label>
          <input type='text'  defaultValue={website} onChange={(e)=> {setWebsite(e.target.value)}}/></div>
          
        </div>
        <div className='modal-footer'>
          <input type='button' value='Cancel' onClick={onCancel} />
          <input type='button' value='OK' className='ok-button' onClick={onOk} />
        </div>
      </div>
    </div>
  )
}