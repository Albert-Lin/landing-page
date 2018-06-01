<template>
    <div class="imgSlider">
        <img id="slider0" class="slider0"/>
        <img id="slider1" class="slider1"/>
        <img id="slider2" class="slider2"/>
    </div>    
</template>

<script>
export default {
    props: ["imgList"],
    data () {
        return {
            currentIndex: 0,
            imageIndex: 2,
        };
    },
    computed: {
        images () {
            if (this.imgList.length === 1) {
                return [
                    this.imgList[0],
                    this.imgList[0],
                    this.imgList[0],
                ];
            } else if (this.imgList.length === 2) {
                return [
                    this.imgList[0],
                    this.imgList[1],
                    this.imgList[0],
                ];
            } else if (this.imgList.length > 2) {
                return this.imgList;
            }
        },
    },
    methods: {
        async updatClass () {
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    document.getElementsByClassName("slider0")[0].style.transition = "unset";
                    document.getElementsByClassName("slider0")[0].setAttribute("class", "sliderx");
                    document.getElementsByClassName("slider1")[0].setAttribute("class", "slider0");
                    document.getElementsByClassName("slider2")[0].setAttribute("class", "slider1");
                    document.getElementsByClassName("sliderx")[0].setAttribute("class", "slider2");
                    resolve();
                }, 4000);
            });
        },

        async updateSlider2Image () {
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    document.getElementsByClassName("slider2")[0].setAttribute("src", this.images[this.imageIndex]);
                    document.getElementsByClassName("slider2")[0].style.transition = "left 1s linear 0s";
                    this.imageIndex++;
                    this.currentIndex++;
                    if (this.currentIndex + 1 > this.images.length) {
                        this.currentIndex = 0;
                    }
                    if (this.imageIndex === this.images.length) {
                        this.imageIndex = 0;
                    }
                    resolve();
                }, 1000);
            });
        },

        async slide () {
            await this.updatClass();
            await this.updateSlider2Image();
            this.slide();
        }
    },
    mounted () {
        document.getElementsByClassName("slider0")[0].setAttribute("src", this.images[this.currentIndex+2]);
        document.getElementsByClassName("slider1")[0].setAttribute("src", this.images[this.currentIndex]);
        document.getElementsByClassName("slider2")[0].setAttribute("src", this.images[this.currentIndex+1]);
        setTimeout(this.slide, 4000);
    }
}
</script>

<style lang="scss">
    @mixin imageSlider ($left) {
        width: 100%;
        height: 100%;
        position: relative;
        left: $left;
        float: left;
        transition: left 1s linear 0s;
    }

    .imgSlider {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow-x: hidden;
        overflow-y: hidden;
        .slider0 { @include imageSlider(-100%);}
        .slider1 { @include imageSlider(0%);}
        .slider2 { @include imageSlider(100%);}
        #slider0 { top: 0% }
        #slider1 { top: -100% }
        #slider2 { top: -200% }
    }
</style>


