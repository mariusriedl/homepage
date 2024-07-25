<template>
    <div class="movie-card">
        <img :src="`/img/${movie.image}`" :alt="movie.title" />
        <div class="info-section">
            <h2>{{ movie.title }}</h2>
            <p>{{ movie.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.movie-card {
    display: flex;
    align-items: center;
    margin: 20px auto;
    border-radius: 10px;
    padding: 15px;
    width: 90%;
    max-width: 1200px;
    box-sizing: border-box;
    transition: flex-direction 0.3s ease;
}

.movie-card:nth-child(odd) {
    flex-direction: row;
}

.movie-card:nth-child(even) {
    flex-direction: row-reverse;
}

.movie-card img {
    width: 50%;
    height: auto;
    border-radius: 10px;
}

.info-section {
    margin: 0 15px;
    color: #fff;
    flex: 1;
}

.info-section h2 {
    margin: 10px 0;
    font-size: 3.5rem;
}

.info-section p {
    margin: 0;
    font-size: 1.5rem;
}

@media (max-width: 768px) {
    .movie-card {
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }

    .movie-card:nth-child(odd),
    .movie-card:nth-child(even) {
        flex-direction: column;
    }

    .movie-card img {
        width: 100%;
        margin-bottom: 10px;
    }

    .info-section {
        width: 100%;
        text-align: center;
        margin: 0;
    }
}
</style>