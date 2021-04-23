<template>
  <v-container>

    <div v-if='!isLoggedIn'>
      <v-card
        elevation="2"
        class="mx-auto"
        max-width="344"
        outlined
      >
        <v-card-actions>
          <v-btn
            outlined
            rounded
            text
            class="mx-auto"
            @click="openSMS"
          >
            간편회원가입
          </v-btn>
        </v-card-actions>

        <v-card-text
        class="text-center"
        @click="login"
        >
          <div>로그인</div>
        </v-card-text>

      </v-card>
    </div>

    <div v-else>
      <v-card
        elevation="2"
      >잔액 표시</v-card>
    </div>

      <v-list flat>
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="triggerClick(item.click)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <div v-if='isLoggedIn'>
      <v-card
        elevation="2"
      >로그아웃</v-card>
    </div>
    <v-btn @click="connectServer">test
      </v-btn>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition" >
        <div >
          <!-- <component  :is="currentComponent" :swap-component="swapComponent" ></component> -->
          <component :is="currentComponent"></component>
        </div>
      </v-dialog>
    


  </v-container>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import { mapState } from 'vuex';

import HelloWorld from '@/components/HelloWorld.vue'
import Sms from '@/views/Sms.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'

export default {
  name: 'MyPage',
  components: {
    HelloWorld, Sms, Login, Signup
  },

  data : ()=> ({
    items: [
      {
          title: '공지사항',
          click: 1
      },
      {
          title: '고객센터',
          click: 2
      },
      {
          title: '약관 및 정책',
          click: 3
      },
    ],
    number: null,
    userData: null,  
    isLoggedIn: false, 


  }), //data 

  computed: { 
      dialog() {
        // console.log('Dialog State : ', this.$store.getters.getDialogState)
        return this.$store.getters.getDialogState
      },
      // getCurComp
      currentComponent() {
        return this.$store.getters.getCurComp
      },

  }, // computed 

  methods: {
    swapComponent(component) {
      this.currentComponent = component;
    },

    triggerClick(number) {
      switch(number) {
        case 1:
          this.$router.push('/noti')
          break
        case 2:
          break
        case 3:
          break
        case 4:
          console.log('clicked.. 4')
          break
      }

    },

    openSMS() {
      this.$store.dispatch('changeDialog',{newMsg:true})
      this.$store.dispatch('changeComp',{newMsg:'sms'})
      // this.swapComponent('sms')
    },

    login() {
      this.$store.dispatch('changeComp',{newMsg:'login'})
      this.$store.dispatch('changeDialog',{newMsg:true})
      // console.log('Log in....')
    },

    

  }, // methods 

  async mounted() {
    this.userData = this.$store.getters.getUserData 

    if(this.userData == null) {
      this.isLoggedIn = false
    } else {
      this.isLoggedIn = true
    }


  }, // mounted

  created() {
    // console.log('cteated....')
  }


}
</script>