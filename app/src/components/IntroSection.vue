<template lang="ejs">
  <div class="intro-section">
    <ul class="department-list">
      <li v-for="department in departments">
        <h3>{{ department.name }}</h3>
        <p>
          {{ department.description }}
        </p>
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
@import '../assets/common.scss';

$intro-section-height: 200px;
$list-height: 200px;

.intro-section {
  // height: $intro-section-height;

  .department-list {
    width: 80%;
    margin: 0 auto;
    min-width: $min-width - 2 * 20px;
    padding: 20px;
    li {
      height: $list-height;
    }
  }
}
</style>
