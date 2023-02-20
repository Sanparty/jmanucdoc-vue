<template>
   <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
          <h2 class="heading col-12">{{ heading }}</h2>
          <p class="mainp col-12">
            {{ message }}
          </p>
        </div>
        <div class="col-12 col-md-6">
            <img class="bio-image img-fluid" src="../assets/images/agent_talking_to_clients.jpeg" alt="Real Estate Agent Talking To Clients" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "welcomeJohn",
        props: {
            heading: String,
            message: String
        }
    }
</script>

<style scoped>
.heading {
    font-weight: bold;
    color: inherit;
    text-align: left;
    font-size: 50px;
    text-transform: capitalize;
}
.mainp {
    text-align: left;
    font-size: 1.5rem;
    background-color: #f7f7f7;
    border: none;
    margin-top: 5px;
    margin-bottom: 1rem;
}
.bio-image {
    border-radius: 10px;
}
@media screen and (min-width: 992px) {
    .heading {
        font-size: 80px;
    }
}
</style>