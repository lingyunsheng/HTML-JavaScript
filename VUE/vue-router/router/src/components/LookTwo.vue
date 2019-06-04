<template>
    <div class="lookTwo">{{message}}
      <p>接收的参数: {{$route.params.userId}}</p>
    </div>
</template>

<script>
export default {
  name: 'LookTwo',
  data () {
    return {
      message: '去死呀呀！'
    }
  }
}
</script>
