<script setup lang="ts">
const subdomain = useSubdomain();

// definePageMeta({
//     middleware: (to, from) => {
//         const subdomain = useSubdomain();
//         if(!subdomain.value || subdomain.value === 'www') {
//             return navigateTo('/')
//         }
//     }
// })
</script>

<template>
    <h1>
        Index Page for subdomain: {{ subdomain }}
    </h1>
</template>
