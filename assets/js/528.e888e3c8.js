(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{2638:function(a,t,s){a.exports=s.p+"assets/img/b2c32096-1fc6-44c1-9401-f119d30b557f.6bac80c3.png"},3298:function(a,t,s){"use strict";s.r(t);var e=s(64),c=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"apache-tomcat-ajp-文件包含漏洞-cve-2020-1938"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache-tomcat-ajp-文件包含漏洞-cve-2020-1938"}},[a._v("#")]),a._v(" Apache Tomcat AJP 文件包含漏洞 CVE-2020-1938")]),a._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),t("p",[a._v("Java 是目前 Web 开发中最主流的编程语言，而 Tomcat 是当前最流行的 Java 中间件服务器之一，从初版发布到现在已经有二十多年历史，在世界范围内广泛使用。")]),a._v(" "),t("p",[t("code",[a._v("Ghostcat（幽灵猫)")]),a._v("是由长亭科技安全研究员发现的存在于 Tomcat 中的安全漏洞，由于 Tomcat AJP 协议设计上存在缺陷，攻击者通过 Tomcat AJP Connector 可以读取或包含 Tomcat 上所有 webapp 目录下的任意文件，例如可以读取 webapp 配置文件或源代码。此外在目标应用有文件上传功能的情况下，配合文件包含的利用还可以达到远程代码执行的危害。")]),a._v(" "),t("h2",{attrs:{id:"影响版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[a._v("#")]),a._v(" 影响版本")]),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[a._v("Apache Tomcat 6")]),t("br"),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[a._v("Apache Tomcat 7 < 7.0.100")]),t("br"),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[a._v("Apache Tomcat 8 < 8.5.51")]),t("br"),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[a._v("Apache Tomcat 9 < 9.0.31")]),t("br"),a._v(" "),t("h2",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/vulhub/vulhub.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" vulhub/tomcat/CVE-2020-1938\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" up "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:s(733),alt:"cbe1eedd-5a2a-4147-b44c-d2789769015f"}})]),a._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),t("a-alert",{attrs:{type:"success",message:"利用工具: https://github.com/YDHCUI/CNVD-2020-10487-Tomcat-Ajp-lfi",description:"",showIcon:""}}),a._v(" "),t("br"),a._v(" "),t("p",[t("img",{attrs:{src:s(2638),alt:"b2c32096-1fc6-44c1-9401-f119d30b557f"}})])],1)}),[],!1,null,null,null);t.default=c.exports},733:function(a,t,s){a.exports=s.p+"assets/img/cbe1eedd-5a2a-4147-b44c-d2789769015f.71f76f8f.png"}}]);