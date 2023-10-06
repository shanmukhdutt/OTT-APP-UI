<template>
  <ion-page>
    <ion-header :translucent="true" class="second">
      <ion-toolbar class="first">
        <ion-title size="large">Netflix</ion-title>
      </ion-toolbar>
      <ion-segment @ionChange="segmentChanged" v-model="segment">
        <ion-segment-button value="search">
          <ion-label >Search</ion-label>
        </ion-segment-button>
      </ion-segment>
    </ion-header>
    <ion-content :fullscreen="true">
      <div v-if="segment === 'search'">
        <ion-searchbar placeholder="Search movies"></ion-searchbar>
        <ion-item>
          <ion-row>
            <ion-chip color="danger" v-for="genre in genres" :key="genre.id" @click="selectGenre(genre.id)" :class="{'selected-chip':genre.id===selectedGenre}">
              <ion-label>{{ genre.title }}</ion-label>
            </ion-chip>
          </ion-row>
        </ion-item>
        <div>
          <ion-list>
            <ion-item v-for="movie in filteredMovies" :key="movie.name">
              <img :src="movie.poster" alt="Movie poster"/>
              <p>{{ movie.name }}</p>
            </ion-item>
          </ion-list>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,IonHeader,IonPage,IonTitle,IonToolbar,IonSegment,IonSegmentButton,IonSearchbar,IonItem,IonChip,IonList,IonLabel,IonRow
} from '@ionic/vue';
import { computed, defineComponent, ref } from 'vue';
interface Genre {
  id: number;
  title: string;
  movie: Movie[];
}
interface Movie {
  name: string;
  poster: string;
}

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,IonHeader,IonPage,IonTitle,IonToolbar,IonSegment,IonSegmentButton,IonSearchbar,IonItem,IonChip,IonList,IonLabel,IonRow
  },
  setup() {
    const segment = ref<string>('search');
    const genres:Genre[] = [
      {
        id: 1,
        title: 'Comedy',
        movie: [
          {
            name: 'Doctor',
            poster:
              'https://upload.wikimedia.org/wikipedia/en/4/4b/Doctor_2021_poster.jpg',
          },
          {
            name: 'Vaayi Moodi Pesunam',
            poster:
              'https://upload.wikimedia.org/wikipedia/en/4/43/Vaayai_Moodi_Pesavum.jpg',
          },
          {
            name: 'Moodar Koodam',
            poster:
              'https://upload.wikimedia.org/wikipedia/en/e/ee/Moodar_Koodam.jpg',
          },
        ],
      },
      {
        id:2,
        title:'Crime',
        movie:[
          {
            name:"Vada Chennai",
            poster:"https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Vada_Chennai.jpg/220px-Vada_Chennai.jpg",
          },
          {
            name:"Vidudalai",
            poster:"https://upload.wikimedia.org/wikipedia/ta/thumb/e/e8/Viduthalai_%28upcoming_film%29.jpg/250px-Viduthalai_%28upcoming_film%29.jpg"
          },
          {
            name:"Maamanam",
            poster:"https://upload.wikimedia.org/wikipedia/en/1/1b/Maamannan_poster.jpg",
          }
        ]
      },
      {
        id: 3,
          title: "Triller",
          movie:[
            {
              name:"Big Brother",
              poster:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Big_Brother_new_poster.jpg/220px-Big_Brother_new_poster.jpg",
            },
            {
              name:"Monster",
              poster:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Monster_%282022_film%29_poster.jpg/220px-Monster_%282022_film%29_poster.jpg",
            },
            {
              name:"Iratta",
              poster:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Iratta.jpg/220px-Iratta.jpg"
            }
          ]
      },
      {
        id: 4,
          title: "Horror",
          movie:[
            {
              name:"Erza",
              poster:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Ezra_movie_poster.jpg/220px-Ezra_movie_poster.jpg",
            },
            {
              name:"Neelavelicham",
              poster:"https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Neelavelicham_poster.jpg/220px-Neelavelicham_poster.jpg",
            },
            {
              name:"Roomancham",
              poster:"https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Romancham-poster.jpg/220px-Romancham-poster.jpg",
            }
          ],
      }
      
    ]as any;
    
    const selectedGenre=ref<Number|null>(null);

    const selectGenre=(genreId:number)=>{
      selectedGenre.value=genreId;
    };

    const filteredMovies = computed(() => {
      if (selectedGenre.value !== null) {
        const selectedGenreData = genres.find((genre) => genre.id === selectedGenre.value);
        if (selectedGenreData) {
          return selectedGenreData.movie;
        }
      }
       return genres.flatMap((genre) => genre.movie);
    });

    const segmentChanged=(event:CustomEvent)=>{
      segment.value=event.detail.value;
    }
    return {
      segment,
      genres,
      selectedGenre,
      selectGenre,
      filteredMovies,  
      segmentChanged
    };
  },
});
</script>

<style scoped>
.first{
  color:rgb(206, 52, 52);
  
}
.second{
  background-color: rgb(228, 170, 170);
  
}
img{
  display: block;
  height:200px;
  width:200px;
}
.selected-chip{
color:rgb(243, 235, 235);
background-color: rgb(253, 1, 1);
}
</style>

