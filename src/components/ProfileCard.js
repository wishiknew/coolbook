import Avataar from './Avataar';
import Info from './Info';
import Footer from './Footer';
export default function ProfileCard ({user}) {  
  return (
    <div className="profile-card">
      <Avataar  name={user.name}/>
      <Info user={user} />
      <Footer user={user}/>
    </div>
  )
}