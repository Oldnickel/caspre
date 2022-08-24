import http from "./httpService"
import config from "../config.json"

//const server_url = process.env.REACT_APP_SERVER_URL;
const routes = {
    description: {
        path: "/describe",
        method: "POST"
    },
    changeDistribution: {
        path: "/changedistribution",
        method: "POST"
    },
    login: {
        path: "/login",
        method: "POST"
    },
    register: {
        path: "/register",
        method: "POST"
    },
    data_upload: {
        path: "/upload",
        method: "POST"
    },
    land: {
        path: "/land",
        method: "GET"
    },
    logout: {
        path: "/logout",
        method: "POST"
    },
    predict: {
        path: "/predict",
        method: "GET"
    },
    mlpredict: {
        path: "/datapredict",
        method: "POST"
    }
}
const postDescription = async (requestObject) => {
    const { data } = await http.post(config.mockUrl + routes.description.path, requestObject);
    return data;
}

const postDistributionChanged = async (requestObject) => {
    const { data } = await http.post(config.mockUrl + routes.changeDistribution.path, requestObject);
    return data;
}

const getPrediction = async () => {
    const { data } = await http.get(config.mockUrl + routes.predict.path);
    return data;
}

const postForPrediction = async (uploadData) => {
    const { data } = await http.post(config.mockUrl + routes.mlpredict.path);
    return data;
}

let exports = { postDescription, postDistributionChanged, getPrediction, postForPrediction };

export default exports;