import { BrowserRouter, Route, Switch,  } from "react-router-dom";
import Home from "./Componentes/Home/Home";
import ComonentesParametros from "./Componentes/ComonentesParametros/ComponenteParametro";

const App = () => {

  return (

    <BrowserRouter>

    <div className="container">
        <Switch>
            <Route path="/Home" render={() => <Home/>}/>
            <Route path="/:palabra" exact render={(routeProps) => <ComonentesParametros {...routeProps} />}/>
            <Route path="/:palabra/:color/:bg" exact render={(routeProps) => <ComonentesParametros {...routeProps} />}/>
        </Switch>
    </div>

    </BrowserRouter>


  )

}


export default App;
