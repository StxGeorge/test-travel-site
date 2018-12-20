import $ from 'jquery';//only works is jquery is installed in node modules
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(elems, offset) {
    this.itemToReaveal = elems;//item class in the html file
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemToReaveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;//
    this.itemToReaveal.each(function() {//each is a jquery function
      var currentItem = this;//this references the oject being looped
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
