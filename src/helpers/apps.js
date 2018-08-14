import Dota2Logo from "apps/Dota2Logo/Index.html";
import InternationalVideo from "apps/InternationalVideo/Index.html";
import HeroSlideshow from "apps/HeroSlideshow/Index.html";

import Dota2LogoEditor from "apps/Dota2Logo/Edit.html";
import InternationalVideoEditor from "apps/InternationalVideo/Edit.html";
import HeroSlideshowEditor from "apps/HeroSlideshow/Edit.html";

// we register all our apps here
const apps = [
  {
    name: "Dota 2 Logo",
    id: "logo",
    component: Dota2Logo,
    editor: Dota2LogoEditor,
    settings: {
      logoWithText: false,
    },
  },
  {
    name: "TI8 Video Backdrop",
    id: "international-video",
    component: InternationalVideo,
    editor: InternationalVideoEditor,
    settings: {},
  },
  {
    name: "Hero Slideshow",
    id: "hero-slideshow",
    component: InternationalVideo,
    editor: HeroSlideshowEditor,
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