
import './App.css';
import AddArticle from './components/AddArticle';
import Articles from './components/Articles';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Articles/>

        </div>
      </div>
       <div className="col-md-4">
        <AddArticle/>
       </div>
    </div>
  );
}

export default App;
