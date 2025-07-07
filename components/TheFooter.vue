<template>
    <footer class="">
        <div class="container">
            <div class="footer-content flex gap-4">
                <NuxtLink to="page1">
                    Page 1
                </NuxtLink>
                <NuxtLink to="page2">
                    Page 2
                </NuxtLink>
                <NuxtLink to="page3">
                    Page 3
                </NuxtLink>
                <NuxtLink to="page4">
                    Page 4
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>

<script setup>
const mobile = ref(false)
</script>