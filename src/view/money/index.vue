<template>
  <div class="container">
    <div class="moneybg">
        <p class="title"> <span><img src="../../assets/img/icon_head@2x.png" alt="" srcset=""/></span>
            <span>资产 </span>
            <span><img src="../../assets/img/Messages@2x.png" alt="" srcset=""></span>
        </p>
        <div class="amountColor">
            <p>总资产(元)</p>
            <p class="amount">1800000</p>
        </div>
    </div>
   
    <footComponent :idx='0'></footComponent>
  </div>
</template>
<script>
  // 引入banner组件
  import loanBanner from '../../components/home/banner'
  import listInfo from '../../components/common/listInfo'
  import bottomTip from  '../../components/common/bottomTip'
  export default {
    data() {
      return {

      }
    },
    components: {
      loanBanner,
      listInfo,
      bottomTip
    }
  }
</script>
<style lang="scss" scoped>
.moneybg{
    width: 100%;
    height:14rem;
    background-image: url('../../assets/img/bg@2x.png');
    background-size: cover;
    color: #fff;
}
.title{
    padding: 1rem 0;
    display: flex;
}
.title img{
    width: 2rem;
    height: 2rem;
}
.title span{
    flex:1;
    padding: 0 1rem;
    line-height: 2rem;
}
.title span:first-child{
    flex:1;
    text-align: left;
    
}
.title span:last-child{
    flex:1;
    text-align: right;
}
.amountColor p:first-child{
    font-size: 0.75rem;
    color:rgba(255,255,255,1);
}
.amount{
    font-size: 1.81rem;
}
</style>

