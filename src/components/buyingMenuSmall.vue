<template> 
    <div class="contact-box d-none d-lg-flex flex-column justify-content-center align-items-start col-lg-3">
         <ul>
        <li>
          <router-link :to="{ name: 'BuyingSelect' }" class="no-underline" >Selecting an Agent</router-link>
        </li>
        <li><router-link :to="{ name: 'BuyingFinancing' }" class="no-underline" >Arrange Financing</router-link></li>
        <li><router-link :to="{ name: 'BuyingViewing' }" class="no-underline" >Viewing Homes</router-link></li>
        <li><router-link :to="{ name: 'BuyingOffer' }" class="no-underline" >Making an Offer</router-link></li>
        <li><router-link :to="{ name: 'BuyingClosing' }" class="no-underline" >Closing the Sale</router-link></li>
      </ul>
    </div>
    <div class="d-lg-none scrollmenu py-3">
        <router-link :to="{ name: 'BuyingSelect' }" class="smallmenulink" >Selecting an Agent</router-link>
        <router-link :to="{ name: 'BuyingFinancing' }" class="smallmenulink" >Arrange Financing</router-link>
        <router-link :to="{ name: 'BuyingViewing' }" class="smallmenulink" >Viewing Homes</router-link>
        <router-link :to="{ name: 'BuyingOffer' }" class="smallmenulink" >Making an Offer</router-link>
        <router-link :to="{ name: 'BuyingClosing' }" class="smallmenulink" >Closing the Sale</router-link>      
    </div>
</template>

<script>
    export default {
        name: "BuyingMenuSmall",
    }
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  color: #f7f7f7;
  font-weight: bold;
  font-size: 1rem;
}
li:hover,
.no-underline:hover {
  color: #cc2a38;
  transition: 0.5s ease;
  cursor: pointer;
}
.contact-box {
  text-align: left;
  padding-top: 20px;
}
.contact-box a {
    color: #f7f7f7;
    text-decoration: none;
}
.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}
.smallmenulink {
    padding-right: 10px;
    padding-left: 10px;
    font-weight: bold;
    text-decoration: none;
    color: #f7f7f7;
}
@media screen and (min-width: 992px) {  
    li {
        font-size: 1.25rem;
    }
}
</style>