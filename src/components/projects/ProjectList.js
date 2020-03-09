import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'
import 'tachyons';

const ProjectList=({projects})=>{
	return(
		<div >
			{projects && projects.map(project=>{
				return(
					<Link to ={'/project/'+project.id} key={project.id} className="link">
					<ProjectSummary project={project}  />
					</Link>
					)
			})}
		</div>
		)
}


export default ProjectList;