class RequestInfo {
  constructor() {
    this.getrequestOptions = {
      method: "GET",
    };
  }
  async getInfo() {
    const response = await fetch("http://localhost:3002/requests", this.getrequestOptions);
    const res = await response.json();
    return res;
  }

  async getSearchRes(filter, key) {
    ////{material: Array(1), method: Array(1)}
    this.getInfo();
    //console.log(filter["material"].length);
    if (
      filter["method"] &&
      filter["method"].length === 0 &&
      filter["material"] &&
      filter["material"].length === 0
    ) {
      const response = await fetch("http://localhost:3002/requests", this.getrequestOptions);
      const res = await response.json();
      return res;
    } else {
      const response = await fetch("http://localhost:3002/requests", this.getrequestOptions);
      const res = await response.json();
      const result = res.filter((res) => {
        for (let value of filter[key]) {
          return res[key].indexOf(value) !== -1;
        }
      });
      return result;
    }
  }
}

export default RequestInfo;
