<template>
        <!-- Bottom Navigation -->
    <v-bottom-navigation
      :value="value"
      color="primary"
      position: fixed
    > 
      <div class="pt-2 pb-5 mb-1">
        <v-btn color="white" @click="goHome()">
            <span>홈</span>
            <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn color="white" @click="goSell()">
            <span>판매</span>
            <v-icon>mdi-store</v-icon>
        </v-btn>

        <v-btn color="white" @click="goFavor()">
          <span>즐겨사용</span>
          <v-icon color="red accent-3">mdi-heart</v-icon>
        </v-btn>

        <v-btn color="white" @click="goPartner()">
          <span>제휴/가맹</span>
          <v-icon>mdi-phone</v-icon>
        </v-btn>

        <v-btn color="white" @click="goMy()">
          <span>내정보</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </div>
    </v-bottom-navigation>
</template>

<script>
export default {
    props: [],

    data: ()=>({
      value: 1, 
    }),

    methods: {
        goHome() {
          this.$router.push('/')
          this.pageTitle = '사이콘'
          this.$store.dispatch('changeTitle', { newMsg: '사이콘' })
        },
        goSell() {
          this.$router.push('/sell')
          this.pageTitle = '판매'
          this.$store.dispatch('changeTitle', { newMsg: '판매' })
        },
        goFavor() {
          this.$router.push('/favor')
          this.pageTitle = '즐겨구입'
          this.$store.dispatch('changeTitle', { newMsg: '즐겨구입' })
        },
        goPartner() {
          this.$router.push('/partner')
          this.pageTitle = '제휴 및 가맹'
          this.$store.dispatch('changeTitle', { newMsg: '제휴 및 가맹' })
        },

        goMy() {
        // this.$router.push('/mypage').catch(err => {
        //   console.log(err)
        // })
          this.$router.push({ name: 'MyPage'})
          this.pageTitle = '내정보'
          this.$store.dispatch('changeTitle', { newMsg: '내정보' })
        },
    }
}
</script>