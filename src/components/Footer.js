import {useState, useEffect} from 'react';
import Modal from './Modal';
export default function Footer ({user,setNewInfo}) {
  const [displayModal, setDisplayModal] = useState(false);
  const toggleLike = (e) => {
    if (e.target.className === "far fa-heart fa-lg"){
      e.target.className = "fas fa-heart fa-lg";
    } else {
      e.target.className = "far fa-heart fa-lg";
    }
  }

  const deleteCard = (e) => {
  e.target.parentElement.parentElement.setAttribute('id', 'delete');
  const gone = document.getElementById('delete');
  gone.parentNode.removeChild(gone)
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
      displayModal && <Modal user={user} setDisplayModal={setDisplayModal} setNewInfo={setNewInfo}/>
    }
  </div>
  )
}