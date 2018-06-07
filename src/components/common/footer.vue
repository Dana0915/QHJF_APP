<template>
  <div class="footer">
    <ul>
      <li v-for='(item,index) of items'  @click="$router.push(item.push)" :class="index == idx? 'font_color' : ''" :key="index">
        <img :src="index == idx? item.imgBlue : item.img"><br>
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
          img: "../static/img/home1.png",
          imgBlue:"../static/img/home.png",
          name: "首页",
          push: "/home"
        },
          {
            img: "../static/img/liCai1.png",
            imgBlue:"../static/img/liCai.png",
            name: "理财",
            push: "/financial"
          },
          {
            img: "../static/img/find1.png",
            imgBlue:"../static/img/find.png",
            name: "发现",
            push: "/find"
          },
          {
            img: "../static/img/zc1.png",
            imgBlue:"../static/img/zc.png",
            name: "资产",
            push: "/money"
          }
        ]
      }
    },
    props: ['idx']
  }
</script>
<style lang="scss" scoped>
.footer{
  .font_color{
    color: #2395FF
  }
  & li{
    img{
      width:1rem;
      height:1rem;
    }
  }

}
</style>

