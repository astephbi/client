import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/products" element={<ProductScreen />} />
            {/*        <Route path="/" element={<Home />} />
             */}
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
