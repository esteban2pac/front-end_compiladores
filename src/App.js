import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header";
import RoutesList from "./routes";

import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
        <Header/>
        <div className="container">
          <RoutesList />
        </div>
    </Router>
  );
}

export default App;
