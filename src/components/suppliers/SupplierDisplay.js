import React, {Component} from 'react';
import SupplierEditor from "./SupplierEditor";
import SupplierTable from "./SupplierTable";

class SupplierDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selected: null
        }
    }
    createSupplier = (event) => {
        this.setState({showEditor: true, selected: {}})

    }

    saveSupplier = (supplier) => {
        this.props.saveCallback(supplier);
        this.setState({showEditor: false, selected: null})
    }

    cancelEdit = () => {
        this.setState({showEditor: false, selected: null});
    }

    startEdit = (supplier) => {
        this.setState({showEditor: true, selected: supplier});
    }

    render() {
        if (this.state.showEditor) {
            return <SupplierEditor key={this.state.selected.id || -1}
                                   supplier={this.state.selected}
                                   saveCallback={this.saveSupplier}
                                   cancelCallback={this.cancelEdit}/>
        } else {
            return (
                <div className='m-2'>
                    <SupplierTable suppliers={this.props.suppliers}
                                   editCallback={this.startEdit}
                                   deleteCallback={this.props.deleteCallback}/>
                    <div className='text-center'>
                        <button className='btn btn-primary m-1'
                                onClick={this.createSupplier}>
                            CreateSupplier
                        </button>
                    </div>
                </div>
            )
        }
    }
}

export default SupplierDisplay;
