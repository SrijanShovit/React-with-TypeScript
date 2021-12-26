import {Greet} from './components/Greet'
import {Person} from './components/Person'
import './App.css';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import {Heading} from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';

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
      <Greet name="Srijan"  isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>

      <Button handleClick= {(event,id) => {
        console.log('Button clicked',event,id)
      }}/>

      <Input value='sri' handleChange={(event)=> console.log(event)}/>
    </div>
  );
}

export default App;
