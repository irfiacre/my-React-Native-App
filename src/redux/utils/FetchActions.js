class Actions {
  static fetchStarted(type) {
    return { type };
  }
  static fetchSucceeded(type, payload) {
    return { type, payload };
  }

  static fetchFailed(type, message) {
    return { type, message };
  }
}

export default Actions;
