import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container } from 'react-bootstrap'
import FormularioTareas from './components/FormularioTareas';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Container className='main'>
        <h1 className='letras text-center text-light mt-5'>Lista Tareas</h1>
        <FormularioTareas />
      </Container>
      <Footer />
    </>
  )
}

export default App
