<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
        <div class="head">
            <v-row>
              <v-col cols="5">
                <div style="position: relative" class="mt-16">
                <h1 class="text-grey">Hello,</h1>
                <h1 class="text-white">I'm Sergio Gonzalez</h1>
                <span class="text-grey">I'm a full stack developer</span><br />
                <v-btn tile dark class="text-green mt-8" variant="outlined">Contact me</v-btn>" 
              </div>
              </v-col>
              <v-col cols="2">
                <div style="position: absolute;z-index: 9999;bottom:0;margin-left: auto;margin-right: auto;left:0;right:0;text-align: center;">
                  <v-icon>fas fa-angle-double-down</v-icon>
                </div>
                </v-col>
              <v-col cols="5">
                <div style="position: relative;z-index: 9999;" class="mt-16">
                  <v-img src="portrait.jpg" contain max-height="300"></v-img>
                </div>
              </v-col>
            </v-row>
        </div>
        <v-col cols="12" class="mt-16" id="about">
          <div>
            <v-row>
              <v-col cols="12" sm="6">
                <div class="egg">
                  <!-- <v-img src="" max-height="300"></v-img>    Here you can put a small little icon ,pref png-->
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <h5 class="mt-16">About me</h5>
                <div style="width: 120px">
                  <v-slider v-model="slider2" color="green" label="track-color">

                  </v-slider>
                </div>
                <h4 class="mt-n4">I am a create web designer</h4>
                <h4>and developer</h4>
                <p class="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquet, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquet, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.</p>
              </v-col>
            </v-row>
          </div>
        </v-col>
    </v-container>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Component
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    return {
       slider2: 50,

       items: [
        {img: "portrait.jpg"}
       ]

    }
  },
  components: {
    NavBar
},
});
</script>
<style scoped>

.v-container {
  padding: 16px 0;
}

.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}

.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);  
}

.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);  
}

.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: #4CAF50;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}


</style>