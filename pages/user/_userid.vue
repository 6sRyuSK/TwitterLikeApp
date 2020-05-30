<template>
  <div>
    <h1>{{ $route.params.userid }}</h1>
    <h2>{{ user.username }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    console.log(this.$route.params)
  },
  created () {
    console.log('created!!!')
    this.user = this.getUserData(this.$route.params.userid)
    console.log(this.user)
  },
  methods: {
    getUserData (userid) {
      return {
        userid,
        username: userid + 'さん'
      }
    }
  }
}
</script>

<style>

</style>
