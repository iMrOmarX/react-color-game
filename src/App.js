import './App.css';
import Header from './components/header/header';
import Stripe from './components/stripe/stripe';
import Container from './components/container/container';


function App() {
  return (
    <div className="App">
      <Header/>
      <Stripe/>
      <Container/>
    </div>
  );
}

export default App;
