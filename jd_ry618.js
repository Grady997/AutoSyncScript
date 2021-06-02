/*


 [task_local]
#柠檬超级品牌联盟
// * 0 * * * http://nm66.top/jd_cctx.js, tag=柠檬城城自动提现, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
*/
const $ = new Env('柠檬超级品牌联盟');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [], cookie = '', message;
let str = '[{"groupId":"04919509","limitNum":50,"mainTitle":"品牌会员开卡","presidentNum":360,"subTitle":"每开一个品牌会员可获得360总裁力","taskType":"1","taskVoList":[{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000002520&shopId=1000002520&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201498049-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000002520","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/189819/30/5280/42285/60b08910Ec1e8c0d2/80e654afdbeb54fc.png","taskName":"惠氏","taskStatus":"0","venderId":1000002520},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000096602&shopId=1000096602&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201498082-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000096602","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/193779/9/5279/46406/60b089c2E290ffb45/a85860a1dbae5715.png","taskName":"京东京造","taskStatus":"0","venderId":1000096602},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=821916&shopId=820477&venderType=0&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201498079-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"821916","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/40327/14/16632/47818/60b08982E3a50cc54/2996f5e6e75c1658.png","taskName":"钟薛高","taskStatus":"0","venderId":821916},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000003663&shopId=1000003663&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201498051-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000003663","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/120130/11/19254/45685/60b08923Ea6cdf9c3/df603c1c532c4f1f.png","taskName":"联合利华","taskStatus":"0","venderId":1000003663},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000001421&shopId=1000001421&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201499492-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000001421","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/184380/11/6988/43066/60b5ec89E150779e9/38396197f4d8bd29.png","taskName":"西门子家里","taskStatus":"0","venderId":1000001421},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=616233&shopId=608668&venderType=0&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201503232-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"616233","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/186776/18/5355/40920/60b08c0aE111b3cd6/19cf5e81351710f8.png","taskName":"斐乐","taskStatus":"0","venderId":616233},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000221047&shopId=1000221047&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201499527-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000221047","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/189734/28/5377/46259/60b08b1bE5757f4d8/ca9bbaf284152a5d.png","taskName":"DQ","taskStatus":"0","venderId":1000221047},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000003568&shopId=1000003568&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201499495-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000003568","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/196361/29/5204/43823/60b08a8cE161f7ef0/0aeefd7e4e52bbf5.png","taskName":"飞鹤","taskStatus":"0","venderId":1000003568},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000010481&shopId=1000010481&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201501809-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000010481","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/186369/30/5461/43952/60b08bc1E695f5f72/91828dc1a2f560cb.png","taskName":"百事可乐","taskStatus":"0","venderId":1000010481},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000017846&shopId=1000017846&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201499524-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000017846","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/173626/11/11885/50561/60b08b00E0003d821/ac4424ebcf415df3.png","taskName":"湾仔码头","taskStatus":"0","venderId":1000017846},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000010410&shopId=1000010410&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201498053-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000010410","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/173398/37/11621/48529/60b08962E90ad8fc0/a6e8375ae2ac841a.png","taskName":"得宝","taskStatus":"0","venderId":1000010410},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000001706&shopId=1000001706&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201498083-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000001706","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/178759/7/6238/43741/60b089ecE31f7aeb2/164b05d826c2673e.png","taskName":"皇家","taskStatus":"0","venderId":1000001706},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000001582&shopId=1000001582&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201498052-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000001582","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/194824/26/5455/41640/60b08946E4db89d07/8caf44e07b6ad632.png","taskName":"雅培","taskStatus":"0","venderId":1000001582},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000074604&shopId=1000074604&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201499523-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000074604","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/189653/27/5350/46527/60b08af3E95ff9930/e41305f871c00fce.png","taskName":"哈根达斯","taskStatus":"0","venderId":1000074604},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000074146&shopId=1000074146&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201499534-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000074146","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/189369/2/5255/45306/60b08ba2E9f6f0329/62e5f86d4909f21f.png","taskName":"Swisse","taskStatus":"0","venderId":1000074146},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000003168&shopId=1000003168&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201499530-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000003168","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/172276/28/11721/45221/60b08b31E8ab61479/017012d554653763.png","taskName":"天梭","taskStatus":"0","venderId":1000003168},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=66621&shopId=62888&venderType=0&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201498080-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"66621","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/185699/37/6235/44517/60b08992E8a441d72/2b3b3c17d8d5bafe.png","taskName":"海澜之家","taskStatus":"0","venderId":66621},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000015268&shopId=1000015268&venderType=1&channel=4039&returnUrl=back","mcInfo":"04919509-14980240-1201499496-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000015268","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/172431/5/11576/50633/60b08a9aE4964828f/efa297a20323f583.png","taskName":"三只松鼠","taskStatus":"0","venderId":1000015268},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard?venderId=100000000000168&channel=401","mcInfo":"04919509-14980240-1201498078-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000013402","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/190062/13/5392/46585/60b08975Ef6a62383/ce6b5232cf458c26.png","taskName":"爱慕希","taskStatus":"2","venderId":1000013402},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":" https://shopmember.m.jd.com/shopcard/?venderId=1000004123&shopId=1000004123&channel=801&returnUrl=https%3A%2F%2Fcjhy-isv.isvjcloud.com%2Fwx%2Fmc%2FpageDecorateView%2FinitPage%3FvenderId%3D1000004123","mcInfo":"04919509-14980240-1201499491-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000004123","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/177619/8/6303/40024/60b08a43E77bf8bb0/a999f4bc468c6476.png","taskName":"小米","taskStatus":"2","venderId":1000004123},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard?venderId=1000009821&shopId=1000009821&venderType=5&channel=401","mcInfo":"04919509-14980240-1201499531-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000009821","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/192497/37/5337/47920/60b08defEa77cb75a/6d6d9392099728ef.png","taskName":"SKII","taskStatus":"2","venderId":1000009821},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":" https://shopmember.m.jd.com/shopcard?venderId=10036324&shopId=874158&venderType=5&channel=401","mcInfo":"04919509-14980240-1201499490-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000282702","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/6184/34/9768/45653/60b08a26E812db0fe/aa1e612ac68bf99b.png","taskName":"美的","taskStatus":"2","venderId":1000282702},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard?venderId=1000101893&shopId=1000101893&venderType=5&channel=401","mcInfo":"04919509-14980240-1201499526-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000101893","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/189729/5/5406/45435/60b08b0dE01b5d5cc/69b0c48cccc895ed.png","taskName":"和路雪","taskStatus":"2","venderId":1000101893},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard?venderId=1000306683&shopId=1000306683&venderType=5&channel=401","mcInfo":"04919509-14980240-1201499533-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000306683","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/177547/35/6298/42465/60b08b80Ea24e23c7/cf3fe7feb888e423.png","taskName":"兰蔻","taskStatus":"2","venderId":1000306683},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard?venderId=1000003005&shopId=1000003005&venderType=1&channel=102","mcInfo":"04919509-14980240-1201498048-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000003005","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/184595/33/5679/43625/60ab50cbE78e70f8d/4c3960b85bbda2fc.png","taskName":"欧乐B","taskStatus":"2","venderId":1000003005},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard?venderId=1000003570&shopId=1000003570&venderType=5&channel=401","mcInfo":"04919509-14980240-1201499497-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000003570","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/196371/5/5289/48911/60b08aadEbc0a7702/c6123a94bd7e0bc7.png","taskName":"金领冠","taskStatus":"2","venderId":1000003570},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard/?venderId=1000001782&shopId=1000001782&venderType=5&channel=401","mcInfo":"04919509-14980240-1201498034-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000001782","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/188095/10/5263/41910/60b088d9E29a4a653/3669a60adad10be5.png","taskName":"海尔","taskStatus":"2","venderId":1000001782},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard?venderId=1000003445&shopId=1000003445&venderType=5&channel=401","mcInfo":"04919509-14980240-1201499494-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000003445","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/173165/1/11899/41975/60b08a7aE6c953a1a/db565cfa8df12165.png","taskName":"格力","taskStatus":"2","venderId":1000003445},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard?venderId=1000003691&shopId=1000003691&venderType=5&channel=401","mcInfo":"04919509-14980240-1201498040-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000003691","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/178679/6/6235/41236/60b088e5Ec2719ac7/e8ef66c389f38089.png","taskName":"飞利浦","taskStatus":"2","venderId":1000003691},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":"https://shopmember.m.jd.com/shopcard?venderId=1000004064&shopId=1000004064&venderType=5&channel=7062","mcInfo":"04919509-14980240-1201501808-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000004064","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/139659/1/17416/45834/60b08bb2E1c956e2b/766c81dd5a32176b.png","taskName":"宝洁","taskStatus":"2","venderId":1000004064},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":" https://shopmember.m.jd.com/shopcard?venderId=1000004065&shopId=1000004065&venderType=5&channel=401","mcInfo":"04919509-14980240-1201499489-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000004065","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/179122/29/6244/42995/60b089f9Ea961a4b8/3b462f7fc9567a3d.png","taskName":"OPPO","taskStatus":"2","venderId":1000004065},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31628007","link":" https://shopmember.m.jd.com/shopcard?venderId=100000000000755&channel=401","mcInfo":"04919509-14980240-1201499532-N#0--120--1027--#1-0-#11-31628007#ace43553","taskId":"1000002662","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/172320/17/11651/46195/60b08b73Ea048abff/d1222138a5c2e194.png","taskName":"欧莱雅","taskStatus":"2","venderId":1000002662}]},{"allTaskStatus":"0","groupId":"04919510","limitNum":50,"mainTitle":"逛一逛品牌会场","presidentNum":330,"progress":"1","subTitle":"每逛一个会场可获得330总裁力","taskType":"2","taskVoList":[{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/3KCvwkZReZK6JbwWxmYWBjhc42UV/index.html","mcInfo":"04919510-14979639-3201493456-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493456","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/188286/23/4833/76563/60ab4bcaE8cd6a26d/434ecc44c1570daf.png","taskName":"哈根达斯会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/9VmyoqBLL4PUhbUB7jFqbjybCw7/index.html","mcInfo":"04919510-14979639-3201493457-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493457","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/177108/16/5767/76626/60ab4beaEc9496b68/16fa131926525807.png","taskName":"湾仔码头会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/26D9HfwRa7ksiWt84b2pBThDkeDD/index.html","mcInfo":"04919510-14979639-3201493460-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493460","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/180360/28/5722/76173/60ab4c20E56f6bc2c/d88f35799b6be9f5.png","taskName":"和路雪会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/3K8HuB5uyVrhPuwkJqzcYTRrFZn1/index.html","mcInfo":"04919510-14979639-3201493461-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493461","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/173403/31/11229/74673/60ab4c40E2356de29/8cf50412e236ecb5.png","taskName":"DQ会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/i1fP8jrYWnvZ3BkqfimxKd1hPbF/index.html","mcInfo":"04919510-14979639-3201493440-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493440","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/179819/27/5587/76009/60ab49b1E6bd78ce1/54a25cb85be4aef3.png","taskName":"三只松鼠会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/3fVS8fFeQd2pEL9ZFUVth97iD88i/index.html?babelChannel=ttt2","mcInfo":"04919510-14979639-3201493449-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493449","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/192417/1/4828/63308/60aca0f2Ebe172e52/6832020ff965c249.png","taskName":"爱慕希会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/bjN5RXLLFhHXAkgV3qkEDWTnr4j/index.html","mcInfo":"04919510-14979639-3201493454-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493454","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/178835/11/5689/75693/60ab4b66Ea26fb4d9/990748fad0bd9c8f.png","taskName":"百事可乐会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://prodev.m.jd.com/mall/active/2gh9j2DMtNLtKSXJJJRMfeDoAqzG/index.html","mcInfo":"04919510-14979639-3201493455-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493455","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/187910/10/4764/75414/60ab4b94Ee490cb33/4c611bf97ef30953.png","taskName":"钟薛高会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/dAccj7pdgwGQvVP79RUuMb2AA8n/index.html","mcInfo":"04919510-14979639-3201493427-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493427","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/174976/6/11204/61430/60ab467eEa0fa9b6b/e13c53acd2f1023f.png","taskName":"oppo会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/ktAqvQsshJdsKU8wt2fDJpewZPx/index.html","mcInfo":"04919510-14979639-3201493436-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493436","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/187273/39/4765/62191/60ab4869E1f311523/e4dcadd1750f54db.png","taskName":"小米会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/29fwJBcZiduUq5tnfRgTWNe4gLhZ/index.html?babelChannel=ttt1","mcInfo":"04919510-14979639-3201493450-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493450","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/194062/16/4606/74796/60ab4aeaE635f6abf/0a2e72e100e124c1.png","taskName":"佳洁士会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/3BJxtJ5tehLp3g8a3PKw7EsdQ8jd/index.html","mcInfo":"04919510-14979639-3201493439-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493439","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/195744/39/4651/76324/60ab496dEe372454f/03eb536a4723ef18.png","taskName":"联合利华会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/3FMjRTgEuVawNBLRNhqnZ2aS15fZ/index.html","mcInfo":"04919510-14979639-3201493486-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493486","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/179903/27/5033/76326/60ab4dbbEca88fd54/94d78766caaff6f8.png","taskName":"Swisse会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/2ewUgLUgMbVP26pe9BxSBzaTazNt/index.html?babelChannel=ttt1","mcInfo":"04919510-14979639-3201493443-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493443","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/174086/19/11217/74421/60ab4a2bE6f05d5f1/9af55af26d442f06.png","taskName":"得宝会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/4HgGH2m99vCryd5RsbUQq8t3mqyJ/index.html","mcInfo":"04919510-14979639-3201493451-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493451","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/142412/33/16750/75330/60ab4b22E510ae5f7/f2f41eac1f31dbc6.png","taskName":"汰渍会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/oSkzaCN3kT82h9grvR7XK8gMfuF/index.html","mcInfo":"04919510-14979639-3201493452-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493452","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/182089/3/5673/75059/60ab4b43E93d1ac7c/e3af33a71590d24a.png","taskName":"碧浪会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/3ThPi2MDs7DemJbFtR6baBuJpXJC/index.html?babelChannel=ttt6","mcInfo":"04919510-14979639-3201493487-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493487","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/109694/21/16865/74441/60ab4de4E1b8fbebd/2d69697e4dfe19d3.png","taskName":"京造会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/3qazdpbhE84eCLePCADTTLxEDFEm/index.html?babelChannel=ttt2","mcInfo":"04919510-14979639-3201493441-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493441","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/175506/11/11189/77330/60ab49d6E98a09c8c/c8b7de2e13fb7f4c.png","taskName":"宝洁洗护发会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/RELNmNjw231s263Ay4mAbxBckf4/index.html","mcInfo":"04919510-14979639-3201493482-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493482","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/147591/5/19712/74753/60ab4cd1E286cc14f/8ba68df2439858f9.png","taskName":"SKII会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/3ePh8AVwDZPord72kHQiA9s6cUaK/index.html","mcInfo":"04919510-14979639-3201493483-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493483","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/189728/37/4821/76226/60ab4d0bE26ebff9c/674a54ff86a8801a.png","taskName":"欧莱雅会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/2VKib822zydvbM5JW9Svsp9sctwu/index.html?babelChannel=ttt9","mcInfo":"04919510-14979639-3201493484-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493484","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/189193/31/4875/74737/60ab4d2cEa23ea299/6ccfdf13be9528e7.png","taskName":"兰蔻会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/31su96Fn6PLpbU79AeNWyrt3RJiE/index.html?babelChannel=ttt14","mcInfo":"04919510-14979639-3201493430-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493430","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/180582/36/5646/61752/60ab47beEa155f5a9/319ea513018c386a.png","taskName":"海尔会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/394DXqJDMhwtUFjaZYNsJpV13wVX/index.html","mcInfo":"04919510-14979639-3201493428-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493428","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/186257/26/5575/61988/60ab473cE29deee9e/00cd3d78037f8130.png","taskName":"飞利浦会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/2T3QHr9M3mhRjXR3KTsgrVzab63i/index.html","mcInfo":"04919510-14979639-3201493429-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493429","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/180100/38/5665/60957/60ab479aEee79225e/eeb2cb4eba4e033b.png","taskName":"格力会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/B8yRm2bssroxXn4q2F5CCKWWyvM/index.html","mcInfo":"04919510-14979639-3201493434-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493434","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/195947/7/4667/62912/60ab4821Ee47cdc4c/819f041c0b6d836e.png","taskName":"欧乐B会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/3bNKQJaWGkHbab5bBeXGntjidcu2/index.html","mcInfo":"04919510-14979639-3201493435-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493435","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/180084/16/5722/64190/60ab483fEd32e2167/637f3020aede5059.png","taskName":"西门子家电会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/3RqG4DaLiDNWkcgbZUD7RC8PM87t/index.html?babelChannel=ttt2","mcInfo":"04919510-14979639-3201493433-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493433","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/180892/35/5661/63045/60ab47ffEd913346e/c5ea8aa55204ff15.png","taskName":"美的会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/vUux6iksLeU53LjQFTnR21poxYA/index.html","mcInfo":"04919510-14979639-3201493442-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493442","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/182484/27/5611/75203/60ab4a06E212afa41/1b624e56ac17e58b.png","taskName":"雅培会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/4GUoaisuk3wrgiTQQe7PZBREZyoz/index.html","mcInfo":"04919510-14979639-3201493448-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493448","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/172530/11/11271/77326/60ab4a5fEe2df3c70/d408f585007d7082.png","taskName":"伊利金领冠会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://prodev.m.jd.com/mall/active/4UA4w9AR7KLcLeudg8GCzFb7cqPP/index.html","mcInfo":"04919510-14979639-3201493438-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493438","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/182506/33/5681/74813/60ab4948Eaf7f41aa/9e4c1dce55ee58cc.png","taskName":"惠氏会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/39mCWJopWjfvogALjUoARssESEMB/index.html","mcInfo":"04919510-14979639-3201493437-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493437","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/172776/13/11194/75837/60ab490aE09e22a82/328bc6f69f8e5c8d.png","taskName":"飞鹤会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/4AdQWshxAZCTkaKZBkzZE5xTwDU/index.html","mcInfo":"04919510-14979639-3201493480-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493480","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/146925/18/19597/77095/60ab4c8eE99f6d3fd/1e0b4782c367df0e.png","taskName":"海澜之家会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/2hWinkBSKRECzxTdpnJVx7GZmW3W/index.html","mcInfo":"04919510-14979639-3201493481-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493481","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/193534/17/4678/75549/60ab4cacE56bc6df0/895a990d95f34145.png","taskName":"斐乐会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/357JaWpake6qZ1DNNNwry5ZHGCyb/index.html","mcInfo":"04919510-14979639-3201493479-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493479","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/192045/14/4834/61253/60aca190E48954392/cfe3da014390f95e.png","taskName":"天梭会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://pro.m.jd.com/mall/active/e3uv1rCY1629tUTFXeWj5EKji7g/index.html","mcInfo":"04919510-14979639-3201493485-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201493485","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/176721/3/11150/76656/60ab4d53E9f3e7389/9abc7a9467b55d91.png","taskName":"德施曼会场","taskStatus":"0"},{"biInfo":"1#8422dad38702b25aa8cd8956d3ee61a67f7bd739-102-621034#31625884","link":"https://prodev.m.jd.com/mall/active/3UFae1qBdyg8sqmPe9UDfmUMCLF5/index.html","mcInfo":"04919510-14979639-3201495354-N#0--120--1027--#1-0-#11-31625884#ace43553","taskId":"3201495354","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/190602/23/4806/60896/60aca7a5E2a8690c7/a13a52c527a48969.png","taskName":"皇家","taskStatus":"1"}]},{"allTaskStatus":"0","groupId":"04920484","limitNum":3,"mainTitle":"逛一逛超级会场","presidentNum":200,"progress":"0","subTitle":"每逛一个会场可获得200总裁力","taskType":"3","taskVoList":[{"link":"https://pro.m.jd.com/mall/active/2xHdiCWZGbc8zBP12UPAYiuENvLL/index.html","taskId":"5601495361","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/153081/17/2300/31001/5f87bdc8Effdf264d/4d265045143408cf.jpg","taskName":"超级品牌联盟盛典","taskStatus":"0","taskSubName":"1元抢联盟券包"},{"link":"https://prodev.m.jd.com/mall/active/42HWF2tQELE46g8KH6RaESg36dbc/index.html?babelChannel=ttt5","taskId":"5601495362","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/130140/2/12401/31921/5f87be2dE76925638/ca81eede3e55e571.jpg","taskName":"超级星选盛典","taskStatus":"0","taskSubName":"至高24期免息"},{"link":"https://pro.m.jd.com/mall/active/4Bu3MHfageAii3AR3MwhGBiviW7J/index.html","taskId":"5601495363","taskImgUrl":"https://m.360buyimg.com/babel/jfs/t1/149232/9/10983/31761/5f87be66E93e70fd3/e32f7db29271aa38.jpg","taskName":"超级品类盛典","taskStatus":"0","taskSubName":"抢2021元神券"}]},{"inviteList":[],"limitNum":15,"mainTitle":"邀请好友获得总裁力","presidentNum":800,"progress":"0","subTitle":"每邀请一个好友可获得800总裁力","taskType":"4"}]'
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item])
  })
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {};
} else {
  cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}
const JD_API_HOST = 'https://api.m.jd.com/client.action';

!(async () => {
  if (!cookiesArr[0]) {
    $.msg($.name, '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取', 'https://bean.m.jd.com/bean/signIndex.action', {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
    return;
  }

  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      message = '';
      await TotalBean();
      console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});

        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue
      }
      //await zhuli()
     // await list()
      await geTaskList()
     
      

    }
  }
})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done();
  })
 function geTaskList() {
  let body = {}
    return new Promise(async (resolve) => {
        const options = taskPostUrl("superbrand_doTask",body)
        $.post(options, async (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`);
                    console.log(`${$.name} API请求失败，请检查网路重试`);
                } else {
                    data = JSON.parse(data);
                    if (data && data.code === 0) {
                        let taskList = data.data.result.taskPresidentVoList
                              console.log("开始执行品牌会场任务")
                               for (task of  taskList[1].taskVoList ){
                               type = taskList[1].taskType
                               await dotask(type,task.taskId) 
                                 await $.wait(500);       
                               }
                            console.log("开始执行超级会场任务")   
                           for (task of  taskList[2].taskVoList ){
                               type = taskList[2].taskType
                               await dotask(type,task.taskId)   
                                  await $.wait(500);    
                               }   
                        console.log("开始翻牌")
                        for (card of data.data.result.giftCardVoList) {
                            await filpCard(card.cardId)
                            await $.wait(500);
                        }
                    }
                    console.log(`获取任务列表成功\n`);
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}


function dotask(type, id) {

    return new Promise(async (resolve) => {
        const options = taskPostUrl("superbrand_doTask",`{"taskType":${type},"taskId":${id}}`)
        $.post(options, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`);
                    console.log(`${$.name} API请求失败，请检查网路重试`);
                } else {
                    data = JSON.parse(data);
                    if (data && data.code === 0) {
                        console.log(`任务完成`);
                    }

                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}




async function task() {
 
const result = JSON.parse(str)
//console.log(result); 

for(var i = 0; i < result.length;i++){ 

console.log(result[i].taskId); 
 
  let body = {"taskType":"2","taskId":`"`+result[i].taskId+`"`}
  return new Promise((resolve) => {
    $.post(taskPostUrl("superbrand_doTask",body), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            console.log(`结果${data}`);
            data = JSON.parse(data);
            if (data.msg== "调用成功") {
              console.log(data.data.bizMsg)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    
    })
  })

}  
}

async function zhuli() {
  let body = {"taskType":"4","inviteId":"jd_6dda5b98f716f"}
  return new Promise((resolve) => {
    $.post(taskPostUrl("superbrand_doTask",body), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            console.log(`助力结果${data}`);
            data = JSON.parse(data);
            if (data.msg== "调用成功") {
              console.log(data.data.bizMsg)
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve(data);
      }
    })
  })
}


async function taskPostUrl(functionId,body) {
  return {
    url: `${JD_API_HOST}`,
    body: `functionId=${functionId}&body=${escape(JSON.stringify(body))}&client=wh5&clientVersion=1.0.0&appid=content_ecology&uuid=6898c30638c55142969304c8e2167997fa59eb54&t=1622588448365`,
    headers: {
      'Cookie': cookie,
      'Host': 'api.m.jd.com',
      'Connection': 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded',
      "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
      'Accept-Language': 'zh-cn',
      'Accept-Encoding': 'gzip, deflate, br',
    }
  }
}


async function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      "url": `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      "headers": {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1")
      }
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data["retcode"] === 13) {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data["retcode"] === 0) {
              $.nickName = (data["base"] && data["base"].nickname) || $.UserName;
            } else {
              $.nickName = $.UserName;
            }
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
async function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
      return [];
    }
  }
}
// prettier-ignore

function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}