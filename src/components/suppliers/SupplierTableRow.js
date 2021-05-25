import React, {Component} from 'react';

class SupplierTableRow extends Component {
    render() {
        let supplier = this.props.supplier;
        return (

                <tr>
                    <td>{supplier.id}</td>
                    <td>{supplier.name}</td>
                    <td>{supplier.city}</td>
                    <td>{supplier.products.join(', ')}</td>
                    <td>
                        <button className='btn btn-sm btn-warning m-1'
                                onClick={() => this.props.editCallback(supplier)}>
                            Edit
                        </button>
                        <button className='btn btn-sm btn-danger m-1'
                                onClick={() => this.props.deleteCallback(supplier)}>
                            Delete
                        </button>
                    </td>
                </tr>
        );
    }
}

export default SupplierTableRow;
