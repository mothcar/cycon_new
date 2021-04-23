<template>
  <div class="white">
    <dlg-app-bar :title='title' />
      <v-card class="text-center" height='100vh'>
        
          <div>
            <h1>휴대폰 번호인증</h1>
          </div>

          

          <v-card-actions>
            <v-col cols="10">
              <v-text-field
                label="휴대폰번호를 입력해주세요"
                type="number"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-card-actions>

          <v-card-actions>
            <v-btn
              outlined
              text
              class="mx-auto"
              @click="sendPhoneNo"
            >
              인증번호 발송
            </v-btn>
          </v-card-actions>

          <v-card-actions>
            <v-col cols="10">
              <v-text-field
                label="인증번호를 입력해주세요"
                type="number"
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-card-actions>

          <v-btn
              elevation="2"
              @click="goSignUp"
              class="mb-5"
            >test Sing up</v-btn>


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
  name: 'SMS',
  components: {
    HelloWorld,DlgAppBar
  },

  data: ()=>({
    title:'휴대폰 번호인증',
  }),

  methods: {
    goBack() {
      this.$store.dispatch('changeDialog',{newMsg: false})
    },
  
    sendPhoneNo() {
      console.oog('Send phone Number....')
    },

    goSignUp() {
      this.$store.dispatch('changeComp',{newMsg:'signup'})
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
  }, // computued


}
</script>