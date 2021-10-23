import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';


export default class CategoryList extends Component {
    state = {
        categories: [],
    };

    componentDidMount() {
        this.getCategories()
    }

    getCategories = () => {
        fetch('http://localhost:3000/categories')
            .then(response => response.json())
            .then(response => this.setState({categories: response}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h3 className="text-info">{this.props.categories.currentCategory.categoryName ?? 'Category'}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroup.Item
                                active={category.id === this.props.categories.currentCategory.id}
                                onClick={() => this.props.categories.changeCategory(category)}
                                key={category.id}
                                role="button">{category.categoryName}</ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
        );
    }
}
