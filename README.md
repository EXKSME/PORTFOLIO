# Personal portfolio

[![Site preview](/public/site-preview.png)](https://hamishw.com)

我的个人作品集网站

Template from [HamishMW/portfolio](https://github.com/HamishMW/portfolio)

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

- 主页左下角图标更新：ins、【behance】图标、网易云
- 【use page】【make mods】两个页面的连接
- 把原作者的作品都替换了
- 左上角 logo
- tab 页 logo、标题名称

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
