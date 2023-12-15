import React from 'react'

import ProfileSection from './ProfileSection/ProfileSection'
import InfoSection from './InfoSection/InfoSection'

export default function page() {
	return (
		<div className='h-screen flex md:flex-row sm:flex xsm:flex-col'>



			<div id="profile-section" className='md:w-5/12 '>
				<div className='md:fixed md:w-5/12'>
					<ProfileSection/>
				</div>
			</div>

			<div id="info-section" className='md:w-7/12 '>
				<InfoSection/>
			</div>





		
		</div>
	)
}
