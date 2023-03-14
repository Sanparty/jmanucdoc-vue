<template>
  <div class="contact-me pb-3">
    <div class="container-md">
      <h2 class="col-12 latest">Get a Free Home Evaluation</h2>
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
              required
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="lastName" class="form-label">Last Name *</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              aria-describedby="lastName"
              required
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for=" emailAddress" class="form-label"
              >Email address *</label
            >
            <input
              type="email"
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
              class="form-control"
              id="cityTown"
              aria-describedby="cityTown"
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="stateProvince" class="form-label">State/Province</label>
            <input
              type="text"
              class="form-control"
              id="stateProvince"
              aria-describedby="stateProvince"
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="postalCode" class="form-label">Zip/Postal Code</label>
            <input
              type="text"
              class="form-control"
              id="postalCode"
              aria-describedby="postalCode"
            />
          </div>
        
          <div class="mb-3 col-md-6">
            <label for="mobilePhone" class="form-label">Mobile Number</label>
            <input
              type="tel"
              class="form-control"
              id="mobilePhone"
              aria-describedby="mobilePhone"
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="workPhone" class="form-label">Work Number</label>
            <input
              type="tel"
              class="form-control"
              id="workPhone"
              aria-describedby="workPhone"
            />
          </div>
          
          <div class="mb-3 col-md-4">
            <label for="propertyTypes" class="form-label">Property Types</label>
            <select class="form-control" id="propertyTypes" aria-describedby="propertyTypes">
              <option value='residential' >Residential</option><option value='recreational' >Recreational</option><option value='agriculture' >Agriculture</option><option value='openhouse' >Open House</option><option value='parking' >Parking</option><option value='land' >Land</option><option value='commercial' >Commercial</option><option value='investment' >Investment</option></select>
          </div>
          <div class="mb-3 col-md-4">
            <label for="buildingType" class="form-label">Building Type</label>
            <select class="form-control" id="buildingType" aria-describedby="buildingType">
           
              <option value='house' >House</option><option value='townhouse' >Townhouse</option><option value='apartment' >Apartment</option><option value='duplex' >Duplex</option><option value='triplex' >Triplex</option><option value='fourplex' >Fourplex</option><option value='mobilehome' >Mobile Home</option><option value='gardenhome' >Garden Home</option><option value='residentialcommercialmix' >Residential Commercial Mix</option><option value='specialpurpose' >Special Purpose</option><option value='office' >Office</option><option value='industrial' >Industrial</option><option value='warehouse' >Warehouse</option><option value='plaza' >Plaza</option><option value='retail' >Retail</option><option value='condominium' >Condominium</option>
              </select>
            </div>
















          <div class="mb-3 col-md-4">
            <label for="locationArea" class="form-label">Location/Area</label>
            <input
              type="text"
              class="form-control"
              id="locationArea"
              aria-describedby="locationArea"
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="properySize" class="form-label">Property Size</label>
            <input
              type="text"
              class="form-control"
              id="properySize"
              aria-describedby="properySize"
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="lotSize" class="form-label">Lot Size</label>
            <input
              type="text"
              class="form-control"
              id="lotSize"
              aria-describedby="lotSize"
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="bedrooms" class="form-label">Bedrooms</label>
            <input
              type="number"
              class="form-control"
              id="bedrooms"
              aria-describedby="bedrooms"
            />
          </div>
          <div class="mb-3 col-md-6">
            <label for="bathrooms" class="form-label">Bathrooms</label>
            <input
              type="number"
              class="form-control"
              id="bathrooms"
              aria-describedby="bathrooms"
            />
          </div>
          <div class="mb-3 col-md-12">
            <label for="propertyDesc" class="form-label">Property Description</label>
            <textarea
              type="text"
              class="form-control"
              id="propertyDesc"
              aria-describedby="propertyDesc"
              rows="5"
            ></textarea>
          </div>
          <div class="mb-3 col-md-12">
            <label for="comments" class="form-label">Comments</label>
            <textarea
              type="text"
              class="form-control"
              id="comments"
              aria-describedby="comments"
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
  Name: "homeEvaluation",
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
</style>