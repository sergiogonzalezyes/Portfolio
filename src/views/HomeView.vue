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
                <v-btn tile dark class="text-green mt-8" variant="outlined">Contact me</v-btn> 
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
                  <v-img src="cbtree.png" max-height="300"></v-img>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <h5 class="mt-16">About me</h5>
                <div style="width: 120px">
                  <v-slider v-model="slider2" color="green">

                  </v-slider>
                </div>
                <h4 class="mt-n4">I am a create web designer</h4>
                <h4>and developer</h4>
                <p class="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquet, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquet, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.</p>
              <br />
              <p class="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquet, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquet, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.</p>
              <v-btn tile dark color="green" class="mt-4">
                Download Resume
              </v-btn> 
            </v-col>
            </v-row>  
          </div>
        </v-col>
        <div class="text-center mt-4">
          <h2>What we do</h2>
          <div style="width: 120px; margin: 0 auto">
            <v-slider v-model="slider2" color="green"></v-slider>
          </div>
        </div>
        <v-col cols="12" class="padd" id="portfolio">
          <div class="first" id="project">
            <v-row>
              <v-col cols="12">
                <div class="child">
                  <v-btn icon="fas fa-laptop" color="green" class="text-white"></v-btn>
                  <h3 class="ml-3 mt-4">Web Design</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">Lorem ipsum dolor sit amet <br /> , consectetur adipiscing elit.
                  </p>
                </div>
                <div class="child">
                  <v-btn icon="fas fa-mobile" color="green" class="text-white"></v-btn>
                  <h3 class="ml-3 mt-4">App Design</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">Lorem ipsum dolor sit amet <br /> , consectetur adipiscing elit.
                  </p>
                </div>
                <div class="child">
                  <v-btn icon="fas fa-camera" color="green" class="text-white"></v-btn>
                  <h3 class="ml-3 mt-4">Photography</h3>
                  <p class="text-grey ml-3 mt-4 text-caption">Lorem ipsum dolor sit amet <br /> , consectetur adipiscing elit.
                  </p>
                </div>
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col cols="12" sm="12" id="services">
      <div class="d-flex justify-center mb-6">
        <v-btn color="green" class="mr-2" v-on:click="selectCategory('All')">All</v-btn>
        <v-btn class="mr-2" variant="tonal" v-on:click="selectCategory('web-design')">Web Design</v-btn>
        <v-btn class="mr-2" variant="tonal" v-on:click="selectCategory('database-design')">Database Design</v-btn>
        <v-btn class="mr-2" variant="tonal" v-on:click="selectCategory('photography')">Photography</v-btn>
      </div>
    </v-col>
    <v-col cols="12" sm="12" id="page">
  <div class="home">
    <h1>My Projects</h1>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="project in filteredProjects" :key="project.title">
          <v-card class="mw-auto" max-width="344" height="">
            <v-img :src="project.image" height="200px" cover></v-img>
            <v-card-title>{{ project.title }}</v-card-title>
            <v-card-subtitle>{{ project.category }}</v-card-subtitle>
            <v-card-text>{{ project.description }}</v-card-text>
              <div class="project-links">
              <a :href="project.githubUrl" target="_blank">GitHub</a>
              <a :href="project.liveUrl" target="_blank">Live</a>
            </div>
          </v-card>
        </v-col>
      </v-row>
          </div>
        </v-col>
        <v-col cols="12" id="page">
          <div class="pre">
            <v-row>
              <v-col cols="12" sm="4">
                <v-card class="mw-auto" max-width="344" height="">
                  <v-img src="portrait.jpg" height="200px" cover></v-img>
                  <v-card-title>We provide you the best</v-card-title>
                  <v-card-subtitle>
                    By AAE IdeaPro | 06 Sep 2022
                  </v-card-subtitle>
                  <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ut dolorum, aliquam nisi autem quas sequi fugiat.
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card class="mw-auto" max-width="344" height="">
                  <v-img src="portrait.jpg" height="200px" cover></v-img>
                  <v-card-title>We provide you the best</v-card-title>
                  <v-card-subtitle>
                    By AAE IdeaPro | 06 Sep 2022
                  </v-card-subtitle>
                  <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ut dolorum, aliquam nisi autem quas sequi fugiat.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" id="biog">
          <div class="hire">
            <v-row>
              <v-col cols="12" sm="8">
                <h1 class="mt-9">Hire me for your project today</h1>
                <p class="text-grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Ut dolorum, aliquam nisi autem quas sequi fugiat.
                </p>
              </v-col>
              <v-col>
                <v-btn color="green" class="mt-15">Hire Me</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" sm="12" class="px-16" id="contact">
          <v-row>
            <div class="child">
              <h1>Contact info.</h1>
              <v-btn icon="fas fa-map-marker-alt" class="mt-10" variant="outlined"></v-btn><br />
              <span class="text-caption">Your street SYO, Your Area Dream</span><br />
              <v-btn icon="fas fa-phone-alt" class="mt-10" variant="outlined"></v-btn><br />
              <span class="text-caption">00235 -6547</span><br />
              <span class="text-caption">00235 -6547</span><br />
              <v-btn icon="fas fa-envelope" class="mt-10" variant="outlined"></v-btn><br />
              <span class="text-caption">sergiogonzalezyes@gmail.com</span><br />
              <span class="text-caption">sergiogonzalezyes@gmail.com</span><br />
            </div>
            <v-col cols="12" sm="8">
              <h1 class="mt-8">Send your message</h1>
              <v-divider></v-divider>
              <span class="text-caption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ut dolorum, aliquam nisi autem quas sequi fugiat.
              </span>
              <v-row class="mt-10">
                <v-col>
                  <v-text-field label="Name" persistent-hint variant="outlined"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="Phone No" persistent-hint variant="outlined"></v-text-field>
                </v-col>
              </v-row>
              <v-textarea label="Message" persistent-hint variant="outlined"></v-textarea>
              <v-btn color="green" class="mt-2">Submit Now</v-btn>
            </v-col>
          </v-row>
        </v-col>
    </v-container>
    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent, computed } from 'vue';

// Component
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
import { useMyProjects } from '@/store/myProjects'

export default defineComponent({
  name: 'HomeView',
  setup() {

    const store = useMyProjects();
    const categories = ['All', 'Web Design', 'Database Design', 'Photography'];
    let currentCategory = '';

    const selectCategory = (category) => {
      currentCategory = category.toLowerCase().replace(' ', '-');
    }

    const filteredProjects = computed(() => {
      if (currentCategory === '') {
        return store.projects;
      } else {
        return store.projects.filter(project => project.category.toLowerCase().replace(' ', '-') === currentCategory);
      }
    });

    return {
       slider2: 50,
       categories,
       currentCategory,
       selectCategory,
       filteredProjects,
       items: [
        {img: "portrait.jpg",},
        {img: "front.jpg",},
        {img: "rearqtr.jpg",},
        {img: "subridge.jpg",}
       ]

    }
  },
  components: {
    NavBar,
    FooterView
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


.first {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}

.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}

.imgHover {
  padding: 0 200px;
}

.pre {
  width: 100%;
  height: 380px;
  text-align: center;
  padding: 0 200px;
  background-color: white;
}

.hire {
  width: 100%;
  height: 200px;
  padding: 0 200px;
  background-color: white;
  margin-top: -24px;
}

</style>