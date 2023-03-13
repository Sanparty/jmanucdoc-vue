<template>
    <div class="container-fluid">
        <div class="row main d-flex">
            <div class="bio-image col-12 py-5"
            :style="
                {
                backgroundImage: image,
                backgroundPosition: bgPosition,
                backgroundSize: 'cover'
                }"
            >
                <span class="background-image" role="img" :aria-label="altimage"> </span>
                <div class="container-md"><h1 class="latest">{{ heading }}</h1></div>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutHeadingSmall",
        props: {
            image: String, 
            bgPosition: String,
            heading: String,
            altimage: String
        },
    }
</script>

<style scoped>
.container-fluid {
  background-color: #272727;
  height: 100%;
  text-align: left;
}
.main {
    margin-top: 50px;
}
.bio-image {
    height: 100%;
}
h1.latest {
  color: #f7f7f7;
  font-weight: bold;
  text-align: left;
  font-size: 3rem;
  margin-top: 10px;
  align-content: center;
}
.buying-link {
    color: #c1202f;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
}
@media screen and (min-width: 992px) {  
    .main {
        margin-top: 70px;
    }
    h1.latest {
          font-size: 5rem;
    }
}
@media screen and (min-width: 1200px) {  
    .main {
        margin-top: 50px;
    }
}


</style>