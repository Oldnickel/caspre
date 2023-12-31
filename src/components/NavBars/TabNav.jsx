import React, { Component } from "react";
import { Link } from "react-router-dom";

//import TargetVariableSettingPage from "../../views/Main/TargetVariableSettingPage";
//import DataDescription from "../views/Main/DataDescriptionPage";
//import DataPrediction from "../views/Main/DataPredictionPage";
//import PredictedData from "../views/Main/PredictedDataPage";
//import Reports from "../views/Main/ReportsPage";

class TabNav extends Component {
  state = {};
  render() {
    return (
      <div className="relative">
        <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-darkblue shadow md:flex">
          <li className="w-full">
            <Link
              to="/cst/dashboard"
              className="inline-block p-4 w-full text-darkblue bg-eggyellow hover:bg-eggyellow2 focus:ring-4 focus:ring-blue-300 active focus:outline-none caspre-tutor-step-1"
              aria-current="page"
            >
              Target Variable Setting
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/cst/data-description"
              className="inline-block p-4 w-full text-darkblue bg-eggyellow hover:text-gray-700 hover:bg-eggyellow2 focus:ring-4 focus:ring-blue-300 focus:outline-none caspre-tutor-step-2"
            >
              Data description
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/cst/data-prediction"
              className="inline-block p-4 w-full text-darkblue bg-eggyellow hover:text-gray-700 hover:bg-eggyellow2 focus:ring-4 focus:ring-blue-300 focus:outline-none caspre-tutor-step-3"
            >
              ML Statistics
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/cst/predicted-data"
              className="inline-block p-4 w-full text-darkblue bg-eggyellow hover:text-gray-700 hover:bg-eggyellow2 focus:ring-4 focus:outline-none focus:ring-blue-300 caspre-tutor-step-4"
            >
              Data prediction
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/cst/reports"
              className="inline-block p-4 w-full text-darkblue bg-eggyellow hover:text-gray-700 hover:bg-eggyellow2 focus:ring-4 focus:outline-none focus:ring-blue-300 caspre-tutor-step-5"
            >
              Reports
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default TabNav;
