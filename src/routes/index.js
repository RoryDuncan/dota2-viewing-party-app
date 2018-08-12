import Router from "helpers/router";

// pages
import Index from "pages/Index.html";


const router = new Router("index");

// landing route
router.route("/", context => router.view.set({ Page: Index }));

// router.route("/loading", context => router.view.set({ Page: Loading }));

// router.route("/hiring", (context) => {
//   router.view.set({ Page: Hiring })
// })

// router.route("/login", (context) => {
//   router.view.set({ Page: Login })
// })


export default router;