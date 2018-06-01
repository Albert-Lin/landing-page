<template>
    <div id="landingPage">
        <Layout>
            <Content>
                
                <indexPage></indexPage>
                <Header id="header">HEADER</Header>
            </Content>
        </Layout>
    </div>
</template>

<script>
import index from "./index"
export default {
    name: "landingPage",
    components: {
        indexPage: index,
    },
    data () {
        return {};
    }
}
</script>

<style lang="scss">
    #landingPage {
        width: 100%;

        #header {
            color: #fff;
        }
    }
</style>


