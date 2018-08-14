import Dota2Logo from "apps/Dota2Logo/Index.html";
import InternationalVideo from "apps/InternationalVideo/Index.html";
import HeroSlideshow from "apps/HeroSlideshow/Index.html";

// we register all our apps here
const apps = [
  {
    title: "Dota 2 Logo",
    id: "logo",
    app: Dota2Logo,
    editor: null,
    settings: {
      logoWithText: false,
    },
  },
  {
    title: "TI8 Video Backdrop",
    id: "international-video",
    app: InternationalVideo,
    editor: null,
    settings: {},
  },
  {
    title: "Hero Slideshow",
    id: "hero-slideshow",
    app: InternationalVideo,
    editor: null,
    settings: {},
  }
];


const getAppByName = (name) => apps.find(app => app.name === name) || null;
const getAppByID = (id) => apps.find(app => app.id === id) || null;
const getApps = () => apps;
const getAppNames = () => apps.map(app => app.name);
const getDefaultApp = () => apps[0];

export default {
  getDefaultApp,
  getApps,
  getAppNames,
  getAppByID,
  getAppByName,
}