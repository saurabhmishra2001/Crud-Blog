import Articles from "./components/Articles";
import AddArticle from "./components/AddArticle";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container my-4">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/Articles"
            element={
              <div className="row mt-5">
             
                  <Articles />
       
            
              </div>
            }
          />
          <Route path="/AddArticle" element={<AddArticle />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
