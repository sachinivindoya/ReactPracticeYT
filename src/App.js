
import './App.css';

function App() {
  const title = 'welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <p>liked {likes} times</p>

        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
