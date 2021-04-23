<template>
  <div class="home" style="margin:60px 0">
    <!-- This is Mobile -->
    <!-- <v-container fluid> -->
      <router-view></router-view>
    <!-- </v-container> -->
    
      


    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Mobile from './Mobile.vue'
import Desktop from './Desktop.vue'
import Maptest from './Map_test.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, Mobile, Desktop, Maptest
  },

  methods: {
    // is_mobile() {
    //   var whether = this.$isMobile()

    //   return whether
    // }
    is_mobile() {
      // console.log('Excuted is_mobile.....')
      if(this.$isMobile()) {
        this.$router.push('/mobile').catch(()=>{});
      } else {
        // this.$router.push('/desktop')
        this.$router.push('/mobile').catch(()=>{});
      }
    },

    

  },

  mounted() {
    // console.log('Router name : ', this.$route.name)
    if(this.$route.name == 'ImageShow'|| this.$route.name=='Desktop') {
      return
    } else {
      this.is_mobile()
    }
    
  }, // mounted 

  
  created() {
    // console.log('cteated....')
    // console.log(this.$isMobile())
    
  }, // created 


}
</script>