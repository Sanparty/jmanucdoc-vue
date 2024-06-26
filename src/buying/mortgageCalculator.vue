<template>
  <div class="contact-me p-3">
    <Transition appear>
    <div class="container-md">
      <form class="container-md" @submit.prevent="calculate">
      <h2 v-if="includeHeading" class="col-12 latest">Mortgage Calculator</h2>
      <p>Please enter numbers only without commas or spaces.</p>
      <div class="row">
        <div class="mb-3">
          <label class="form-label">house total</label>
          <input v-model.number="houseTotal" class="form-control" placeholder="$"/>
        </div> 
        <div class="mb-3">
          <label class="form-label">downpayment</label>
          <input v-model.number="downPayment" class="form-control" placeholder="$"/>
        </div>
        <div class="mb-3">
          <label class="form-label">interest rate</label>
          <input v-model.number="interestRate" class="form-control" placeholder="%"/>
        </div>
        <div class="mb-3">
          <label class="form-label">amortization period</label>
          <input v-model.number="numYears" class="form-control" placeholder="years" />
        </div>
        <div class="mb-3">
          <label class="form-label">payment period</label>
          <select v-model="paymentPeriod" class="form-control">
            <option>Monthly</option>
            <option>Bi-weekly</option>
            <option>Weekly</option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">calculate payment</button>
      <div :class="display"> 
        <p v-if="loanAmount >= 0 && parseInt(numYears) > 0 && parseInt(interestRate) > 0 && parseInt(interestRate) < 100">For a mortgage of <strong>${{ loanAmount.toLocaleString("en-US") }}</strong> amortized over <strong>{{ numYears }} years</strong>, your <strong>{{ paymentPeriod }}</strong> payment is <strong>${{ payment.toFixed(2) }}</strong></p>        
        <p v-else>Your down payment is greater than the house total or your amortization period is not greater than zero or you have an invalid interest rate. Please enter valid numbers.</p>
        <!-- <p>Total Mortgage with Interest: $701,508.05</p>
        <p>Total with Down Payment: $801,508.05</p? -->
      </div>
      <div :class="errorInput">
        <p>Please enter valid numbers.</p>
      </div>
      </form>
    </div>
  </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  Name: "mortgageCalculator",
  props: {
    includeHeading: Boolean
  },
  data() {
    return {
      houseTotal: "",
      downPayment: "",
      interestRate: "",
      numYears: "",
      paymentPeriod: "Monthly",
      display: "d-none",
      errorInput: "d-none"
    };
  },
  computed: {
    formValid(): boolean {
      const { houseTotal, downPayment, interestRate, numYears } = this;
      return (
        houseTotal >= downPayment &&
        +downPayment >= 0 &&
        0 <= +interestRate &&
        +interestRate <= 100 &&
        +numYears > 0
      );
    },
    loanAmount(): number {
      return parseInt(this.houseTotal) - parseInt(this.downPayment)
    },
    numPayments() {
      if ( this.paymentPeriod == "Monthly" ) {
        return 12
      } else if ( this.paymentPeriod == "Bi-weekly" ) {
        return 26
      } else {
        return 52
      }
    },
    interestperPayment(): number {
      return (parseInt(this.interestRate) / 100) / this.numPayments
    },
    totalPayments(): number {
      return parseInt(this.numYears) * this.numPayments
    },
    payment (): number {
      return this.loanAmount * this.interestperPayment * (Math.pow(1 + this.interestperPayment, this.totalPayments)) / (Math.pow(1 + this.interestperPayment, this.totalPayments) - 1)
    }
  },
  methods: {
    calculate() {
      this.errorInput = "d-none";
      this.display = "d-none";
      if (!this.formValid) {
        return this.errorInput = "d-block mt-3 results"
      }
      return this.display = "d-block mt-3 results"       
    },
  },
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
.contact-me {
  background-color: #d3d3d3ac;
  text-align: left;
}
.latest {
  text-align: left;
}
.btn,
.btn:active {
  background-color: #c1202f;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
}
.btn:hover {
  background-color: #fff;
}
.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #c1202f;
  --bs-btn-hover-bg: #fff;
  --bs-btn-hover-border-color: #0a58ca;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0a58ca;
  --bs-btn-active-border-color: #0a53be;
  --bs-btn-active-shadow: inset 0 3px 5pxrgba (0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0d6efd;
  --bs-btn-disabled-border-color: #0d6efd;
}
.form-label {
  text-transform: capitalize;
}
.results {
  font-size: 1.25rem;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>