import SecondPage from "./components/SecondPage";
import FirstPage from "./components/FirstPage";
import WelcomePage from "./components/WelcomePage";

import { BrowserRouter as Router, Route, Switch ,Redirect } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/Header";

function App() {
    return (
        <Fragment>
            <Router>
                <Header />
                <Switch>
                    <Route path="/home" exact>
                        <WelcomePage />
                    </Route>
                    <Route path="/firstpage" exact>
                        <FirstPage />
                    </Route>
                    <Route path="/secondpage" exact>
                        <SecondPage />
                    </Route>
                    <Route path="*">
                        <Redirect to="./home" />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;
