import './styles/App.css'
import { Link } from 'react-router-dom';

function App() {


  return (
    <>
      <h1>Héroes y Villanos</h1>
      <Link to={"/pagina1"}>
        <button>A la página 1</button>
      </Link>
      <Link to={"/pagina2"}>
        <button>A la página 2</button>
      </Link>
    </>
  )
}

export default App
