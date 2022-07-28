import './App.css';

function App() {
  const title = 'welcome to the new blog';
  const likes = 10;
  const link = 'https://www.google.com';

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked: { likes } times</p>
        <p>{ 50 }</p>
        <p>{ "hello world" }</p>
        <a href= { link }>Google Site</a>
      </div>
    </div>
  );
}

export default App;
