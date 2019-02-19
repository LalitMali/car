<template>
  <div class="hello">
    <h1>{{ msg }} {{ name }}</h1>
    <ul>
    <li v-for="multi in multis">{{ multi  }}</li>
    </ul>
    <p>{{ sayhello("Morning") }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my new project',
      name: 'Mohammed Anas',
      multis:['Home','About','term','dasd']
      
      } 
    },
      methods:{
           sayhello:function(dayTime){
             return  "Good " + dayTime;
           }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
