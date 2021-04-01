<template>
  <v-app-bar id="header" height="450" src="../assets/header/banner.jpg.png">
    <!-- Container -->
    <div class="container d-flex justify-space-between">
      <!-- Left content -->
      <div id="header-leftContent" class="d-flex flex-column justify-center py-0 pr-10" style="border: 1px solid red;">
          <!-- Img -->
          <img src="../assets/header/logo.png" alt="Notifly" class="mb-5">

          <!-- p -->
          <p class="white--text text-subtitle-1 mb-7">
            A great new free psd theme to showcase your new application
          </p>

          <!-- Platforms -->
          <div class="d-flex">
              <v-col cols="1" class="pa-0 pr-13" v-for="icon in icons" :key="icon">
                <v-icon class="header-leftContent-platforms-icons rounded-circle pa-2" color="#decfb5">
                    {{icon}}
                </v-icon>
              </v-col>
          </div>
      </div>

      <!-- Right content -->
      <div id="header-rightContent" class="d-flex align-end" style="border: 1px solid red;">
        <img src="../assets/header/cell.png" alt="celular">
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        icons: [
            "mdi-apple",
            "mdi-android",
            "mdi-microsoft-windows",
        ]
    })
};
</script>

<style scoped>
/* Header */
#header{
    border-top: 6px solid var(--primary);
}

/* Container */
.container{
    height: 100%;
}



/* Left content */
/* Logo */
#header-leftContent img{
    width: 150px;
}

/* Platforms */
/* Icons */
.header-leftContent-platforms-icons{
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
}
.header-leftContent-platforms-icons:hover{
    color: #fff;
    background-color: var(--primary);
}



/* Right content */
/* Logo */
#header-rightContent img{
    width: auto;
    height: 320px;

    transform: translateY(10px);
}





/* Responsive */
/* 900 */
@media (max-width: 900px) {
    /* Container */
    .container{
        flex-direction: column;
    }



    /* Right content */
    #header-rightContent{
        justify-content: flex-end;
    }
    #header-rightContent img{
        width: auto;
        height: 200px;
    }
}

/* ********** - 450 */
@media (max-width: 450px){
    /* Right content */
    /* img */
    #header-rightContent img{
        width: auto;
        height: 150px;
    }
}

/* ********** - 300 */
@media (max-width: 300px){
    /* Left content */
    /* Logo */
    #header-leftContent img{
        width: 120px;
    }



    /* Right content */
    /* img */
    #header-rightContent img{
        width: auto;
        height: 120px;
    }
}
</style> 