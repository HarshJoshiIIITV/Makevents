import React from 'react'
import 'tachyons'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'

const ProjectDetails=(props)=>{
	const {project,auth}=props;
	if(!auth.uid) return <Redirect to='/signin' />
	
	if(project){
	return(
		<div className="br2 ba white b--light-green bw2 mv5  mw7 w-90 w-80-m center  ">
		  	<div className="pa2 dtc light-green ph3-ns pb3-ns dt w-80 mt2 ">
		        <h1 className="f3 f3-ns mv0 tl">{project.title}</h1>
		    </div>
		    <div className=" ph2 ">
		        <h2 className="f5 mv0 tr">{project.authorFirstName} {project.authorLastName}</h2>
		    </div>
		    <div>
			    <p className="f4 ph3  lh-copy measure tc mt2  yellow">
			      {project.content}
			    </p>
			     <p className="f5 ph4 lh-copy measure mt2 white tl">
			    	{moment(project.createdAt.toDate()).calendar()}
			    </p>
		  </div>
		</div>
		)
	}
	else{
		return(
			<h2 className="white">Loading content </h2>
		)
	}
}
const mapStateToProps=(state,ownProps)=>{
	const id=ownProps.match.params.id;
	const projects=state.firestore.data.projects;
	const project=projects?projects[id]:null
	return{
		project:project,
		auth:state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection:'projects'}
	])
)(ProjectDetails)
