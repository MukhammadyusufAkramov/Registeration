import React from 'react'

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault()
        if (this.state.name === "" && this.state.email === "") {
            alert('all field ar so good')
            return;
        }
        this.props.AddContactHandler(this.state)
        this.setState({name:"", email:""})
        //this.props.history.push("/");
    }

  render() {
    return (
        <div className='ui main'>
            <h2>Add Contact</h2>

            <form className='ui form' onSubmit={this.add}>

                <div className='field'>
                    <label>Name</label>              
                    <input name='name' placeholder='name' type='text' 
                        value = {this.state.name} 
                        onChange={ (e) => {
                            this.setState({name: e.target.value})
                    }}/>
                </div>

                <div className='field'>
                    <label>Email</label>
                    <input name='name' placeholder='email' type='text' 
                        value = {this.state.email} 
                        onChange={(e) => {
                            this.setState({email: e.target.value})
                    }}/>
                </div>
                <button className='ui button blue'>Add</button>
            </form>
        </div>
    );
  }
}

export default AddContact
