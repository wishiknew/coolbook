import Avataar from './Avataar';
import Info from './Info';
import Footer from './Footer';
import {useState} from 'react';
export default function ProfileCard ({user}) {  
  const [showCard, setShowCard] = useState(true);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [website, setWebsite] = useState(user.website);
  const setNewInfo = (name, email, phone, website) => {
    setName(name);
    setEmail(email);
    setPhone(phone);
    setWebsite(website);
  }

  return (
    showCard && 
    <div className="profile-card">
      <Avataar  name={user.name} />
      <Info name={name} email={email} phone={phone} website={website} />
      <Footer name={name} email={email} phone={phone} website={website} setNewInfo={setNewInfo} setShowCard={setShowCard} />
    </div>
  )
}