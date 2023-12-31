import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faUpload,
  faLineChart,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../../assets/images/aicelogo1.png";

class Sidebar extends Component {
  state = {
    active: "dashboard",
  };

  componentDidMount() {
    let currentPath = window.location.pathname;
    console.log("currentPath: ", currentPath);
    this.setActiveWindow(currentPath);
  }

  setActiveWindow = (pathname) => {
    let tab = "";
    const paths = [
      { path: "/admin/dashboard", component: "dashboard" },
      { path: "/admin/users", component: "users" },
      { path: "/admin/organisations", component: "organisations" },
      { path: "/admin/models", component: "models" },
      { path: "/admin/model-metrics", component: "model-metrics" },
      { path: "/admin/data-description", component: "data-description" },
      { path: "/admin/upload", component: "upload" },
    ];

    paths.forEach((path) => {
      if (path.path === pathname) {
        tab = path.component;
      }
    });

    console.log("component", tab);
    this.setState({ active: tab });
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      let currentPath = window.location.pathname;
      console.log("currentPath: ", currentPath);
      this.setActiveWindow(currentPath);
    }
  }

  render() {
    const { active } = this.state;
    return (
      <aside
        className="flex w-64 h-full border-r border-r-gray-500"
        aria-label="Sidebar"
        style={{ height: "100%" }}
      >
        <div className="overflow-y-auto py-4 px-3 bg-darkblue h-full w-full">
          <Link
            to="/"
            className="flex items-center justify-center pl-8 pt-6 mb-8"
          >
            <img
              src={logo}
              className="self-center h-12 mr-10"
              alt="Flowbite Logo"
            />
            {/* <span className="self-center uppercase text-eggyellow font-semibold whitespace-nowrap divide-y-2 divide-white">
              CASPRE
            </span> */}
          </Link>
          {/* <hr className="mb-8"></hr> */}
          <ul className="space-y-4 w-full">
            <li>
              <Link
                to="/admin/dashboard"
                className={
                  active === "dashboard"
                    ? "flex group items-center p-2 text-base font-normal text-white rounded-lg bg-eggyellow hover:bg-eggyellow2"
                    : "flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-eggyellow"
                }
              >
                <FontAwesomeIcon
                  className="flex-shrink-0 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  icon={faHome}
                />
                <span className="ml-3 text-sm font-bold text-gray-500 group-hover:text-gray-700">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/upload"
                className={
                  active === "upload"
                    ? "flex group items-center p-2 text-base font-normal text-white rounded-lg bg-eggyellow hover:bg-eggyellow2"
                    : "flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-eggyellow"
                }
              >
                <FontAwesomeIcon
                  className="flex-shrink-0 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  icon={faUpload}
                />
                <span className="ml-3 text-sm font-bold text-gray-500 group-hover:text-gray-700">
                  Upload
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className={
                  active === "users"
                    ? "flex group items-center p-2 text-base font-normal text-white rounded-lg bg-eggyellow hover:bg-eggyellow2"
                    : "flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-eggyellow"
                }
              >
                <FontAwesomeIcon
                  className="flex-shrink-0 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  icon={faUser}
                />
                <span className="ml-3 text-sm font-bold text-gray-500 group-hover:text-gray-700">
                  User management
                </span>
              </Link>
            </li>
            {/* <li>
              <Link
                to="/admin/organisations"
                className={
                  active === "organisations"
                    ? "flex group items-center p-2 text-base font-normal text-white rounded-lg bg-eggyellow hover:bg-eggyellow2"
                    : "flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-eggyellow"
                }
              >
                <FontAwesomeIcon
                  className="flex-shrink-0 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  icon={faUserGroup}
                />
                <span className="ml-3 text-sm font-bold text-gray-500 group-hover:text-gray-700">
                  Organisations
                </span>
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/admin/models"
                className={
                  active === "models"
                    ? "flex group items-center p-2 text-base font-normal text-white rounded-lg bg-eggyellow hover:bg-eggyellow2"
                    : "flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-eggyellow"
                }
              >
                <FontAwesomeIcon
                  className="flex-shrink-0 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  icon={faMicrochip}
                />
                <span className="ml-3 text-sm font-bold text-gray-500 group-hover:text-gray-700">
                  Model
                </span>
              </Link>
            </li> */}
            <li>
              <Link
                to="/admin/data-description"
                className={
                  active === "data-description"
                    ? "flex group items-center p-2 text-base font-normal text-white rounded-lg bg-eggyellow hover:bg-eggyellow2"
                    : "flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-eggyellow"
                }
              >
                <FontAwesomeIcon
                  className="flex-shrink-0 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  icon={faDatabase}
                />
                <span className="ml-3 text-sm font-bold text-gray-500 group-hover:text-gray-700">
                  Data description
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/model-metrics"
                className={
                  active === "model-metrics"
                    ? "flex group items-center p-2 text-base font-normal text-white rounded-lg bg-eggyellow hover:bg-eggyellow2"
                    : "flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-eggyellow"
                }
              >
                <FontAwesomeIcon
                  className="flex-shrink-0 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  icon={faLineChart}
                />
                <span className="ml-3 text-sm font-bold text-gray-500 group-hover:text-gray-700">
                  Model metrics
                </span>
              </Link>
            </li>

            {/* <li>
              <Link
                to="/admin/models"
                className={
                  active === "description"
                    ? "flex group items-center p-2 text-base font-normal text-white rounded-lg bg-eggyellow hover:bg-eggyellow2"
                    : "flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-eggyellow"
                }
              >
                <FontAwesomeIcon
                  className="flex-shrink-0 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  icon={faMicrochip}
                />
                <span className="ml-3 text-sm font-bold text-gray-500 group-hover:text-gray-700">
                  Description
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/models"
                className={
                  active === "models-stats"
                    ? "flex group items-center p-2 text-base font-normal text-white rounded-lg bg-eggyellow hover:bg-eggyellow2"
                    : "flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-eggyellow"
                }
              >
                <FontAwesomeIcon
                  className="flex-shrink-0 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  icon={faMicrochip}
                />
                <span className="ml-3 text-sm font-bold text-gray-500 group-hover:text-gray-700">
                  Model statistics
                </span>
              </Link>
            </li> */}
          </ul>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
