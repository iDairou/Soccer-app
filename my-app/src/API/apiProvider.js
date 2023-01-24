import { API_KEY } from "./api_key";
class API {
  constructor() {
    this.baseUrl = `https://api.sportradar.us/soccer/trial/v4/`;
    this.competitions = "sr:competition:202";
    this.language_code = "en";
    this.token = API_KEY;
  }

  loadData(season) {
    const options = {
      method: "GET",
    };
    return this._fetch(
      options,
      `${this.language_code}/seasons/${season}/schedules.json?api_key=${this.token}`
    );
  }
  loadSeasons() {
    const options = {
      method: "GET",
    };
    return this._fetch(
      options,
      `${this.language_code}/competitions/${this.competitions}/seasons.json?api_key=${this.token}`
    );
  }
  loadTimeline(sportEventId) {
    const options = {
      method: "GET",
    };
    return this._fetch(
      options,
      `${this.language_code}/sport_events/${sportEventId}/timeline.json?api_key=${this.token}`
    );
  }

  _fetch(options, additionalPath = "") {
    const url = this.baseUrl + additionalPath;
    return fetch(url, options).then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return Promise.reject(resp);
    });
  }
}
export default API;
