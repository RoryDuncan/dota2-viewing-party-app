
// app components
import Dota2Logo from "apps/Dota2Logo/Index.html";
import Dota2LogoEditor from "apps/Dota2Logo/Edit.html";

import TwitchTVStream from "apps/TwitchTVStream/Index.html";
import TwitchTVStreamEditor from "apps/TwitchTVStream/Edit.html";

import HeroSlideshow from "apps/HeroSlideshow/Index.html";
import HeroSlideshowEditor from "apps/HeroSlideshow/Edit.html";

import InternationalVideo from "apps/InternationalVideo/Index.html";
import InternationalVideoEditor from "apps/InternationalVideo/Edit.html";

import HeroHighlights from "apps/HeroHighlights/Index.html";
import HeroHighlightsEditor from "apps/HeroHighlights/Edit.html";



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
    name: "TwitchTV Stream",
    id: "twitch-stream",
    component: TwitchTVStream,
    editor: TwitchTVStreamEditor,
    settings: {
      channel: "dota2ti",
      volume: 1,
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
    component: HeroSlideshow,
    editor: HeroSlideshowEditor,
    settings: {},
  },
  {
    name: "Hero Highlights",
    id: "hero-highlights",
    component: HeroHighlights,
    editor: HeroHighlightsEditor,
    settings: {
        selectedHeroes: [],
        highlightedHeroes: [],
    },
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