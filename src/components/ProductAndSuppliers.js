import React, {Component} from 'react';
import Selector from "./Selector";
import ProductDisplay from "./product/ProductDisplay";
import SupplierDisplay from "./suppliers/SupplierDisplay";

// this component defines product and suppliers state data and defines
// methods that allow objectws to be deleted for each category
class ProductAndSuppliers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {id: 1, name: 'football', category: 'sports', price: 250},
                {id: 2, name: 'tshirt', category: 'cloths', price: 270},
                {id: 3, name: 'pizza', category: 'food', price: 175},
                {id: 4, name: 'computer', category: 'electronics', price: 400},
            ],
            suppliers: [
                {id: 1, name: 'kamal suppliers', city: 'brisbane', products: [1, 2]},
                {id: 2, name: 'xhetri services', city: 'kathmandu', products: [3, 4]}
            ]
        }
        this.idCounter = 100;
    }

    saveData = (collection, item) => {
        console.log('item data is', Object.keys(item).map(key => item[key]))
        if (item.id === "") {
            item.id = this.idCounter + 1;
            this.setState(state => state[collection]
                = state[collection].concat(item), () => console.log('state data', this.state));

        } else {
            console.log('cannot enter this section');
            this.setState(state => state[collection]
                = state[collection].map(stored =>
                stored.id === item.id ? item : stored));
        }
    }

    deleteData = (collection, item) => {
        this.setState(state => state[collection]
            = state[collection].filter(stored => stored.id !== item.id));
    }

    render() {
        console.log('number of products is:', this.state.products.length)
        return (
            <div>
                <Selector>
                    <ProductDisplay
                        name='Products'
                        products={this.state.products}
                        saveCallback={product => this.saveData('products', product)}
                        deleteCallback={product => this.deleteData('products', product)}/>
                    <SupplierDisplay name='Suppliers'
                                     suppliers={this.state.suppliers}
                                     saveCallback={supplier => this.saveData('suppliers', supplier)}
                                     deleteCallback={supplier => this.deleteData("suppliers", supplier)}/>
                </Selector>
            </div>
        );
    }
}

export default ProductAndSuppliers;
