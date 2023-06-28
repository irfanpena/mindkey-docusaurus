---
title: 'Web Components Integration'
sidebar_label: Web Components Integration
id: webcomponents
---
Using MindKey Recruiting via Web Components is the recommended way of integration for several reasons:

- Easy integration into an existing site
- SEO friendly
- Styling friendly

# Usage

To get started with the Web Components, you need to add the following script to your web page:

```html
<script src="https://recruiting.mindkey.com/mk-recruiting-components.js"></script>
```

After that, the components are ready. Please check the Components section for more information about the available Web Components.

# Components

The following table shows an overview about the available Web Components. Click on each component for a detailed documentation.

| Web Component    | Description                                                                                                                                                      |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vacancy Explorer | Combines all Vacancy Web Components into a single one. Only recommended for scenarios where you can not have multiple pages and you require a one-page solution. |
| Vacancy List     | Shows a list of your available vacancies.                                                                                                                        |
| Vacancy Details  | Shows a single vacancy in detail.                                                                                                                                |
| Application Form | Shows a form for a possible candidate to apply for a specific vacancy.                                                                                           |
| Job Agent        | Integrates the MindKey Job Agent allowing the user to add, change, or resend the mail to their Job Agent.                                                        |

# Styling

The Web Components are styling friendly, so you can adapt them to your site’s color. Please refer to Styling for more information.

# Site Parameters

Within the MindKey app, you can find the Site Parameters (Administration -> Recruitment -> Recruitment Site Parameters). The Site Parameters specify default values for certain components. Please refer to each component to see which default values are being used. The components allow to override the defaults.

# Language & Culture

All Web Components support a language and a culture parameter.

The language parameter defines the language to use for translating the labels. Refer to supported languages to see, which languages are supported.

The culture parameter defines the format for values, like dates. The following steps decide which culture is used for the visitor:

1. Check if culture is set and a supported language. If yes, the user will see values in whatever the culture parameter is. If not then
2. check if navigator.language is a supported language. If yes, the user will see values in his preferred formatting. If not then
3. check if language is a supported language. If yes, the user will see the values in whatever the language parameter is set. If not then
4. fallback to use en as culture.

## Supported Languages

The following table shows which languages and cultures can be used for the language and culture parameter.

| Language Code | Language | Country                  |
| ------------: | -------- | ------------------------ |
|         da-DK | da       | Danish/Denmark           |
|         de-DE | de       | German/Germany           |
|         en-US | en       | US English/United States |
|         fi-FI | fi       | Finnish/Finland          |
|         hu-HU | hu       | Hungarian/Hungary        |
|         kl-GL | kl       | Greenlandic/Greenland    |
|         nb-NO | nb       | Norwegian/Norway         |
|         sv-SE | sv       | Swedish/Sweden           |