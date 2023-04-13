import i18n from 'i18next';
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from 'react-i18next';

 
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLng: ["en", "ko", "zh-Hans", "zh-Hant"],
    backend: {
      //translationfile path
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallback: "en",
    //disabled in production
    debug: false,
    //You can have multiple namespaces
    ns: ["navbar", "login", "shop", "hero"],
    interpolation: {
      espaceValue: false,
      formatSeparator: ",",
    },
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    react: {
      wait: true,
    },
  });

export const languages = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "ko",
    name: "한국어",
  },
  {
    code: "zh-Hans",
    name: "中文简体",
  },
  {
    code: "zh-Hant",
    name: "中文繁体",
  },
];


export default i18n;
