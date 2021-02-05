<template id="test">
  <div class="mars">
    <h1>This is mars page</h1>
  </div>
  <MoonList/>
</template>


<script>
  import MoonList from "@/components/MoonList.vue"
  export default {
    name: "Mars",
    components: {
      MoonList
    }
  }
</script>