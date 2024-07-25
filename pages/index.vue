<template>
    <div class="parallax-container">
        <div class="content">
            <h1>Studio Ghibli</h1>
            <div class="gallery">
                <movie v-for="(movie, index) in movies" :key="index" :movie="movie"> </movie>
            </div>
        </div>
        <kodama></kodama>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movies: [
                {
                    image: 'boy-and-heron.gif',
                    title: 'The Boy and the Heron',
                    description: 'A story of a young boy and his adventures with a mystical heron.'
                },
                {
                    image: 'howl.gif',
                    title: 'Howl\'s Moving Castle',
                    description: 'A magical tale of a young girl who moves into a moving castle owned by the mysterious wizard Howl.'
                },
                {
                    image: 'ponyo.gif',
                    title: 'Ponyo',
                    description: 'The adventures of a young fish who transforms into a human girl.'
                },
                {
                    image: 'kiki.gif',
                    title: 'Kiki\'s Delivery Service',
                    description: 'A young witch named Kiki moves to a new town and uses her flying ability to earn a living.'
                },
                {
                    image: 'wind-rises.gif',
                    title: 'The Wind Rises',
                    description: 'The fictionalized biography of Jiro Horikoshi, the designer of Japanese fighter planes during World War II.'
                },
                {
                    image: 'spirited-away.gif',
                    title: 'Spirited Away',
                    description: 'The story of a young girl who becomes trapped in a strange world of spirits and gods.'
                }
            ]
        };
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style>
h1 {
    color: #fff;
    text-align: center;
    font-size: 8rem;
    margin: 1rem 0 0 0;
}

.gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.parallax-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(to bottom, rgba(128, 255, 134, 0), rgba(133, 88, 130, 0.5));
}

.content {
    position: relative;
    z-index: 1;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    min-height: 200vh;
}
</style>
