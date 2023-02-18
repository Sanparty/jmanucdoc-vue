  <template>
  <div
    class="
      container-fluid
      mainimage
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <div class="mainbio flex-grow-1 text-center">
      <h1>{{ contact.johnName }}</h1>
      <h2>{{ contact.johnTitle }}</h2>
    </div>
    <div class="byline">{{ contact.johnMessage }}</div>
    <div class="john-email">
      <a :href="`mailto:${contact.johnEmail}`">{{ contact.johnEmail }}</a>
    </div>
  </div>
</template>

<script>
import johnContact from "../js/components/johnContact.js";
export default {
  Name: "MainJohn",
  data() {
    return {
      contact: johnContact,
    };
  },
};
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
  background-image: url(../assets/images/AdobeStock_16789283_New.jpg);
  background-size: cover;
  background-position: center top;
  height: 100vh;
  width: 100%;
  /* padding: 10px; */
}
.mainbio,
.mainbio h1 {
  color: #f7f7f7;
  /* text-shadow: 2px 2px 2px #272727; */
}
.mainbio {
  margin-top: 40%;
}
.byline {
  color: #f7f7f7;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bold;
  /* text-shadow: 2px 2px 2px #272727; */
}
.john-email {
  color: #f7f7f7;
  margin-bottom: 30%;
}
.john-email a {
  color: #f7f7f7;
  text-decoration: none;
}


@media screen and (min-width: 576px) {
  h1 {
    font-size: 4rem;
  }
  .mainbio {
    margin-top: 20%;
  }
  .john-email {
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
  h1 {
    font-size: 8rem;
  }
  .byline {
    font-size: 2rem;
  }
  .john-email {
    font-size: 1.5rem;
  }
}
</style>