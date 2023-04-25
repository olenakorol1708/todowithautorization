import React from 'react';
import './App.css';
import Login from './components/Login';
function App() {
  // const [itemsStorage,setItemsStorage] = React.useState(JSON.parse(localStorage.getItem('itemsStorage')))
  
  // React.useEffect(()=>{
  //   localStorage.setItem('itemsStorage',JSON.stringify(itemsStorage))
  // },[itemsStorage])
  return (
    <div className="App">
     <Login/>
    </div>
  );
}

export default App;
