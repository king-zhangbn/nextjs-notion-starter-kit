import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '588b9dc603414058a69c3c5a0e9660dd',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'XingLuo\'s Blog ', // 网站名称
  domain: 'nblog.en.icu', // 网站域名
  author: 'XingLuo', // 作者名称

  // open graph metadata (optional)
  description: '\“青霄有路终须到\”', // 网站描述

  // social usernames (optional)
  twitter: 'xluo2022', // 推特账户
  github: 'king-zhangbn', // Github 账户
  linkedin: '', // 领英账户
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://nblog.en.icu/user.png', // 默认页面图标
  defaultPageCover: 'https://nblog.en.icu/cover.jpg', // 默认页面封面
  defaultPageCoverPosition: 0.5, // 默认页面封面位置

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true, // 是否启用 LQIP 预览图片支持

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false, // 是否启用 Redis 缓存生成的预览图片

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null, // 将 Notion 页面 ID 映射到 URL 路径的映射表

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default' // 导航栏样式
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
