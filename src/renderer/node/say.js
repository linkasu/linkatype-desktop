import say from 'say';
import yakit from './yandexspeechkit';
import wsay from './wsay'

import SettingsVue from '../components/LandingPage/Settings.vue'

const isWin = process.platform === 'win32'
const yaapikey = 'a095c3ee-6695-4311-bae4-e875dca7e131'

let settings = SettingsVue.data();

yakit.call(window)


let speaking = false;
const speech = {
    yatts: null,

    initya() {
    this.yatts = window.ya.speechkit.Tts(
        // Настройки синтеза. Список доступных настроек см. в справочнике.
        {
            // API-ключ. Может быть задан глобально через объект ya.speechkit.settings.
            apikey: yaapikey
        }
    );
    },

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
        if (this.yatts == null) {
            this.initya();
        }
        this.yatts.speak(text, {
            speaker: settings.settings.tts.voice,
            stopCallback() {

            }
        });
    },
    stop() {
        if (settings.settings.tts.offline) {
            if (isWin) {
                wsay.stop()
                
            }
            say.stop()
            
        }
        if (this.yatts != null) {
       //     this.yatts.stop()
        }
    }
}

export default speech
