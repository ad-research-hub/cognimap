脑智图谱 CogniMap 部署记录
===========================

- 当前版本: v354（2026-10-31 星图上线、惠民保补 AD 单抗四地、访问统计换源）
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
仓库文件 35 个、合计 14,818,565 字节（14.13 MB）；本次新增 starmap.html 与 js/starmap_mini.js 后为 **37 个 / 21,199,275 字节（20.22 MB）**。
index.html 845,342 字节（上一版 822,433），页脚版本 v354，数据日期 2026-10-31。
js/ 目录现有 19 个文件，index.html 实际加载 **12 个**；另外 7 个（companies.js、details.js、drugs.js、epi_data.js、markers.js、nmpa.js、pipeline.js）是早期单文件版遗留，已被对应的 *_data.js 取代，页面不再引用——不是加载失败，可以不动。
本次上传后 js/ 变 20 个文件、加载 13 个（新增 js/starmap_mini.js）。
starmap.html 6,291,126 字节，独立成页、点击时才下载，不占首页首屏。

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

说明
----
1. 网站为静态单页应用，所有数据以 JS 全局变量形式内嵌于 js/ 目录，无后端依赖。
2. 访问统计改由 abacus（abacus.jasoncameron.dev）提供：PV 每次访问 +1，UV 同一浏览器每天 +1；取不到数字时保持“--”，每 20 秒重试最多 9 次，绝不显示假数据。原 busuanzi 已弃用——其 HTTPS 证书握手被服务端主动断开，https 页面无法加载。注：换源后计数从 0 重新累计，busuanzi 的历史数字因接口不可达无法迁移。
3. 文献板块支持 OpenAlex / Europe PMC / Semantic Scholar 三源切换与实时抓取。
   星图为独立页面，与本站主体是两套内容体系（源自「AD探索」项目），通过浮层 iframe 隔离加载。
4. 数据来源：OpenAlex、Europe PMC、Semantic Scholar、KEGG、CST、NIA-AA、GBD、FDA、NMPA 等公开权威来源。
