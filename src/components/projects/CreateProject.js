import React,{Component} from 'react'
import {connect} from 'react-redux'
import {createProject} from "../../store/actions/projectActions"
import 'tachyons'
import {Redirect} from 'react-router-dom'
class CreateProject extends Component{
	state={
		title:' ',
		content:' '
	}

	handleChange=(e)=>{
		this.setState({
			[e.target.id]:e.target.value
		})
	}

	handleSubmit=(e)=>{
		e.preventDefault();
		this.props.createProject(this.state)
		this.props.history.push('/');
	}

	render(){
		const {auth}=this.props;
		if(!auth.uid) return <Redirect to='/signin' />
		return( 
			<form className="center w-70 mt0 pa4  bg-white-10" onSubmit={this.handleSubmit}>
		        <h1 className=" b green pb4">Create New Project </h1>
		        <br />
		        <label  htmlFor="Title">Title:</label>
		        <input className="pa2 br3 mb5 ml3 input-reset ba bg-transparent hover-bg-black hover-white w-25" type="text" id="title" onChange={this.handleChange} />
		        <br />
		        <label className="green b f4 "  htmlFor="Content">Content</label>
		        <br/>
		        <textarea className="pa2 w-33 ml2 mt2 br3 input-reset ba bg-transparent b--black hover-bg-black hover-white" type="text"  id="content" onChange={this.handleChange} />
		        <br />
		        <button className="bw0 dim br3 bg-green mt3 pa3 white fw1 tc ttu tracked ">Create</button>
    	  	</form>

		)
	}
}

const mapStateToProps=(state)=>{
	return{
		auth:state.firebase.auth
	}

}

const mapDispatchToProps=(dispatch)=>{
	return{
		createProject:(project)=>dispatch(createProject(project))
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);