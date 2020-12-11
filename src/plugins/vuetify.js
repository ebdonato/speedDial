import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#ffc107',
                secondary: '#ff9800',
                accent: '#ff5722',
                error: '#f44336',
                warning: '#e91e63',
                info: '#009688',
                success: '#4caf50'
            }
        },
    },
});
