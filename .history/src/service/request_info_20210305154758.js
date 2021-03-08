class RequestInfo {
  constructor() {
    this.getrequestOptions = {
      method: "GET",
    };
  }

  async getInfo() {
    const response = await fetch("http://localhost:3002/requests", this.getrequestOptions);
    const res = await response.json();
    console.log(res.requests);
    return res.requests;
  }
}

export default RequestInfo;
