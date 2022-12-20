export default new Proxy({}, {
  get(_, key) {
    if (key === '__esModule') {
      return false;
    }
    return key;
  }
});
