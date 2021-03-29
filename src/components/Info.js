export default function Info ({user}){
  return (
    <div className='info'>
      <h2>{user.name}</h2>
      <h3><i class="fas fa-envelope"></i><a href={`mailto://${user.email}`}>{user.email}</a></h3>
      <h3><i class="fas fa-phone"></i>{user.phone}</h3>
      <h3><i class="fas fa-globe"></i><a href={user.website}>{user.website}</a></h3>
    </div>
  )
}