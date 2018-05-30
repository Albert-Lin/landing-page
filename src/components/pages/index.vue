<template>
    <div id="index">
        <Row align="middle">
            <i-col id="i_col" :lg="24" :md="24" :sm="24" :xs="24">
                <Row id="btnList">
                    <Button class="orangeBtn" type="ghost" @click="showMessage('orange btn');"> BUTTON </Button>
                </Row>
            </i-col>
        </Row>
    </div>
</template>

<script>
export default {
    name: "index",
    data () {
        return {};
    },
    methods: {
        showMessage (message) {
            alert(message);
        }
    },
    mounted () {
        // ignore
    }
}
</script>

<style lang="scss">
    #index {
        #i_col {
            height: calc(100vh - 64px);
            background-color: #eee;
            #btnList {
                margin: 60vh 0 0 10vw;
            }
        }
    }

    .orangeBtn:hover {
        color: #ff6600;
        border-color: #ff6600;
    } 
</style>


