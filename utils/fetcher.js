import axios from "axios";

class Fetcher {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.defaultHeader = {
      "Content-Type": "application/json",
    };
  }

  async request(url, data = null, method, headers = {}) {
    const requestUrl = `${this.baseUrl}${url}`;
    const headers = {
      ...this.defaultHeader,
      ...headers,
    };
    const options = {
      url: requestUrl,
      method,
      headers,
      data,
    };
    try {
      const response = await axios(options);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  }
  get(endpoint, headers = {}) {
    return this.request(endpoint, "GET", null, headers);
  }

  post(endpoint, data, headers = {}) {
    return this.request(endpoint, "POST", data, headers);
  }

  put(endpoint, data, headers = {}) {
    return this.request(endpoint, "PUT", data, headers);
  }

  delete(endpoint, headers = {}) {
    return this.request(endpoint, "DELETE", null, headers);
  }
}

module.exports = Fetcher;