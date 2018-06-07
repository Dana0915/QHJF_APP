<template>
  <div class="container">
    <topComponent title='发现' :showLeft='false'></topComponent>
      <ul>
        <li >
          <a :href="'http://test.qihangjf.com:29084/zhuCeSongLi.html?token=' + token">
            <img src="../../assets/img/tt4633.png" alt="" srcset="">
            <p>注册送礼</p>
         </a>
        </li>
         <li >
           <a :href="'http://test.qihangjf.com:29084/TenHaoLi.html?token=' + token">
            <img src="../../assets/img/tt46333.png" alt="" srcset="">
            <p>十大豪礼</p>
           </a>
        </li>
         <li >
           <a :href="'http://test.qihangjf.com:29084/fengKong.html?token=' + token">
            <img src="../../assets/img/tt4642.png" alt="" srcset="">
            <p>风控</p>
         </a>
        </li>
        <li>
          <a :href="'http://test.qihangjf.com:29084/yaoQing.html?token=' + token">
            <img src="../../assets/img/tt463.png">
            <p>邀请好友</p>
          </a>
        </li>
      </ul>
    <footComponent :idx='2'></footComponent>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        token:"123456879"
      }
    }
  }
</script>
<style lang="scss" scoped>
  ul{
    margin: 0.2rem 0.25rem;
  }
  li{
    background: #fff;
    margin-top: 0.5rem;
    height: 5.5;
    
  }
  img{
    width: 100%;
  }
  p{
    text-align: left;
    text-indent: 1rem;
    font-size: 0.88rem;
    line-height: 1.5rem;
  }
</style>
