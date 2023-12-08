<!--Parent
Styles will be applied to children as well.
-->
<script setup>//setup replaces the setup from earlier labs
import { ref, onMounted } from 'vue'
import wyrService from './services/wyrService' //Ms.Clara said '.' means the current path. So maybe like stay in the same folder, but find this folder, etc.

import WouldYouRather from './components/WouldYouRather.vue'

const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')

const userSelection = ref('')// this will store the user's answer once they make a choice

onMounted( () => {
  wyrService.getRandomWYR().then( (wyrData) => {
    //The below data is to help visualize. The data will look something like this
    //{"question":"Be a famous movie star or a famous scientist?",
    //"answer1":"Famous movie star",
    //"answer2":"Famous scientist"}

    wyrQuestion.value = wyrData.question
    wyrAnswer1.value = wyrData.answer1
    wyrAnswer2.value = wyrData.answer2
  })

})//used to call a function when a component is first loaded

function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! You chose ${userChoice}`
}

</script>

<template><!-- Template isn't JavaScript but Vue specific--><!-- Template at least 'partially' replaces the <div id="app"> -->
 
 <div id="app-component">

    <h1>Hello. Would You Rather?</h1>

    <!-- The below code references another component file. The below is another 'box' in the vue dev tools-->
    <WouldYouRather 
    v-bind:question="wyrQuestion" 
    v-bind:answer1="wyrAnswer1" 
    v-bind:answer2="wyrAnswer2"
    v-on:answer-selected="updateUserSelection"
    ></WouldYouRather><!--The string can be anything even if it is manually typed in it-->

    <p>{{ userSelection }}</p>

 </div>


</template>

<style scoped>
#app-component {
  font-size: 1em;
  background-color: aqua;
  padding: 40px;
}

p {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
</style>
