import React from 'react'
import ProfileComp from './Components/ProfileComp'
import EducationComp from './Components/EducationComp'
import SkillsComp from './Components/SkillsComp'
import EmploymentComp from './Components/EmploymentComp'
import ProjectComp from './Components/ProjectComp'
export default function InfoSection() {
	return (
		<div className='bg-rd-600 min-h-screen bg-backgroun'>
		
			<div id="info-container" className='xsm:p-7 md:p-12 xsm:space-y-8'>
				<ProfileComp/>
				<EducationComp/>
				<SkillsComp/>
				<EmploymentComp/>
				<ProjectComp/>
			</div>

		</div>
	)
}
