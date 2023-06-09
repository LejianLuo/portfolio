import Landing, {Navigation} from "./component/Landing";
import Project from "./component/Project";


function App() {
  return (
    <div className="App font-gillsans" style={{backgroundImage:`url('https://static.vecteezy.com/system/resources/thumbnails/006/941/084/small/abstract-small-hexagon-or-honeycomb-seamless-pattern-on-white-color-background-free-vector.jpg')`}}>
        <Navigation/> 
        <Landing/>
        <Project/>
    </div>
  );
}

export default App;
