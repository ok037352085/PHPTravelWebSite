<script setup>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import { RouterView } from 'vue-router'
    import { ref, onMounted, onUnmounted } from 'vue'

    const showHeader = ref(true)
    let lastScrollTop = 0

    const handleScroll = () => {
        const currentScroll = window.scrollY
        if(currentScroll > lastScrollTop && currentScroll > 50){
            showHeader.value = false
        }else{
            showHeader.value = true
        }

        lastScrollTop = currentScroll
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
    

</script>

<template>
<div class="layout">
    <Header :class = "{hidden: !showHeader}" />
    <main class="content">
        <RouterView />
    </main>
    <Footer />
</div>
</template>

<style scoped>
.layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.content {
    flex: 1;
}

Header{
    transition: 0.2s ease-in;
}

Header.hidden {
    transform: translateY(-100%);
}
</style>