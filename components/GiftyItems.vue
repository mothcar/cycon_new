<template>
  <div>
    <v-sheet
      class=""
      max-width="100vw"
    >
      <v-slide-group
        v-model="model"
      class="pa-4"
      center-active
      show-arrows
      >
        <v-slide-item
          v-for="n in 5"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? undefined : 'grey lighten-1'"
            class="ma-2"
            
            height="200"
            width="100"
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
            <v-scale-transition>
              <v-img
                max-height="150"
                max-width="150"
                src="https://res.cloudinary.com/dgrpn1aez/image/upload/v1618720058/2202610_tjegsx.jpg"
              ></v-img> 
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>

  </div>
  
</template>

<script>
export default {
  
  props: ['imgUrl'],
  data: ()=>({
    model: null,
  }),

  methods: {
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
  },// computuedd
}
</script>