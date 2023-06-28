/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  integrationSidebar: [
    {
      type: 'category',
      label: 'Integration',
      link: {
        type: 'doc',
        id: 'integration/integration',
      },
      items: [
        'integration/system-api',
        'integration/mermaid',
      ],
    },
  ],
  recruitingSidebar: [
    {
      type: 'category',
      label: 'Recruiting',
      link: {
        type: 'doc',
        id: 'recruiting/recruiting',
      },
      items: [
        {
          type: 'category',
          label: 'Web Integration',
          link: {
            type: 'doc',
            id: 'recruiting/webintegration',
          },
          items: [
            'recruiting/apiclient',
            'recruiting/webcomponents',
          ],
        },
      ],
    },
  ],
  docs: [
    {
      type: "category",
      label: "Graphql-Test",
      items: [
        "Graphql-Test/queries",
        "Graphql-Test/mutations",
        "Graphql-Test/objects",
        "Graphql-Test/interfaces",
        "Graphql-Test/enums",
        "Graphql-Test/unions",
        "Graphql-Test/inputObjects",
        "Graphql-Test/scalars",
        "Graphql-Test/swapi",
      ],
    },
  ],
  API: [
    {
      type: 'autogenerated',
      dirName: 'api', // 'api' is the 'out' directory
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;