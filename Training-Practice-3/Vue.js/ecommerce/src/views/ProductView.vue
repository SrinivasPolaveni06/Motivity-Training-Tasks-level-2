<template>
  <div class="container about" >
      <div class="row" >
        <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input  id="first_name" type="text" class="validate">
          <label for="first_name">Title</label>
        </div>
        <div class="input-field col s12">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Description</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input   id="disabled" type="number" class="validate">
          <label for="disabled">Price</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="text" class="validate">
          <label for="password">Image</label>
        </div>
      </div>
      <a class="waves-effect waves-light btn-small">Submit</a>
      </form>
      
    </div>
      </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
/* label color */
.input-field label {
     color: #000;
   }
   /* label focus color */
   .input-field input[type=text]:focus + label {
     color: #000;
   }
   /* label underline focus color */
   .input-field input[type=text]:focus {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* valid color */
   .input-field input[type=text].valid {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* invalid color */
   .input-field input[type=text].invalid {
     border-bottom: 1px solid #000;
     box-shadow: 0 1px 0 0 #000;
   }
   /* icon prefix focus color */
   .input-field .prefix.active {
     color: #000;
   }
</style>
