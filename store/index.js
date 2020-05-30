import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '@/plugins/firebase'

const createStore = () => {
  return new Vuex.Store({
    state: {
      tweets: []
    },
    mutations: {
      ...vuexfireMutations
    },
    actions: {
      setTweetsRef: firestoreAction(({ bindFirestoreRef }) => {
        bindFirestoreRef('tweets', db.collection('tweets'))
      })
    },
    getters: {
      getTweets: (state) => {
        return state.tweets
      }
    }
  })
}

export default createStore
