<template lang="ejs">
  <div class="intro-section">
    <ul class="department-list">
      <li v-for="department in departments">
        {{ department.name }}
        {{ department.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      departments: [
        {
          name: '电子部',
          description: '电子部的介绍电子部的介绍' +
          '电子部的介绍电子部的介绍电子部的介绍' +
          '电子部的介绍电子部的介绍电子部的介绍' +
          '电子部的介绍电子部的介绍电子部的介绍'
        },
        {
          name: '计算机部',
          description: '电子部的介绍电子部的介绍' +
          '电子部的介绍电子部的介绍电子部的介绍' +
          '电子部的介绍电子部的介绍电子部的介绍' +
          '电子部的介绍电子部的介绍电子部的介绍'
        },
        {
          name: '办公室',
          description: '电子部的介绍电子部的介绍' +
          '电子部的介绍电子部的介绍电子部的介绍' +
          '电子部的介绍电子部的介绍电子部的介绍' +
          '电子部的介绍电子部的介绍电子部的介绍'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$intro-section-height: 200px;

.intro-section {
  height: $intro-section-height;
}
</style>
