import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import 'tachyons';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'

const Navbar=(props)=>{
	const {auth,profile}=props;
	const links=auth.uid?<SignedInLinks profile={profile}/>:<SignedOutLinks/>;
	return(
		<nav className="dt dt--fixed  border-box pa3 bg-navy ph5-ns">
		  <p className="dtc v-mid baskerville link w-25 light-green tl " >
		    <Link to='/' className="link f2  light-green hover-white ">Makevents </Link>
		  </p>
		  { links }
		</nav>
		)
}
const mapStateToProps=(state)=>{
	return{
		auth:state.firebase.auth,
		profile:state.firebase.profile
	}
}
export default connect(mapStateToProps)(Navbar);