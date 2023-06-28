"use strict";(self.webpackChunkmindkey=self.webpackChunkmindkey||[]).push([[2754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={title:"Mindkey Integrations API",sidebar_label:"Mindkey Integrations API",id:"integration"},i="Integrations API",l={unversionedId:"integration/integration",id:"integration/integration",title:"Mindkey Integrations API",description:"\u26cfBuilds the connection between MindKey and the customer\u2019s existing applications.",source:"@site/docs/integration/integration.md",sourceDirName:"integration",slug:"/integration/",permalink:"/docs/integration/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/integration/integration.md",tags:[],version:"current",frontMatter:{title:"Mindkey Integrations API",sidebar_label:"Mindkey Integrations API",id:"integration"},sidebar:"integrationSidebar",next:{title:"API Certificate Renewal Process",permalink:"/docs/integration/system-api"}},s={},d=[{value:"Insert",id:"insert",level:2},{value:"Update",id:"update",level:2},{value:"Delete",id:"delete",level:2},{value:"Write",id:"write",level:2},{value:"Find",id:"find",level:2},{value:"Logical Operators",id:"logical-operators",level:2},{value:"Condition Operators",id:"condition-operators",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrations-api"},"Integrations API"),(0,r.kt)("p",null,"\u26cfBuilds the connection between MindKey and the customer\u2019s existing applications."),(0,r.kt)("h1",{id:"api-access-prerequisites"},"API Access Prerequisites"),(0,r.kt)("p",null,"Before you can start using the MindKey Integrations API, you need to ensure that you have the following prerequisites in place:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Local Certificate and API Key:")," Contact your primary consultant at MindKey to obtain a local certificate and API key required for authentication."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"List of IP Numbers: "),"Provide MindKey with a list of IP numbers that will be accessing the API."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"GitHub Account:")," If you wish to access API demo samples, share your GitHub account(s) with the MindKey team.")),(0,r.kt)("h1",{id:"recommended-tools"},"Recommended Tools"),(0,r.kt)("p",null,"To work effectively with the MindKey Integrations API, it is recommended to use the following tools:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Postman: "),"Postman is a popular API development and testing tool that provides a user-friendly interface for making API requests."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"PowerShell:")," PowerShell is a powerful scripting language that can be used to automate API interactions and perform various tasks."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Git:")," Git is a version control system that can be useful for managing your code and collaborating with others.")),(0,r.kt)("h1",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"The authentication process for the MindKey API requires a certificate and an API key. MindKey provides a local certificate that you can use on your local development machine. Additionally, an API key is provided to add an extra layer of security. The API key, along with the certificate, serves as the authenticator for accessing the API."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"You need to provide MindKey with the list of IP numbers that will be accessing the API to ensure secure access."),(0,r.kt)("li",{parentName:"ul"},"Please note that the MindKey API does not support customizable authentication."))),(0,r.kt)("h1",{id:"integration-samples-and-powershell-module"},"Integration Samples and PowerShell Module"),(0,r.kt)("p",null,"To help you get started, MindKey provides integration samples in both PowerShell and C#. These samples illustrate how to use the API effectively. In the case of PowerShell, MindKey has developed a shared module that simplifies making requests to the MindKey API. You can request these samples and the PowerShell module from the MindKey team."),(0,r.kt)("h1",{id:"quick-start-guide-for-your-first-request"},"Quick Start Guide for Your First Request"),(0,r.kt)("p",null,"To help you get started quickly, here's an example in PowerShell that demonstrates how to obtain a list of employees in your MindKey:"),(0,r.kt)("h1",{id:"modules"},"Modules"),(0,r.kt)("p",null,"Download the PowerShell modules from the integrations-shared repository to successfully complete the following steps."),(0,r.kt)("p",null,"In PowerShell, import the MindKeyRest module with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Import-Module (PATH-TO-MindKey-Rest.psm1) -Force\n")),(0,r.kt)("p",null,"Connect to the API using the Connect-MindKeyRest method provided by the module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'Connect-MindKeyRest "integration.mindkey.com" -CertificateThumbprint THUMBPRINT -CustomerId CUSTOMERID\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Replace THUMBPRINT and CUSTOMERID with the appropriate values provided by MindKey.")),(0,r.kt)("p",null,"Next, set up the request body by specifying the columns from the employee table that you want to include:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$body = @{\n    columns = "EmployeeId, Name_FullName, ExternalReference, Address_Street, Address_ZipPostalCode, Address_City, Address_CountryRegion, SeniorityDate, PrivateMobilePhoneNumber_FullPhoneNumber, HomePhoneNumber_FullPhoneNumber, Email"}\n')),(0,r.kt)("p",null,"Now you are ready to make your first request. Use the Invoke-MindKeyRestPost method from the shared module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$Employees = Invoke-MindKeyRestPost "employees/find" -InputObject $body\n')),(0,r.kt)("p",null,"The variable $Employees now contains employee objects for each employee in your MindKey."),(0,r.kt)("p",null,"You can display the names of all employees using the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"foreach ($Employee in $Employees) {\n    $Employee.Name_FullName}\n")),(0,r.kt)("p",null,"For more examples in PowerShell or C#, you can explore the integration-samples repository."),(0,r.kt)("h1",{id:"crud-operations"},"CRUD Operations"),(0,r.kt)("p",null,"The MindKey Integrations API supports CRUD (Create, Read, Update, Delete) operations for various controllers. Here are examples of how to perform each operation:"),(0,r.kt)("h2",{id:"insert"},"Insert"),(0,r.kt)("p",null,"To insert a new record in a specific controller, you can use the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$Controller = New-Object NameSpaceTarget.ControllerInsertTarget\n$Controller.ControllerId = "ControllerId"\n$Controller.ControllerField1 = "Controller Field1 value"\n\ntry {\n    $insertedController = Invoke-MindKeyRestPost "controllers/insert" -InputObject $Controller\n} catch {\n    Add-Error "A critical error occurred while inserting controller: $($_.Exception)"\n}\n')),(0,r.kt)("p",null,"The $insertedController variable will contain the newly inserted controller record with all its fields."),(0,r.kt)("h2",{id:"update"},"Update"),(0,r.kt)("p",null,"To update an existing record in a specific controller, use the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$Controller = New-Object NameSpaceTarget.ControllerUpdateTarget\n$Controller.ControllerField1 = "Controller Field1 value update"\n\ntry {\n    Invoke-MindKeyRestPost "controllers/update?ControllerId="+$controllerIdValue -InputObject $Controller\n} catch {\n    Add-Error "A critical error occurred while updating controller: $($_.Exception)"}\n\n')),(0,r.kt)("h2",{id:"delete"},"Delete"),(0,r.kt)("p",null,"To delete a record from a specific controller, use the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'try {\n    Invoke-MindKeyRestPost "controllers/delete?ControllerId="+$controllerIdValue\n} catch {\n    Add-Error "A critical error occurred while deleting controller: $($_.Exception)\n}\n')),(0,r.kt)("h2",{id:"write"},"Write"),(0,r.kt)("p",null,"The write operation either inserts or updates a record in the specified controller, depending on whether the key value already exists. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$Controller = New-Object NameSpaceTarget.ControllerWriteTarget\n$Controller.ControllerId = "ControllerId"\n$Controller.ControllerField1 = "Controller Field1 value"\n\ntry {\n    Invoke-MindKeyRestPost "controllers/write?ControllerId="+$Controller.ControllerId -InputObject $Controller\n} catch {\n    Add-Error "A critical error occurred while writing controller: $($_.Exception)"\n}\n\n')),(0,r.kt)("h2",{id:"find"},"Find"),(0,r.kt)("p",null,"To search for records in a controller based on specific conditions, use the find operation. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'try {\n    $ControllerId = \'controllerId\'\n    Add-Info ("Find Controller: " + $ControllerId)\n\n    # Setup search condition\n    $body = @{\n        searchCondition = @(\n            @{ column = "ControllerId"; value = $ControllerId }\n        )\n    }\n\n    $Result = Invoke-MindKeyRestPost "controllers/find" -InputObject $body\n\n    if (!$Result) {\n        Add-Info ("No match for criteria: ControllerId = " + $ControllerId)\n    }\n} catch {\n    Add-Error "A critical error occurred while getting controller: $($_.Exception)"\n}\n')),(0,r.kt)("h1",{id:"logical-operators-andor-and-condition-operators"},"Logical Operators (AND/OR) and Condition Operators"),(0,r.kt)("p",null,"The MindKey Integrations API allows you to use logical operators (AND/OR) and condition operators to modify search conditions. Here are examples:"),(0,r.kt)("h2",{id:"logical-operators"},"Logical Operators"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$body = @{\n    columns = "ControllerId, Controller_Name"\n    searchCondition =  @(\n        @{ column = "ControllerId"; value = $ControllerId1 },\n        @{ column = "ControllerId"; value = $ControllerId2; logicalOperator = "OR" }\n    )\n}\n\n$Controllers = Invoke-MindKeyRestPost "controllers/find" -InputObject $body\n\n')),(0,r.kt)("h2",{id:"condition-operators"},"Condition Operators"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$body = @{\n    columns = "ControllerId, Controller_Name"\n    searchCondition =  @(\n        @{ column = "ControllerId"; value = "100"; conditionOperator = "NOTEQUAL" }\n    )\n}\n\n$Controllers = Invoke-MindKeyRestPost "controllers/find" -InputObject $body\n\n')),(0,r.kt)("h1",{id:"employee-position-mode"},"Employee Position Mode"),(0,r.kt)("p",null,"You can add a position mode to retrieve connected position Versions records of different types. The position Mode can be one of the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"CurrentOuterJoin:")," Returns all employees and includes positionVersion fields if available."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"CurrentInnerJoin:")," Returns employees with positionVersion records."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"TerminatedInnerJoin:")," Returns terminated employees since a specified date (mandatory customSearchCondition: FromDate)."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"FutureInnerJoin:")," Returns employees with future employment from a specified date (mandatory customSearchCondition: FromDate).")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To specify the position mode, use the positionMode parameter along with the desired positionVersion fields.")),(0,r.kt)("h1",{id:"user-defined-fields"},"User-Defined Fields"),(0,r.kt)("p",null,"To retrieve attached columns for user-defined fields on the employee record, add ",(0,r.kt)("strong",{parentName:"p"},'userDefinedColumns = "UserDefinedColumnName"')," to the employee search. The returned user-defined fields will have names like ",(0,r.kt)("strong",{parentName:"p"},"$Employee.")," UserDefinedColumn_UserDefinedColumnName."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"}," Please note that renaming fields used in the API can cause scripts to fail as the field names and selections will be incorrect.")),(0,r.kt)("h1",{id:"integration-with-leave-time-tracking-and-mileage"},"Integration with Leave, Time Tracking, and Mileage"),(0,r.kt)("p",null,"If you want to integrate leave, time tracking, or mileage functionalities, MindKey provides specific records for these integrations: LeaveIntegration, TimeTrackingIntegration, and MileageIntegration. These records are created when leave, time tracking or mileage transactions are approved in MindKey."),(0,r.kt)("p",null,"The integration records have status fields specific to API integration. The status values can be:"),(0,r.kt)("p",null,"1: Ready (ready to export transaction)",(0,r.kt)("br",{parentName:"p"}),"\n","2: Found (export job has read the transaction)",(0,r.kt)("br",{parentName:"p"}),"\n","3: Updated (export has finished updating the transaction)"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can read these integration records to determine the status of your integration.")),(0,r.kt)("h1",{id:"logging-results-to-mindkey"},"Logging Results to MindKey"),(0,r.kt)("p",null,"To log integration results in MindKey, you can use the syslogs/insert endpoint. Here's an example of an object that can be posted to the syslog:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"$SysLog.MessageText = {{Log_As_String}}\n$SysLog.TransDateTime = {{Current_DateTime}}\n$SysLog.HostName = {{Machine_Name / Ip_Address}}\n$SysLog.UserName = {{User_Running_Integration}}\n$SysLog.JobName = {{Integration_Name}}\n$SysLog.Application = 'MindKey Integration Service'\n\nif (Get-ErrorCount -ge 1) {\n    $SysLog.Status = 3\n} else {\n    if (Get-WarningCount -ge 1) {\n        $SysLog.Status = 2\n    } else {\n        $SysLog.Status = 1\n    }\n}\n\n# Invoke-MindKeyRestPost to post the SysLog object to the syslog\n")),(0,r.kt)("p",null,"The above example illustrates three possible statuses:"),(0,r.kt)("p",null,"1: Success",(0,r.kt)("br",{parentName:"p"}),"\n","2: Warning",(0,r.kt)("br",{parentName:"p"}),"\n","3: Error"),(0,r.kt)("p",null,"It is recommended to set up notifications based on these statuses in MindKey to stay informed about integration results."),(0,r.kt)("h1",{id:"http-headers-for-mindkey-rest-requests"},"HTTP Headers for MindKey REST Requests"),(0,r.kt)("p",null,"When making REST requests to the MindKey API, you may need to include specific HTTP headers. Here are the headers you may encounter:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Accept:")," This header indicates the formats the client accepts for the response. The MindKey API currently supports JSON format, so the Accept header should be set to application/json."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Content-Type: "),"This header specifies the format of the request body provided by the client. For all POST and PUT operations, the Content-Type should be set to application/json."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"TimeZone:"),' This custom header should be specified when a POST operation contains date time values passed as UTC. The TimeZone header specifies the time zone, such as "Romance Standard Time".'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"SystemUser:"),' This custom header can be used to specify a username for tracking modifications made in MindKey. If not set, it defaults to "MindKey Service".'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"ApplicationName: "),"This custom header allows you to provide the name of the application making the API request."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Culture: "),'This custom header can be used to specify the culture for the response. If not set, it defaults to "en-US".'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Language:"),' This custom header allows you to specify the language in which you want to receive the response. If not set or set to an unsupported language, it defaults to "en-US".')),(0,r.kt)("h1",{id:"controllers"},"Controllers:"),(0,r.kt)("p",null,"The MindKey API provides various controllers that allow you to access different data sets. To obtain a list of all controllers, you can make a GET request to the following endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{{api_root}}/{{customer_id}}/system/controllers\n")),(0,r.kt)("p",null,"Replace {{api_root}} with integration.mindkey.com/api and {{customer_id}} with the appropriate customer ID."),(0,r.kt)("p",null,"For more information about an individual controller, you can retrieve its metadata by calling:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{{api_root}}/{{customer_id}}/{{controller_name}}/metadata\n")),(0,r.kt)("p",null,"This will provide you with the data model for the selected controller, including available request methods, filters, and possible fields in a JSON post body."),(0,r.kt)("p",null,"It is recommended to refer to the metadata for controllers to understand their structure and available options."),(0,r.kt)("h1",{id:"http-status-codes-and-errors"},"HTTP Status Codes and Errors"),(0,r.kt)("p",null,"The MindKey Integrations API uses standard HTTP status codes to indicate the success or failure of requests. Here are some common status codes you may encounter:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"200:")," The request was successful.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"404:")," The requested resource could not be found.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"405:")," The HTTP method used is not allowed for the endpoint.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"500:")," An error occurred on the MindKey API server."),(0,r.kt)("p",null,"When handling errors, it's essential to consider the appropriate HTTP status code and any error messages provided in the response."),(0,r.kt)("p",null,"For obtaining logging-in information click ",(0,r.kt)("a",{parentName:"p",href:"https://dash.readme.com/project/pena-team-sandbox/v2.0/docs/system-api"},"here:")))}u.isMDXComponent=!0}}]);