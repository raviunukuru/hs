(this.webpackJsonpLostBoy=this.webpackJsonpLostBoy||[]).push([[0],{136:function(e){e.exports=JSON.parse('{"a":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getOwnershipData","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"}],"internalType":"struct ERC721A.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerTx","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"numberMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"ownerBatchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxPerTx_","type":"uint256"}],"name":"setMaxPerTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxPerWallet_","type":"uint256"}],"name":"setMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"setOwnersExplicit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price_","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"totalFree_","type":"uint256"}],"name":"setTotalFree","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxSupply_","type":"uint256"}],"name":"setmaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleMinting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFree","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],"b":{"1":{"events":{},"links":{},"address":"0x72d5300f1e882983ad740d047d9a7c3e6b407638","0xe185abd52c1f6523bfcb8eda587c2f4f5b27a0d3a0cc2a67a08caec363fcd4ac":"enter tx"}}}')},254:function(e,t,n){},255:function(e,t,n){},275:function(e,t,n){},289:function(e,t){},291:function(e,t){},293:function(e,t){},297:function(e,t){},321:function(e,t){},323:function(e,t){},332:function(e,t){},334:function(e,t){},344:function(e,t){},346:function(e,t){},456:function(e,t){},458:function(e,t){},465:function(e,t){},466:function(e,t){},558:function(e,t,n){},559:function(e,t,n){},561:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(39),r=n.n(s),c=(n(254),n(255),n(57)),u=n(237),o=n(244),l=n(238),p=n(7),d="INIT_APP",y="LOGIN_REQUEST",b="LOGIN_SUCCESS",m={loader:!1,username:null,password:null},f=function reducer(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(p.a)(Object(p.a)(Object(p.a)({},e),t.payload),{},{loader:!1});case y:return Object(p.a)(Object(p.a)({},e),{},{loader:!0});case b:return Object(p.a)(Object(p.a)({},e),{},{loader:!1});default:return e}},j={loading:!1,account:null,GaryPee :null,web3:null,errorMsg:""},h=function blockchainReducer(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(p.a)(Object(p.a)({},j),{},{loading:!0});case"CONTRACT_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,GaryPee:t.payload.GaryPee});case"CONNECTION_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,account:t.payload.account,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(p.a)(Object(p.a)({},j),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(p.a)(Object(p.a)({},e),{},{account:t.payload.account});default:return e}},O=Object(c.b)({blockchain:h,app:f}),x=n(18),w=n.n(x),g=n(245),T=w.a.mark(sagas);function sagas(){return w.a.wrap((function sagas$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([]);case 2:case"end":return e.stop()}}),T)}var v=Object(u.createLogger)({predicate:function predicate(){return!0}}),N=Object(o.a)(),M=Object(c.d)(O,Object(c.a)(v,l.a,N));N.run(sagas);var k=M,_=n(56),C=n(133),S=n(20),I=(n(260),n(261),n(272),n(273),n(274),n(41)),E=n(25),F=(n(275),n(567)),A=n(568),P=n(569),U=n(570),R=n(135),D=n.n(R),L=n(136),B=n(82),z=function intContract(){return function(){var e=Object(I.a)(w.a.mark((function _callee(e){var t,n,a;return w.a.wrap((function _callee$(i){for(;;)switch(i.prev=i.next){case 0:if(!window.ethereum){i.next=11;break}return t=new D.a(window.ethereum),i.next=4,L.b[1];case 4:n=i.sent,a=new t.eth.Contract(L.a,n.address),console.log("GaryPeeObj"),console.log(a),e($({GaryPee:a})),i.next=12;break;case 11:B.isMobile?alert("Mobile Device"):window.alert("Please install MetaMask!");case 12:case"end":return i.stop()}}),_callee)})));return function(t){return e.apply(this,arguments)}}()},W=function connectSuccess(e){return{type:"CONNECTION_SUCCESS",payload:e}},$=function contractSuccess(e){return{type:"CONTRACT_SUCCESS",payload:e}},G=function connectFailed(e){return{type:"CONNECTION_FAILED",payload:e}},q=function updateAccountRequest(e){return{type:"UPDATE_ACCOUNT",payload:e}},H=function updateAccount(e){return function(){var t=Object(I.a)(w.a.mark((function _callee3(t){return w.a.wrap((function _callee3$(n){for(;;)switch(n.prev=n.next){case 0:t(q({account:e}));case 1:case"end":return n.stop()}}),_callee3)})));return function(e){return t.apply(this,arguments)}}()},J=n.p+"",K=n.p+"static/media/minus.e347c64d.svg",Q=n.p+"static/media/plus.7f3e1b41.svg",V=n.p+"static/media/holyshit.gif",Y=n(2),Z=function DashboardMain(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.blockchain})),n=Object(a.useState)(!1),i=Object(E.a)(n,2),s=i[0],r=i[1],c=Object(a.useState)(1),u=Object(E.a)(c,2),o=u[0],l=u[1],p=Object(a.useState)(!1),d=Object(E.a)(p,2),y=d[0],b=(d[1],Object(a.useState)(0)),m=Object(E.a)(b,2),f=m[0],j=m[1],h=Object(a.useState)(0),O=Object(E.a)(h,2),x=O[0],g=O[1],T=Object(a.useState)(0),v=Object(E.a)(T,2),N=(v[0],v[1]),M=Object(a.useState)({variant:"",message:""}),k=Object(E.a)(M,2),C=k[0],S=k[1];Object(a.useEffect)((function(){function getNftPrice(){return _getNftPrice.apply(this,arguments)}function _getNftPrice(){return(_getNftPrice=Object(I.a)(w.a.mark((function _callee(){var e;return w.a.wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.GaryPee.methods.price().call();case 2:e=n.sent,g(Number(e)/Math.pow(10,18));case 4:case"end":return n.stop()}}),_callee)})))).apply(this,arguments)}B.isMobile?window.ethereum&&(null===t.GaryPee?e(z()):(getNftPrice(),R(),null!=t.account&&r(!1))):null===t.GaryPee?e(z()):(getNftPrice(),R(),null!=t.account&&r(!1))}),[t]);var R=function(){var e=Object(I.a)(w.a.mark((function _callee2(){var e,n;return w.a.wrap((function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.GaryPee.methods.totalSupply().call();case 2:return e=a.sent,j(Number(e)),a.next=6,t.GaryPee.methods.totalFree().call();case 6:n=a.sent,N(Number(n));case 8:case"end":return a.stop()}}),_callee2)})));return function getTotalSupply(){return e.apply(this,arguments)}}(),L=function(){var e=Object(I.a)(w.a.mark((function _callee4(){var e,n,a;return w.a.wrap((function _callee4$(i){for(;;)switch(i.prev=i.next){case 0:if(!(o>0)){i.next=17;break}if(null==t.account){i.next=14;break}return r(!0),e=t.web3.utils.toWei((x*o).toString()),i.next=6,t.GaryPee.methods.totalFree().call();case 6:return n=i.sent,i.next=9,t.GaryPee.methods.totalSupply().call();case 9:a=i.sent,Number(n)>Number(a)&&(e=t.web3.utils.toWei((0).toString())),t.GaryPee.methods.mint(o.toString()).send({from:t.account,value:e}).on("transactionHash",(function(e){$(e,function(){var e=Object(I.a)(w.a.mark((function _callee3(e){return w.a.wrap((function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:e.status?(l(1),R(),S({variant:"success",message:"Gary Peecon tickets coming next week"})):S({variant:"danger",message:e.msg}),r(!1);case 2:case"end":return t.stop()}}),_callee3)})));return function(t){return e.apply(this,arguments)}}())})).on("error",(function(e,t){S({variant:"danger",message:e.message}),r(!1)})),i.next=15;break;case 14:S({variant:"danger",message:"Please Connect with wallet"});case 15:i.next=18;break;case 17:S({variant:"danger",message:"Please select nft amount"});case 18:case"end":return i.stop()}}),_callee4)})));return function mintNft(){return e.apply(this,arguments)}}(),$=function(){var e=Object(I.a)(w.a.mark((function _callee5(e,n){return w.a.wrap((function _callee5$(a){for(;;)switch(a.prev=a.next){case 0:t.web3.eth.getTransactionReceipt(e,(function(t,a){t&&console.log(t),null!==a?n&&("0x0"==a.status?n({status:!1,msg:"The contract execution was not successful, check your transaction !"}):n({status:!0,msg:"Execution worked fine!"})):window.setTimeout((function(){$(e,n)}),1e3)}));case 1:case"end":return a.stop()}}),_callee5)})));return function waitForReceipt(t,n){return e.apply(this,arguments)}}();return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)("div",{className:"dashboard_main",children:Object(Y.jsxs)(F.a,{children:[Object(Y.jsxs)(A.a,{className:"align-items-center justify-content-center",children:[Object(Y.jsx)(P.a,{sm:12,md:4,className:"text-center",children:Object(Y.jsx)("img",{src:V,className:"w-85"})}),Object(Y.jsxs)(P.a,{sm:12,md:8,children:[""!=C.variant&&Object(Y.jsx)(U.a,{variant:C.variant,children:C.message},1),Object(Y.jsxs)("div",{className:"minting_box",children:[Object(Y.jsx)("p",{className:"Nanum-font",children:".003 Ξ, first 1969 free"}),Object(Y.jsxs)("h1",{className:"Nanum-font",children:["NOT LIVE YET",Object(Y.jsx)("br",{}),Object(Y.jsx)("span",{children:"2 per tx"})]}),null!=t.account?Object(Y.jsx)(Y.Fragment,{children:y?Object(Y.jsx)("button",{className:"claim_btn mt-25",disabled:!0,children:"We are sold out!                                            "}):Object(Y.jsx)("div",{className:"text-center minting-box",children:Object(Y.jsxs)("div",{className:"d-inline-flex",children:[Object(Y.jsxs)("h3",{children:[f,"/3696"]}),Object(Y.jsxs)("div",{className:"minting_form",children:[Object(Y.jsx)("button",{type:"button",onClick:function decreamentNum(){o>1&&l(o-1)},children:Object(Y.jsx)("img",{src:K,alt:"plus"})}),Object(Y.jsxs)("span",{children:[o,"Holy Shit)"]}),Object(Y.jsx)("button",{type:"button",onClick:function increamentNum(){l(o+1)},children:Object(Y.jsx)("img",{src:Q,alt:"plus"})})]}),s?Object(Y.jsx)("button",{className:"claim_btn ml-30",disabled:!0,children:"Wait.."}):Object(Y.jsx)("button",{className:"claim_btn ml-30",onClick:L,children:"Mint"})]})})}):Object(Y.jsx)("button",{type:"button",className:"claim_btn mt-25",onClick:function onClick(t){t.preventDefault(),e(function connect(){return function(){var e=Object(I.a)(w.a.mark((function _callee2(e){var t,n;return w.a.wrap((function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:if(e({type:"CONNECTION_REQUEST"}),!window.ethereum){a.next=18;break}return t=new D.a(window.ethereum),a.prev=3,a.next=6,window.ethereum.request({method:"eth_requestAccounts"});case 6:return n=a.sent,a.next=9,window.ethereum.request({method:"net_version"});case 9:1==a.sent?(e(W({account:n[0],web3:t})),window.ethereum.on("accountsChanged",(function(t){e(H(t[0]))})),window.ethereum.on("chainChanged",(function(){window.location.reload()}))):e(G("Change network to Mainnet.")),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(3),e(G("Something went wrong."));case 16:a.next=19;break;case 18:B.isMobile?alert("Mobile Device"):e(G("Install Metamask."));case 19:case"end":return a.stop()}}),_callee2,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}()}())},children:"Connect with Metamask"}),Object(Y.jsx)("div",{className:"card",children:Object(Y.jsxs)(A.a,{className:"align-items-center justify-content-center",children:[Object(Y.jsxs)(P.a,{xs:8,md:8,children:[Object(Y.jsx)("p",{children:"HOLY $H!T"}),Object(Y.jsx)("p",{children:"#holyshitwtf"})]}),Object(Y.jsx)]})})]})]})]}),Object(Y.jsxs)("p",{className:"footerText",children:["CC0",Object(Y.jsx)("a",{href:"",target:"_blank",children:""}),"  ",Object(Y.jsx)("a",{href:"",target:"_blank",children:""})," ",Object(Y.jsx)("br",{})," "]})]})})})},X=(n(558),n(559),function Header(){var e=Object(a.useState)(!1),t=Object(E.a)(e,2),n=(t[0],t[1]),i=Object(_.c)((function(e){return e.blockchain}));return window.addEventListener("scroll",(function changeBackground(){window.scrollY>=80?n(!0):n(!1)})),Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)("div",{id:"navbar",children:Object(Y.jsx)("nav",{className:"navbar navbar-expand-lg",id:"myNav",children:Object(Y.jsxs)("div",{className:"container",children:[Object(Y.jsx)("a",{className:"navbar-brand",href:"",children:"HOLY SHIT"}),Object(Y.jsx)("button",{className:"navbar-toggler",id:"moblieToggle",children:Object(Y.jsx)("i",{className:"fas fa-bars"})}),Object(Y.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(Y.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(Y.jsx)("li",{className:"nav-item",children:Object(Y.jsxs)("a",{className:"nav-link box_menu_3 socialLinks",href:"https://twitter.com/pxgarypee",target:"_blank",children:[Object(Y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 172 172",style:{fill:"#000000"},children:Object(Y.jsxs)("g",{fill:"none",fillRule:"nonzero",stroke:"none",strokeWidth:"1",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",strokeDasharray:"",strokeDashoffset:"0",fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",style:{mixBlendMode:"normal"},children:[Object(Y.jsx)("path",{d:"M0,172v-172h172v172z",fill:"none"}),Object(Y.jsx)("g",{fill:"#ffffff",children:Object(Y.jsx)("path",{d:"M166.44225,41.49231c-5.64106,2.49938 -11.70675,4.16563 -18.10569,4.95306c6.50644,-3.86194 11.51056,-10.02169 13.85944,-17.29944c-6.08719,3.569 -12.83012,6.18931 -20.00575,7.57069c-5.72975,-6.07375 -13.90244,-9.84162 -22.95662,-9.84162c-17.3935,0 -31.48944,13.975 -31.48944,31.20456c0,2.43756 0.28487,4.81331 0.82237,7.11919c-26.1655,-1.31419 -49.37206,-13.75194 -64.89775,-32.62894c-2.72781,4.61175 -4.26238,10.01363 -4.26238,15.71381c0,10.83331 5.547,20.36856 14.00456,25.98813c-5.16269,-0.15856 -10.02169,-1.59369 -14.276,-3.89688c0,0.09406 0,0.23381 0,0.3655c0,15.13869 10.8575,27.74306 25.24906,30.61331c-2.63106,0.72025 -5.40994,1.12069 -8.27481,1.12069c-2.03444,0 -4.01512,-0.23112 -5.934,-0.57512c4.00706,12.37056 15.63319,21.414 29.40662,21.68006c-10.77687,8.35544 -24.34875,13.35956 -39.1085,13.35956c-2.55044,0 -5.04175,-0.14513 -7.50619,-0.44344c13.94006,8.82844 30.49775,14.00456 48.27019,14.00456c57.91294,0 89.59319,-47.558 89.59319,-88.81381c0,-1.35181 -0.043,-2.69825 -0.1075,-4.02856c6.18394,-4.3645 11.51056,-9.87388 15.71919,-16.16531"})})]})}),Object(Y.jsx)("span",{children:"Twitter"})]})}),null!=i.account&&Object(Y.jsx)("li",{className:"nav-item",children:Object(Y.jsxs)("button",{type:"button",className:"claim_btn",children:["Connected with : ",i.account.slice(0,3)+"..."+i.account.slice(i.account.length-4)]})})]})})]})})})})}),ee=function Dashboard(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X,{}),Object(Y.jsx)(Z,{})]})},te=function AppMain(){return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(a.Suspense,{fallback:Object(Y.jsx)("span",{children:"loading"}),children:Object(Y.jsx)(S.c,{children:Object(Y.jsx)(S.a,{exact:!0,path:"",component:ee})})})})},ne=function App(){return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(_.a,{store:k,children:Object(Y.jsx)(C.a,{children:Object(Y.jsx)(S.c,{children:Object(Y.jsx)(te,{})})})})})},ae=function reportWebVitals(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,571)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.render(Object(Y.jsx)(i.a.StrictMode,{children:Object(Y.jsx)(ne,{})}),document.getElementById("root")),ae()}},[[561,1,2]]]);
//# sourceMappingURL=main.68d67867.chunk.js.map
