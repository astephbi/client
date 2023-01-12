import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
      </Router>
    </ChakraProvider>
  );
}

export default App;
