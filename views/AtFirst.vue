<template>
<v-container>

    <div>
      <h1>This is Sample</h1>
    </div>

  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Sample',
  components: {
    HelloWorld
  },

  data: ()=>({

  }),

  methods: {
    isMobile() {
      console.log('methods....')
    },

    

  }, // methods 

  mounted() {
  }, // mounted

  created() {
    console.log('cteated....')
  }, // created 

  computed: {
    test() {
      console.log('This TEST Function is composed for DATA property')
    } 
  },// computued


}
</script>