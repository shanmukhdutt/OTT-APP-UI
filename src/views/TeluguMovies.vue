<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Telugu</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="movie-list">
                <ion-card v-for="movie in movies" :key="movie.id" @click="viewMovieDetails(movie)">
                    <img :src="movie.poster" alt="Movie Poster" />
                    <ion-card-content class="info">{{ movie.title }}</ion-card-content>
                    <ion-card-content v-if="movie.showDescription">{{ movie.description }}</ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCardContent, IonCard } from '@ionic/vue';
export default {
    name: 'TeluguMovies',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCardContent,
        IonCard
    },
    data() {
        return {
            movies: [
                {
                    id: 1,
                    title: "Hit case-1",
                    poster: "https://upload.wikimedia.org/wikipedia/en/1/12/HIT_The_First_Case.jpg",
                    description: "A police officer in the homicide intervention team must overcome his struggles with his tragic past in order to investigate a case involving a missing woman.",
                    showDescription: false,
                },
                {
                    id: 2,
                    title: "Eenagaraniki Emaiyindi",
                    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Ee_Nagaraniki_Emaindi.jpg/220px-Ee_Nagaraniki_Emaindi.jpg",
                    description: "Childhood friends Vivek, Karthik, Kaushik, and Uppi hope for careers in film-making during university but eventually give up and settle into other jobs. To earn money for a wedding, they enter Goa Short film festival and rekindle their dream.",
                    showDescription: false,
                },
                {
                    id: 3,
                    title: "Sita Ramam",
                    poster: "https://upload.wikimedia.org/wikipedia/en/1/1d/Sita_Ramam.jpg",
                    description: "An orphaned soldier's life changes after he receives a letter from a girl named Sita. He meets her and love blossoms between them. When he returns to her camp in Kashmir, he sends a letter to Sita that will not reach her.",
                    showDescription: false,
                },
            ] as any,
        };
    },
    methods: {
        viewMovieDetails(movie: any) {
          movie.showDescription = !movie.showDescription;       
        },  
    },
};

</script>
<style scoped>
.movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

ion-card {
    width: calc(50% - 16px);
    margin: 18px;
}
ion-card {
  width: calc(50% - 16px); 
  margin: 18px;
}
ion-card-content{
    font-size:medium;
    font-style:italic;
    background-color: rgb(187, 211, 211);
    color:rgb(68, 68, 151)
}
.info{
    color:brown;
    font-size: larger;
    font-style:unset;
}
</style>
