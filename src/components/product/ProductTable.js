import React, {Component} from 'react';
import ProductTableRow from "./ProductTableRow";

// this component renders a table , whose body is populated by ProductTableRow
class ProductTable extends Component {
    render() {
        return (
            <table className='table table-striped table-bordered table-sm'>
                <thead>
                <tr>
                    <th colSpan='5' className='bg-primary text-center text-white'>
                        Products
                    </th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th className='text-right'>Price</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {this.props.products.map(product =>
                    <ProductTableRow key={product.id} product={product}
                                     editCallback={this.props.editCallback}
                                     deleteCallback={this.props.deleteCallback}/>)}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;
