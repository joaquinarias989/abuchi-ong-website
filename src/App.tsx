import Navbar from './components/shared/Navbar';
import Intro from './components/views/intro/Intro';

function App() {
  return (
    <>
      <header>
        <div className='container'>
          <Navbar />
          <Intro />
        </div>
      </header>
      <div className='container'>
        <h1>hola</h1>
        <h1>hola</h1>
        <h1>hola</h1>
        <h1>hola</h1>
      </div>
    </>
  );
}

export default App;
