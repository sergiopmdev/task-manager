function addWidthListener(width, setState) {
  /**
   * Add listener that changes a provided
   * state when the screen size is equal
   * or lower than the given width
   */

  return window.addEventListener("resize", function () {
    if (this.innerWidth >= width) {
      return setState(false);
    }
  });
}

export default addWidthListener;
