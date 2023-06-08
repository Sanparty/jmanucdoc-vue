<template>
  <div class="contact-me container-md mt-4 mb-4 p-3">
    <div class="row">
      <h2 class="col-12 latest">Contact Me</h2>
      <h4 class="col-12 latest">*Required Field</h4>
      <form class="container">
        <div class="row">
          <div class="mb-3 col-md-6">
            <label for="firstName" class="form-label">First Name *</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              aria-describedby="firstName"
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="lastName" class="form-label">Last Name *</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              aria-describedby="lastName"
            />
          </div>
          <div class="mb-3 col-md-4">
            <label for=" emailAddress" class="form-label"
              >Email Address *</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleAddress"
              aria-describedby="emailAddress"
            />
          </div>
          <div class="mb-3 col-md-4">
            <label for="homePhone" class="form-label">Home Phone *</label>
            <input
              type="tel"
              class="form-control"
              id="homePhone"
              aria-describedby="homePhone"
            />
          </div>
          <div class="mb-3 col-md-4">
            <label for="cellPhone" class="form-label">Cell Phone</label>
            <input
              type="tel"
              class="form-control"
              id="cellPhone"
              aria-describedby="cellPhone"
            />
          </div>
          <div class="mb-3 col-md-12">
            <label for="comment" class="form-label">Comment</label>
            <textarea
              type="text"
              class="form-control"
              id="comment"
              aria-describedby="comment"
              rows="5"
            ></textarea>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  Name: "contactJohn",
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
</style>