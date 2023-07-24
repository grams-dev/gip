// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Grams Improvement Proposals',
  tagline: 'The standards for the Grams platform',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gip.grams.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'grams-dev', // Usually your GitHub org/user name.
  projectName: 'gip', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
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
      image: 'img/social-card.jpg',
      navbar: {
        title: 'GIP',
        logo: {
          alt: 'Grams Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/all', label: 'All', position: 'left' },
          { to: '/core', label: 'Core', position: 'left' },
          { to: '/networking', label: 'Networking', position: 'left' },
          { to: '/interfaces', label: 'Interface', position: 'left' },
          { to: '/grc', label: 'GRC', position: 'left' },
          { to: '/meta', label: 'Meta', position: 'left' },
          { to: '/informational', label: 'Informational', position: 'left' }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GIPs',
            items: [
              {
                label: 'All',
                to: '/all',
              },
              { to: '/core', label: 'Core' },
              { to: '/networking', label: 'Networking' },
              { to: '/interfaces', label: 'Interface' },
              { to: '/grc', label: 'GRC' },
              { to: '/meta', label: 'Meta' },
              { to: '/informational', label: 'Informational' }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Exchange',
                href: 'https://stackoverflow.com/questions/tagged/grams',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/grams',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/grams',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/grams-dev/gip',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Grams.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
