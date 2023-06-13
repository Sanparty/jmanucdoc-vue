<template>
  <div class="contact-me container-md mt-4 mb-4 p-3">
    <div class="row">
      <h2 class="col-12 latest">Contact Me</h2>
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
          <div class="mb-3 col-md-4">
            <label for="emailAddress" class="form-label"
              >Email Address *</label
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
          <div class="mb-3 col-md-4">
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
          <div class="mb-3 col-md-4">
            <label for="cellPhone" class="form-label">Cell Phone</label>
            <input
              type="tel"
              name="cellPhone"
              class="form-control"
              id="cellPhone"
              aria-describedby="cellPhone"
            />
          </div>
          <div class="mb-3 col-md-12">
            <label for="comment" class="form-label">Comment</label>
            <textarea
              type="text"
              name="comment"
              class="form-control"
              id="comment"
              aria-describedby="comment"
              rows="5"
            ></textarea>
          </div>
        </div>
        <input type="submit" class="btn btn-primary" value="Send">
        <div id="resultMessage">{{ result }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  Name: "contactJohn",
  data() {
    return {
      result: ''
    }
  },
  // data() {
  //   return {
  //     firstName: '',
  //     lastName: '',
  //     emailAddress: '',
  //     homePhone: '',
  //     cellPhone: '',
  //     comment: ''
  //   }
  // },
  methods: {
    // sendEmail(e) {
    //   try {
    //     emailjs.sendForm('jman_web', 'template_e28bu7j', e.target,
    //     'EVwDPvs94HElj1O62', {
    //       name: this.firstName + this.lastName,
    //       email: this.emailAddress,
    //       message: this.comment
    //     })

    //   } catch(error) {
    //       console.log({error})
    //   }
    //   // Reset form field
    //   this.firstName = ''
    //   this.lastName = ''
    //   this.emailAddress = ''
    //   this.comment = ''
    //   this.homePhone = ''
    //   this.cellPhone = ''

    // },
    sendEmail() {
      emailjs.sendForm('jman_web', 'template_e28bu7j', this.$refs.form, 'EVwDPvs94HElj1O62')
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
  background-color: rgba(212, 212, 212, 0.527);
  border-radius: 5px;
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
#resultMessage {
  color: #cc2a38;
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 10px;
}
</style>