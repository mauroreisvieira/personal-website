/** @jsx preact.h */
import * as preact from "preact";
import style from "./style";

const Home = () => (
	<div className={style.home}>
		<h2>Hi.</h2>
		<p>
			I'm Mauro Reis Vieira, a curious developer with a focus on Front End
			Development from Leiria, Portugal.
		</p>
		<p>
			For the past six years, I've always been enjoying to experiment new
			technologies, working with different people to solve companies
			issues &amp; people needs.
		</p>
		<p>
			I believe in open-source and collaboration over competition, also I
			love sharing my knowledge and experience with others.
		</p>
		<h3>Experience</h3>
		<p>
			<strong>Front End Developer</strong> −{" "}
			<a href="https://www.namecheap.com/">Namecheap</a>
			<em>October 2017 – Present</em>
		</p>
		<p>
			<strong>Full Stack Developer</strong> −{" "}
			<a href="http://www.hi-interactive.pt/">Hi INTERACTIVE</a>
			<em>May 2016 – October 2017</em>
		</p>
		<p>
			<strong>Web Developer</strong> −{" "}
			<a href="https://www.wayacross.pt/">WayAcross</a>
			<em>April 2014 – May 2016</em>
		</p>
		<h3>Focus</h3>
		<h4>Life</h4>
		<ul>
			<li>Family &amp; Friend</li>
		</ul>
		<h4>Front End Development</h4>
		<ul>
			<li>CSS Animations</li>
			<li>Vanilla Javascript &amp; Vue.js</li>
			<li>Mobile &amp; Responsive Design</li>
			<li>Performance &amp; Accessibility</li>
		</ul>
		<h4>Back End Development</h4>
		<ul>
			<li>Node.js</li>
			<li>PHP</li>
		</ul>
		<p>
			Drop me a line if you want to say Hi or have a beer, I will be very
			happy to hear from you.
		</p>
		<p>
			<a href="mailto:mauroreivieira@gmail.com">Let's Talk</a>
		</p>
	</div>
);

export default Home;
