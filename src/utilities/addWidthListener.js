function addWidthListener(width, setState, backState = false) {
  /**
   * Add listener that changes a provided
   * state when the screen size is equal
   * or lower than the given width
   */

  if (backState) {
    return window.addEventListener("resize", function () {
      if (this.innerWidth >= width) {
        return setState(false);
      } else {
        return setState(true);
      }
    });
  }

  return window.addEventListener("resize", function () {
    if (this.innerWidth >= width) {
      return setState(false);
    }
  });
}

export default addWidthListener;
