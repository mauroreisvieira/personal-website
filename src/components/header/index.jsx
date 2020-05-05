/** @jsx h */
import { h } from "preact";
import { Link } from "preact-router/match";

const Header = () => (
	<header className="lg:pl-32 mt-12">
		<div className="max-w-md">
			<h1 className="block text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight">
				Mauro Reis Vieira
			</h1>
			<nav className="hidden md:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs spaced-x-6">
				<Link
					className="cursor-pointer text-gray-600 font-semibold no-underline hover:text-black"
					activeClassName="text-red-500"
					href="/"
				>
					Home
				</Link>
				<Link
					className="cursor-pointer px-4 text-gray-600 font-semibold no-underline hover:text-black"
					activeClassName="text-red-500"
					href="/profile"
				>
					About Me
				</Link>
				<Link
					className="cursor-pointer text-gray-600 font-semibold no-underline hover:text-black"
					activeClassName="text-red-500"
					href="/blog"
				>
					Blog
				</Link>
			</nav>
		</div>
	</header>
);

export default Header;
