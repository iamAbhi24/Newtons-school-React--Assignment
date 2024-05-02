import logo from './logo.svg';
import './App.css';
import Form from './Form';


function App() {
  const teacherArr = [{ name: "Miss Marry", rating: null },
  { name: "Mr. Vikram", rating: null }, { name: "RK Kumar", rating: null }
  ]



  return (
    <div className="App">
      <h1>Teacher Review</h1>
      {/* <form action="/submit-form">
        <label htmlFor="Names">Names</label>
        <label htmlFor="vale">{'  '}3{'   '}2{' '}1</label><br />
        <label htmlFor="miss marry">Miss Marry</label>
        <input type="radio" id="miss marry" name="miss marry" />
        <input type="radio" id="miss marry" name="miss marry" />
        <input type="radio" id="miss marry" name="miss marry" /> <br />
        <label htmlFor="Mr. Vikram">Mr. Vikram</label>
        <input type="radio" id="Mr. Vikram" name="Mr. Vikram" />
        <input type="radio" id="Mr. Vikram" name="Mr. Vikram" />
        <input type="radio" id="Mr. Vikram" name="Mr. Vikram" /> <br />
        <label htmlFor="RK Kumar">RK Kumar</label>
        <input type="radio" id="RK Kumar" name="RK Kumar" />
        <input type="radio" id="RK Kumar" name="RK Kumar" />
        <input type="radio" id="RK Kumar" name="RK Kumar" /><br />
        <button id="submit">Submit</button>
      </form>  */}

      <Form teacherArr={teacherArr} />
      
    </div>
  );
}

export default App;