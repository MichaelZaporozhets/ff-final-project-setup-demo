import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Navigation() {
	if (Auth.loggedIn()) {
		return (
			<ul>
				<li>
					{/* this is not using the Link component to logout or user and then refresh the application to the start */}
					<a href="/" onClick={() => Auth.logout()}>
						Logout
					</a>
				</li>
			</ul>
		);
	} else {
		return (
			<ul>
				<li>
					<Link to="/signup">
						Signup
					</Link>
				</li>
				<li>
					<Link to="/login">
						Login
					</Link>
				</li>
			</ul>
		);
	}
}

function Nav() {
  return (
    <header>
      <h1>
        <Link to="/">
          Home
        </Link>
      </h1>

      <nav>
        <Navigation />
      </nav>
    </header>
  );
}

export default Nav;
