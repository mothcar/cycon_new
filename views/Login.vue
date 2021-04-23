<template>
  <div class="white">
    <dlg-app-bar :title='title' />
    <!-- <v-flex xs12 sm8 md4> -->
    <v-card class="elevation-3" height='100vh'>
        <v-card-text>
          <v-form>
              <v-text-field
                name="login"
                label="로그인"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                name="password"
                label="비밀번호"
                type="password"
              ></v-text-field>
          </v-form>
        </v-card-text>
        <div class="d-flex justify-center" >
          <v-btn class="mb-5" color="primary" to="/">로그인</v-btn>
        </div>

    </v-card>

        
      <!-- </v-flex> -->
               
  </div>
    
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DlgAppBar from '@/components/DlgAppBar.vue'

export default {
  name: 'Login',
  components: {
    HelloWorld, DlgAppBar
  },

  props: {
      source: String,
   },

  data: ()=>({
    title:'로그인',
  }),

  methods: {
    goBack() {
      this.$store.dispatch('changeDialog',{newMsg: false})
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