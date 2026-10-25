脑智图谱 CogniMap 部署记录
===========================

- 当前版本: v353（2026-10-25 修正流行病学地图国名映射，未改 `?v=` 数据缓存参数）
- 数据更新至: 2026-10-25
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
| 医保支付政策 | js/insurance_data.js | INSURANCE_DATA | 症状性治疗 / DMT / 惠民保 5 组 / 机制 / DRG 6 项，来源 15 条 |
| p-tau217 横评 | js/ptau217_data.js | PTAU217_DATA | 厂商 21 家 / 来源 81 条 / 要点 13 条 |
| 流行病学地图 | js/epi_world_map.js | EPI_WORLD_MAP | GeoJSON 世界地图 |

站点规模
--------
仓库文件 35 个，合计 14.08 MB。
index.html 771,090 字节，页脚与缓存参数统一为 v353。
js/ 目录 19 个文件，index.html 实际加载 11 个；其余 8 个为旧版遗留、未被引用。

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

说明
----
1. 网站为静态单页应用，所有数据以 JS 全局变量形式内嵌于 js/ 目录，无后端依赖。
2. 访问统计由第三方 busuanzi 提供，接口异常时显示“--”并自动重试。
3. 文献板块支持 OpenAlex / Europe PMC / Semantic Scholar 三源切换与实时抓取。
4. 数据来源：OpenAlex、Europe PMC、Semantic Scholar、KEGG、CST、NIA-AA、GBD、FDA、NMPA 等公开权威来源。
