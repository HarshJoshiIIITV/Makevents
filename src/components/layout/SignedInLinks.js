import React from 'react';
import {NavLink} from 'react-router-dom';
import 'tachyons';
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks=(props)=>{
	return(
		<div className="dtc b v-mid tracked w-25 tr">
		    <NavLink to="/create" className="link ba white pa2 ph3 b--light-green bw1  br3 dim  grow f6 f5-ns dib mr3 mr4-ns" >New Project</NavLink>
		  	<a onClick={props.signOut} className="link ba white pa2 ph3 b--light-green bw1  br3 dim  grow f6 f5-ns dib mr3 mr4-ns" >Log Out</a>
		  	<NavLink to="/" className="link ba light-yellow br-100 pa2 ph3 b--light-yellow bw2  br3 dim  grow f6 f5-ns dib mr3 mr4-ns"  >{props.profile.initials}</NavLink>
		  </div>
		)
}

const mapDispatchToProps=(dispatch)=>{
	return{
		signOut:()=>dispatch(signOut())
	}
}


export default connect(null,mapDispatchToProps)(SignedInLinks);