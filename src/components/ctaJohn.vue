<template>
  <div class="col-6 col-md-3">
    <div class="cta">
      <img class="cta-image col-12" src="../assets/images/cta-calc.svg" alt="Calculator Symbol"/>
      Mortgage Calculator
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="cta">
      <img class="cta-image col-12" src="../assets/images/cta-eval.svg" alt="Clipboard Symbol"/>
      Free Home Evaluation
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="cta">
      <img class="cta-image col-12" src="../assets/images/cta-buying.svg" alt="House Symbol"/>
      Thinking of Buying?
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="cta">
      <img class="cta-image col-12" src="../assets/images/cta-selling.svg" alt="For Sale Sign Symbol" />
      Thinking of Selling?
    </div>
  </div>
</template>

<script>
export default {
  Name: "CtaJohn",
  // props: {
  //   phoneNumber: String,
  // }
};
</script>

<style scoped>
.cta {
    display: inline-block;
    width: 150px;
    height: 150px; 
    text-align: center;
    background-color: #272727;
    border-radius: 50%;
    padding: 10px;
    color: #f7f7f7;
    text-transform: uppercase;
    margin: 10px;
    font-size: .9rem;
    transition: all 0.25s;

}
.cta:hover {
    transform: scale(1.1);
    background-color: black;
    box-shadow: 0 0 10px black;
}
.cta-image {
    height: 5em;
}
.cta-start {
    color:#c1202f;
    font-size: 1.5rem;
    font-weight: bold;
}
.cta-arrow {
    color:#c1202f;
}
</style>