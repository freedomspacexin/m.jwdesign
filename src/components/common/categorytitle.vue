<template>
        <div class="text-center line-style">
                <h3 v-text="title"></h3>
                <img src="../../assets/images/line.png">
        </div>
</template>
<script>
     export default {
        props:['title']
     }
</script>
<style scoped>
.line-style {
    margin: 20px 0px;
    width: 100%;
    min-height: 44px;
}

.line-style img{
    width: 100%;
    color: #333;
}

.text-center {
    text-align: center;
}

.text-center h3{
    font-size: 1.2em;
    /*color: #ffc428;*/
    color: #333;
    text-shadow:1px 1px 1px #333;
}


</style>