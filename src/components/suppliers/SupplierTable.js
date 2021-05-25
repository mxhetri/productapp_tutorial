import React, {Component} from 'react';
import SupplierTableRow from "./SupplierTableRow";

class SupplierTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table className='table table-sm  table-striped table-bordered'>
                <thead>
                <tr>
                    <th colSpan='5' className=' h-4 bg-primary text-center text-white m-2'>Supplier</th>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Products</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {this.props.suppliers.map(supplier =>
                    <SupplierTableRow
                        key={supplier.id} supplier={supplier}
                        editCallback={this.props.editCallback}
                        deleteCallback={this.props.deleteCallback}/>)}
                </tbody>


            </table>
        );
    }
}

export default SupplierTable;
