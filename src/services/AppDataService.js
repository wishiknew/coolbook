import axios from 'axios';

const getUsersData = () => axios.get('https://jsonplaceholder.typicode.com/users');

const getAvataar = (name) => axios.get(`https://avatars.dicebear.com/v2/avataaars/${name}.svg?mood[]=happy&b=%23F5F5F5&w=300&h=300`)

// eslint-disable-next-line import/no-anonymous-default-export
export default { getUsersData, getAvataar };