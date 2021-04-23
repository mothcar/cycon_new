<template>
<v-container>

    <div>
      <h1>This is Sell</h1>
    </div>

  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Sell',
  components: {
    HelloWorld
  },

  methods: {
    isMobile() {
      console.log('methods....')
    },

    

  },

  created() {
    console.log('cteated....')
  }


}
</script>