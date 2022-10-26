<template>
    <div class="footer__wrapper">
        <d-row justify="center">
            <d-col :span="18">
                <d-row :gutter="[16,16]" wrap justify="around" type="flex">
                    <d-col flex="auto">
                        <h4>社区</h4>
                        <p>
                            <a href="https://gitee.com/tongchen-dev">同尘团队</a>
                        </p>
                        <p>
                            <a href="https://gitee.com/tongchen-dev/light-tower">代码仓库</a>
                        </p>
                    </d-col>
                    <d-col flex="auto">
                        <h4>传送门</h4>
                        <a href="https://vue-devui.github.io/">vue-devui</a>
                    </d-col>
                    <d-col flex="auto">
                        <h4>赞助通道</h4>
                        <a href="https://afdian.net/a/gaonengwww">爱发电</a>
                    </d-col>
                    <d-col flex="auto">
                        <h4>资源下载</h4>
                        <a href="https://pan.baidu.com/s/1h7W5guaZ9VFqOhEVqhmGGg?pwd=5kd8">
                            所有静态资源
                        </a>
                    </d-col>
                </d-row>
                <br>
                <span>
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议"
                            style="border-width:0"
                            src="~/assets/images/cc_license.png" /></a><br />本作品采用<a
                        rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享署名-非商业性使用-相同方式共享 4.0
                        国际许可协议</a>进行许可。
                </span>
            </d-col>
        </d-row>
    </div>
</template>

<style lang="scss">
.footer__wrapper {
    background: #eee;
    padding-top: 1em;

    .footer__wrapper__content {
        background: #eee;
        padding: 2em;
    }
}
</style>
