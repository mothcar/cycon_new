<template>
  <div fluid class="text-center">

    <div id="map" style="width:100%;height:350px;"></div>

    <div >
      
    </div>

    <!-- Bottom Navigation -->
    <v-bottom-navigation
      :value="value"
      color="primary"
      position: fixed
    > 
      <div class="pt-2 pb-5 mb-1">
        <v-btn>
          <span>홈</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn>
          <span>판매</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn>
          <span>즐겨사용</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>

        <v-btn>
          <span>제휴/가맹</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>

        <v-btn @click="goMy()">
          <span>내정보</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </div>
    </v-bottom-navigation>

    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Desktop',
  components: {
    HelloWorld
  },

  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    map : null,
    value: 1, 
  }),

  methods: {
    isMobile() {
      console.log('methods....')
    },

    

    initMap() { 
      var container = document.getElementById('map'); 
      var options = { center: new kakao.maps.LatLng(33.450701, 126.570667), level: 3 }; 
      var map = new kakao.maps.Map(container, options);
      this.map = map
       //마커추가하려면 객체를 아래와 같이 하나 만든다.
      var marker = new kakao.maps.Marker({ position: map.getCenter() }); marker.setMap(map); 
      this.relayout()
    },

    relayout() {    
        // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
        // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다 
        // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
        this.map.relayout();
    },

    addScript() { 
      const script = document.createElement('script'); 
      /* global kakao */ 
      script.onload = () => kakao.maps.load(this.initMap); 
      script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?appkey=535669780702eb1330ac0c3d844de6c5&autoload=false'; 
      document.head.appendChild(script); 
    },

    goMy() {
      // this.$router.push('/mypage').catch(err => {
      //   console.log(err)
      // })
      this.$router.push({ name: 'MyPage'})
    },


  }, // methods 

  mounted() {
    // this.addScript()
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      this.addScript();
    }
    
    
    // this.initMap()
  },

  created() {
    console.log('Main cteated....')
  }, // created 


}
</script>