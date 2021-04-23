<template>
    <v-row justify="space-around">
      <v-col cols="auto">
            <v-card >
              <v-card-title class="headline">
                기프티콘을 등록하시겠어요?
              </v-card-title>
              <v-card-text> 스마트폰내에 여러 앱에 선물받은 기프티콘을 이 곳 한곳에 등록하고 편하게 써보세요.</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  text
                  @click="disagree"
                  >
                  취소
                </v-btn>
                <!-- <v-btn
                  color="green darken-1"
                  text
                  
                >
                  등록
                </v-btn> -->
                
                <label class="custom-file-upload" @click="ok">
                    <input type="file" @change="onFileChanged"/>
                    등록
                </label>
              </v-card-actions>
            </v-card>
      </v-col>
    </v-row>
</template>

<script>
import axios from 'axios';

export default {
    props: ['title'],
    data: ()=>({
      selectedFile: null,
    }), //data 

    methods: {
      ok() {
        this.$store.dispatch('changeDlg', { newMsg: false })
        
      },

      disagree() {
        this.$store.dispatch('changeDlg', { newMsg: false })
      },

      onFileChanged (event) {
        this.selectedFile = event.target.files[0]
        let imgUrl = URL.createObjectURL(this.selectedFile)
        // console.log('Type : ', typeof this.selectedFile)
        this.$store.dispatch('setImageUrl', {newMsg: imgUrl})
        this.$store.dispatch('setStoreFile', {newMsg: this.selectedFile})
        let data = event.target.files[0]
        // console.log('Image Url : ', imgUrl)

        // Open New Window ##############################
        // let routeData = this.$router.resolve({name: 'ImageShow', params: {data: 'got it?'}});
        // window.open(routeData.href, '_blank');

        // Use Dialog 
        this.$store.dispatch('changeDialog',{newMsg: true})
        // console.log('Is This Activate???')

        // Case OVERLAY ##########################################
        // this.overlay = !this.overlay
        // this.$router.push('/overone')

        // this.onUpload()
      },

      onUpload() {
        const formData = new FormData();
        // formData.append('file', this.selectedFile);

        // formData.append('upload_preset', 'khtvl2yr');
        // formData.append('Access-Control-Allow-Origin', '*');



        // formData.append('upload_preset', 'docs_upload_example_us_preset');
        // // formData.append('upload_preset', 'ikaq2ngf');
        // formData.append("api_key", "671637223366122");

        // formData.append('file', this.selectedFile, uuidv4()+'.jpg');
        
        formData.append('file', this.selectedFile);
        formData.append('upload_preset', 'khtvl2yr');  
        axios.post('https://api.cloudinary.com/v1_1/mothcar/upload', formData)

        // this.$axios.post('https://api.cloudinary.com/v1_1/mothcar/upload', formData )
        // axios.post('https://api.cloudinary.com/v1_1/mothcar/image/upload', formData )
        // axios.post('https://api.cloudinary.com/v1_1/mothcar/upload', formData )
        .then(res=>{
          // console.log('server response : ', res)
          if (res.status == '200') {
            // this.$q.loading.hide()
            // console.log('@@@@ Image url : ', res.data.secure_url)
            // this.image_data = res.data.secure_url
          }
        })
        // console.log('Upload....')





        // axios.get('/api/data').then(res => { console.log(res.data) })

        // const formData = new FormData()
        // formData.append('myFile', this.selectedFile, this.selectedFile.name)
        // axios.post('my-domain.com/file-upload', formData)
      }



    }, //methods 

    computed: { 
    //   ...mapState({
    //  title: state => state.barTitle, 
    //  }),
    }, // computed 
}
</script>

<style scoped>
  input[type="file"] {
      display: none;
  }
  .custom-file-upload {
      border: 1px solid #ccc;
      display: inline-block;
      padding: 6px 12px;
      cursor: pointer;
  }
</style>