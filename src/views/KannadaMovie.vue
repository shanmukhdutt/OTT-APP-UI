<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Kannada</ion-title>
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
import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonCardContent,IonCard} from '@ionic/vue';
export default{
    name:'KannadaMovies',
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
           movies: [
               {
                id:1,
                title:"Birbal-Triology",
                poster:"https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Birbal_Trilogy_Case_1-_Finding_Vajramuni_poster.jpg/220px-Birbal_Trilogy_Case_1-_Finding_Vajramuni_poster.jpg",
                description:"In 2000, an innocent bar employee was framed as the main accused in a gruesome murder of a cab driver. Eight years later, a sharp and quick-witted lawyer named Mahesh Dass lands this case and wants to help prove the youngster's innocence.",
                showDescription:false,
            },
               {
                id:2,
                title:"Kaavaludaari",
                poster:"https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Kavaludaari.jpg/220px-Kavaludaari.jpg",
                description:"The accidental discovery of human bones during a road-widening project leads a local traffic cop into the mystery of a 40-year-old case; his investigation leads him across trails that will put his wit, resolve and morals to the test.",
                showDescription:false,
            },
               {
                id:3,
                title:"KGF-2",
                poster:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/K.G.F_Chapter_2.jpg/220px-K.G.F_Chapter_2.jpg",
                description:"The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat, and his enemies are clamouring for revenge.",
                showdescription:false,
            },
            ]as  any,
        };
    },
    methods:{
        viewMovieDetails(movie: any){
            movie.showDescription=!movie.showDescription
        }
    }
}

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