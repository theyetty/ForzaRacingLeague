<template>
    <div>
      <h1>{{ raceTitle }}</h1>
    </div>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Driver Name
        </th>
        <th class="text-left">
          Points
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="driver in currentSeason" :key="driver.name">
        <td>{{ driver.name }}</td>
        <td>{{ driver.points }}</td>
      </tr>
    </tbody>
  </v-table>

</template>

<script>
import leaderboardData from '@/assets/leaderboardData.json';

export default {
  props: {
    raceType: String
  },
  data() {
    return {
      currentSeason: leaderboardData[this.raceType]?.currentSeason || [],
      lastSeason: leaderboardData[this.raceType]?.lastSeason || [],
      raceTitle: leaderboardData[this.raceType]?.displayName || "Race"
    };
  }
}
</script>
