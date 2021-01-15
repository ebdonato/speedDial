<template>
    <v-btn
        color="transparent"
        elevation="1"
        class="mx-2 my-2 white--text"
        :href="link.url"
        min-width="300"
        style="text-transform: none"
    >
        <v-img
            :alt="link.name"
            :src="getIconUrl(link.url)"
            max-height="1rem"
            max-width="1rem"
            class="ma-4"
        />
        {{ link.name }}
    </v-btn>
</template>

<script>
export default {
    name: "Link",
    props: {
        link: {
            type: Object,
            default: function () {
                return {
                    name: "stackoverflow",
                    url: "www.stackoverflow.com",
                }
            },
        },
    },
    methods: {
        getIconUrl(url) {
            let startPosition = url.indexOf("://")
            startPosition = startPosition < 0 ? 0 : startPosition + 3
            // console.log(startPosition)

            let endPosition = url.indexOf("/", startPosition)
            endPosition = endPosition < 0 ? url.length : endPosition + 1
            // console.log(endPosition)

            const newUrl =
                "https://www.google.com/s2/favicons?sz=64&domain_url=" +
                (startPosition ? "" : "https://") +
                url.substr(0, endPosition)
            // console.log(newUrl)

            return newUrl
        },
    },
}
</script>

<style>
</style>
