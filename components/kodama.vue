<template>
    <div ref="numberContainer" class="number-container" @click="incrementNumber" :style="numberStyle">
        <img src="/img/kodama.png" alt="Kodama" class="kodama">
        {{ number }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            number: 0,
            numberStyle: {
                position: 'fixed', // Changed to fixed positioning
                top: '0px',
                left: '0px',
                fontSize: '24px',
                cursor: 'pointer',
                color: 'white',
                zIndex: 9999
            }
        };
    },
    mounted() {
        this.moveNumberRandomly();
    },
    methods: {
        incrementNumber() {
            this.number++;
        },
        moveNumberRandomly() {
            const move = () => {
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                const x = Math.random() * (viewportWidth - this.$refs.numberContainer.offsetWidth);
                const y = Math.random() * (viewportHeight - this.$refs.numberContainer.offsetHeight);

                this.numberStyle.left = `${x}px`;
                this.numberStyle.top = `${y}px`;
            };

            // Move the number initially and then periodically
            move();
            setInterval(move, 1000); // Move every second
        }
    }
}
</script>

<style scoped>
.number-container {
    transition: top 0.5s ease, left 0.5s ease;
}

.kodama {
    max-height: 100px;
}
</style>
