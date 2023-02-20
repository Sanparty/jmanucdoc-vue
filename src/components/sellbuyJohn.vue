<template>
<div class="row">
     <div class="col-12 col-lg-6 mb-3">
        <img class="bio-image img-fluid" src="../assets/images/agent_showing_home.jpeg" alt="Real Estate Agent Showing Home To Clients" />
    </div>
    <div class="col-lg-6 d-flex flex-column justify-content-center">
        <div v-for="pledge in pledges" :key="pledge.message">
            <div class="d-flex flex-column" >
            <p v-if="pledge.headingMessage" >
                    <span class="cta-start">{{ pledge.headingMessage }}</span> {{ pledge.message }}
                    <i class="fa fa-arrow-right cta-arrow" aria-hidden="true"></i>
                </p>
            
            <p class="mainmessage" v-if="pledge.mainMessage">
           {{ pledge.message }}<br />
            <span class="mainp mt-3">{{ pledge.mainMessage }}
            </span>
            </p> 
            </div>
        </div>
    </div>
   
</div>
</template>

<script>
    export default {
        name: "sellbuyJohn",
        props: {
            pledges: Object
        }
    }
</script>

<style scoped>
p {
    text-align: left;
}
.cta-start {
    color:#c1202f;
    font-size: 1.5rem;
    font-weight: bold;
}
.cta-arrow {
    color:#c1202f;
}
.bio-image {
    border-radius: 10px;
    margin-top: 1.5em;
}
.mainmessage {
    font-weight: 500;
}
.mainp {
    font-size: 1.5rem;
    background-color: #f7f7f7;
    border: none;
    margin-top: 5px;
}
@media screen and (min-width: 576px)  {
    .content {
        height: 100%;
    }
    .bio-image {
        margin-top: auto;
    }
}
@media screen and (min-width: 1400px) {
    .mainmessage {
        font-size: 1.15rem;
    }
}
</style>