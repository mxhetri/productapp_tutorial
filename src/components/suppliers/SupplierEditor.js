import React, {Component} from 'react';

class SupplierEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: props.supplier.id || "",
                name: props.supplier.name || "",
                city: props.supplier.city || "",
                products: props.supplier.products || [],
            }
        }
    }

    handleChange = (event) => {
        event.persist()
        this.setState(state => state.formData[event.target.name] =
            event.target.name==='products'? event.target.value.split(''): event.target.value);
    }

    handleClick = () => {
        this.props.saveCallback({
            ...this.state.formData,
            products: this.state.formData.products.map(value => Number(value))
        });
    }

    render() {
        return (
            <div className='m-2'>

                {/* id field*/}
                <div className='form-group'>
                    <label>ID</label>
                    <input className='form-control' name='id' disabled
                           value={this.state.formData.id}
                           onChange={this.handleChange}/>
                </div>

                {/* name field*/}
                <div className='form-group'>
                    <label>Name</label>
                    <input className='form-control' name='name'
                           value={this.state.formData.name} onChange={this.handleChange}/>
                </div>

                {/* city field*/}
                <div className='form-group'>
                    <label>City</label>
                    <input className='form-control' name='city'
                           value={this.state.formData.city} onChange={this.handleChange}/>
                </div>

                {/* products field*/}
                <div className='form-group'>
                    <label>Products</label>
                    <input className='form-control' name='products'
                           value={this.state.formData.products} onChange={this.handleChange}/>
                </div>

                <div className='text-center'>
                    <button className=' btn btn-primary m-1'
                            onClick={this.handleClick}>
                        Save
                    </button>
                    <button className='btn btn-secondary m-1'
                            onClick={this.props.cancelCallback}>
                        Cancel
                    </button>
                </div>
            </div>
        );
    }
}

export default SupplierEditor;
