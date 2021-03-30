import Popup from './Popup';
import {useState, useEffect} from 'react';
export default function Modal ({user, setDisplayModal, setNewInfo}) {
  const [isEmpty, setIsEmpty] = useState(false);
  const [thisName, setThisName] = useState(user.name);
  const [thisEmail, setThisEmail] = useState(user.email);
  const [thisPhone, setThisPhone] = useState(user.phone);
  const [thisWebsite, setThisWebsite] = useState(user.website);
  

  const onOk = (e) => {
    if(thisName.length > 0 && thisEmail.length> 0 && thisPhone.length>0 && thisWebsite.length> 0 ) {
      setDisplayModal(false);
      setNewInfo(thisName, thisEmail, thisPhone, thisWebsite)
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
           
           <input type='text' defaultValue={thisName} onChange={(e)=> {setThisName(e.target.value)}}/>

          </div>
          <div> <label  required>
            Email</label>
          <input type='email'  defaultValue={thisEmail} onChange={(e)=> {setThisEmail(e.target.value)}}/></div>
          <div>
          <label required>
            Phone</label>
          <input type='text'  defaultValue={thisPhone} onChange={(e)=> {setThisPhone(e.target.value)}}/></div>
          <div> 
            <label  required>
            Website</label>
          <input type='text'  defaultValue={thisWebsite} onChange={(e)=> {setThisWebsite(e.target.value)}}/></div>
          
        </div>
        <div className='modal-footer'>
          <input type='button' value='Cancel' onClick={onCancel} />
          <input type='button' value='OK' className='ok-button' onClick={onOk} />
        </div>
      </div>
    </div>
  )
}