import Dota2Logo from "apps/Dota2Logo/Index.html";
import InternationalVideo from "apps/InternationalVideo/Index.html";
import HeroSlideshow from "apps/HeroSlideshow/Index.html";

// we register all our apps here
const apps = [
  {
    name: "Dota 2 Logo",
    id: "logo",
    component: Dota2Logo,
    editor: null,
    settings: {
      logoWithText: false,
    },
  },
  {
    name: "TI8 Video Backdrop",
    id: "international-video",
    component: InternationalVideo,
    editor: null,
    settings: {},
  },
  {
    name: "Hero Slideshow",
    id: "hero-slideshow",
    component: InternationalVideo,
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