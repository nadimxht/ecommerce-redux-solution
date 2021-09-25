import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList'


function App() {
    const Users = [
      {
        id:0,
        name:"user1",
        email:'example1@gmail.com',
        
      },
      {
        id:1,
        name:"user2",
        email:'example2@gmail.com',
        
      },
      {
        id:2,
        name:"user3",
        email:'example3@gmail.com',
        
      }
    ];
    const sayHello=(name)=>{
        alert(name);
    }
  return (
    <div className="container">
    
     <UserList data={[]} func={} />
    </div>
  );
}

export default App;
