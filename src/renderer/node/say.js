import say from 'say';
import yakit from './yandexspeechkit';

import SettingsVue from '../components/LandingPage/Settings.vue'

const yaapikey = 'a095c3ee-6695-4311-bae4-e875dca7e131';

let settings = SettingsVue.data();

yakit.call(window)

let yatts = null;

let speaking = false;

export default {
    speak(text) {
        if (settings.settings.tts.offline) {
            say.stop();
            say.speak(text);
            return;
        }
        if (yatts == null) {
            initya();
        }
        if (!speaking) {
            speaking = true;
            yatts.speak(text, {
                speaker: settings.settings.tts.voice,
                stopCallback() {
                    speaking = false;
                }
            });
        }
    }
}

function initya() {
    yatts = window.ya.speechkit.Tts(
        // Настройки синтеза. Список доступных настроек см. в справочнике.
        {
            // API-ключ. Может быть задан глобально через объект ya.speechkit.settings.
            apikey: yaapikey
        }
    );
}