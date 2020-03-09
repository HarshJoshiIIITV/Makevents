import React from 'react';
import 'tachyons';
import moment from 'moment'

const ProjectSummary=({project})=>{
	return(
		<div className="br2 bg-white-10 bt bb white b--light-green bw1 mv4 w-60 mw7 ">
		  	<div className="pa2 dtc tc light-green ph3-ns pb3-ns dt  mt1">
		        <h1 className="f3 f3-ns mv0">{project.title}</h1>
		    </div>
		    <div className="ph3  tr">
		        <h2 className="f5 mv0">postedby: {project.authorFirstName} {project.authorLastName}</h2>
		    </div>
		    <div>
			    <p className="f4 ph4 lh-copy measure mt2 tl yellow">
			    	{moment(project.createdAt.toDate()).calendar()}
			    </p>
		  </div>
		</div>
)

}

export default ProjectSummary;