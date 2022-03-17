import './App.css';
import Nav from './components/Nav';
import { UserProvider } from './providers/UserContext';
import HomeVeiw from './views/HomeView';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <Nav />
        <HomeVeiw />
      </UserProvider>
    </div>

  );
}

export default App;
