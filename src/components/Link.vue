<template>
    <v-card
        class="ma-4"
        color="primary"
        width="400"
        :href="link.url"
        target="_blank"
        type="a"
    >
        <v-card-actions>
            <v-list-item class="grow">
                <v-list-item-avatar rounded>
                    <v-img
                        class="elevation-6"
                        :alt="link.name"
                        :src="getIconUrl(link.url)"
                    ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title
                        ><span class="title font-weight-black">{{
                            link.name
                        }}</span></v-list-item-title
                    >
                </v-list-item-content>
            </v-list-item>
        </v-card-actions>
    </v-card>
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
