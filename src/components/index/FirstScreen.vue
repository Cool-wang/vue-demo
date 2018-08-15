<template>
    <div class="firstScreen_container">
        <Breadcrumb>
            <BreadcrumbItem to="/">首页</BreadcrumbItem>
            <BreadcrumbItem >欢迎页</BreadcrumbItem>
        </Breadcrumb>
        <div class="firstScreen_content" ref="contentBox">
        <Carousel v-model="value1" loop autoplay :autoplay-speed="5000">
            <CarouselItem>
                <div class="demo-carousel"><div class="firstScreen_img1 constantWh" ></div></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><div class="firstScreen_img2 constantWh" ></div></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><div class="firstScreen_img3 constantWh" ></div></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><div class="firstScreen_img4 constantWh" ></div></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><div class="firstScreen_img5 constantWh" ></div></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><div class="firstScreen_img6 constantWh" ></div></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><div class="firstScreen_img7 constantWh" ></div></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><div class="firstScreen_img8 constantWh" ></div></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><div class="firstScreen_img9 constantWh" ></div></div>
            </CarouselItem>
        </Carousel>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'FirstScreen',
        data() {
            return {
                value1: 0
            }
        },
        methods: {
            transitionHeight() {
                this.$refs.contentBox.style.height = '600px';
            }
        },
        mounted() {
            this.transitionHeight();
        }
    }
</script>
<style scoped lang="less">
.firstScreen_container {
    text-align: left;
.firstScreen_content {
 position: relative;
 left: 50%;
 transform: translateX(-50%);
 width: 800px;
 height: 0px;
padding:50px;
 border: 5px solid #ccc;
 box-shadow: 5px 5px 5px skyblue;
 transition: height 2s 1s;
 .constantWh {
     width: 800px;
     height: 600px;
 }
 .firstScreen_img1 {
     background: url('../../images/01.jpg') no-repeat ;
     background-size: cover;
 }
 .firstScreen_img2 {
     background: url('../../images/02.jpg') no-repeat ;
     background-size: cover;
 }
 .firstScreen_img3 {
     background: url('../../images/03.jpg') no-repeat ;
     background-size: cover;
 }
 .firstScreen_img4 {
     background: url('../../images/04.jpg') no-repeat ;
     background-size: cover;
 }
 .firstScreen_img5 {
     background: url('../../images/05.jpg') no-repeat ;
     background-size: contain;
 }
 .firstScreen_img6 {
     background: url('../../images/06.jpg') no-repeat ;
     background-size: contain;
 }
 .firstScreen_img7 {
     background: url('../../images/07.jpg') no-repeat ;
     background-size: contain;
 }
 .firstScreen_img8 {
     background: url('../../images/08.jpg') no-repeat ;
     background-size: contain;
 }
 .firstScreen_img9 {
     background: url('../../images/09.jpg') no-repeat ;
     background-size: contain;
 }
}
}

</style>
