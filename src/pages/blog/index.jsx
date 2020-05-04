/** @jsx preact.h */
import * as preact from 'preact';
import style from "./style";

const Blog = user => {
	return (
		<div className={style.profile}>
			<h1>Profile: {user}</h1>
			<p>This is the user profile for a user named {user}.</p>
		</div>
	);
};

export default Blog;
