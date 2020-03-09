import React,{Component} from 'react';
import 'tachyons';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/actions/authActions'

class SignUp extends Component{
	state={
		firstName:'',
		lastName:'',
		email:' ',
		password:' '
	}

	handleChange=(e)=>{
		this.setState({
			[e.target.id]:e.target.value
		})
	}

	handleSubmit=(e)=>{
		e.preventDefault();
		this.props.signUp(this.state);
	}

	render(){
		const {auth,authError} =this.props;
		if(auth.uid) return <Redirect to='/' />
		return( 
			 <form className="center w-70 mt0 pa4  bg-white-10" onSubmit={this.handleSubmit}>
			      	<h1 className=" b green">SignUp </h1>
			        <br />
			        <label className="b f5" htmlFor="FirstName">FirstName:</label>
			        <input className="b pa2 br3 ml3 input-reset ba bg-transparent hover-bg-black hover-white w-25" type="text" id="firstName" onChange={this.handleChange} />
			        <br />
			        <label className="b f5" htmlFor="LastName">LastName:</label>
			        <input className="b pa2 ml2 mt3 br3 input-reset ba bg-transparent hover-bg-black hover-white w-25" type="text" id="lastName" onChange={this.handleChange} />
			        <br />
			        <label className="b f5" htmlFor="Email">Email:</label>
			        <input className="b pa2 br3 ml2 mt3 input-reset ba bg-transparent hover-bg-black hover-white w-25" type="text" id="email" onChange={this.handleChange} />
			        <br />
			        <label className="b f5" htmlFor="Password">Password:</label>
			        <input className="b pa2 br3 ml2 mt3 input-reset ba bg-transparent hover-bg-black hover-white w-25" type="password" id="password" onChange={this.handleChange} />
			        <br />
			        <button className="bw0 br3 dim  bg-green mt3 pa3 white fw1 tc ttu tracked">Sign up</button>
			      	<div className="red b tc">
    	  			{authError?<p>{authError}</p>:null}
    	  		</div>
			      </form>
		   

		)
	}
}
const mapStateToProps=(state)=>{
	return{
		auth:state.firebase.auth,
		authError:state.auth.authError
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		signUp:(newUser)=>dispatch(signUp(newUser))
	}
}

export default connect(mapStateToProps,mapDispatchToProps )(SignUp);