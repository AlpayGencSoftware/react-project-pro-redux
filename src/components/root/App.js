 import React from "react"
import { Switch, Route } from "react-router-dom";
 import { Container } from "reactstrap"
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard"
import CartDetail from "../cart/CartDetail"
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import Notfound from "../common/Notfound";

function App() {
  return (
    <div>
       <Container>
        <Navi/>
        <Switch>
        <Route path="/" exact component={DashBoard} />
        <Route path="/product"  component={DashBoard} />
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
        <Route path="/saveproduct" component={AddOrUpdateProduct} />
        <Route path="/cart"  component={CartDetail} />
        <Route component={Notfound} />
        </Switch>
           
       </Container>
    </div>
  );
}

export default App;
