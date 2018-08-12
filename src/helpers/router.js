/* global page */

export default class Router {
  
  constructor(name) {
    this.name = name || "unnamed";
    this.route = page;
  }
  
  init(routerComponent) {
    console.log(`initializing '${this.name}' router`);
    if (!routerComponent) throw new Error("Router class requires a Router Component");
    this.view = routerComponent;
  }
  
  // helpers
  static setNotFoundRoute(routerComponent, NotFound) {
    page("*", (context) => routerComponent.set({ Page: NotFound}));
  }
  
  static start() {
    page.start();
  }
}