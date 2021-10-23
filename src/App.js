import React, {Component} from 'react';
import Navi from "./Pages/Navi";
import CategoryList from "./Pages/CategoryList";
import ProductList from "./Pages/ProductList";
import {Col, Container, Row} from "react-bootstrap";
import alertify from "alertifyjs";
import {Route, Switch} from "react-router-dom";
import CartDetail from "./Pages/CartDetail";
import NotFound from "./Pages/NotFound";
import FormDemo1 from "./Pages/FormDemo1";
import FormDemo2 from "./Pages/FormDemo2";


class App extends Component {
    componentWillUnmount() {

    }

    // TODO State Tanınmlanan Bölge
    state = {
        products: [],
        currentCategory: '',
        cart: []
    };


    // TODO Methods Tanımlanan Bölge

    addToCart = (newItem) => {
        let stateCart = this.state.cart;
        let addedItemIndex = stateCart.findIndex(i => i.product.id === newItem.id)
        if (addedItemIndex >= 0) stateCart[addedItemIndex].quantity += 1
        else stateCart.push({product: newItem, quantity: 1})
        this.setState({cart: stateCart})
        alertify.success(`${newItem.productName} <br> Added to cart!`)
    }
    removeFromCart = (removeItem) => {
        let stateCart = this.state.cart;
        if (removeItem.quantity > 1) stateCart.map(i => i.product.id === removeItem.product.id ? i.quantity -= 1 : i)
        else {
            let removeItemIndex = stateCart.findIndex(i => i.product.id === removeItem.product.id)
            if (removeItemIndex >= 0) stateCart.splice(removeItemIndex, 1)
        }
        this.setState({cart: stateCart})
        alertify.error(`${removeItem.product.productName} <br> Removed from cart!`)
    }

    getProduct(id) {
        let query;
        id ? query = `?categoryId=${id}` : query = '';
        fetch(`http://localhost:3000/products${query}`)
            .then(response => response.json())
            .then(response => this.setState({products: response}))
            .catch(err => console.log(err))
    }

    changeCategory = (category) => {
        this.setState({currentCategory: category})
        this.getProduct(this.state.currentCategory.id)
    };

    // TODO Mounted
    componentDidMount() {
        this.getProduct(this.state.currentCategory.id)
    }

    // TODO Template
    render() {
        // TODO Props Tanımlanan Bölge
        let props = {
            navi: {
                title: "Northwind App",
                cart: this.state.cart,
                removeFromCart: this.removeFromCart
            },
            cart: {
                title: "Cart Detail",
                cart: this.state.cart,
                removeFromCart: this.removeFromCart
            },
            categories: {
                title: "Categories",
                changeCategory: this.changeCategory,
                currentCategory: this.state.currentCategory,

            },
            products: {
                title: "Products",
                addToCart: this.addToCart,
                products: this.state.products,
                currentCategory: this.state.currentCategory,
            }
        };

        return (
            <div className="">
                <Navi navi={props.navi}/>
                <Container className="pt-5 mt-5">
                    <Row>
                        <Col lg="3">
                            <CategoryList categories={props.categories}/>
                        </Col>
                        <Col lg="9">
                            <Switch>
                                <Route exact path="/"><ProductList products={props.products}/></Route>
                                <Route exact path={"/cart-detail"}><CartDetail cart={props.cart}/></Route>
                                <Route exact path={"/form-demo1"}><FormDemo1/></Route>
                                <Route exact path={"/form-demo2"}><FormDemo2/></Route>
                                <Route component={NotFound}/>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
