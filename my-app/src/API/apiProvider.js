import { API_KEY } from "./api_key";
class API {
  constructor() {
    this.url = `https://api.sportradar.us/soccer/trial/v4/`;
    this.season = "sr:season:77453";
    this.language_code = "en";
    this.token = API_KEY;
  }

  loadData() {
    const options = {
      method: "GET",
    };

    return this._fetch(
      options,
      `${this.language_code}/seasons/${this.season}/schedules.json?api_key=${this.token}`
    );
  }

  _fetch(options, additionalPath = "") {
    const url = this.url + additionalPath;
    return fetch(url, options).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    });
  }
}
export default API;
