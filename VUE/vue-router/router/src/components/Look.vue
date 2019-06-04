<template>
    <div class="look">
      {{message}}
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      message: '来看我呀！'
    }
  }
}
</script>
