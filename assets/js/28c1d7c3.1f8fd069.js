"use strict";(self.webpackChunkmindkey=self.webpackChunkmindkey||[]).push([[2801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,l(l({ref:t},c),{},{components:n})):i.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={id:"swapi",title:"Swapi",slug:"swapis",sidebar_position:10},l=void 0,o={unversionedId:"Graphql-Test/swapi",id:"Graphql-Test/swapi",title:"Swapi",description:"Boolean",source:"@site/docs/Graphql-Test/swapi.md",sourceDirName:"Graphql-Test",slug:"/Graphql-Test/swapis",permalink:"/docs/Graphql-Test/swapis",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Graphql-Test/swapi.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"swapi",title:"Swapi",slug:"swapis",sidebar_position:10},sidebar:"docs",previous:{title:"Scalars",permalink:"/docs/Graphql-Test/scalars"}},s={},p=[{value:"Boolean",id:"boolean",level:2},{value:"Date",id:"date",level:2},{value:"DateTime",id:"datetime",level:2},{value:"Float",id:"float",level:2},{value:"GitObjectID",id:"gitobjectid",level:2},{value:"GitRefname",id:"gitrefname",level:2},{value:"GitSSHRemote",id:"gitsshremote",level:2},{value:"GitTimestamp",id:"gittimestamp",level:2},{value:"HTML",id:"html",level:2},{value:"ID",id:"id",level:2},{value:"Int",id:"int",level:2},{value:"PreciseDateTime",id:"precisedatetime",level:2},{value:"String",id:"string",level:2},{value:"URI",id:"uri",level:2},{value:"X509Certificate",id:"x509certificate",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"boolean"},"Boolean"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean")," scalar type represents ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h2",{id:"date"},"Date"),(0,r.kt)("p",null,"An ISO-8601 encoded date string."),(0,r.kt)("h2",{id:"datetime"},"DateTime"),(0,r.kt)("p",null,"An ISO-8601 encoded UTC date string."),(0,r.kt)("h2",{id:"float"},"Float"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Float")," scalar type represents signed double-precision fractional values as specified by ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IEEE_floating_point"},"IEEE 754"),"."),(0,r.kt)("h2",{id:"gitobjectid"},"GitObjectID"),(0,r.kt)("p",null,"A Git object ID."),(0,r.kt)("h2",{id:"gitrefname"},"GitRefname"),(0,r.kt)("p",null,"A fully qualified reference name (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"refs/heads/master"),")."),(0,r.kt)("h2",{id:"gitsshremote"},"GitSSHRemote"),(0,r.kt)("p",null,"Git SSH string"),(0,r.kt)("h2",{id:"gittimestamp"},"GitTimestamp"),(0,r.kt)("p",null,"An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC."),(0,r.kt)("h2",{id:"html"},"HTML"),(0,r.kt)("p",null,"A string containing HTML code."),(0,r.kt)("h2",{id:"id"},"ID"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"4"'),") or integer (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),") input value will be accepted as an ID."),(0,r.kt)("h2",{id:"int"},"Int"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Int")," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."),(0,r.kt)("h2",{id:"precisedatetime"},"PreciseDateTime"),(0,r.kt)("p",null,"An ISO-8601 encoded UTC date string with millisecond precision."),(0,r.kt)("h2",{id:"string"},"String"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."),(0,r.kt)("h2",{id:"uri"},"URI"),(0,r.kt)("p",null,"An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string."),(0,r.kt)("h2",{id:"x509certificate"},"X509Certificate"),(0,r.kt)("p",null,"A valid x509 certificate string"))}u.isMDXComponent=!0}}]);