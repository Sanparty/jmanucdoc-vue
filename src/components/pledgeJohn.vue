<template>
    <div class="row row-flex">
        <div v-for="pledge in pledges" :key="pledge.message" class="col-12 col-sm-6 my-3">
             <div class="info content p-3">
                {{ pledge.message }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pledgeJohn",
        props: {
            pledges: Object
        },
    }
</script>

<style scoped>
.info {
    border: 1px dotted #cc2a38;
    border-radius: 5px;
    /* background-color: rgba(193, 32, 47, 0.25); */
    color:#272727;
    max-height: 200px;
    text-align: left;
    margin-bottom: -1.25em;
}
.cta-start {
    color:#c1202f;
    font-size: 1.5rem;
    font-weight: bold;
}
.cta-arrow {
    color:#c1202f;
}
@media screen and (min-width: 576px)  {
    .content {
        height: 100%;
    }
    .info {
        margin-bottom: auto;
    }
}
@media screen and (min-width: 992px)  {
    .content {
        height: 100%;
    }
    .info {
        font-size: 1.25rem;
    }
}
</style>