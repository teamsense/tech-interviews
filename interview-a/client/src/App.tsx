import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SurveyView from "./views/SurveyView"
import { Container, Button } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Container className="main pad-t">
        <Link to="/survey/1">
          <Button className="text-uppercase" variant="secondary" block={true}>
              Take a Survey
          </Button>
        </Link>
        <Switch>
          <Route path="/survey">
            <SurveyView surveyId={1}/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
