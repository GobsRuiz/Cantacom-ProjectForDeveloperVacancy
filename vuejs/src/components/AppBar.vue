<template>
  <v-app-bar id="header" app height="450px" src="../assets/header/banner.jpg.png">
    <!-- Container -->
    <div class="container d-flex justify-space-between">
      <!-- Left content -->
      <div id="header-leftContent" class="d-flex flex-column justify-center pr-10">
          <!-- Img -->
          <img src="../assets/header/logo.png" alt="Notifly" class="mb-5">

          <!-- p -->
          <p class="white--text text-subtitle-1 mb-7">
            A great new free psd theme to showcase your new application
          </p>

          <!-- Platforms -->
          <div>
            <span class="header-leftContent-platforms-icons rounded-circle mr-2 pa-2">
                <v-icon color="#decfb5">
                    mdi-apple
                </v-icon>
            </span>
            <span class="header-leftContent-platforms-icons rounded-circle mr-2 pa-2">
                <v-icon color="#decfb5">
                    mdi-android
                </v-icon>
            </span>
            <span class="header-leftContent-platforms-icons rounded-circle pa-2">
                <v-icon color="#decfb5">
                    mdi-microsoft-windows
                </v-icon>
            </span>
          </div>
      </div>

      <!-- Right content -->
      <div id="header-rightContent" class="d-flex align-end">
        <img src="../assets/header/cell.png" alt="celular">
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {};
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
#header-leftContent{
    max-width: 400px;
}

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
}





/* Responsive */
/* 700 */
@media (max-width: 700px) {
    /* Container */
    .container{
        flex-direction: column;
    }



    /* Left content */
    #header-leftContent{
        padding-top: 10px;
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
</style>