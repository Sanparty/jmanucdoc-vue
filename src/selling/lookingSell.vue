<template>
  <div class="contact-me p-3">
  <Transition appear>
    <div class="container-md">
      <h2 v-if="includeHeading" class="col-12 latest">Looking to Sell Your House?</h2>
      <h4 class="col-12 latest">*Required Field</h4>
      <form ref="form" class="container" @submit.prevent="sendEmail">
        <div class="row">
          <div class="mb-3 col-md-6">
            <label for="firstName" class="form-label">First Name *</label>
            <input
              type="text"
              name="firstName"
              class="form-control"
              id="firstName"
              aria-describedby="firstName"
              required
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="lastName" class="form-label">Last Name *</label>
            <input
              type="text"
              name="lastName"
              class="form-control"
              id="lastName"
              aria-describedby="lastName"
              required
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="emailAddress" class="form-label"
              >Email address *</label
            >
            <input
              type="email"
              name="emailAddress"
              class="form-control"
              id="exampleAddress"
              aria-describedby="emailAddress"
              required
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="homePhone" class="form-label">Home Phone *</label>
            <input
              type="tel"
              name="homePhone"
              class="form-control"
              id="homePhone"
              aria-describedby="homePhone"
              required
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="streetAddress" class="form-label">Street Address *</label>
            <input
              type="text"
              name="streetAddress"
              class="form-control"
              id="streetAddress"
              aria-describedby="streetAddress"
              required
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="cityTown" class="form-label">City/Town</label>
            <input
              type="text"
              name="cityTown"
              class="form-control"
              id="cityTown"
              aria-describedby="cityTown"
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="stateProvince" class="form-label">State/Province</label>
            <input
              type="text"
              name="stateProvince"
              class="form-control"
              id="stateProvince"
              aria-describedby="stateProvince"
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="postalCode" class="form-label">Zip/Postal Code</label>
            <input
              type="text"
              name="postalCode"
              class="form-control"
              id="postalCode"
              aria-describedby="postalCode"
            />
          </div>
        
          <div class="mb-3 col-md-6">
            <label for="mobilePhone" class="form-label">Mobile Number</label>
            <input
              type="tel"
              name="mobilePhone"
              class="form-control"
              id="mobilePhone"
              aria-describedby="mobilePhone"
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="workPhone" class="form-label">Work Number</label>
            <input
              type="tel"
              name="workPhone"
              class="form-control"
              id="workPhone"
              aria-describedby="workPhone"
            />
          </div>
          <div class="mb-3 col-md-12">
            <label for="comments" class="form-label">Comments</label>
            <textarea
              type="text"
              name="comments"
              class="form-control"
              id="comments"
              aria-describedby="comments"
              rows="5"
            ></textarea>
          </div>
        </div>
        <input type="submit" class="btn btn-primary" value="Send">
        <div id="resultMessage">{{ result }}</div>
      </form>
    </div>
  </Transition>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  Name: "lookingSell",
  props: {
    includeHeading: Boolean
  },
  data() {
    return {
      result: ''
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('jman_web', 'template_tumyy0g', this.$refs.form, 'EVwDPvs94HElj1O62')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            // Clears form/inputs after button is Selected
            console.log(this.$refs.form.firstName)
            this.$refs.form.reset();
            this.result = 'Your message has been received. Thanks for contacting me.'
        }, (error) => {
            console.log('FAILED...', error.text);
            this.result = 'Sorry, your message did not send correctly. Please try again later.'
        }
        );
    }
  }
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
.contact-me {
  background-color: #d3d3d3ac;
  text-align: left;
}
.latest {
  text-align: left;
}
.btn {
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
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
#resultMessage {
  color: #cc2a38;
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 10px;
}
</style>