<template>
  <div>
    <!-- <h1>{{ tweets }}</h1> -->
    <div v-for="tweet in tweets" :key="tweet.text">
      <h1>{{ tweet.text }}</h1>
      <h2>{{ tweet.userId || 'unknown name' }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { db } from '~/plugins/firebase.js'

export default {
  computed: {
    ...mapGetters({ tweets: 'getTweets' })
    // tweets () {
    //   return this.$store.state.tweets
    // }
  },
  created () {
    this.$store.dispatch('setTweetsRef')
    console.log(this.tweets)
  }
}

</script>
