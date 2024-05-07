import './App.css';
import Page from "./Page.js"
import {ThemeProvider} from "./ThemeProvider.js"

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Page />
        </ThemeProvider>
    </div>
  );
}

export default App;
