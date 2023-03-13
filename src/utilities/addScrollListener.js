function addScrollListener(setState) {
  /**
   * Add listener that changes a provided
   * state when the vertical scroll
   * position is greater than 0
   */

  return window.addEventListener("scroll", function () {
    if (this.scrollY > 0) {
      return setState(true);
    } else {
      return setState(false);
    }
  });
}

export default addScrollListener;
