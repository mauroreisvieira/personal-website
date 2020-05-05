/** @jsx h */
import { h } from 'preact';

const Profile = ({user}) => {
	return (
		<div>
			<p>This is the user profile for a user named { user }.</p>
		</div>
	);
};

export default Profile;
