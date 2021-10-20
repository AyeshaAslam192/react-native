import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from '../../localization/en.json';
import fr from '../../localization/fr.json';

const detectLang = () => {
    i18n.translations = {
        en,
        fr,
    };
    i18n.locale = Localization.locale;
    i18n.fallbacks = true;
    return i18n;
};

export {
    detectLang
}

