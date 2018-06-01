<template>
    <div class="imgSlider">
        <img id="slider0" class="slider0"/>
        <img id="slider1" class="slider1"/>
        <img id="slider2" class="slider2"/>
    </div>    
</template>

<script>
export default {
    data () {
        return {
            images: [
                "http://www.kimi-image.com/assets/images/banner_1.jpg",
                "http://www.kimi-image.com/assets/images/banner_2.jpg",
                "http://www.kimi-image.com/assets/images/banner_3.jpg",
                "https://emilygarrisonphotography.com/wp-content/uploads/2018/05/5-panel-wall-art-custom-new-5-piece-multi-panel-art-grey-autumn-trees-of-5-panel-wall-art-custom.jpg",
            ],
            currentIndex: 0,
            imageIndex: 0,
        };
    },
    methods: {
        slide () {
            document.getElementsByClassName("slider0")[0].style.left = "-100%";
            document.getElementsByClassName("slider1")[0].style.left = "0%";
            document.getElementsByClassName("slider2")[0].style.left = "100%";            
            setTimeout(()=>{
                document.getElementsByTagName("img")[this.imageIndex].style.display = "none";
                document.getElementsByClassName("slider0")[0].setAttribute("class", "sliderx");
                document.getElementsByClassName("slider1")[0].setAttribute("class", "slider0");
                document.getElementsByClassName("slider2")[0].setAttribute("class", "slider1");
                document.getElementsByClassName("sliderx")[0].setAttribute("class", "slider2");
                document.getElementsByTagName("img")[this.imageIndex].style.display = "block";
                this.currentIndex++;
                this.imageIndex++;
                if (this.imageIndex === 3) {
                    this.imageIndex = 0;
                }
                this.slide();
            }, 4000);
        }
    },
    mounted () {
        document.getElementsByClassName("slider0")[0].setAttribute("src", this.images[this.currentIndex]);
        document.getElementsByClassName("slider1")[0].setAttribute("src", this.images[this.currentIndex+1]);
        document.getElementsByClassName("slider2")[0].setAttribute("src", this.images[this.currentIndex+2]);
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
        display: inline-block;
    }

    .imgSlider {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow-x: hidden;
        overflow-y: hidden;
        .slider0{ @include imageSlider(0%);}
        .slider1 { @include imageSlider(100%);}
        .slider2 { @include imageSlider(200%);}
        #slider0 { top: 0% }
        #slider1 { top: -100% }
        #slider2 { top: -200% }
    }
</style>


