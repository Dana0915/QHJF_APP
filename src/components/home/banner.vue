<template>
  <div class="indexBanner" id='banner' ref='banner'>
   <mt-swipe :show-indicators="false">
    <mt-swipe-item v-for="banner in bannerlist" :key="banner.id"><a :href="banner.href"><img :src="banner.img" :alt="banner.title" /></a></mt-swipe-item>
  </mt-swipe>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        bannerlist: [

          { id:'0',
            title:'',
            img: 'https://cgtzimage.b0.upaiyun.com/191810/00/00/42/2016/10/21/AB697121-9758-072D-0C6F-28711778485A.jpg',
            href: 'https://cgtzfiles.b0.upaiyun.com/cgjr/jrwx/html/huodong/autoPay.html' 
          },
          { id:'1',
            title:'',
            img: 'https://cgtzimage.b0.upaiyun.com/191810/00/00/42/2016/10/21/AB697121-9758-072D-0C6F-28711778485A.jpg' ,
            href: 'https://cgtzfiles.b0.upaiyun.com/cgjr/jrwx/html/huodong/autoPay.html'
          },
          { id:'2',
            title:'',
            img: 'https://cgtzimage.b0.upaiyun.com/191810/00/00/42/2016/10/21/AB697121-9758-072D-0C6F-28711778485A.jpg' ,
            href: 'https://cgtzfiles.b0.upaiyun.com/cgjr/jrwx/html/huodong/autoPay.html'},
          { id:'3',
            title:'',
            img: 'https://cgtzimage.b0.upaiyun.com/191810/00/00/42/2016/10/21/AB697121-9758-072D-0C6F-28711778485A.jpg',
            href: 'https://cgtzfiles.b0.upaiyun.com/cgjr/jrwx/html/huodong/autoPay.html' }
        ]
      }
    },
    methods: {
     }


  }
</script>
