import React from 'react';
import {NavLink} from 'react-router-dom';
import 'tachyons';

const SignedOutLinks=()=>{
	return(
		<div className="dtc  b v-mid tracked w-30 tr">
		    <NavLink to="/signup" className="link ba white pa2 ph3 b--light-green bw1  br3 dim  grow f6 f5-ns dib mr3 mr4-ns" >Signup</NavLink>
		  	<NavLink to="/signin" className="link ba white pa2 ph3 b--light-green bw1  br3 dim  grow f6 f5-ns dib mr3 mr4-ns" >Login</NavLink>
		 </div>
		)
}

export default SignedOutLinks;