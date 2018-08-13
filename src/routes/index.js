import Router from "helpers/router";

// pages
import Index from "pages/Index.html";
import AppLoader from "components/AppLoader.html";
import Screen from "components/Screen.html";


const router = new Router("index");

// landing route
router.route("/", context => router.view.set({ Page: Index }));

router.route("/app/:appname", context => router.view.set({ 
  Page: AppLoader, 
  pageData: context.params.appname
}));

router.route("/screens/:screen", context => router.view.set({ 
  Page: Screen, 
  pageData: context.params.screen
}));



export default router;