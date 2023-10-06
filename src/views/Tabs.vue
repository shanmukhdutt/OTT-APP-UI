<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet/>
                <ion-tab-bar>
                    <ion-tab-button shape="round" tab="HomePage" href="/tabs/HomePage">
                          Home
                    </ion-tab-button>
                    <ion-tab-button shape="round" tab="TeluguMovies" color="" href="/tabs/TeluguMovies">
                          Telugu 
                    </ion-tab-button>
                    <ion-tab-button shape="round" tab="TamilMovies" href="/tabs/TamilMovies">
                          Tamil
                    </ion-tab-button>
                    <ion-tab-button shape="round" tab="MalayalamMovies" href="/tabs/MalayalamMovies">
                          Malayalam
                    </ion-tab-button>
                    <ion-tab-button shape="round" tab="KannadaMovies" href="/tabs/KannadaMovies">
                          Kannada
                    </ion-tab-button>

                </ion-tab-bar>
            
        </ion-tabs>
    </ion-page>
</template>
<script lang="ts">
import {IonPage,IonTabs,IonTabBar,IonTabButton,IonRouterOutlet} from '@ionic/vue';
export default{
    name:'Tabs',
    components:{
        IonPage,
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonRouterOutlet
    },
}
</script>
<style scoped>
ion-tab-button{
    font-size:20px;
    color:rgb(126, 2, 2);
    background-color: rgb(202, 181, 181);
}
</style>