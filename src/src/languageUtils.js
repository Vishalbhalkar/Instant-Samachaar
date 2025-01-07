import i18n from "i18next";

const rtlLanguages = ['ar', 'he', 'fa', 'ur']; // Add more RTL languages if needed

export const getDirection = (lng) => {
  return rtlLanguages.includes(lng) ? 'rtl' : 'ltr';
};

export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  document.body.dir = getDirection(lng);
};

