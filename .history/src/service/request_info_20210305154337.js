class RequestInfo {
  constructor() {
    this.getrequestOptions = {
      method: "GET",
    };
  }

  async getInfo() {
    const response = await fetch(url, this.getrequestOptions);
    const res = await response.json();
    return res.requests;
  }
}
