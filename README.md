# Personal portfolio

[![Site preview](/public/site-preview.png)](https://hamishw.com)

我的个人作品集网站

Template from [HamishMW/portfolio](https://github.com/HamishMW/portfolio)

</br>

## 开发日志：

- 2022-7-29:#服务器升级

  - 升级glibc 2.31 一直报python不存在的错，可能是gcc升级版本太高了（9.3.0）
  - 降级gcc至7.5.0
  - 发现无法make glibc-2.31是因为在腾讯的webshell里 识别不到python

    使用宝塔的终端终于把glibc升级成功

  - npm run build报错：webpack error
  - 更新了dependencies依赖包的等级后打包成功

    </br>

- 2022-7-28:#服务器升级

  - 通过宝塔面板的Node.js版本管理器升级了Nodejs18.0.0和npm 8.6.0

    </br>

- 2022-7-25:#服务器升级

  - 服务器已下载并解压好 nodejs 18.6.0
  - node-v18.6.0-linux-x64 已改名为 nodejs
  - 需要更新 centos 的 glibc
  - 更新 npm 到 8.6.0

  </br>

- 2022-7-24: #服务器升级

  - 升级完gdb、make、python 2.7.4、Python 3.8.0
  - gcc升级至9.3.0
  - 预编译glibc一直报错

  </br>

- 2022-7-23: #项目初始化

  - fork项目
  - 升级本地Nodejs与npm
  - 安装项目依赖包
  - 启动项目预览
  - 修复contact页与uses页link404问题
  - 填充修改自己的内容

  </br>


---

## Install & run | 安装与启动

需要 nodejs `18.0.0` 以上，npm `8.6.0` 以上

Make sure you have nodejs `18.0.0` or higher and npm `8.6.0` or higher installed.

 </br>
安装依赖包：

Install dependencies with:

```bash
npm install
```

</br>
在本地启动项目：

Launch Project on Loacl Server:

```bash
npm run dev
```

</br>

查看组件`storybook`:

To view the components storybook:

```bash
npm run storybook
```

</br>
打包项目：

To create a production build:

```bash
npm run build
```

## Deployment | 部署

部署项目：

Deploy the site:

```bash
npm run deploy
```

</br>
部署无服务功能：

Deploy serverless functions:

```bash
cd functions
```

```bash
npm run deploy:api
```

## 待办事项

- 主页左下角图标更新：ins、网易云
- 【use page】【make mods】两个页面的连接
- 把原作者的作品都替换了
- tab 页 logo、标题名称
- Artile页把大的换成网站的诞生
- 小的换成开发记录、logo设计、名称由来
- 未用网页：
      {/* <Link href="/uses">uses page</Link> */}
      {/* <Link href="/projects/volkihar-knight">make mods</Link> */}

## Permissions

I'm cool with anyone using the code or parts of the code for their own site, it is open source so people can learn from it and adapt it. However, I would encourage you to modify the theme and components it to make it your own. If you are using the site's design largely unmodified, I'd appreciate being credited as the designer of the website.

I do not give permission to present any of my projects as your own (this is being actively used as my portfolio site and these are my real projects I've worked on).

## FAQs

<details>
  <summary>How do I change the color on the <code>DisplacementSphere</code> (blobby rotating thing in the background).</summary>
  
  You'll need to edit the fragment shader. [Check out this issue for more details](https://github.com/HamishMW/portfolio/issues/19#issuecomment-870996615).
</details>

<details>
  <summary>How do I get the contact form to work?</summary>
  
  It's set up using a serverless function with AWS Lambda. You'll need to set up an AWS account and deploy the function. [Refer to this issue for more details](https://github.com/HamishMW/portfolio/issues/21#issuecomment-958727113).
</details>
