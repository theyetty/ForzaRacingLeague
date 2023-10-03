<template>
  <v-app>
    <v-row class="video-hero-container">
      <v-col cols="12" class="pa-0">
        <div class="video-responsive">
          <iframe
            src="https://www.youtube.com/embed/em4gv1Ietko?playlist=em4gv1Ietko&loop=1&autoplay=1&mute=1&start=3&end=60"
            frameborder="0" allowfullscreen></iframe>
          <!-- Add the CTA overlay here -->
          <div class="cta-overlay">
            <h1>Welcome to Fantasy Racing League</h1>
            <p class="description-text">
              No matter where you live, we welcome every enthusiast with open arms. We host three
              adrenaline-packed races every week across different leagues
              on both Forza Horizon and Forza Motorsport.
            </p>
            <v-btn @click="scrollToSection" class="mr-3">Learn More</v-btn>
            <v-btn color="secondary" @click="openDiscord">Join Discord</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-main>
      <!-- Main content -->
      <v-container>
        <v-row>
          <v-col cols="12">
            <!-- Set a ref to the heading to be scrolled to -->
            <h1 ref="targetSection">About us</h1>
            <p>We need a description here</p>
          </v-col>

        
          <v-col cols="12">
            <!-- Set a ref to the heading to be scrolled to -->
            <h1 ref="targetSection">Our Races</h1>
            <p>Discover exciting races, join our community, and compete with the best!</p>
          </v-col>
        </v-row>
        <!-- League Race Cards -->
        <v-row>
          <v-row>
            <v-col v-for="card in cards" :key="card.title" cols="12" md="4">
              <v-card>
                <v-img :src="card.image" aspect-ratio="16/9"></v-img>
                <v-card-title>{{ card.title }}</v-card-title>
                <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
                <v-card-text>{{ card.description }}</v-card-text>
                <v-card-actions>
                  <v-btn @click="openLeaderboardModal(card.link)">Current Standings</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <!-- Dialog for displaying leaderboard -->
          <v-dialog v-model="dialog" max-width="600px">
            <Leaderboard :raceType="selectedRaceType" />
          </v-dialog>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- Footer content -->
      <v-container>
        © 2023 Forza Racing League
      </v-container>
    </v-footer>
  </v-app>
</template>

  
<script setup>
import { ref } from 'vue';
import Leaderboard from '@/views/Leaderboard.vue';

const targetSection = ref(null);

const dialog = ref(false);
const selectedRaceType = ref(null);

const scrollToSection = () => {
  if (targetSection.value) {
    targetSection.value.scrollIntoView({ behavior: 'smooth' });
  }
}

const openDiscord = () => {
  window.open('https://discord.gg/nzxbDWfJP', '_blank');
}

const openLeaderboardModal = (raceType) => {
  selectedRaceType.value = raceType;
  dialog.value = true;
};


const cards = ref([
  {
    title: '4 Leaf GT Championship',
    subtitle: 'A GT Championship',
    description: 'A GT Championship currently hosted on Forza Horizon...',
    image: 'path_to_image_1.jpg',
    link: '4leaf-gt-championship'
  },
  {
    title: 'Type 2 Race',
    subtitle: 'Race Subtitle 2',
    description: 'Description for Type 2 Race...',
    image: 'path_to_image_2.jpg',
    link: '/type-2-race'
  },
  {
    title: 'Type 3 Race',
    subtitle: 'Race Subtitle 3',
    description: 'Description for Type 3 Race...',
    image: 'path_to_image_3.jpg',
    link: '/type-3-race'
  }
]);

</script>


<style scoped>
.cta-overlay .v-btn.secondary {
  background-color: #7289da;
  /* Discord's brand color */
  color: white;
}

.cta-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  /* Ensure it's above the video */
}

.cta-overlay h1 {
  font-size: 3vw;
  text-shadow:
    1px 1px 0 #000,
    -1px 1px 0 #000,
    1px -1px 0 #000,
    -1px -1px 0 #000;
  /* This gives a black stroke effect around the text */
  color: white;
  margin-bottom: 20px;
}

.cta-overlay .description-text {
  font-size: calc(1vw + 0.5rem);
  /* Adjusts with view width but has a minimum size */
  color: white;
  /* Assuming the dark theme and video background */
  line-height: 1.5;
  /* For readability */
  max-width: 800px;
  /* So text isn't too wide */
  margin: 0 auto 20px;
  /* Center and provide space below before the buttons */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  /* Add a subtle shadow for better legibility over video */
}



.video-hero-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.video-responsive {
  overflow: hidden;
  padding-top: 56.25%;
  /* 16:9 aspect ratio */
  position: relative;
}

.video-responsive iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  pointer-events: none;
}

.video-responsive::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  pointer-events: none;
  /* ensures the video can still be interacted with */
  pointer-events: all;
}
</style>