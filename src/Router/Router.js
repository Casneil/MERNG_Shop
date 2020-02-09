import React, { Fragment } from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import CheckoutPage from "../Pages/CheckoutPage";
import Homepage from "../Pages/Homepage";
import WomenDepartment from "../departments/WomenDepartment";
import MenDepartment from "../departments/MenDepartment.js";
import ChildrenDepartment from "../departments/ChildrenDepartment";
import ShoesDepartment from "../departments/ShoesDepartment";
import SalesDepartment from "../departments/SalesDepartment";

const Router = () => {
  return (
    <Fragment>
      <Switch>
        {/* <Route exact path="/" render={() => <Articles posts={posts} />} /> */}
        {/* <Route exact path="/article/:id" component={Article} /> */}
        {/* <Route exact path="/articles/update/:id" component={EditArticle} /> */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/department/women" component={WomenDepartment} />
        <Route exact path="/department/men" component={MenDepartment} />
        <Route
          exact
          path="/department/children"
          component={ChildrenDepartment}
        />
        <Route exact path="/department/shoes" component={ShoesDepartment} />
        <Route exact path="/department/sale" component={SalesDepartment} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </Fragment>
  );
};

export default Router;
