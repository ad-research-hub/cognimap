脑智图谱 CogniMap 部署记录
===========================

- 当前版本: v356（2026-10-31 访问统计补历史基数机制并标明起算日）
- 数据更新至: 2026-10-31
- 企业数: 328
- 标志物: 548
- 管线: 409
- 临床试验: 725
- 部署方式: GitHub Pages (ad-research-hub/cognimap)
- 线上地址: https://ad-research-hub.github.io/cognimap/

各模块实测数据量（2026-10-25 由仓库文件逐项解析）
--------------------------------------------------
| 模块 | 文件 | 全局变量 | 条数 |
|---|---|---|---|
| 标志物库 | js/markers_data.js | MARKERS_DATA | 548 条 |
| 标志物详情 | js/details_data.js | DETAILS_DATA | 411 个标志物 / 11,508 条参数 |
| 企业库 | js/companies_data.js | COMPANIES_DATA | 328 家（名称唯一，无重复） |
| 研发管线 | js/pipeline_data.js | PIPELINE_DATA | 409 药物 / 725 试验 / 714 唯一 NCT |
| 已上市药物 | js/drugs_data.js | APPROVED_DRUGS_DATA | 11 条 |
| NMPA 获批 | js/nmpa_data.js | NMPA_DATA | 18 个标志物 / 143 张注册证 |
| 文献库 | js/literature_data.js | LITERATURE_DATA | Top1000（OpenAlex 全库 148,537 篇，抓取 2026-10-02） |
| 专家科普 | js/science_data.js | SCIENCE_DATA | 29 条 |
| 医保支付政策 | js/insurance_data.js | INSURANCE_DATA | 症状性治疗 / DMT / 惠民保 **33 项（10 省 + 20 市 + 2 张全国卡 + 汕头的目录衔接）** / 机制 / DRG 6 项，来源 **18 条** |
| p-tau217 横评 | js/ptau217_data.js | PTAU217_DATA | 厂商 21 家 / 来源 81 条 / 要点 13 条 |
| 流行病学地图 | js/epi_world_map.js | EPI_WORLD_MAP | GeoJSON 世界地图 |
| 星图（独立页） | starmap.html | — | 单文件 6,291,126 字节：46 星系 / 39 星座 / 536 恒星 / 1606 行星 / 245 空洞 / 552 连线，正文 104 万字 |
| 星图入口数据 | js/starmap_mini.js | SM_MINI | 59 KB（恒星坐标 + 383 条连线 + 40 色星座配色 + 13 座天际线塔） |

站点规模（2026-10-31 按线上仓库实际统计核对）
--------
仓库文件 35 个、合计 14,818,565 字节（14.13 MB）；v354 新增 starmap.html 与 js/starmap_mini.js 后为 37 个。
v355 只改内容不增文件，仍为 37 个，总体积约 21.20 MB。
index.html 850,261 字节（v354 是 845,342；v355 加 canvas 天际线，v356 加基数机制与起算日提示）。
页脚版本 v356，数据日期 2026-10-31。
js/ 目录现有 19 个文件，index.html 实际加载 12 个；另外 7 个（companies.js、details.js、drugs.js、epi_data.js、markers.js、nmpa.js、pipeline.js）是早期单文件版遗留，已被对应的 *_data.js 取代，页面不再引用——不是加载失败，可以不动。
本次上传后 js/ 变 20 个文件、加载 13 个（新增 js/starmap_mini.js）。
starmap.html 6,291,630 字节（v355 改写模板后重建，比 v354 多 504 字节），独立成页、点击时才下载，不占首页首屏。

版本线（近期）
--------------
v348 补 NMPA 新增注册证
v349 修复手机端展示问题
v350 加入 DRG/DIP 3.0
v351 惠民保扩至 29 项
v352 日期动态化
v353 ptau217_charts.html 上线；index.html 修加载进度 / 换 logo / 强制隐藏 overlay
v353 之后（2026-10-25）修正流行病学地图国名映射：捷克改用 'Czech Rep.'（原写 'Czechia' 对不上地图，该国长期不上色）；
        取消 Hong Kong → China 的映射（地图无港澳独立要素，该映射会让中国区域显示中国香港的数值）；
        港澳数据仍可在下方国家列表、排行榜与详情页查看
v354（2026-10-31）
  · 星图上线：新增 starmap.html（6.29 MB 单文件，原样部署，未改模板一行）
    - 首页「数据仪表盘」第二排第 4 张卡片 = 星图入口（与「AD领域年度论文数量」左右相邻，原 3 卡变 2×2）
    - 疾病知识库页两个 IMA 卡片上方 = 天际线条入口（13 座「中国人的证据」塔）
    - 两处入口均为 canvas/HTML 缩略交互：悬停出提示、点击带 id 打开完整星图（互动做减法，交互仍在）
    - 点击后才下载：流式 fetch 按字节计进度（真实 6.0 MB），完成转 Blob 塞 iframe；同一会话内第二次打开瞬开
    - 顺带修一个入口缺陷：首页星场原本只在 load 与 resize 时绘制，若 load 那一刻首页不是当前页
      （.page 非 active 即 display:none，容器宽高为 0），drawHome 会提前 return，canvas 永远停在
      300×150 默认尺寸；现补 MutationObserver，首页重新 active 且画布尺寸与容器不符时补画一次
  · 惠民保补 AD 单抗覆盖：29 → 33 项，来源 15 → 18 条
    - 新增安徽惠民保2027（卫材官网原文，明确含多奈单抗、年度赔付上限 10 万）、上海沪惠保、深圳惠民保、汕头惠民保
    - 北京（176→159 种，补多奈单抗）、杭州（升 2027 年度）、广西贵港/贺州/河池（补厂家公布的起付线与赔付比例）
    - note 里写清三处口径分歧与采信理由，未取得官方条款的明确标注
  · 访问统计换源：busuanzi 的 HTTPS 握手已被服务端断开（明文 HTTP 仍 200，但 https 站点会被混合内容拦掉），
    这是底部 PV/UV 长期显示 "--" 的真因；旧「每 30 秒重挂脚本」的重试因此永远不会成功。
    改为 abacus（CORS 开放），PV 每次 +1、UV 同浏览器一天 +1，20 秒一轮最多 9 次重试，取不到继续显示 "--"

v355（2026-10-31 手机端修复）
  · 天际线条改成 canvas 重绘
    现象：用户手机上天际线区域整条空白，只剩标题、统计数字和底部说明。
    排查：线上 DOM 里 13 个 .sm-tower 全在（data-i 0–12、onclick 带 S0054 这类 id），
          本地 390px 无头渲染也能正常出图 —— 说明不是没渲染，而是画了不上屏。
          flex + <i> 竖条在部分手机浏览器上的布局/绘制差异，属没法靠猜定位的那类。
    处理：改成 canvas 逐帧自绘，几何自己算，不再依赖 flex 主轴/交叉轴与 overflow 行为。
          命中区按整列划分，手机上一列约 27×138px（原来是 4px 宽的竖条，几乎点不中）。
          手机只标最高的 3 座塔名、桌面标 6 座，13 个全标必然糊成一团。
  · 两块 canvas（首页星场 / 天际线）都加了 MutationObserver：
    页面从 display:none 变 active 时补画一次，避免 load 时容器宽高为 0 导致永远空着
  · 星图本体交互（改 starmap_template.html 后重建 starmap.html，6,291,126 → 6,291,630 字节）
    - MAX_ZOOM 6 → 12：6 倍时单颗星的标签仍挤在一起，手机上推不动
    - 手机初始缩放 1.6 → 2.2：一进来就能看清局部，少两次操作
    - 触点半径：选星 8 → 22px、选边 7 → 22px、双击 9 → 25px、天际线塔 28 → 38px
      粗指针判定用 matchMedia("(pointer: coarse)")，鼠标保持原值。
      点不中＝什么都没选中，用户感受就是「误触」，这比放大倍数更影响手感
    - 模板原件已备份为 starmap_template.html.bak_v354
  · SRC 改为 starmap.html?v=355，绕开 GitHub Pages 约 10 分钟的 HTTP 缓存，
    否则用户点开会拿到旧的星图本体
  · 首页星场：手机高度 300 → 360px，触摸命中半径 14 → 22px

v356（2026-10-31 访问统计）
  · 用户反馈「访问人数重新计数、原来的记录不见了」。核实结论：**busuanzi 侧的历史数字取不回来**。
    - 复测：统计接口 /busuanzi 在 https 下 TLS 握手被断开；换成明文 http 也一样，
      60 秒超时、HTTP 000。只有它的静态 JS 文件还能下载（走 CDN 缓存），
      而那个 JS 拉数据的请求同样挂掉 —— 所以接口侧是真的没了，不是本站写法问题。
  · 处理：给计数加「历史基数」，而不是重算
    - index.html 里新增 var BASE_PV / BASE_UV，显示值 = 基数 + 新计数；
      填了基数就把页脚的「（自 2026-10-31 起计）」去掉
    - 当前基数保持 0（未取得可信的旧数字），故页面明确写出起算日，避免读者拿它跟记忆里的旧数比
    - 基数只允许填真实数字（记得的旧值或截图上的值），不估算、不编造
  · 实测：临时设 BASE_PV=500 / BASE_UV=300，页面显示 509 / 307（500+9、300+7），提示自动消失

说明
----
1. 网站为静态单页应用，所有数据以 JS 全局变量形式内嵌于 js/ 目录，无后端依赖。
2. 访问统计改由 abacus（abacus.jasoncameron.dev）提供：PV 每次访问 +1，UV 同一浏览器每天 +1；取不到数字时保持“--”，每 20 秒重试最多 9 次，绝不显示假数据。原 busuanzi 已弃用——其 HTTPS 证书握手被服务端主动断开，https 页面无法加载。注：换源后计数从 0 重新累计，busuanzi 的历史数字因接口不可达无法迁移。
3. 文献板块支持 OpenAlex / Europe PMC / Semantic Scholar 三源切换与实时抓取。
   星图为独立页面，与本站主体是两套内容体系（源自「AD探索」项目），通过浮层 iframe 隔离加载。
4. 数据来源：OpenAlex、Europe PMC、Semantic Scholar、KEGG、CST、NIA-AA、GBD、FDA、NMPA 等公开权威来源。
