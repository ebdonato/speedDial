import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        links: [
            {
                name: "Gmail",
                url: "https://mail.google.com/mail/u/0/#inbox"
            },
            {
                name: "Outlook",
                url: "https://outlook.live.com/mail/0/inbox"
            },
            {
                name: "Donato Mail",
                url: "https://www.donato.inf.br/app/roundcube/"
            },
            {
                name: "BJ-Share",
                url: "https://bj-share.info/"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/feed/"
            },
            {
                name: "Pocket",
                url: "https://app.getpocket.com/"
            },
            {
                name: "Udemy",
                url: "https://www.udemy.com/"
            },
            {
                name: "Guia de Jogos DPF",
                url: "https://doentesporfutebol.com.br/guiadejogos/"
            },
            {
                name: "Canais Globo",
                url: "https://canaisglobo.globo.com/"
            },
            {
                name: "Premiere",
                url: "https://globoesporte.globo.com/premiere/"
            },
            {
                name: "Sky Play",
                url: "https://skyplay.sky.com.br/"
            },
            {
                name: "Notion",
                url: "https://www.notion.so/"
            },
            {
                name: "Whastapp",
                url: "https://web.whatsapp.com/"
            },
            {
                name: "Vercel",
                url: "https://www.vercel.com/"
            },
            {
                name: "Heroku",
                url: "https://www.heroku.com/"
            },

        ]
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    },
    getters: {
        getLinks: state => state.links,
        getLinkById: state => id => state.links[id]
    }
})
