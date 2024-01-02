import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Container className='main'>
      <h1 className='text-center text-light'>Lista Tareas</h1>
    </Container>
     <Footer/>
    </>
  )
}

export default App
