<template>
  <div class="footer">
    <ul>
      <li v-for='(item,index) of items' :class='[ item.cls , {on:index === idx} ]' @click="$router.push(item.push)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
          cls: "credit",
          name: "首页",
          push: "/home"
        },
          {
            cls: "credit",
            name: "理财",
            push: "/financial"
          },
          {
            cls: "user",
            name: "发现",
            push: "/find"
          },
          {
            cls: "user",
            name: "资产",
            push: "/money"
          }
        ]
      }
    },
    props: ['idx']
  }
</script>
