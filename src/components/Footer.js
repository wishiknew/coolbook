import {useState} from 'react';
import Modal from './Modal';
export default function Footer ({name, phone, email, website, setNewInfo, setShowCard}) {
  const [displayModal, setDisplayModal] = useState(false);
  const toggleLike = (e) => {
    if (e.target.className === "far fa-heart fa-lg"){
      e.target.className = "fas fa-heart fa-lg";
    } else {
      e.target.className = "far fa-heart fa-lg";
    }
  }

  const deleteCard = (e) => {
    setShowCard(false);
  // e.target.parentElement.parentElement.setAttribute('id', 'delete');
  // const gone = document.getElementById('delete');
  // gone.parentNode.removeChild(gone)
  }

  


  return (
    <div  className='footer'>
    <i className="far fa-heart fa-lg" onClick={toggleLike}></i>
    <hr/>
    <i className="fas fa-edit fa-lg" onClick={() => {
      setDisplayModal(true);
    }}></i>
    <hr/>
    <i className="fas fa-trash fa-lg" onClick={deleteCard}></i>
    {
      displayModal && <Modal name={name} email={email} phone={phone} website={website} setDisplayModal={setDisplayModal} setNewInfo={setNewInfo}/>
    }
  </div>
  )
}