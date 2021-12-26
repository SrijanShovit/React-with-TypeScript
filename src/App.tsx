import {Greet} from './components/Greet'
import {Person} from './components/Person'
import './App.css';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first : 'Jagga',
    last : 'Jasoos'
  }

  const nameList = [
    {
      first:'Bruce',
      last: 'Wayne'
    },
    {
      first:'Clark',
      last: 'Kent'
    },
    {
      first:'Princess',
      last: 'Diana'
    }
  ]
  return (
    <div className="App">
      <Greet name="Srijan" messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
