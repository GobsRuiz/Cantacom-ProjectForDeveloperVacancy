<template>
  <!-- Second section -->
  <section id="secondSection" class="py-10">
    <!-- Container -->
    <row id="row" class="container d-flex justify-space-between">
      <!-- Left content -->
      <v-col cols="12" md="5" id="leftContent">
        <h3 class="text-h6 mb-3">Get notified of any updates!</h3>
        <p class="text-subtitle-1 mb-5 white2-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          repudiandae tempore recusandae aspernatur architecto! Cupiditate
          doloremque nesciunt animi ducimus aliquam adipisci unde delectus
          eligendi itaque vero, dolores commodi. Ducimus, explicabo!
        </p>

        <div id="leftContent-form" class="d-flex">
          <input type="text" id="leftContent-form-input" placeholder="Email Address">
          <v-btn color="#2ecc71" dark elevation="0" height="50" class="text-capitalize text-h6" id="leftContent-form-btn">
              Notify
          </v-btn>
        </div>
      </v-col>

      <!-- right content -->
      <v-col cols="12" md="auto" class="text-center" id="rightContent">
          <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            width="400"
            height="260"
            poster="../assets/header/banner.jpg.png"
            data-setup="{}"
          >
            <source src="../assets/video.mp4" type="video/mp4" />
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <a href="https://videojs.com/html5-video-support/" target="_blank"
                >supports HTML5 video</a
              >
            </p>
          </video>
      </v-col>
    </row>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#secondSection{
    background-color: #e3e3e3;
}



/* Left content */
/* Form */
/* Input */
#leftContent-form-input{
    height: 50px;

    background-color: #fff;
    border: 1px solid #c8c8c8;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    padding: 0 20px;
}

/* Btn */
#leftContent-form-btn{
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}





/* Responsive */
/* 960 */
@media (max-width: 960px) {
  #row{
    flex-direction: column;
    justify-content: center;
  }



  /* Left content */
  #leftContent{
    text-align: center;

    margin-bottom: 30px;
  }

  /* Form */
  #leftContent-form{
    justify-content: center;
  }



  /* Right content */
  #rightContent video{
    width: 100%;
  }
}

/* 550 */
@media (max-width: 550px) {
  /* Left content */
  #leftContent{
    margin-bottom: 0px;
  }
}

/* 450 */
@media (max-width: 500px) {
  /* Left content */
  /* Form */
  #leftContent-form{
    flex-direction: column;
  }

  /* Input */
  #leftContent-form-input{
    border-radius: 20px;

    margin-bottom: 5px;
  }

  /* btn */
  #leftContent-form-btn{
    width: 100px;

    border-radius: 20px;

    margin: 0 auto;
  }
}
</style>