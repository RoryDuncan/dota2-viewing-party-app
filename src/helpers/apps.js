import Dota2Logo from "apps/Dota2Logo.html";
import InternationalVideo from "apps/InternationalVideo.html";
import HeroSlideshow from "apps/HeroSlideshow.html";

const apps = {
  "logo": Dota2Logo,
  "international-video": InternationalVideo,
  "hero-slideshow": HeroSlideshow,
};


const byName = (name) => apps[name] || null;
const getApps = () => apps;
const getAppNames = () => Object.keys(apps);
const getDefaultApp = () => getAppNames()[0];

export default {
  getDefaultApp,
  getApps,
  getAppNames,
  byName,
}