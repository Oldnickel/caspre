import React, { Component } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import plumber from "../../services/dataHelpers";

class ScoreSingleUserForm extends Component {
  state = {
    headers: [],
    threshold: 500,
    thresholdValid: true,
  };

  setThreshold = (e) => {
    console.log("e: ", e);
    let threshold = e.target.value;
    threshold = threshold ? +threshold : threshold;
    console.log("thresholdInput: ", threshold);
    if (threshold >= 300 && threshold <= 800) {
      this.setState({ threshold, thresholdValid: true });
    } else {
      this.setState({ threshold: 500, thresholdValid: false });
    }
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log("e: ", e);
    const { headers } = this.state;
    const targets = e.target;
    const data = new FormData(targets);
    const targetObject = {};
    headers.forEach((header) => {
      console.log("*****", +data.get(header));
      targetObject[header] = +data.get(header);
    });

    //console.log(targetObject);
    console.log("targetObject: ", targetObject);

    this.submitObject(targetObject);
  };

  submitObject = async (data) => {
    let reqObject = {};
    let { threshold } = this.state;

    threshold ? (reqObject.threshold = threshold) : (reqObject.threshold = 500);
    reqObject.newdata = [data];
    console.log("reqObject: ", reqObject);
    const predictedResponse = await api.postForPrediction(reqObject);
    console.log("predictedResponse: ", predictedResponse);

    if (predictedResponse.status === 200) {
      if (
        !predictedResponse.data.status ||
        predictedResponse.data.status !== "failed"
      ) {
        this.setPredictedData(predictedResponse.data);
      } else if (
        predictedResponse.data.status &&
        predictedResponse.data.status === "failed"
      ) {
        toast.error(predictedResponse.data.message);
      } else {
        toast.error("An unexpected error with your data occurred");
      }
    } else {
      toast.error("an unexpected error occurred");
    }
  };

  setPredictedData = (data) => {
    const formattedPredictedData = plumber.formatApprovalStatusTableData(data);
    this.props.onDataPredicted(formattedPredictedData);
  };

  getHeaders = async () => {
    const headerResponse = await api.getUserHeaders();

    if (
      headerResponse.status === 200 &&
      headerResponse.data.status === "successfull"
    ) {
      return headerResponse.data.headers;
    } else {
      toast.error("data headers have not been set");
      return [];
    }
  };

  setHeaders = async () => {
    const propHeaders = await this.getHeaders();

    this.setState({ headers: propHeaders });
  };

  componentDidMount() {
    this.setHeaders();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setHeaders();
    }
  }
  render() {
    const { headers, thresholdValid } = this.state;
    return (
      <div className="p-8 border border-1 border-eggyellow rounded mx-4 mt-4">
        <form autoComplete="off" onSubmit={this.submitForm}>
          <div className="grid md:grid-cols-2 md:gap-6">
            {headers.map((header, key) => (
              <div className="relative z-0 mb-4 w-full group" key={key}>
                <input
                  type="number"
                  step=".01"
                  name={header}
                  id={header}
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-eggyellow peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-eggyellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {header}
                </label>
              </div>
            ))}
            <div className="relative z-0 mb-4 w-full group">
              <input
                type="number"
                name="threshold"
                id="threshold"
                className={
                  thresholdValid
                    ? "block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-eggyellow peer"
                    : "block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-red-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-500 peer"
                }
                placeholder=" "
                onChange={this.setThreshold}
              />
              <label
                htmlFor="floating_first_name"
                className={
                  thresholdValid
                    ? "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-eggyellow peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "peer-focus:font-medium absolute text-sm text-red-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Threshold
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="text-darkblue bg-eggyellow hover:bg-eggyellow2 focus:ring-4 focus:outline-none focus:ring-eggyellow font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ScoreSingleUserForm;
