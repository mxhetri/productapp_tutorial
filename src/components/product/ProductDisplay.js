import React, {Component} from 'react';
import ProductTable from "./ProductTable";
import ProductEditor from "./ProductEditor";

// this component define state data to determing data table or editor
class ProductDisplay extends Component {
    constructor(props) {
        super(props);
        this.state ={
            showEditor: false,
            selectedProduct: null
        }
    }
    createProduct = () => {
        this.setState({showEditor: true, selectedProduct: {} })
    }

    startEdit = product => {
        this.setState({showEditor: true, selectedProduct: product})
    }

    cancelEditing = () => {
        this.setState({showEditor: false, selectedProduct: null});
    }

    saveProduct = product => {
        console.log('product data is', Object.keys(product).map(key => product[key]))
        this.props.saveCallback(product);
        this.setState({showEditor: false, selectedProduct: null})
    }

    render() {
        if (this.state.showEditor){
            console.log('this is second rerendering')
            return <ProductEditor
                key={this.state.selectedProduct.id || -1}
                product={this.state.selectedProduct}
                saveCallback={this.saveProduct}
                cancelCallback={this.cancelEditing}/>
        } else {
            console.log('first time for create product')
            return (
                <div>
                    <div className='m-2'>
                        <ProductTable products={this.props.products}
                                      editCallback={this.startEdit}
                                      deleteCallback={this.props.deleteCallback}/>
                    </div>

                    <div className='text-center'>
                        <button className='btn btn-primary m-1'
                                onClick={this.createProduct}>
                            Create Product
                        </button>
                    </div>
                </div>

            );
        }
    }
}

export default ProductDisplay;
