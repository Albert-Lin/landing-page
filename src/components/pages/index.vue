<template>
    <div id="index">
        <Row align="middle">
            <i-col id="i_col" :lg="24" :md="24" :sm="24" :xs="24">
                <img-slider :imgList="imgList"></img-slider>
                <Row id="btnList">
                    <Button class="orangeBtn" type="ghost" @click="showMessage('orange btn');"> BUTTON </Button>
                </Row>
            </i-col>
        </Row>
    </div>
</template>

<script>
import imageSlider from "../components/imageSlider"
export default {
    name: "index",
    components: {
        "img-slider": imageSlider,
    },
    data () {
        return {
            imgList: [
                "http://www.kimi-image.com/assets/images/banner_1.jpg",
                "http://www.kimi-image.com/assets/images/banner_2.jpg",
                "http://www.kimi-image.com/assets/images/banner_3.jpg",
                "https://images.fineartamerica.com/images-medium-large-5/the-creation-of-adam-michelangelo-.jpg",
            ],
        };
    },
    methods: {
        showMessage (message) {
            document.getElementById("image0").style.left = "-100%";
            document.getElementById("image1").style.left = "0%";
    },
    },
    mounted () {
        // ignore
    }
}
</script>

<style lang="scss">
    #index {
        #i_col {
            height: 100vh;
            background-color: #eee;
            #btnList {
                margin: 60vh 0 0 10vw;
                z-index: 10;
            }
        }
    }

    .orangeBtn:hover {
        color: #ff6600;
        border-color: #ff6600;
    } 
</style>


