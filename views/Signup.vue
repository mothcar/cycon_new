<template>
  <div class="white">
    <dlg-app-bar :title='title' />

    <v-card class="text-center" height='100vh'>
      <v-card-actions>
        <v-col cols="10">
          <v-text-field
            label="이메일"
            type="text"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-card-actions>

      <v-card-actions>
        <v-col cols="10">
          <v-text-field
            label="비밀번호"
            type="password"
            hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-card-actions>

      <v-btn
            elevation="2"
            @click="submit"
            class="mb-5"
          >제출</v-btn>

    </v-card>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DlgAppBar from '@/components/DlgAppBar.vue'

export default {
  name: 'Signup',
  components: {
    HelloWorld, DlgAppBar
  },

  data: ()=>({
    title:'회원가입',
  }),

  methods: {
    goBack() {
      this.$store.dispatch('changeDialog',{newMsg: false})
    },

    submit() {
      console.log('Submit ....')
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