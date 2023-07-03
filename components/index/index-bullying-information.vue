<template>
    <div>
        <div class="section">
            <div class="
                flex flex-wrap items-center justify-center gap-6 m-8 bg-white 
                border-gray-200 border-solid border
                mt-8 rounded-lg p-8 w-full
            ">
                <div class="flex-grow-0 flex-shrink-0 basis-[300px]">
                    <img src="@/assets/images/Bullying-(1).gif" alt="" style="width: 100%;">
                </div>
                <div class="flex-grow flex-shrink-0 basis-[400px] px-4">
                    <span>
                        <h1 class="section__title">什么是霸凌</h1>
                        <nuxt-link to="/doc">了解更多</nuxt-link>
                    </span>
                    <h3 class="section__content">
                        指的是一种长时间持续的与当下立即发生的、并对个人在心理、身体和言语遭受的攻击，
                        且因为欺凌者与受害者之间的权力或体型等因素不对等，而不敢或无法有效的反抗。
                    </h3>
                    <h3 class="section__content">
                        欺凌的欺凌者可以是个人，也可以是群体，透过对受害人身心的压迫，
                        造成受害人感到愤怒、痛苦、羞耻、尴尬、恐惧、以及忧郁。
                    </h3>
                    <h3 class="section__content">
                        欺凌可以透过肢体、言语或人际关系等方式进行；而以场所划分，
                        欺凌常见的形式有职场欺凌、校园欺凌、网络欺凌等，但不论场所、形式、
                        针对的对象或目的等，欺凌都是一种反社会行为。
                    </h3>
                    <h3 class="section__content">
                        欺凌对受害者、加害者和发生欺凌行为的组织整体都会造成实质的伤害，
                        也会造成经济上的损失，若在不反抗或无人协助下，欺凌所带来的伤害往往是不可逆转的。
                    </h3>
                </div>
            </div>
            <hr>
            <div class="
                flex flex-wrap items-center justify-center gap-6 m-8 bg-white 
                border-gray-200 border-solid border
                mt-8 rounded-lg p-8 w-full
            ">
                <div class="flex flex-shrink-0 flex-grow-0 basis-[300px]">
                    <img src="@/assets/images/Discussion-bro.png" alt="" style="width: 100%;">
                </div>
                <div class="flex flex-col flex-grow flex-shrink-0 basis-[400px]">
                    <h1>防治</h1>
                    <h3 class="section__content">
                        在防治欺凌方面，权威人士可扮演重要的角色，不管该权威人士是小孩子的父母或监护人、
                        学校的老师、或者职场上的人力资源部门员工或主管等等，都可在阻止欺凌方面做出贡献。
                        权威人士在确认和阻止欺凌行为方面深具影响力，且能创造出一个让欺凌无法持续的环境
                    </h3>
                    <h3 class="section__content">
                        面对欺凌最有效的一些方法包括做出回应、认识到伤害正在发生，以及创造一个欺凌无法持续的环境等
                        受欺凌所害的人，对于权威人士会跟谁讨论这些事情，以及该如何回报这问题等等，
                        往往缺乏控制；然而，一个提供支持的方法是寻找受过训练、知道该如何处理欺凌的咨询师
                        或心理医生。
                    </h3>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
a {
    color: #2f4fba;
}

a:hover {
    color: #2e5efd;
}

.docs-devui-row {
    margin: 2em;
}

.section__content:not(:last-child) {
    margin-bottom: .5em;
}

.section__2,
.section__3 {
    background: #fff;
    border: #e6e6e6 1px solid;
    border-radius: 8px;
    margin-top: 1em;
    padding: 1em;
}

.section__3 {
    margin-bottom: 2em;
}
</style>

<script lang="ts" setup></script>