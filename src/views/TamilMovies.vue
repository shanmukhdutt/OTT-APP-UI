<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Tamil</ion-title>
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
import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonCardContent,IonCard, } from '@ionic/vue';
export default{
    name:'TamilMovies',
    components:{
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonCardContent,
        IonCard
    },
    data(){
        return{
            movies:[
            {
                id:1,
                title:"Vaaranam Aayiram",
                poster:"https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Vaaranam_Aayiram.jpg/220px-Vaaranam_Aayiram.jpg",
                description:"An elderly Krishnan vomits blood and passes away at his house. His son Suriya, an Indian Army Major, is enroute to Kashmir on a rescue mission to rescue a journalist kidnapped by terrorists. He learns of his father's demise and tearfully reminisces memories of his past with his father.",
                showDescription:false
            },
            {
                id:2,
                title:"Soorarai Pottru",
                poster:"https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Soorarai_Pottru.JPG/220px-Soorarai_Pottru.JPG",
                description:"Soorarai Pottru ( transl. Praise the Brave) is a 2020 Indian Tamil-language drama film written and directed by Sudha Kongara, and co-produced by Suriya",
                showDescription:false
            },
            {
                id:3,
                title:"NGK",
                poster:"https://upload.wikimedia.org/wikipedia/en/b/b0/NGK_poster.jpg",
                description:"NGK (film) ... NGK (an abbreviation for Nandha Gopalan Kumaran) is a 2019 Indian Tamil-language political action film written and directed by Selvaraghavan.",
                showDescription:false
            },
        ]as any,
        };
    },
    methods:{
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