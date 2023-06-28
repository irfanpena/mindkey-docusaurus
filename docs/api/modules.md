---
id: "modules"
title: "mindkey"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Functions

### default

▸ **default**(`context`, `opts`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `LoadContext` |
| `opts` | `Partial`<`PluginOptions`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `extendCli` | (`cli`: `any`) => `void` |
| `loadContent` | () => `Promise`<`void`\> |

#### Defined in

plugin.ts:13

___

### removeDir

▸ **removeDir**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Defined in

render.ts:95

___

### render

▸ **render**(`project`, `outputDirectory`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | `ProjectReflection` |
| `outputDirectory` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

render.ts:24
