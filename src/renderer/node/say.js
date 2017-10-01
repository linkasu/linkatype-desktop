import say from 'say';

export default {
    settings:{

    },
    speak(text){
        say.stop();
        say.speak(text);
    }
}