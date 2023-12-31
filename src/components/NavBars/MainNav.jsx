import React, { Component } from "react";
import { Link } from "react-router-dom";

import AICELogo from "../../assets/images/caspre-logo.png";
import "../../assets/stylesheets/main-nav.css";
import NavNoUser from "./NavUserSection/NavNoUser";
import NavUser from "./NavUserSection/NavUser";
import auth from "../../services/authService";

class MainNavBar extends Component {
  state = {
    user: {},
    loggedIn: false,
  };

  componentDidMount() {
    const loggedIn = auth.userLoggedIn();
    const user = auth.getCurrentUser();
    this.setState({ loggedIn, user });
  }

  onLogOut = () => {
    this.props.onLogOut();
  };

  constructor(props) {
    super();
  }
  render() {
    //console.log("route props", this.props);
    let { user } = this.props;
    let { loggedIn } = this.state;
    return (
      <>
        <nav className="bg-darkblue px-2 sm:px-4 py-2.5 sticky w-full z-20 top-0 left-0 border-b border-gray-200">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link to="/" className="flex items-center">
              <img
                src={AICELogo}
                className="sm:h-9 aice-nav"
                alt="Flowbite Logo"
              ></img>
            </Link>
            {loggedIn ? (
              <NavUser onLogOut={this.onLogOut} user={user} {...this.props} />
            ) : (
              <NavNoUser user={user} {...this.props} />
            )}
            <div
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-darkblue">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 text-white hover:text-eggyellow bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 text-white hover:text-eggyellow text-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 text-white hover:text-eggyellow text-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 text-white hover:text-eggyellow text-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default MainNavBar;
