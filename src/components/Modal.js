import Popup from './Popup';
import {useState} from 'react';
export default function Modal ({name, email, phone, website, setDisplayModal, setNewInfo}) {
  const [isEmpty, setIsEmpty] = useState(false);
  const [thisName, setThisName] = useState(name);
  const [thisEmail, setThisEmail] = useState(email);
  const [thisPhone, setThisPhone] = useState(phone);
  const [thisWebsite, setThisWebsite] = useState(website);

  const onOk = () => {
    if(thisName.length > 0 && thisEmail.length> 0 && thisPhone.length>0 && thisWebsite.length> 0 ) {
      setDisplayModal(false);
      setNewInfo(thisName, thisEmail, thisPhone, thisWebsite);
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
        <form onSubmit={onOk}>
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
            <input type='text' defaultValue={name}  onChange={(e)=> {setThisName(e.target.value)}}/>
          </div>
          <div> 
            <label  required>Email</label>
            <input type='email'  defaultValue={email} onChange={(e)=> {setThisEmail(e.target.value)}}/></div>
          <div>
            <label required>Phone</label>
            <input type='text'  defaultValue={phone}  onChange={(e)=> {setThisPhone(e.target.value)}}/></div>
          <div> 
            <label  required>Website</label>
            <input type='text'  defaultValue={website}  onChange={(e)=> {setThisWebsite(e.target.value)}}/></div>
        </div>
        <div className='modal-footer'>
          <input type='button' value='Cancel' onClick={onCancel} />
          <input type='submit' value='OK' className='ok-button' />
        </div>
        </form> 
      </div>
    </div>
  )
}