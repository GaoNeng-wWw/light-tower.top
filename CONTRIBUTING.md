# 灯塔贡献指南

你好！我们很高兴你有兴趣为灯塔项目做出贡献。在你做出贡献之前，请花费一些时间阅读一下指南

## 目录结构

在贡献之前请花费一些时间来阅读目录结构，熟悉一下项目结构

```
.vscode
assets ............ 资源文件
components ........ 组件
content
    doc ........... 文档
hooks ............. 公用钩子
middleware ........ 中间件
pages ............. 页面
plugins ........... nuxt插件
public ............ favicon文件存放
utils ............. 公用工具类
app.vue ........... 网页入口
nuxt.config.ts .... nuxt配置文件
README.md .......... 自述文件
tsconfig.json ..... ts配置文件
```

## 快速上手

如果您想参与灯塔项目的开发
1. 点击Gitee右上角Fork按钮，将本仓库Fork至个人仓库
2. Clone本地空间项目至本地 `git clone https://gitee.com/您的用户名/light-tower.git`
3. 在Clone完成的根目录下运行`pnpm install`, 安装Node依赖
4. 运行`pnpm dev`, 启动网站
5. 使用浏览器访问

```bash
git clone https://gitee.com/您的用户名/light-tower.git
cd light-tower
git remote add upstream https://gitee.com/tongchen-dev/light-tower
pnpm i
pnpm dev
```

> 如果遇到执行 pnpm i 安装依赖失败，报以下错误：
> 
> ✖ Error: Command failed: /bin/sh -c autoreconf -ivf
> /bin/sh: autoreconf: command not found
> 
> 可以执行 pnpm i --ignore-scripts，或者参考：https://github.com/kohler/gifsicle/issues/177 进行解决。

## 参与贡献

灯塔项目是一个多人合作的公益性质的网站，为了避免多人同时编写一个文档或功能，请在isses中声明自己的任务。

1. 确保您可以正常的访问本地运行的网站
2. 创建新的分支 `git checkout -b userName/feature-1`
3. 本地编码
4. 提交至Fork后的仓库, `git push -u origin userName/feature-1`
5. 同步上游仓库 `git pull upstream master --rebase`
6. 打开上游仓库提交PR
7. 仓库管理员分配审查人员进行审查，并提出意见(如有)
8. PR发起人根据意见调整文档或代码(发起PR后，后续commit会自动同步，push即可)
9. 管理员合并PR
10. 贡献结束

## 至文档编写人员的一封信

很感谢您愿意抽出时间完善网站，为了您可以写出更优秀的文档，请抽出一些时间仔细的阅读一下篇章，谢谢。

### 注意事项

0. 友善,正确是第一位
1. 不得使用歧视性语言
2. 中立原则，即不偏向任何一方
3. 通俗易懂，深入浅出，而不是漫天胡话，学术研究
4. 口号和大话没办法帮你分析和解决问题，也没法帮你科普什么是“霸凌”
5. 如果要引用学术资料，尽可能找到原本，在翻译之后给出原文供读者自己进行而此翻译，并写入文章底部的参考资料中。
6. 如果要使用学术资料，首先使用权威的学术论文与专业教科书，其次使用Wiki或百度百科，永远不要使用营销号。
7. 如果要引用他人说出的话，尽可能找到源文件，并作为参考资料
8. 文中不应出现“我国”而是“中华人民共和国”或“中国”。
9. 在写港澳台时应当遵循，中国香港特别行政区，中国澳门特别行政区，中国台湾省

### Markdown基础语法

本站点采用Markdown语法来编写文档，所以需要您有一定的Markdown基础，别担心，Markdown语法十分的简单。

[Markdown教程](https://markdown.com.cn/basic-syntax/)

当然，我们为了网站专门定制了一些`Formatter` 变量. 这也是Markdown的一部分。

### Frontmatter

front matter 必须是 markdown 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。 这是一个基本的例子：

```markdown
---
title: 网络欺凌
author:
    - GaoNeng <gaonenggg@outlook.com>
bg: bullying-1.jpg
---

# 网络霸凌

## 什么是网络欺凌
```

在这些三条虚线之间，你可以设置预定义变量

## title
- 类型: `string`

文章的标题，会限制在banner中

## author
- 类型: `array`

文章的贡献者，需自行添加。格式如下（空格不可省略）

```markdown
---
author:
    - YourName <YourEmail>
---
```

## bg
- 类型: `string`

文章banner的背景.可以是本地目录，也可以是图床链接，我们推荐使用本地目录，因为图床经常不稳定，免费图床在大流量的情况下会出现拒绝访问的情况.

