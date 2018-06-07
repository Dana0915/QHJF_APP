<template>
  <div class="container">
    <loanBanner></loanBanner>
    <ul class="titleImg">
      <li ><img src="../../assets/img/icon_you@2x.png" /><p>邀请好友</p></li>
      <li ><img src="../../assets/img/icon_huo@2x.png" /><p>优惠活动</p></li>
      <li ><img src="../../assets/img/icon_banz@2x.png" /><p>帮助中心</p></li>
    </ul>
   <listInfo v-bind:list="XsInfo"> </listInfo>
   <listInfo v-bind:list="HotInfo"> </listInfo>
   <listInfo v-bind:list="GsInfo"> </listInfo>
   <bottomTip></bottomTip>
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

        list: [{
          cls: '',
          tit: '微额借款',
          con: '金额500、1000元，期限7天、14天、21天',
          push: '/loan/micro'
        },
          {
            cls: 'icon02',
            tit: '小额借款',
            con: '最高金额5000元，最长期限6个月',
            push: '/loan/samll'
          },
          {
            cls: 'icon03',
            tit: '草根福利借款',
            con: '最高金额10000元，期限30天',
            push: '/loan/large'
          }
        ]
      }
    },
    components: {
      loanBanner,
      listInfo,
      bottomTip
    }
  }
</script>
<style>
.titleImg{
    display: flex;
    height:5.63rem;
    text-align: center;
    background: #fff;
    margin-bottom: 0.5rem
}
.titleImg li{
    flex: 1;
    margin-top: 1rem;

 } 
 .titleImg li img{
    width: 2rem;
    height: 2rem;
 } 
.titleImg li p{
   font-size:0.81rem;
   line-height:1.31rem;
}
   
</style>
