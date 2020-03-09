import React,{Component} from 'react';
import 'tachyons';
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'
import {Redirect} from 'react-router-dom'


class SignIn extends Component{
	state={
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
		this.props.signIn(this.state);
		
	}

	render(){
		const {authError,auth}=this.props;	
			if(auth.uid) return <Redirect to='/' />
			return( 
			<form className="center w-70 mt0 pa4  bg-white-10" onSubmit={this.handleSubmit}>
		        <h1 className=" b green">SignIn </h1>
		        <br />
		        <label className="b f5" htmlFor="name">Email:</label>
		        <input className="b pa2 br3 ml3 input-reset ba bg-transparent hover-bg-black hover-white w-25" type="text" id="email" onChange={this.handleChange} />
		        <br />
		        <label  className="b f5" htmlFor="name">Password:</label>
		        <input className="b pa2 ml2 mt3 br3 input-reset ba bg-transparent hover-bg-black hover-white w-25" type="password" id="password" onChange={this.handleChange} />
		        <br />
		        <button className="bw0 dim br3 bg-green mt3 pa3 white fw1 tc ttu tracked ">Login</button>
    	  		<div className="red b tc">
    	  			{authError?<p>{authError}</p>:null}
    	  		</div>
    	  	</form>

		)
	}
}
const mapStateToProps=(state)=>{
	return{
		authError:state.auth.authError,
		auth:state.firebase.auth	
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		signIn:(creds)=>dispatch(signIn(creds))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);