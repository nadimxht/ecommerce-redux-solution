import './App.css';
import Users from './components/Users'

function App() {
  const Data = [
    {
      fullName:"nadim",
      profession:"xxx", 
    },
    {
      fullName:"amine",
      profession:"xxx", 
    },
    {
      fullName:"lina",
      profession:"xxx", 
    }
  ];
  
  return (
    <div className="container">
      <Users UsersData={Data} title="List of Users" />
    </div>
  );
}

export default App;
