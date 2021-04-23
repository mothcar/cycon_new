<template>
  <div >
    <v-card height="100vh">
      <v-img :src="imgUrl" class="white"> </v-img>

      <div class="white text-center pa-5" >
        <v-btn
        class="mr-2"
        elevation="2"
        @click="goBack" >취소</v-btn>
      <v-btn
        elevation="2"
        @click="submit">저장</v-btn>

      </div>

    </v-card>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'ImageShow',
  components: {
    HelloWorld
  },

  props: [],

  data: ()=>({
  }),

  watch: {
    selectedFile: function (val) {
      console.log('Watch val : ', val)
    }
  },

  methods: {
    goBack() {
      this.$store.dispatch('changeDialog',{newMsg: false})
    },

    submit() {
      let image = this.$store.getters.getStoreFile 
      // console.log('Test : ', test)

      const formData = new FormData();
        // formData.append('file', this.selectedFile);

        // formData.append('upload_preset', 'khtvl2yr');
        // formData.append('Access-Control-Allow-Origin', '*');



        // formData.append('upload_preset', 'docs_upload_example_us_preset');
        // // formData.append('upload_preset', 'ikaq2ngf');
        // formData.append("api_key", "671637223366122");

        // formData.append('file', this.selectedFile, uuidv4()+'.jpg');
        // formData.append('folder:', '96a7a1d2e5ffe4254dd7bc74bb2aa6d1');
        formData.append('file', image);
        formData.append('upload_preset', 'khtvl2yr');  
        axios.post('https://api.cloudinary.com/v1_1/mothcar/upload', formData)

        // this.$axios.post('https://api.cloudinary.com/v1_1/mothcar/upload', formData )
        // axios.post('https://api.cloudinary.com/v1_1/mothcar/image/upload', formData )
        // axios.post('https://api.cloudinary.com/v1_1/mothcar/upload', formData )
        .then(res=>{
          // console.log('server response : ', res)
          if (res.status == '200') {
            // this.$q.loading.hide()
            console.log('@@@@ Image url: ', res.data.secure_url)
            this.saveToServer(res.data.secure_url)
            
            // this.image_data = res.data.secure_url
            this.$store.dispatch('changeDialog',{newMsg: false})
          }
        })
    },

    saveToServer(url) {
      let params = {
        // user_id : 'test_user_id',
        type: 'gifitycon',
        giftycon_name: '스타벅스 키프티콘',
        expiry_date: '2021.04.30',
        pin_no: '1234567890',
        image_url: url,

      }

      axios.post(`${process.env.VUE_APP_SERVER_URL}/giftycon/createGiftycon`, params).then(res=>{
        console.log('@ Server res : ', res.data)
      })
    },

    

  }, // methods 

  mounted() {
    // console.log('Show Image mounted : ', this.$route.params.data)
  },

  created() {
    // console.log('Show Image cteated....')
    
  },

  computed: {
    imgUrl() {
      return this.$store.getters.getImageUrl
    },

  },


}
</script>