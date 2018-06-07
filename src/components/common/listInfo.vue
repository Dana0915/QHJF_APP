<template>
  <ul class="indexList">
      <li  v-for="item in list" :key="item.productId">
          <p class="title">{{item.productName}}<span>新手福利高预期收益</span><span class="bgImg">新人专享</span></p>
          <div class="info">
              <p><span>10</span><span>%</span><i>历史年化收益率</i></p>
              <p><span>3个月</span><span>可加入</span><i>剩余金额 <span>8.88</span>万元</i></p>
      </div>
      </li>
    </ul>
</template>
<script>
  export default {
    props: ['list'],
    methods: {
    }
  }
</script>
