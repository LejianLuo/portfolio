import Landing, {Navigation} from "./component/Landing";
import Project from "./component/Project";


function App() {
  return (
    <div className="App font-gillsans bg-green-100">
        <Navigation/> 
        <Landing/>
        <Project/>
    </div>
  );
}

export default App;
