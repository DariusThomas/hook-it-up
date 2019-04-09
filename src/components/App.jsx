import React, { Fragment} from "react";
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import Home from "./Home"
import CommentDetails from "./CommentDetails";

function App() {
    return (
        <>
            <Router>
                <Fragment>
                    <Link to="/" className="btn btn-primary m-2">Comment Section</Link>
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:id/details" component={CommentDetails}/>
                    </Switch>
                </Fragment>
            </Router>
        </>
    )
}

export default App