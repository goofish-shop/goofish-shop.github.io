// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Goofish shop',
  tagline: '个人闲鱼小铺',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://goofish-shop.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'goofish-shop', // Usually your GitHub org/user name.
  projectName: 'goofish-shop.github.io', // Usually your repo name.
  trailingSlash: false, // 关闭翻译
  //onBrokenLinks: 'throw', //

  onBrokenMarkdownLinks: 'warn',
  markdown: {
    mermaid: true,
  },
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //  editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        googleTagManager: {
          containerId: 'G-DTZSGLTWHW',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'goofish shop',
        logo: {
          alt: 'goofish shop',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教程',
          },
          { to: '/blog', label: '商品', position: 'left' },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '教程',
                to: '/docs',
              },
            ],
          },

          {
            title: '更多',
            items: [
              {
                label: '商品',
                to: '/blog',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GooFish, Inc. Built with Opencodes.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [{ name: 'keywords', content: 'goofish,goofish shop,闲鱼小铺,程序外包,技术解答,二手市场,二手交易' },
      {
        name: 'msvalidate.01',
        content: '6642F3D5D5529FA5AEA94994FFA85FD9'
      },
      ],

    }),

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-DTZSGLTWHW',
        anonymizeIP: true,
      },
    ],
  ],
};

module.exports = config;
