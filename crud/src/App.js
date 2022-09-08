import Articles from "./components/Articles";
import AddArticle from "./components/AddArticle";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Register from "./components/auth/Register";
//import Login from "./components/auth/Login";
//import Article from "./components/Article";
function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
       
          <Route
            path="/"
            element={
            
              <div className="row mt-5">
                <div className="col-md-8">
                  <Articles />
                </div>
                <div className="col-md-4">
                  <AddArticle />
                </div>
              </div>
            }
          />
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;