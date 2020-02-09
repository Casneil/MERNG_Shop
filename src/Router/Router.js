import React, { Fragment } from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import CheckoutPage from "../Pages/CheckoutPage";
import Homepage from "../Pages/Homepage";

const Router = () => {
  return (
    <Fragment>
      <Switch>
        {/* <Route exact path="/" render={() => <Articles posts={posts} />} /> */}
        {/* <Route exact path="/article/:id" component={Article} /> */}
        {/* <Route exact path="/articles/update/:id" component={EditArticle} /> */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </Fragment>
  );
};

export default Router;
