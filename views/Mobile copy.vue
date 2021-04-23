<template>
  <!-- <div class="home"> -->
    <v-container>
    
    <!-- This is Mobile -->
    <div class="d-flex row mt-3 ml-3 mb-6">
      <div class="d-flex flex-column justify-start mr-2">
        <div class="d-flex justify-start mr-2 mb-2" style="font-size:15px">사용가능금액</div>
        <div>
          <v-btn class="ml-3"  depressed>
            충전
          </v-btn>
          <v-btn class="ml-1"  depressed>
            출금
          </v-btn>
        </div>
          
      </div>
      
      <div class="d-flex row justify-end align-center mt-4 mr-8">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <h1>{{account}}<span style="font-size:15px">원</span> </h1>
      </div>
    </div>
    
    <div class="d-flex justify-start ml-3 mt-5">
      보유기프티콘
    </div>

    <div class="d-flex flex-row">
      <!-- <v-img
        max-height="150"
        max-width="150"
        src="https://res.cloudinary.com/dgrpn1aez/image/upload/v1618720058/2202610_tjegsx.jpg"
      ></v-img> -->
      <gifty-items/>




      
    </div>

    <div>
      <div class="d-flex justify-center align-center mb-2">
      <span style="font-size: 48px; color: gray">
          <i class="far fa-plus-square" @click="addGoods"></i>
        </span>
      </div>



      <template v-if="showDlg">
          <dlgimg />
          
      </template>
    </div>
    


    <div class="d-flex justify-start mt-5 ml-3">
      사용가능한 상점
    </div>

    <v-card>
      <v-tabs
        background-color=" accent-0"
        centered
        v-model="tab"
        slider-size=2
      >
        <v-col cols="6">
          <v-tab href="#tab-1">지도에서 구매</v-tab>
        </v-col>
        <v-col cols="6">
          <v-tab href="#tab-2">리스트로 구매</v-tab>
        </v-col>
        
        
      </v-tabs>

      <v-tabs-items v-model="tab"  :touchless="true">
        <v-tab-item :value="'tab-1'">
          <v-card flat>
            <vue-daum-map
              :appKey="appKey"
              :center.sync="center"
              :level.sync="level"
              :mapTypeId="mapTypeId"
              :libraries="libraries"
              @load="onLoad"
              style="width:100vw;height:70vh;"/>  
          </v-card>
        </v-tab-item>

        <v-tab-item :value="'tab-2'">
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
        <!-- <v-tab-item
          v-for="i in 2"
          :key="i"
          :value="'tab-' + i"
        >
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item> -->
      </v-tabs-items>
    </v-card>

    <!-- 광고 -->
    <v-img 
          class="mt-2"
          style="margin-bottom: 0px"
          width="100vw"
          src="https://res.cloudinary.com/mothcar/image/upload/v1618992431/cycon/coopang_ad.jpg"
        ></v-img>
  

  
      <!-- <v-overlay :value="overlay" :absolute="absolute">
        <router-view/>
      </v-overlay> -->

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <div id="app">
          <component  :is="currentComponent" :swap-component="swapComponent"></component>
        </div>
      </v-dialog>

    </v-container>
  <!-- </div> -->
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

import HelloWorld from '@/components/HelloWorld.vue'
import VueDaumMap from 'vue-daum-map'
import Dlgimg from '@/components/Dlgimg.vue'
import ImageShow from '@/views/ImageShow.vue'
import Over1 from '@/views/Over1.vue'
import Over2 from '@/views/Over2.vue'
import GiftyItems from '@/components/GiftyItems.vue'




export default {
  name: 'Main',
  components: {
    HelloWorld, VueDaumMap, Dlgimg, ImageShow, Over1, Over2, GiftyItems
  },

  data: () =>({
    text: 'test',
    tab: null,
    value: 1,
    account: 1000, 
    appKey: process.env.VUE_APP_KAKAO_MAP, // 테스트용 appkey
    center: {lat:33.450701, lng:126.570667}, // 지도의 중심 좌표
    level: 3, // 지도의 레벨(확대, 축소 정도),
    mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
    libraries: [], // 추가로 불러올 라이브러리
    map: null, // 지도 객체. 지도가 로드되면 할당됨.

    // showDlg: false, 
    overlay: false, 
    absolute: true,

    // Dialog ############
    // dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    currentComponent: 'image-show',
    giftycons: [],

    model: null,

  }), // data 

  computed: { 
    //   ...mapState({
    //  title: state => state.barTitle, 
    //  }),
      showDlg() {
        // console.log('Compiutdd... ', this.$store.getters.getDlgState)
        return this.$store.getters.getDlgState
        // return true
      },

      dialog() {
        return this.$store.getters.getDialogState
      },

  }, // computed 

  methods: {
    swapComponent(component) {
      this.currentComponent = component;
    },


    addGoods() {
      // this.$store.dispatch('changeDlg', { newMsg: true })

      // Use Dialog 
      // this.$store.dispatch('changeDialog',{newMsg: true})
      this.$store.dispatch('changeDlg',{newMsg: true})

      // Case OVERLAY ##########################################
      // this.overlay = !this.overlay
      // this.$router.push('/overone')

      // console.log('this.showDlg ....', this.showDlg)
    },

    onLoad (map) {
      this.map = map
      // console.log("this.map"+map);
      // this.map = new kakao.maps.Map(container, options);
       //마커추가하려면 객체를 아래와 같이 하나 만든다.
      // var marker = new kakao.maps.Marker({ position: map.getCenter() }); 
      // marker.setMap(map); 
      //  33.450701, 126.570667  37.4760587,126.9810742
      this.center = {lat:37.4760587, lng:126.9810742}

      // var marker = window.kakao.maps.Marker({
      //   map: map,
      //   position: window.kakao.maps.LatLng(37.4760587,126.9810742)
      // });

      // marker.setMap(map); 


      // this.relayout()
    },

    relayout() {    
    
        // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
        // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다 
        // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
        this.map.relayout();
    },

    



  }, //methods 

  async mounted() {
    console.log('mounted....')

    // let row = await axios.get(`${process.env.VUE_APP_SERVER_URL}/giftycon/getAllGiftycon`)
    // let result = row.data.data.item 
    // console.log('Server array : ', result)
    // this.giftycons = result

  }, // mounted 

  created() {
    // console.log('Mobile created......')
  }, // created 

}
</script>