<script setup>
    import { ref } from 'vue'

    const message = ref('')
    const visable = ref(false)

    const showToast = (msg, duration = 2000) => {
        message.value = msg
        visable.value = true
        setTimeout(() => {
            visable.value = false
        }, duration)
    }

    defineExpose({ showToast })
</script>

<template>
    <div v-if="visable" class="toast">
        {{ message }}
    </div>
</template>

<style scoped>
    .toast {
        position: fixed;
        top: 210px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.8);
        color: #fff;
        padding: 10px 20px;
        border-radius: 20px;
        font-size: 16px;
        z-index: 999;
        animation: fadein 0.3s, fadeout 0.3s 1.7s;
    }

    @keyframes fadein {
        from { opacity: 0; transform: translate(-50%, 20px); }
        to { opacity: 1; transform: translate(-50%, 0); }
    }

    @keyframes fadeout {
        from { opacity: 1; transform: translate(-50%, 0); }
        to { opacity: 0; transform: translate(-50%, 20px); }
    }
</style>