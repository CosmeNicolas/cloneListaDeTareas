import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Container} from 'react-bootstrap'
import FormularioTareas from './components/FormularioTareas';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Container className='main'>
      <h1 className='text-center text-light'>Lista Tareas</h1>
      <FormularioTareas/>
    </Container>
     <Footer/>
    </>
  )
}

export default App
