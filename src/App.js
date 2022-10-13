import logo from './logo.svg';
import './App.css';

function App() {

  function pageLoader(url,callback){
    fetch(url)
        .then(response => response.json())
        .then(json => callback(json))
  }

  function getAjax (data){
    console.log('sending request to the page')
    console.log('Server is responding:')
    console.log(data);
    pageLoader('https://jsonplaceholder.typicode.com/users/' + data.userId, showUser);
  }
  function showUser(user){
    console.log(user);
  }
  pageLoader ('https://jsonplaceholder.typicode.com/todos/1', getAjax)

  return (
    <div className="App">

    </div>
  );
}

export default App;
