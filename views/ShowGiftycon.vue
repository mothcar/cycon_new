<template>
   <div class="white">
    <dlg-app-bar :title='title' />
    

    <v-card height="100vh">
      <v-img :src="giftyData.image_url" class="white"> </v-img>


            <v-btn
              elevation="2"
              @click="goBack"
              class="mb-5"
            >취소</v-btn>

            </v-card>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DlgAppBar from '@/components/DlgAppBar.vue'

export default {
  name: 'Giftycon',
  components: {
    HelloWorld, DlgAppBar
  },

  data: ()=>({
    title:'기프티콘',
    giftyData: {image_url:null}, 
  }),

  methods: {
    isMobile() {
      console.log('methods....')
    },

    goBack() {
      this.$store.dispatch('changeDlgGifty',{newMsg: false})
    },
    

  }, // methods 

  mounted() {
    this.giftyData = this.$store.getters.getGiftyData
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