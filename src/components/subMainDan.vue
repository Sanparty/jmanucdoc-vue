<template>
  <div class="container-fluid mainimage subpage d-flex flex-column"
      :style="
                {
                backgroundImage: image,
                backgroundPosition: bgPosition,
                backgroundSize: bgSize,
                }"
  >
    <span class="background-image" role="img" :aria-label="`${ altimage }`"> </span>
    <div class="mainbio flex-grow-1">
      <h1 class="subheading">{{ title }}</h1>
    </div>
    <div class="mainbio sub-bio">
      <h2 class="contactsub">{{ contact.contactName }}</h2>
      <h3 class="brokersub">{{ contact.contactTitle }}</h3>
    </div>
    <div class="byline">{{ contact.contactMessage }}</div>
    <div class="contact-email">
      <a :href="`mailto:${contact.contactEmail}`">{{ contact.contactEmail }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import danContact from "@/js/components/danContact";
import { defineComponent } from "vue";
export default defineComponent ({
  Name: "SubMainJohn",
  data() {
    return {
      contact: danContact,
    };
  },
  props: {
    title: String,
    image: String, 
    bgPosition: String,
    heading: String,
    altimage: String,
    bgSize: String
  }
});
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 50px;
}
h2 {
  color: #cc2a38;
  text-transform: uppercase;
  font-weight: bold;
}
.mainimage {
  height: 100vh;
  width: 100%;
}
.mainbio,
.mainbio h1 {
  color: #f7f7f7;
  /* text-shadow: 2px 2px 2px #272727; */
}
.mainbio {
  margin-top: 40%;
}
.textBackground {
  background-color: rgb(100, 100, 100, 0.50);
  border-radius: 10px;
  padding: 3px;
}
.byline {
  color: #f7f7f7;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bold;
  /* text-shadow: 2px 2px 2px #272727; */
}
.contact-email {
  color: #f7f7f7;
  margin-bottom: 30%;
}
.contact-email a {
  color: #f7f7f7;
  text-decoration: none;
}
.subpage {
    text-align: left;
    background-size: cover;
    height: 100vh;
    width: 100%;
}
.subheading {
    font-size: 4rem;
}
.contactsub {
    text-transform: capitalize;
    color: #f7f7f7;
    font-size: 2.5rem;
    margin-bottom: 0;
}
.brokersub {
    text-transform: uppercase;
    color: #c1202f;
    font-weight: bold;
}
.sub-bio {
    margin-top: 10%;
}
@media screen and (min-width: 576px) {
   h1,
  .subheading {
        font-size: 4rem;
    }
    .mainbio {
        margin-top: 20%;
    }
    .contact-email {
        margin-bottom: 10%;
    }
}
@media screen and (max-height: 450px) {
  .mainbio h1 {
    margin-top: 10px;
  }
  .mainbio {
    flex-grow: 0;
  }
  .sub-bio {
    padding-bottom: 0;
    margin-bottom: 0;
    margin-top: 5%;
  }
}

@media screen and (min-width: 992px) {
  h1,
  .subheading {
        font-size: 8rem;
  }
  .byline {
    font-size: 2rem;
  }
  .contact-email {
    font-size: 1.5rem;
  }
  .subpage {
        /* background-image: url(../assets/images/homeforsale.jpg);
        background-size: cover;
        background-position: left top; */
        height: auto;
        /* padding: 10px; */
  }
}
</style>