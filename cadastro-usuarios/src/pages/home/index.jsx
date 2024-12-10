import './style.css'
import {useState} from 'react';
function Home() {

  const [users,setUsers]= useState ([]);

  const [formData,setFormData]= useState({
    name:"",
    idade:"",
    email:"",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddUser = () => {
    const newUser = {
      id: String(users.length + 1),
      ...formData,
    };
    setUsers([...users, newUser]); 
    setFormData({ name: "", idade: "", email: "" }); 
  };



  return (

    <div className='container'>
      <form>
        <h1> Cadastro de Usuarios </h1>
        <input placeholder="Nome " name="name" type="text" value={formData.name} onChange={handleInputChange} />
        <input placeholder="idade " name="idade" type="number" value={formData.idade} onChange={handleInputChange} />
        <input placeholder= "email " name="email" type="email" value={formData.email} onChange={handleInputChange} />
        <button type='button' onClick={handleAddUser}>Cadastrar</button>
      </form>

      {users.map(user => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span> {user.name} </span> </p>
            <p>Idade: <span>{user.idade} </span> </p>
            <p>Email: <span> {user.email} </span> </p>

          </div>

        </div>

      ))}


    

    </div>




  )
}

export default Home
