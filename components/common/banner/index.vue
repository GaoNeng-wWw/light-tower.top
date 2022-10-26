<template>
    <div class="banner__wrapper" 
         :style="{
            'background': `url('${props.bg}')`,
            'background-position-x': `${props.position?.x || 'center'}`,
            'background-position-y': `${props.position?.y || 'center'}`,
            'background-size': props.size,
            'background-repeat': props.repeat,
            'position': 'relative'
         }"
    >
        <div class="slot-wrapper">
            <slot></slot>
        </div>
        <div class="mask" v-if="props.useMask"></div>
    </div>
<!--  -->
</template>
<script lang="ts" setup>
type propsPosition = {
    x: string;
    y: string;
}

const props = defineProps({
    bg: String,
    position: Object as () => propsPosition,
    repeat: {
        type: String,
        default: 'no-repeat'
    },
    size: {
        type:String,
        default: 'contain'
    },
    useMask: {
        type: Boolean,
        default: false
    }
});
</script>
<style lang="scss">
.banner__wrapper{
    width: 100%;
    display: flex;
    background-position-y: center;
    background-position-x: right;
    background-repeat: no-repeat;
    background-size: contain;
    .slot-wrapper{
        z-index: 1;width:100%;height:100%;display:flex;align-items: center;
    }
    .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba($color: #000000, $alpha: .3);
        z-index: 0;
    }
}
</style>