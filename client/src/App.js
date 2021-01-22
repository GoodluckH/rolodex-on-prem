import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { body } from "./index.css";
import HashLoader from "react-spinners/HashLoader";
import { Grid } from "@material-ui/core";

import ProfileList from "./components/profiles-list.component";
import CreateProfile from "./components/create-profile.component";

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div>
      {loading ? (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
          <HashLoader color="#000000" loading={loading} size={50} />
          </Grid>
          <br />
          <br />
            <p>Grabbing coffee with your contacts...</p>
           
          
        </Grid>
      ) : (
        <Router>
          <br />
          <br />
          <div class="container">
            <br />
            <Route path="/" exact component={CreateProfile} />
            <Route path="/list" component={ProfileList} />
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
