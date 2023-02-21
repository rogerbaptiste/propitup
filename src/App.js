import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={'Baptiste'}
        firstName={'Roger'}
        Age={25}
        hairColor={'Black'}
      />
      <PersonCard
        lastName={'Jean'}
        firstName={'Derek'}
        Age={18}
        hairColor={'Black'}
      />
      <PersonCard
        lastName={'Jean'}
        firstName={'Dario'}
        Age={17}
        hairColor={'Black'}
      />
      <PersonCard
        lastName={'Jean'}
        firstName={'Derryl'}
        Age={17}
        hairColor={'Black'}
      />
    </div>
  );
}

export default App;
