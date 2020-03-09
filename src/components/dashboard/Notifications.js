import React from 'react'
import 'tachyons'
import moment from 'moment'


const Notifications=(props)=>{
	const {notifications} =props;
	return(
		<div className="br2 ba white b--light-green bw0 bg-white-10  mv2 mr3 mw7 w-40 fr ">
			<h2 className="tc">Notifications </h2>
		  	<div className="pa2 dtc light-green ph3-ns pb3-ns dt w-80 mt2 ">
		        {
		        	notifications && notifications.map(item=>{
		        	return(
		        		<li className="tl" key={item.id}>
		        			<span className="f4  yellow">{item.user}  </span>
		        			<span className="f4 mh4"> {item.content} </span>
		        			<span className="white b " >{moment(item.time.toDate()).fromNow()}</span>
		        		</li>
		        	)
		        	})
		        }
		    </div>
		</div>
		)
}

export default Notifications;