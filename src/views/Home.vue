<template>
    <div
        class="home d-flex flex-wrap justify-center align-center align-content-center"
    >
        <Link v-for="(link, key) in getLinks" :key="key" :link="link" />
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import Link from "@/components/Link"

export default {
    name: "Home",
    components: {
        Link,
    },
    computed: {
        ...mapGetters(["getLinks"]),
    },
}
</script>

<style scoped>
.home {
    height: 100%;
}
</style>
