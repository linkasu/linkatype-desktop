import say from 'say';
import yakit from './yandexspeechkit';
import wsay from './wsay'

import SettingsVue from '../components/LandingPage/Settings.vue'

const isWin = process.platform === 'win32'
const yaapikey = 'a095c3ee-6695-4311-bae4-e875dca7e131'

let settings = SettingsVue.data();

yakit.call(window)

let yatts = null;

let speaking = false;

export default {
    speak(text) {
        this.stop()

        if (settings.settings.tts.offline) {
            if (isWin) {
                wsay.say(text)
                return;
            }
            say.speak(text);
            return;
        }
        if (yatts == null) {
            initya();
        }
        yatts.speak(text, {
            speaker: settings.settings.tts.voice,
            stopCallback() {

            }
        });
    },
    stop() {
        if (settings.settings.tts.offline) {
            if (isWin) {
                wsay.stop()
                return
            }
            say.stop()
            return
        }
        if (yatts != null) {
            yatts.stop()
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