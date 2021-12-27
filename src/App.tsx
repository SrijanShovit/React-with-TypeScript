import {Greet} from './components/Greet'
import {Person} from './components/Person'
import './App.css';
import {List} from './components/generics/List';
import {Private} from './components/auth/Private';
import {Profile} from './components/auth/Profile';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import {Heading} from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import {UserContextProvider } from './components/context/UserContext';
import {User} from './components/context/User';
import { Counter } from './components/class/Counter';
import { RandomNumber } from './components/restriction/RandomNumber';

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
 
    //   <Greet name="Srijan"  isLoggedIn={false}/>
    //   <Person name={personName}/>
    //   <PersonList names={nameList} />
    //   <Status status='loading' />
    //   <Heading>Placeholder text</Heading>
    //   <Oscar>
    //     <Heading>Oscar goes to Leonardo Dicpario!</Heading>
    //   </Oscar>

    //   <Button handleClick= {(event,id) => {
    //     console.log('Button clicked',event,id)
    //   }}/>

    //   <Input value='sri' handleChange={(event)=> console.log(event)}/>

    //   <Container styles={{border: '1px solid black',padding: '1rem'}} />
    return (
      <div className="App">
    {/* <UserContextProvider>
      <User/>
    </UserContextProvider> */}
    {/* <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider> */}

    {/* <Counter message='The count value is' /> */}

    {/* <Private isLoggedIn={true} Component={Profile}/> */}

    {/* <List items={['Batman','Superman','Wonder Woman']}
      onClick={(item) => console.log(item)}
    />
    <List items={[1,2,3,4]}
      onClick={(item) => console.log(item)}
    /> */}

    <RandomNumber value={10} isPositive/>
    </div>
  );
}

export default App;
