<template>
  <div class="container">
    <div class="gradient">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">理财专区</mt-tab-item>
        <mt-tab-item id="2">转让专区</mt-tab-item>
      </mt-navbar>
    </div>
    <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
       <listInfo v-bind:list="XsInfo"> </listInfo>
       <listInfo v-bind:list="HotInfo"> </listInfo>
       <listInfo v-bind:list="GsInfo"> </listInfo>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
       <listInfo v-bind:list="XsInfo"> </listInfo>
       <listInfo v-bind:list="HotInfo"> </listInfo>
       <listInfo v-bind:list="GsInfo"> </listInfo>
    </mt-tab-container-item>

  </mt-tab-container>

    <footComponent :idx='0'></footComponent>
  </div>
</template>
<script>
import listInfo from '../../components/common/listInfo'
  export default {
    data() {
      return {
         XsInfo:[{
            "productId": 3910,
            "productName": "固守-001",
            "productType": "18",
            "annualYield": "10.00",
            "period": "90",
            "startMoney": "1,000.00",
            "residueMoney": "100,000.00",
            "baseAnnualYield": 10,
            "actAnnualYield": 0
        },{
            "productId": 3912,
            "productName": "固守-001",
            "productType": "18",
            "annualYield": "10.00",
            "period": "90",
            "startMoney": "1,000.00",
            "residueMoney": "100,000.00",
            "baseAnnualYield": 10,
            "actAnnualYield": 0
        }],
        HotInfo:[ {
            "productId": 3903,
            "productName": "转让",
            "productType": "19",
            "annualYield": "0",
            "period": "90",
            "startMoney": "1,000.00",
            "residueMoney": "0.00",
            "baseAnnualYield": 11,
            "actAnnualYield": 0}
            ],
        GsInfo: [ {
            "productId": 3903,
            "productName": "转让",
            "productType": "19",
            "annualYield": "0",
            "period": "90",
            "startMoney": "1,000.00",
            "residueMoney": "0.00",
            "baseAnnualYield": 11,
            "actAnnualYield": 0}
            ],
        selected: '1' 
      }
    },
    components: {
      listInfo,
    }
  }
</script>

<style lang="scss" scoped>
.mint-navbar {
      background: none;
}
.mint-tab-item-label{
  color: #fff;
}
.mint-navbar .mint-tab-item.is-selected{
  color: #fff;
}
.mint-tab-item-label{
  color: rgba(189,212,245,1);
}
</style>



