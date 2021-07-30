
import {bindActionCreators} from 'redux' 
import * as cartActions from "../../redux/actions/cartActions"
import {connect} from 'react-redux'
import { 
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge

  } from 'reactstrap';
  import React, { Component } from 'react'
  import {Link} from 'react-router-dom'
  import alertify from "alertifyjs"

 class CartSummary extends Component {
  removeFromCart(product){
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + "Product is removed.")
}
    renderEmpty(){
        return(
            <NavItem>
            <NavLink>Your cart is empty</NavLink>
          </NavItem>
        );
    }
    renderSummary(){
        return (
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Your Cart:
            </DropdownToggle>
            <DropdownMenu right>
                {
                    this.props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>
                        <Badge color='danger' onClick={()=>this.props.actions.removeFromCart(cartItem.product)}>x</Badge>
                       {cartItem.product.productName} <Badge color='success'>{cartItem.quantity}</Badge>
                      </DropdownItem>
                    ))
                }
              
              <DropdownItem divider />
              <DropdownItem>
               <Link to={"/cart"}> Go to cart</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
    }

    render() {
        return (
            <div>
              {this.props.cart.length>0?this.renderSummary():this.renderEmpty()} 
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return {actions: {
      removeFromCart:bindActionCreators(cartActions.removeFromCart, dispatch),
    }
  }
}

function mapStateToProps(state){
    return{
        cart:state.cartReducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);