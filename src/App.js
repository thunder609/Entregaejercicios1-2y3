import logo from './logo.svg';
import './App.css';
import   ContactlistComponent from './Components/Container/Contactlist.jsx'       

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="pepe"></Greeting> */}
          {/* <Fgreeting name="oswalado"></Fgreeting>   */}
            <ContactlistComponent></ContactlistComponent>
       </header>
    </div>
  );
}

export default App;
