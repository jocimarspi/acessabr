import {
  BrowserRouter as Router,
  Routes as Switich,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";

const Routes = (props) => {
  return (
    <Router>
      <Switich>
        <Route path=":state/:city" element={<Home />} />
        <Route path="sp/mandaguari" element={<Home state={props.state} city={props.city} />} />
      </Switich>
    </Router>
  );
};

export default Routes;
