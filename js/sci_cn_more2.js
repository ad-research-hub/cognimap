/* AD 著名科学家 · 中国科学家（第二批 22 位）
 *
 * 为什么要单独一个文件：sci_cn_more.js 里是上海/北京/重庆那几个"国家中心级"的人，
 * 这一批要按省市铺开——高校 AD 教授 + 各省三甲神经内科认知方向主任。
 * 混进同一个文件会变成六百行，改一个人要往上翻很久。
 *
 * 收录口径（用户 2026-11-04 的要求）：高校 AD 教授、各省大三甲神经内科认知方向的主任。
 * 一条硬规则：每位的任职与方向都必须能在**医院或高校官网**上读到，卡片底部挂该页链接。
 * 只有二手平台（好大夫、百科、挂号站）能查到的，宁可不收——这类页面的职称常年不更新，
 * 拿它当出处等于把过期信息当事实。
 *
 * 三个字段值得说明：
 *   region —— 卡片按省市分组渲染。分组不用"高校/医院"，因为两边都占的人太多
 *             （章京在浙大医学院也在浙大一院病理科，裴中是中山一院的研究员），
 *             按省市分没有歧义，也正好回答"各省有没有人"。
 *   role   —— 只写官方页上出现过的职务，不叠加、不推测。
 *   note   —— 官方页之间对不上时写在这里（职称、论文数、学会职务），
 *             取新的口径并说明，不取平均、不圆场。
 */
(function () {
  'use strict';
  var S = window.SCIENTISTS;
  if (!S || !S.cn) { return; }

  /* 第一批 8 位当时没有 region 字段，这里补齐，免得回头改三个文件。
     地区按其主要任职机构所在省市定。 */
  var LEGACY_REGION = {
    '贾建平': '北京',
    '王拥军': '北京',
    '唐毅': '北京',
    '郭起浩': '上海',
    '郁金泰': '上海',
    '陈生弟': '上海',
    '王延江': '重庆',
    '施炯': '安徽'
  };
  S.cn.forEach(function (p) {
    if (!p.region && LEGACY_REGION[p.zh]) { p.region = LEGACY_REGION[p.zh]; }
  });

  S.cn.push(
    {
      en: `Jianzhi Wang`,
      zh: `王建枝`,
      country: `中国`,
      countryEn: `China`,
      region: `湖北`,
      aff: `华中科技大学同济医学院 病理生理学系`,
      affEn: `Department of Pathophysiology, Tongji Medical College, Huazhong University of Science and Technology`,
      role: `教授、博士生导师 · 基础医学院副院长、病理生理学系主任 · 教育部神经系统重大疾病重点实验室主任`,
      field: `阿尔茨海默病发病机制 · tau 蛋白磷酸化调控 · 脑脊液微量标志物检测`,
      fieldEn: `Pathogenesis of AD · regulation of tau phosphorylation · trace biomarker assays in CSF`,
      sources: [
        { t: `华中科技大学同济医学院基础医学院 导师简介`, u: `https://jcyxy.tjmu.edu.cn/info/1582/5643.htm` },
        { t: `河北师范大学 学术讲座主讲人简介（2026-05）`, u: `https://www.hebtu.edu.cn/a/2026/05/25/821E56C6F9B148CA87774A456523E4EC.html` }
      ],
      contribZh: `同济医学院病理生理学系教授，教育部长江学者特聘教授、国家杰出青年科学基金获得者、国家教学名师。她的工作集中在 tau 这一条线上：在国际上提出老年性痴呆的神经退行性变涉及主动、有序的分子调控，用"退行性变性死亡"的概念替代过去"细胞被动死亡"的理解；阐明了糖原合酶激酶-3β（GSK-3β）在 tau 过度磷酸化中的关键作用与调节机制，并确认磷酸酯酶-2A 是使异常 tau 去磷酸化的关键酶，为以 GSK-3β 为靶点的药物开发提供了依据。方法学上，她建立了脑脊液微量磷酸化骨架蛋白的检测技术，让"在活人身上测到 tau 病理"成为可操作的事。相关 tau 研究成果于 2010 年获国家自然科学奖二等奖（第一完成人），另获教育部自然科学奖一等奖 2 项、中华医学科技奖一等奖。她是获得美国 NIH FIRCA 基金资助的第一位中国学者，主编国家规划教材《病理生理学》中英文版。`,
      contribEn: `Professor in the Department of Pathophysiology at Tongji Medical College and a Changjiang Scholar appointed by the Ministry of Education, a National Science Fund for Distinguished Young Scholars awardee and a national teaching master. Her work runs along the tau axis: she proposed internationally that neurodegeneration in AD involves active, ordered molecular regulation — a "degenerative death" distinct from passive cell death — and clarified the key role and regulation of glycogen synthase kinase-3β (GSK-3β) in tau hyperphosphorylation, identifying protein phosphatase-2A as the phosphatase that dephosphorylates abnormal tau, which gave a rationale for GSK-3β as a drug target. Methodologically, she established trace detection of phosphorylated cytoskeletal proteins in cerebrospinal fluid, making tau pathology measurable in living patients. Her tau work received China's National Natural Science Award (second class) in 2010 as first contributor, along with two first-class ministry natural science awards and a Chinese Medical Science and Technology Award. She was the first Chinese scholar to receive an NIH FIRCA grant and edits the national textbook of pathophysiology in both Chinese and English.`,
      note: `论文数量官方两处口径不同：学院导师页写"发表 SCI 论文 100 余篇"，2026 年 5 月河北师大讲座简介写"300 余篇"。本卡不取平均数，也不替她选一个，按前者（校内页）为主、后者并存。`
    },
    {
      en: `Jing Zhang`,
      zh: `章京`,
      country: `中国`,
      countryEn: `China`,
      region: `浙江`,
      aff: `浙江大学医学院 · 附属第一医院病理科`,
      affEn: `Zhejiang University School of Medicine · Department of Pathology, First Affiliated Hospital`,
      role: `教授、博士生导师 · 浙大一院余杭院区副院长、病理科主任 · 国家健康和疾病人脑组织资源库主任`,
      field: `神经退行性疾病早期诊断标志物 · 体液来源脑源性外泌体 · 神经病理`,
      fieldEn: `Early-diagnostic biomarkers in neurodegenerative disease · brain-derived exosomes in body fluids · neuropathology`,
      sources: [
        { t: `浙江大学 个人主页`, u: `https://person.zju.edu.cn/0019899` },
        { t: `浙大一院 病理科 章京`, u: `https://www.zy91.com/department/doctor/74/544` }
      ],
      contribZh: `浙江大学医学院教授、博士生导师，2020 年初作为海外引进人才从美国华盛顿大学回国，现任浙大一院余杭院区副院长、病理科主任，并主持浙江大学"国家健康和疾病人脑组织资源库"。他在美国工作二十余年，曾任华盛顿大学医学院神经病理科主任医师、Shaw 冠名讲席教授。方法学上的贡献有两处：一是首创"质谱筛选—独立平台验证"的研究流程，首次确认脑脊液 α-突触核蛋白、磷酸化 α-突触核蛋白、Aβ 与 tau 在帕金森病早期诊断及鉴别诊断中的临床价值，并参与制定 NIH 与 MJFF 帕金森病生物标志物联盟的体液测定与室间质控国际标准；二是首创从体液中捕获脑源性外泌体的技术，报道了血浆外泌体中 α-syn 与 tau、唾液中 α-syn 的潜在应用价值，突破了"只能靠腰穿了解脑内分子变化"的限制。2013 年获国际 AD 生物标志物研发奖。已发表 SCI 论文约 250 篇，总引用逾 1.7 万次。`,
      contribEn: `Professor at Zhejiang University School of Medicine, recruited from the University of Washington in early 2020; he is now vice president of the Yuhang campus and director of pathology at the First Affiliated Hospital, and directs Zhejiang University's National Human Brain Tissue Resource Bank. He spent more than twenty years in the United States as an attending neuropathologist and Shaw Endowed Professor at the University of Washington. Two methodological contributions stand out: he pioneered a pipeline running from mass-spectrometry discovery to independent-platform validation and was the first to confirm the clinical value of CSF α-synuclein, phosphorylated α-synuclein, Aβ and tau in the early diagnosis and differential diagnosis of Parkinson's disease, participating in the NIH/MJFF biomarker consortium's international standards for body-fluid assays and inter-laboratory quality control; and he pioneered capture of brain-derived exosomes from body fluids, reporting the potential of plasma exosomal α-syn and tau and of salivary α-syn — work that broke the dependence on lumbar puncture for reading molecular changes in the brain. He received the International AD Biomarker Research Award in 2013 and has published about 250 papers with more than 17,000 citations.`
    },
    {
      en: `Lu Shen`,
      zh: `沈璐`,
      country: `中国`,
      countryEn: `China`,
      region: `湖南`,
      aff: `中南大学湘雅医院 神经内科`,
      affEn: `Department of Neurology, Xiangya Hospital, Central South University`,
      role: `一级主任医师、教授、博士生导师 · 神经内科主任 · 国家老年疾病临床医学研究中心（湘雅）副主任`,
      field: `家族性认知障碍致病基因 · 神经元核内包涵体病 · 痴呆早期诊断试剂`,
      fieldEn: `Causative genes in familial cognitive disorders · neuronal intranuclear inclusion disease · early-diagnostic assays for dementia`,
      sources: [
        { t: `湘雅医院 沈璐 专家介绍`, u: `https://www.xiangya.com.cn/list/6069/54399.html` },
        { t: `湘雅医院 专家团队（神经内科主任）`, u: `http://xiangya.jkzj.cn/news/itemid-396.html` }
      ],
      contribZh: `湘雅医院神经内科主任，一级主任医师、教授，教育部"长江学者奖励计划"特岗学者。她做的是"中国人的家族性认知障碍到底由哪些基因引起"这件事：建立了集临床诊治、随访与影像组—基因组—代谢组于一体的痴呆与认知障碍数据库，在国际上首次报道中国家族性认知障碍的致病基因突变谱；克隆了认知障碍相关疾病神经元核内包涵体病（NIID）的致病基因 NOTCH2NLC，并提出"NIID 相关疾病"的概念与新的疾病分型；全球首次报道阿尔茨海默病新易感基因 ECE2。转化端，她主持研发系列痴呆与认知障碍早期诊断试剂盒，包括基因诊断芯片与血清学自身抗体试剂盒。主持国家重点研发计划重点专项 1 项、国家自然科学基金 8 项，以通讯作者在 Brain、AJHG 等发表论文 40 余篇。`,
      contribEn: `Director of neurology at Xiangya Hospital, chief physician (first class) and professor, and a Changjiang Scholar (special-term) of the Ministry of Education. Her question is which genes cause familial cognitive disorders in Chinese families: she built a dementia database integrating clinical care, follow-up and imaging-genomic-metabolic data, reported the first mutational spectrum of familial cognitive disorders in China, cloned NOTCH2NLC as the causative gene of neuronal intranuclear inclusion disease (NIID) and proposed the concept and a new classification of "NIID-related disorders", and reported ECE2 as a novel susceptibility gene for AD — a world first. On translation, she led development of a series of early-diagnostic kits including a genetic diagnostic chip and serum autoantibody assays. She has led one National Key R&D Program project and eight NSFC grants, and has more than 40 corresponding-author papers in journals such as Brain and AJHG.`,
      note: `湘雅远程医学平台上的旧简介仍写她兼任"科研部主任"，那是多年前的职务；现任职务以医院官网现在的专家页为准。`
    },
    {
      en: `Yifeng Du`,
      zh: `杜怡峰`,
      country: `中国`,
      countryEn: `China`,
      region: `山东`,
      aff: `山东第一医科大学附属省立医院（山东省立医院）神经内科`,
      affEn: `Department of Neurology, Shandong Provincial Hospital Affiliated to Shandong First Medical University`,
      role: `主任医师、二级教授、博士生导师 · 山东第一医科大学神经病学系主任 · 泰山学者特聘专家`,
      field: `阿尔茨海默病早期防治 · 社区老年队列 · 多模干预`,
      fieldEn: `Early prevention and treatment of AD · community cohorts of older adults · multidomain intervention`,
      sources: [
        { t: `济南市人民政府 杜怡峰：探索阿尔茨海默病防治"山东经验"`, u: `https://www.jinan.gov.cn/col/col57650/art/2026/art_9fe2cdfd50114753ae301c2e60b96826.html` },
        { t: `中国青年网 持续 12 年，这项研究在寻找中国人自己的阿尔茨海默病防治方案`, u: `https://news.youth.cn/jsxw/202610/t20261022_16927706.htm` }
      ],
      contribZh: `山东省立医院神经内科主任医师、山东第一医科大学神经病学系主任。他做的事可以概括成"把防治往前提"：2014 年起在山东聊城阳谷县建农村老年人群队列，持续 12 年，覆盖 52 个自然村、近 6000 名老人，系统追踪 AD 的危险因素与早期信号；2017 年在原有基础上建立"中国延缓老年痴呆和失能的随机化对照多模干预研究"（MIND-China）队列，用控血压血糖、认知训练、膳食与运动等综合手段验证能否把发病风险压下来。依托这批基层数据，他牵头执笔我国首部《中国阿尔茨海默病一级预防指南》，并构建了 AD"防、筛、诊、管"全链条体系；团队还明确了高血压等血管风险可诱发约 44% 的高龄痴呆病例。2025 年获全国卫生健康系统"白求恩奖章"。`,
      contribEn: `Neurologist at Shandong Provincial Hospital and head of the neurology department at Shandong First Medical University. His work can be summarized as moving prevention earlier: since 2014 he has run a rural cohort of older adults in Yanggu County, Liaocheng — twelve years, 52 villages, nearly 6,000 participants — systematically tracking AD risk factors and early signals; in 2017 the team added the MIND-China randomized controlled multidomain intervention trial, testing whether blood-pressure and glucose control, cognitive training, diet and exercise can lower incidence. On that grassroots evidence he drafted China's first guideline for primary prevention of AD and built a screen-diagnose-manage chain across the province; the team also quantified that vascular risks such as hypertension may account for about 44% of dementia cases at advanced ages. He received the Norman Bethune Medal, China's highest honor for health workers, in 2025.`
    },
    {
      en: `Xiaochun Chen`,
      zh: `陈晓春`,
      country: `中国`,
      countryEn: `China`,
      region: `福建`,
      aff: `福建医科大学附属协和医院 神经内科 · 福建医科大学神经科学研究院`,
      affEn: `Department of Neurology, Union Hospital of Fujian Medical University · Institute of Neuroscience, Fujian Medical University`,
      role: `教授、主任医师、博士生导师 · 神经科学研究院院长 · 中国医师协会神经内科医师分会会长`,
      field: `阿尔茨海默病免疫炎症机制 · 天然化合物神经保护 · ApoE4 致病机制`,
      fieldEn: `Immune-inflammatory mechanisms in AD · neuroprotection by natural compounds · pathogenic mechanisms of ApoE4`,
      sources: [
        { t: `福建医科大学附属协和医院 陈晓春：我国神经退行性疾病领域的领军者（2025-02）`, u: `https://www.fjxiehe.com/xwzx/zhxw/202502/t20250227_16263.htm` },
        { t: `福建医科大学附属协和医院 神经内科陈晓春教授获批国家自然科学基金重点项目（2024-11）`, u: `https://www.fjxiehe.com/xwzx/zhxw/202411/t20241115_15683.htm` }
      ],
      contribZh: `福建医科大学附属协和医院神经内科教授、主任医师，福建医科大学神经科学研究院院长，2024 年当选中国医师协会神经内科医师分会第六届委员会会长，并任中华医学会神经病学分会痴呆与认知障碍学组组长。他长期做 AD 与帕金森病的发病机制与防治策略：在国际上较系统地阐明了人参皂苷 Rg1、雷公藤氯内酯醇改善 AD 认知功能的分子机制，并深入揭示了载脂蛋白 ApoE4 增加 AD 风险的病理机制——这也是为什么"同样年纪、同样生活方式，携带 E4 的人风险更高"能在机制层面被解释。近年他转向免疫炎症这条线，从骨髓造血异常入手研究 AD 的免疫炎症机制及其防治策略，并获国家自然科学基金重点项目（医院首个）。承担科技创新 2030"脑科学与类脑研究"重大项目等 20 余项国家级课题，发表 SCI 论文 120 余篇。`,
      contribEn: `Professor and chief physician of neurology at Union Hospital of Fujian Medical University and dean of its Institute of Neuroscience; in 2024 he was elected president of the Neurology Branch of the Chinese Medical Doctor Association and he chairs the dementia and cognitive disorders group of the Chinese Medical Association's neurology branch. His research addresses the mechanisms and treatment of AD and Parkinson's disease: he systematically clarified how ginsenoside Rg1 and triptolide-related compounds improve cognition in AD models, and revealed the pathological mechanisms by which apolipoprotein E4 raises AD risk — the mechanistic answer to why carriers face higher risk at the same age and lifestyle. More recently he turned to immune inflammation, starting from abnormal bone-marrow hematopoiesis, and received a key NSFC project for it — the hospital's first. He has led more than twenty national projects including a Science and Technology Innovation 2030 brain-science megaproject, with over 120 SCI papers.`,
      note: `医院 2022 年的旧专家页仍写他"曾任福建医科大学党委书记"、学会职务为"神经内科医师分会副会长"；现任职务与学会职务以 2024–2025 年院方发布为准。`
    },
    {
      en: `Yong Ji`,
      zh: `纪勇`,
      country: `中国`,
      countryEn: `China`,
      region: `天津`,
      aff: `天津市环湖医院 神经内科 · 天津市痴呆研究所`,
      affEn: `Department of Neurology, Tianjin Huanhu Hospital · Tianjin Institute of Dementia`,
      role: `主任医师、教授、博士生导师 · 天津市痴呆研究所所长`,
      field: `认知障碍与痴呆 · 路易体痴呆队列 · 记忆障碍专科门诊建设`,
      fieldEn: `Cognitive disorders and dementia · dementia with Lewy bodies cohort · building memory clinics`,
      sources: [
        { t: `天津市环湖医院 纪勇 专家介绍`, u: `http://www.tnsi.org/doctor/doctor_32d520c7-9c98-4bcd-8805-89485ea477fa.html` },
        { t: `中国医药信息查询平台 纪勇（履历与研究方向）`, u: `https://m.dayi.org.cn/doctor/1138492` }
      ],
      contribZh: `天津市环湖医院神经内科主任医师、教授，天津市痴呆研究所所长。1999 年在日本国立鸟取大学获医学博士（认知与痴呆方向），随后在纽约大学医学中心、纽约大学痴呆中心做博士后并任神经内科助理教授，通过美国医师考试；2010 年回国，在环湖医院创建天津市痴呆研究所。他率先在国内开设记忆障碍专科门诊，把"记性不好"从一句抱怨变成一个可以评估、可以分层、可以随访的临床入口，并提出认知障碍的"全周期健康管理"模式。研究上以路易体痴呆（DLB）队列与痴呆机制为主，主持国家级科研项目 20 余项，发表 SCI 论文百余篇；参与编写《中国痴呆诊疗指南》《阿尔茨海默病源性轻度认知障碍诊疗中国专家共识》等。`,
      contribEn: `Chief physician and professor of neurology at Tianjin Huanhu Hospital and director of the Tianjin Institute of Dementia, which he founded in 2010 after returning from Japan and the United States. He earned his medical doctorate in cognition and dementia at Tottori University in 1999, then trained as a postdoctoral fellow at NYU Medical Center and NYU's dementia center and served as assistant professor of neurology there, passing the US medical licensing examination. He opened one of China's first specialized memory-disorder clinics, turning "my memory is failing" from a complaint into a structured entry point for assessment, stratification and follow-up, and advocates a full-cycle health-management model for cognitive disorders. His research centers on a dementia-with-Lewy-bodies cohort and dementia mechanisms; he has led more than twenty national projects with over a hundred SCI papers, and contributed to China's dementia diagnostic and treatment guidelines.`
    },
    {
      en: `Kai Wang`,
      zh: `汪凯`,
      country: `中国`,
      countryEn: `China`,
      region: `安徽`,
      aff: `安徽医科大学第一附属医院 神经内科 · "认知与神经精神疾病"安徽省重点实验室`,
      affEn: `Department of Neurology, First Affiliated Hospital of Anhui Medical University · Anhui Key Laboratory of Cognition and Neuropsychiatric Disorders`,
      role: `一级主任医师、教授、博士生导师 · 神经内科主任 · 省重点实验室主任`,
      field: `血管性认知障碍 · 神经心理与行为神经病学 · 认知的神经调控`,
      fieldEn: `Vascular cognitive impairment · neuropsychology and behavioral neurology · neuromodulation of cognition`,
      sources: [
        { t: `安徽医科大学第一附属医院 汪凯 专家介绍`, u: `https://www.ayfy.com/info/1239/13328.htm` },
        { t: `安徽医科大学 人力资源部 汪凯 教授`, u: `https://rsc.ahmu.edu.cn/index/talentTeamInfo/145/4e2aa86863f04eaca3c15783e1dbdcd1.html` }
      ],
      contribZh: `安徽医科大学第一附属医院神经内科主任，一级主任医师、教授，教育部长江学者特聘教授、万人计划领军人才，"认知与神经精神疾病"安徽省重点实验室主任。他的路径是把神经病学、精神病学、心理学与脑科学放在一起做，形成"基因—影像—行为"多层结合的临床与基础研究：血管性认知障碍的生物标志物谱系与早期干预、认知的神经调控机制、情绪与认知的交互。学术上他担任中国卒中学会血管性认知障碍分会主任委员、中华医学会神经病学分会神经心理与行为神经病学组组长、中国医师协会神经内科医师分会副会长。主持国家自然科学基金 10 项（含重大项目 1 项）、国家重点研发计划 3 项，成果发表于 JAMA、Nature Genetics、Nature Mental Health 等，SCI 论文 300 余篇；获安徽省科技进步一等奖、中华医学科技奖一等奖等。`,
      contribEn: `Director of neurology at the First Affiliated Hospital of Anhui Medical University, chief physician (first class) and professor, a Changjiang Scholar and a national "Ten Thousand Talents" leader, and director of the provincial key laboratory of cognition and neuropsychiatric disorders. His approach puts neurology, psychiatry, psychology and brain science in one room, producing gene-imaging-behavior studies: the biomarker spectrum and early intervention of vascular cognitive impairment, neuromodulatory mechanisms of cognition, and the interaction between emotion and cognition. He chairs the vascular cognitive impairment branch of the Chinese Stroke Association and the neuropsychology and behavioral neurology group of the Chinese Medical Association's neurology branch, and serves as vice president of the neurology branch of the Chinese Medical Doctor Association. He has led ten NSFC grants (including a major project) and three National Key R&D projects, publishing in JAMA, Nature Genetics and Nature Mental Health among others, with more than 300 SCI papers.`
    },
    {
      en: `Benyan Luo`,
      zh: `罗本燕`,
      country: `中国`,
      countryEn: `China`,
      region: `浙江`,
      aff: `浙江大学医学院附属第一医院 神经内科`,
      affEn: `Department of Neurology, First Affiliated Hospital, Zhejiang University School of Medicine`,
      role: `主任医师、教授、博士生导师 · 神经内科科主任 · 浙江大学求是特聘医师`,
      field: `阿尔茨海默病早期诊断及机制 · 慢性意识障碍精准诊断 · 汉语失语症`,
      fieldEn: `Early diagnosis and mechanisms of AD · precise diagnosis of chronic disorders of consciousness · Chinese-language aphasia`,
      sources: [
        { t: `浙大一院 神经内科 罗本燕`, u: `https://www.zy91.com/department/doctor/74/119` },
        { t: `浙江大学医学院 罗本燕`, u: `http://www.cmm.zju.edu.cn/2019/0905/c38642a1648053/pagem.htm` }
      ],
      contribZh: `浙大一院神经内科科主任，主任医师、教授，浙江大学求是特聘医师。她的研究有三条线，且都不是"跟风选题"：阿尔茨海默病的早期诊断及其机制；慢性意识障碍（俗称植物状态）的精准诊断、神经机制与个体化干预；以及基于汉语特点的失语症研究——她早年主持的课题包括"基于汉语特征的失语症治疗平台""汉语失语症交互性诊疗系统"，是少数把中文语言学问题带进神经心理学的临床研究者。临床上主攻痴呆、神经心理、脑血管病与神经科疑难病。作为负责人承担国家自然科学基金 4 项、国家重点研发计划"重大慢性非传染性疾病防控研究"重点专项 1 项；以通讯作者在 Neurology、Brain Stimulation 等发表 SCI 论文 100 余篇；获中华医学科技奖三等奖、浙江省科技进步二等奖。`,
      contribEn: `Head of neurology at the First Affiliated Hospital of Zhejiang University School of Medicine, chief physician and professor, and a Qiushi Distinguished Physician of Zhejiang University. Her research runs on three lines, none of them fashionable-by-default: early diagnosis and mechanisms of AD; precise diagnosis, neural mechanisms and individualized intervention for chronic disorders of consciousness; and aphasia studied on the terms of the Chinese language — her earlier grants include a Chinese-specific aphasia treatment platform and an interactive Chinese aphasia diagnostic system, making her one of the few clinicians bringing Chinese linguistics into neuropsychology. Clinically she focuses on dementia, neuropsychology, cerebrovascular disease and diagnostic puzzles. She has led four NSFC grants and one National Key R&D project, with more than 100 SCI papers as corresponding author in journals such as Neurology and Brain Stimulation.`,
      note: `浙大医学院 2019 年的旧页把研究方向写作"失语、脑血管病和神经心理学"，医院现页已列为"AD 早期诊断及机制、慢性意识障碍、脑血管病"三条，本卡按现页。`
    },
    {
      en: `Jing Gao`,
      zh: `高晶`,
      country: `中国`,
      countryEn: `China`,
      region: `北京`,
      aff: `中国医学科学院北京协和医院 神经科`,
      affEn: `Department of Neurology, Peking Union Medical College Hospital`,
      role: `主任医师、教授、博士生导师 · 中华医学会神经病学分会痴呆与认知障碍学组副组长`,
      field: `痴呆与认知障碍 · 脑白质病 · 非肿瘤脑神经病理`,
      fieldEn: `Dementia and cognitive disorders · leukoencephalopathy · non-neoplastic neuropathology`,
      sources: [
        { t: `北京协和医院 高晶`, u: `https://www.pumch.cn/detail/4504.html` },
        { t: `中国医药信息查询平台 高晶`, u: `https://m.dayi.org.cn/doctor/1118694` }
      ],
      contribZh: `北京协和医院神经科主任医师、教授，中华医学会神经病学分会痴呆与认知障碍学组副组长、神经病理学组委员，北京医学会神经病学分会神经病理学组组长。她身上有两件事在国内比较少见：一是长期开"痴呆与脑白质病"专科门诊，把认知障碍和脑白质异常、脑白质营养不良放在一起评价与鉴别——这类病人最容易被笼统归到"痴呆"里；二是坚持做非肿瘤脑病理，包括推动国内痴呆相关疾病的尸检病理研究，让诊断在显微镜下被确认一次，而不只停在量表与影像上。她曾报道阿尔茨海默病的重要影像学改变（顶叶变化）等，也在癫痫病理、神经变性病方面受过多年的国际专业培训。面对公众，她反复强调"并非所有痴呆都是阿尔茨海默病"，脑肿瘤、甲状腺功能低下、梅毒等都可能表现为痴呆，必须先查明病因。`,
      contribEn: `Chief physician and professor of neurology at Peking Union Medical College Hospital, deputy head of the dementia and cognitive disorders group of the Chinese Medical Association's neurology branch and head of the neuropathology group of the Beijing Medical Association. Two things about her work are uncommon in China: she has long run a dementia-and-leukoencephalopathy clinic that evaluates cognitive impairment together with white-matter abnormalities and leukodystrophies — patients most easily lumped under a generic label of dementia; and she has kept doing non-neoplastic brain pathology, including promoting autopsy-based neuropathology of dementia in China, so that a diagnosis is confirmed once under the microscope rather than resting on scales and images alone. She has reported key imaging changes in AD, including parietal involvement, and trained internationally in epilepsy and neurodegenerative pathology. Publicly she keeps repeating that not all dementia is Alzheimer's disease — tumors, hypothyroidism and syphilis can all present as dementia, and the cause must be established first.`
    },
    {
      en: `Dantao Peng`,
      zh: `彭丹涛`,
      country: `中国`,
      countryEn: `China`,
      region: `北京`,
      aff: `中日友好医院 神经科 · 老年医学中心`,
      affEn: `Department of Neurology, China-Japan Friendship Hospital · Center of Geriatric Medicine`,
      role: `主任医师、教授、博士生导师 · 神经科主任、老年医学中心主任`,
      field: `老年认知障碍 · 认知障碍的基因与量表研究 · 血管性认知障碍`,
      fieldEn: `Cognitive disorders in older adults · genetic and psychometric studies of cognition · vascular cognitive impairment`,
      sources: [
        { t: `中日友好医院 彭丹涛 专家信息`, u: `https://www.zryhyy.com.cn/zryh/c102329/zjxx.shtml` },
        { t: `中日友好医院 2022 年博士后招收需求表（神经科方向与职务）`, u: `https://www.zryhyy.com.cn/zryh/c100021/202205/26282b8a44f148b5b1ee08933fb28dbe/files/%E9%99%84%E4%BB%B6%EF%BC%9A%E4%B8%AD%E6%97%A5%E5%8F%8B%E5%A5%BD%E5%8C%BB%E9%99%A22022%E5%B9%B4%E7%A7%91%E7%A0%94%E5%8D%9A%E5%A3%AB%E5%90%8E%E6%8B%9B%E6%94%B6%E9%9C%80%E6%B1%82%E8%A1%A8(1).pdf.pdf` }
      ],
      contribZh: `中日友好医院神经科主任、老年医学中心主任，主任医师、教授，中华医学会老年医学分会常委兼老年神经病学组组长、北京医学会神经病学分会痴呆与认知障碍学组副组长。她做的是认知障碍的"可测量化"：临床、基因、量表、实验室与影像五条线一起推，主持科技部十三五项目中的"阿尔茨海默病基因诊断技术的研发"课题，方向是把基因层面的筛查做成能进临床的试剂盒；同时主持全国指南 5 项、牵头全国多中心药物临床研究 4 项。1991 年起在北京医院神经内科工作二十余年，2004 年获中国协和医科大学医学博士学位，1996—1997 年在德国慕尼黑大学研修。以第一或通讯作者发表论文 109 篇，主编专著 3 部，带博硕研究生 23 人。`,
      contribEn: `Director of neurology and of the geriatric medicine center at China-Japan Friendship Hospital, chief physician and professor, standing committee member of the Chinese Medical Association's geriatrics branch and head of its geriatric neurology group. Her theme is making cognitive impairment measurable: clinical, genetic, psychometric, laboratory and imaging lines advanced together. She led the AD genetic diagnostic technology task within a Ministry of Science and Technology 13th Five-Year project, aiming to turn genetic screening into a kit that reaches clinics, and has chaired five national guidelines and four multicenter drug trials. She spent more than twenty years in neurology at Beijing Hospital from 1991, earned her doctorate at Peking Union Medical College in 2004, and trained at the University of Munich in 1996-1997. She has 109 first- or corresponding-author papers, three edited monographs and has supervised 23 graduate students.`,
      note: `医院专家页与好大夫本人主页对职务的写法略有出入（"神经科主任、老年医学中心主任"／"神经科主任、老年医学中心执行主任"），此处按医院官网写。`
    },
    {
      en: `Qiumin Qu`,
      zh: `屈秋民`,
      country: `中国`,
      countryEn: `China`,
      region: `陕西`,
      aff: `西安交通大学第一附属医院 神经内科`,
      affEn: `Department of Neurology, First Affiliated Hospital of Xi'an Jiaotong University`,
      role: `一级主任医师、二级教授、博士生导师 · 神经内科主任 · 西北认知学院院长`,
      field: `痴呆与认知障碍 · 帕金森病 · 农村老年认知障碍队列`,
      fieldEn: `Dementia and cognitive disorders · Parkinson's disease · rural cohorts of cognitive impairment`,
      sources: [
        { t: `西安交通大学第一附属医院 屈秋民 专家介绍`, u: `https://www.dyyy.xjtu.edu.cn/zjjs/nkxt/sjnk/qqm.htm` },
        { t: `西安交通大学 师资队伍 屈秋民`, u: `https://www.xjtu.edu.cn/jsnr.jsp?urltype=tree.TreeTempUrl&wbtreeid=1632&wbwbxjtuteacherid=1226` }
      ],
      contribZh: `西安交大一附院神经内科主任，一级主任医师、二级教授，西安交通大学医学部名医。1986 年毕业于原西安医科大学，2004 年获日本北海道大学医学博士学位，2005—2006 年在美国加州大学洛杉矶分校完成博士后研究后回国。他的研究落点在西北：主持陕西省重点研发计划"西安市农村中老年人认知功能障碍队列研究"，把城市医院里那套认知评估搬到农村人群里去看真实患病情况；同时做糖尿病影响 Aβ 清除的机制研究（AQP4 错位分布、自噬体—溶酶体融合）与 AD 痴呆前阶段的新药评价体系。临床上牵头成立西北地区帕金森病防治联盟与西北认知学院，是区域内认知障碍诊疗网络的主要搭建者之一。承担国家科技攻关、国家自然科学基金等课题 30 余项，曾获国家科技进步奖二等奖、中华医学科技奖一等奖。`,
      contribEn: `Director of neurology at the First Affiliated Hospital of Xi'an Jiaotong University, chief physician (first class) and professor. He graduated from Xi'an Medical University in 1986, earned a doctorate at Hokkaido University in 2004 and returned after postdoctoral work at UCLA in 2005-2006. His research is anchored in northwest China: he leads a provincial key project on a cohort of rural middle-aged and older adults in Xi'an, taking cognitive assessment out of city hospitals to see the real burden in rural populations, alongside mechanistic work on how diabetes impairs Aβ clearance (AQP4 mislocalization, autophagosome-lysosome fusion) and a drug-evaluation system for the pre-dementia stage of AD. Clinically he founded the northwest Parkinson's prevention alliance and the Northwest Cognition Academy, and is one of the main builders of the region's cognitive-disorder network. He has led more than thirty national and provincial projects and received a National Science and Technology Progress Award (second class).`,
      note: `官方页只写"获得 2008 年国家科技进步奖二等奖"，未说明完成人排序，本卡也不写成"第一完成人"。`
    },
    {
      en: `Jiewen Zhang`,
      zh: `张杰文`,
      country: `中国`,
      countryEn: `China`,
      region: `河南`,
      aff: `河南省人民医院 神经精神医学部 · 神经内科`,
      affEn: `Department of Neurology, Henan Provincial People's Hospital`,
      role: `主任医师、教授、博士生导师 · 神经精神医学部主任 · 中华医学会神经病学分会痴呆与认知障碍学组副组长`,
      field: `痴呆与认知障碍 · 脑小血管病精准诊断 · 神经遗传病分子诊断平台建设`,
      fieldEn: `Dementia and cognitive disorders · precise diagnosis of cerebral small vessel disease · molecular diagnostics for neurogenetic disease`,
      sources: [
        { t: `河南省人民医院 张杰文 专家介绍`, u: `https://www.hnsrmyy.net/info/1812/302314.htm` },
        { t: `河南省人民医院 神经内科基地招生简章（科室与学术带头人介绍）`, u: `https://www.hnsrmyy.net/info/13829/308439.htm` }
      ],
      contribZh: `河南省人民医院神经精神医学部主任，主任医师、教授，中原医疗卫生领军人才（中原名医），中华医学会神经病学分会委员兼痴呆与认知障碍学组副组长、中国医师协会神经内科医师分会副会长、河南省医学会神经病学分会主任委员。他对河南这块地方的贡献主要在"从无到有"：2012 年带科室拿到卫生部临床重点专科资助；在省内率先成立神经内科亚专业学组，主持建设神经内科实验室并开展神经遗传病分子诊断、神经免疫疾病抗体检测，成立神经病理室开展肌肉与脑活检病理诊断，成立脑电睡眠监护室开展多导睡眠监测与长程视频脑电——这些现在是常规，当年是把省级神经科从"看常见病"推到能定罕见病的层次。研究方向为痴呆与脑小血管病的精准诊断和治疗，任八年制全国统编教材《神经病学》副主编。`,
      contribEn: `Head of the neuropsychiatry division at Henan Provincial People's Hospital, chief physician and professor, a Zhongyuan medical leader, and deputy head of the dementia and cognitive disorders group of the Chinese Medical Association's neurology branch; he also serves as vice president of the neurology branch of the Chinese Medical Doctor Association and chair of the Henan neurology society. His contribution to Henan is largely one of building from nothing: in 2012 he led the department to national key clinical specialty funding; he established the province's first neurology subspecialty groups, built the neurology laboratory for molecular diagnosis of neurogenetic disease and antibody testing for neuroimmune disease, set up a neuropathology room for muscle and brain biopsy, and opened an EEG-sleep monitoring unit — routine now, but at the time it moved a provincial department from treating common disease to naming rare disease. His research focuses on precise diagnosis and treatment of dementia and cerebral small vessel disease, and he is associate editor of the eight-year national neurology textbook.`
    },
    {
      en: `Huali Wang`,
      zh: `王华丽`,
      country: `中国`,
      countryEn: `China`,
      region: `北京`,
      aff: `北京大学第六医院（北京大学精神卫生研究所）· 记忆障碍诊疗与研究中心`,
      affEn: `Peking University Sixth Hospital (Institute of Mental Health) · Dementia Care and Research Center`,
      role: `研究员、教授、博士生导师 · 临床研究室主任、记忆障碍诊疗与研究中心主任`,
      field: `老年情绪与认知障碍早期识别 · 认知障碍全程管理与照护技术`,
      fieldEn: `Early identification of late-life mood and cognitive disorders · whole-course management and caregiving interventions`,
      sources: [
        { t: `北京大学第六医院 学术带头人 王华丽 教授`, u: `https://www.pkuh6.cn/Html/News/Articles/1327.html` },
        { t: `人民日报全国党媒信息公共平台 北大六院王华丽：守护银发记忆的"领航者"与"知心人"`, u: `https://www.hubpd.com/hubpd/rss/cmmobile/index.html?contentId=3170534137672529990` }
      ],
      contribZh: `北京大学第六医院（北京大学精神卫生研究所）研究员、教授，临床研究室主任、记忆障碍诊疗与研究中心主任，痴呆诊治转化医学北京市重点实验室副主任。她做的是一块长期被当作"不务正业"的事：照护。2000 年她创办国内首家 AD 医患家属联谊会，开创了适合中国家庭的失智照护辅导技术，提出认知障碍"全程管理"理念——不只管开药，还管家属怎么换尿布、怎么说话、怎么先把自己照顾好；建立老年认知障碍临床病例登记系统，让门诊里零散的病例能变成可研究的队列。她还担任 WHO 全球痴呆监测顾问、痴呆和认知衰退风险防控指南（更新版）专家组组长，负责组织实施国家卫生健康委老年痴呆防治促进行动。2025 年获世界卫生组织"促进健康老龄化奖"。发表论文 140 余篇。`,
      contribEn: `Researcher and professor at Peking University Sixth Hospital (Institute of Mental Health), head of its clinical research office and of the Dementia Care and Research Center, and deputy director of the Beijing key laboratory of translational medicine in dementia. She took on a subject long treated as beside the point: caregiving. In 2000 she founded China's first Alzheimer's patient-and-family association, developed caregiving coaching suited to Chinese families, and proposed whole-course management of cognitive disorders — not only prescriptions, but how families manage daily care, how they speak to the person, and how they look after themselves first. She built a clinical registry of older adults with cognitive disorders so that scattered outpatient cases become a researchable cohort. She is a WHO global dementia monitoring advisor and chairs the expert group for the updated WHO guidelines on risk reduction of cognitive decline and dementia, and she organizes the National Health Commission's dementia prevention action. She received the WHO 2025 award for health ageing.`,
      note: `医院页面职称写"研究员"，另有材料写"教授"，两个口径并存，本卡并列，不替她选一个。`
    },
    {
      en: `Yun Xu`,
      zh: `徐运`,
      country: `中国`,
      countryEn: `China`,
      region: `江苏`,
      aff: `南京大学医学院附属鼓楼医院 神经内科`,
      affEn: `Department of Neurology, Nanjing Drum Tower Hospital, Nanjing University Medical School`,
      role: `二级主任医师、教授、博士生导师 · 神经内科主任 · 科技创新 2030"脑科学与类脑研究"重大项目首席科学家`,
      field: `认知障碍早期筛查 · 脑血管病 · 拉曼光谱无创检测`,
      fieldEn: `Early screening for cognitive impairment · cerebrovascular disease · non-invasive Raman spectroscopy`,
      sources: [
        { t: `南京鼓楼医院 神经内科 徐运（博士后导师页）`, u: `https://www.njglyy.com/rlzy/zj_detail.aspx?id=10` },
        { t: `南京鼓楼医院 2024"中国高被引学者"榜单发布（徐运介绍）`, u: `https://www.njglyy.com/news/detail.aspx?Id=12141` },
        { t: `央广网 守护大脑"生命中枢" 破局神经疾病诊疗（2026-09）`, u: `https://www.cnr.cn/jsfw/tyjk/20260911/t20260911_527810954.shtml` }
      ],
      contribZh: `南京鼓楼医院神经内科主任，二级主任医师、教授，科技创新 2030"脑科学与类脑研究"重大项目首席科学家，国务院政府特殊津贴专家。她把"筛查"做成了工程：团队研发的拉曼光谱认知检测技术仅需抽取一滴血即可识别认知障碍并判定程度，已获国家专利并发表于国际期刊，目前已为江苏省近 7 万名 65 岁以上老年人完成认知筛查干预；同时创建无创脑血流评估模式，用于缺血性卒中患者的精准评估。2026 年科室牵头成立全国脑机接口医学联盟，启用无创闭环脑机接口示范病房，覆盖 AD、卒中、帕金森、睡眠障碍、渐冻症等。科研上主持国家、省部级项目 30 余项，其中科技部脑科学重大项目 1 项（5955.1 万元），发表论文 300 余篇，2020、2021 连续入选"中国高被引学者"。`,
      contribEn: `Director of neurology at Nanjing Drum Tower Hospital, chief physician (second class) and professor, chief scientist of a Science and Technology Innovation 2030 brain-science megaproject. She turned screening into infrastructure: her team's Raman-spectroscopy cognitive test needs only a drop of blood to identify cognitive impairment and grade its severity, is patented and published internationally, and has been used to screen and intervene in nearly 70,000 people aged 65 and over in Jiangsu; the team also created a non-invasive cerebral blood flow assessment model for precise evaluation of ischaemic stroke. In 2026 the department founded a national brain-computer interface medical alliance and opened a non-invasive closed-loop BCI demonstration ward covering AD, stroke, Parkinson's disease, sleep disorders and ALS. She has led more than thirty national and provincial projects, including a 59.55-million-yuan brain-science megaproject, with over 300 papers.`,
      note: `学会职务两处口径不同：医院 2024 年新闻写"中华医学会神经病学分会候任主任委员"，百科类页面写"副主任委员"。本卡按医院口径，并保留这处分歧。`
    },
    {
      en: `Chunfeng Liu`,
      zh: `刘春风`,
      country: `中国`,
      countryEn: `China`,
      region: `江苏`,
      aff: `苏州大学附属第二医院 神经内科 · 苏州大学神经科学研究所`,
      affEn: `Department of Neurology, Second Affiliated Hospital of Soochow University · Institute of Neuroscience, Soochow University`,
      role: `主任医师、教授、博士生导师 · 神经内科科主任 · 苏州大学神经科学研究所所长`,
      field: `帕金森病与非运动症状 · 睡眠障碍 · 认知障碍`,
      fieldEn: `Parkinson's disease and non-motor symptoms · sleep disorders · cognitive impairment`,
      sources: [
        { t: `苏州大学苏州医学院 祝贺刘春风教授荣获苏州市五一劳动奖章`, u: `https://medical.suda.edu.cn/81/21/c10297a491809/page.htm` },
        { t: `苏州大学附属第二医院 刘春风教授入选 2026 年度全球前 2% 顶尖科学家榜单`, u: `http://mp.weixin.qq.com/s?__biz=MzA3NDM1MTMxNg==&mid=2651378291&idx=1&sn=16cc6bee52588253a52d8bb6386f86c5` }
      ],
      contribZh: `苏州大学神经科学研究所所长、苏大附二院神经内科科主任，主任医师、教授，国家重点研发计划项目首席科学家。他的主战场是帕金森病，但被引用最多的是"非运动症状"这一块：首次报道国内帕金森病异动症的影响因素和机制，组织编写了首个帕金森病睡眠障碍专家共识与英文专著，把睡眠、认知、消化道症状这些过去被当作"伴随问题"的部分拉进规范诊疗。他建立了脑血管病、运动障碍、睡眠障碍、认知障碍四个亚专科，把科室带成国家高级帕金森病诊疗中心、示范睡眠中心、高级卒中中心；牵头在江苏每个县市推行帕金森专科门诊。2022—2025 连续入选中国高被引学者，2026 年入选全球前 2% 顶尖科学家"年度影响力"榜单，2019 年获中国杰出神经内科医师奖。`,
      contribEn: `Director of the Institute of Neuroscience at Soochow University and head of neurology at its Second Affiliated Hospital, chief physician and professor, and chief scientist of a National Key R&D Program project. His main battlefield is Parkinson's disease, but his most cited contribution concerns non-motor symptoms: he first reported the influencing factors and mechanisms of levodopa-induced dyskinesia in Chinese patients and organized the first expert consensus and English monograph on sleep disorders in Parkinson's disease, pulling sleep, cognition and gastrointestinal symptoms out of the "associated problems" column into standard care. He built four subspecialties — cerebrovascular disease, movement disorders, sleep disorders and cognitive disorders — and led the department to national advanced centers for Parkinson's disease, sleep and stroke, while pushing Parkinson's clinics into every county in Jiangsu. He has been a highly cited Chinese researcher from 2022 to 2025 and entered the global top 2% scientist list in 2026.`
    },
    {
      en: `Lan Tan`,
      zh: `谭兰`,
      country: `中国`,
      countryEn: `China`,
      region: `山东`,
      aff: `青岛市市立医院 脑科中心 · 神经内科`,
      affEn: `Brain Center, Qingdao Municipal Hospital · Department of Neurology`,
      role: `主任医师、二级教授、博士生导师 · 脑科中心主任 · 泰山学者特聘专家`,
      field: `阿尔茨海默病可调控危险因素 · 大型社区队列 · Aβ 单抗真实世界研究`,
      fieldEn: `Modifiable risk factors for AD · large community cohorts · real-world studies of anti-amyloid antibodies`,
      sources: [
        { t: `青岛市市立医院 谭兰 专家介绍`, u: `https://qdslyy.cn/zhuanjia-view.aspx?id=1231` },
        { t: `青岛市市立医院 神经内科（学科带头人介绍）`, u: `https://qdslyy.cn/zhongdianjg_view.aspx?id=94681` }
      ],
      contribZh: `青岛市市立医院脑科中心主任，主任医师、二级教授，泰山学者特聘专家、卫生部有突出贡献中青年专家。她做的是"AD 到底能被什么改掉"这个问题：团队关于阿尔茨海默病可调控危险因素的研究被美国《时代》周刊与《美国新闻与世界报道》报道，把一个中国队列的结论推到国际公共讨论里。她牵头创建"中国阿尔茨海默病生物标记与生活方式研究"（CABLE）与"认知健康与睡眠研究"等青岛本地大型队列，2017 年起系统纳入汉族人群 AD 早期防、诊、治数据，已入组 3126 例并开展纵向随访；带领团队把神经内科的脑血管病、痴呆与认知障碍亚专业建成国家高级卒中中心与高级认知中心。近年建成山东省规模最大的 Aβ 单抗真实世界研究队列，探索"全病程、多学科、个体化"的疾病修饰治疗路径。`,
      contribEn: `Director of the brain center at Qingdao Municipal Hospital, chief physician and professor (second class), a Taishan Scholar and a Ministry of Health expert with outstanding contributions. Her question is what can actually be modified in AD: her team's work on modifiable risk factors was covered by Time and U.S. News & World Report, carrying a Chinese cohort's conclusions into international public debate. She founded Qingdao's large cohorts — the China Alzheimer's Disease Biomarker and Lifestyle Study (CABLE) and a cognitive health and sleep database — which since 2017 have systematically collected early prevention, diagnosis and treatment data in Han Chinese, now with 3,126 participants under longitudinal follow-up; she also built the department's cerebrovascular and cognitive subspecialties into national advanced stroke and cognitive centers. More recently her team assembled Shandong's largest real-world cohort of patients on anti-amyloid antibody therapy, testing a whole-course, multidisciplinary, individualized disease-modifying pathway.`
    },
    {
      en: `Zhentao Zhang`,
      zh: `张振涛`,
      country: `中国`,
      countryEn: `China`,
      region: `湖北`,
      aff: `武汉大学人民医院 神经内科`,
      affEn: `Department of Neurology, Renmin Hospital of Wuhan University`,
      role: `教授、主任医师、博士生导师 · 神经内科主任、神经精神医院副院长 · 武汉大学珞珈特聘教授`,
      field: `tau 蛋白聚集机制 · 帕金森病分子影像标志物 · 蛋白的错误折叠与传播`,
      fieldEn: `Mechanisms of tau aggregation · molecular imaging markers in Parkinson's disease · protein misfolding and propagation`,
      sources: [
        { t: `武汉大学人民医院 张振涛`, u: `https://www.rmhospital.com/d/62.html` },
        { t: `武汉大学人民医院 神经内科（科室与主任介绍）`, u: `https://www.rmhospital.com/` }
      ],
      contribZh: `武汉大学人民医院神经内科主任、神经精神医院副院长，教授、主任医师，武汉大学珞珈特聘教授，国家"百千万人才工程"国家级人选、国家优秀青年科学基金获得者。他的研究关心的是一件事：病理蛋白为什么会在大脑里"扎堆"并从一个区域跑到另一个区域。2022 年团队在 Nature Structural & Molecular Biology 揭示脑内 tau 蛋白聚集的分子机制，为 AD 药物研发提供新靶点；2023 年作为共同通讯作者在 Cell 发表帕金森病 PET 分子影像标志物，首次为该病的早期诊断提供客观影像学手段，同时为药物研发提供可量化的评估指标；2025 年又发现 α-突触核蛋白可从肾脏向脑内传播、促进帕金森病发生。代表性论著另见 Nature Medicine、Nature Communications、Nature Aging、Science Advances 等。`,
      contribEn: `Director of neurology at Renmin Hospital of Wuhan University and vice president of its neuropsychiatric hospital, professor and chief physician, a Luojia Distinguished Professor of Wuhan University, national "Ten Thousand Talents" designee and a National Science Fund for Excellent Young Scholars awardee. His research asks one question: why pathological proteins clump in the brain and then travel from one region to another. In 2022 his team revealed the molecular mechanism of tau aggregation in the brain in Nature Structural & Molecular Biology, offering a new drug target for AD; in 2023, as co-corresponding author in Cell, he reported a PET molecular imaging marker for Parkinson's disease — the first objective imaging method for its early diagnosis and a quantifiable endpoint for drug development; in 2025 he showed that α-synuclein can propagate from the kidney to the brain and promote Parkinson's disease. Further work appears in Nature Medicine, Nature Communications, Nature Aging and Science Advances.`
    },
    {
      en: `Qin Chen`,
      zh: `陈芹`,
      country: `中国`,
      countryEn: `China`,
      region: `四川`,
      aff: `四川大学华西医院 神经内科 · 核心高级认知中心`,
      affEn: `Department of Neurology, West China Hospital, Sichuan University · Core Advanced Cognitive Center`,
      role: `主任医师、教授、博士生导师 · 痴呆亚专业组长 · 国家卫健委华西医院核心高级认知中心负责人`,
      field: `额颞叶痴呆 · 认知障碍的多模态影像 · 正常压力脑积水`,
      fieldEn: `Frontotemporal dementia · multimodal imaging of cognitive disorders · normal pressure hydrocephalus`,
      sources: [
        { t: `四川大学华西医院 陈芹（义诊专家介绍，2025）`, u: `https://www.cd120.com/hxsj/news/news/86272.html` },
        { t: `四川大学华西医院 陈芹 医生页`, u: `https://wchscu.cn/public/department/yzyz/detail/68842.html` }
      ],
      contribZh: `华西医院神经内科主任医师、教授，痴呆亚专业组长，国家卫健委华西医院核心高级认知中心负责人，科技部科技创新 2030"脑科学与类脑研究"重大项目首席青年科学家，国际额颞叶痴呆防治联盟执行委员。她的特色是把影像学当作认知障碍的"显微镜"：早年在哈佛大学麻省总医院 Martinos 生物医学影像中心联合培养、在梅奥医学中心做高级研究学者，用新的磁共振技术研究 AD、癫痫等疾病背后的脑网络异常，寻找能落地的影像学表征。临床上她抓两类容易被漏掉的病：额颞叶痴呆——发病年龄轻、首发常是性格改变而不是记性差；以及认知障碍相关的正常压力脑积水——这类如果识别出来，是有机会通过手术改善的。以第一或通讯作者发表 SCI 论文 50 余篇，见于 Neurology、JNNP、Alzheimer's & Dementia 等。`,
      contribEn: `Chief physician and professor of neurology at West China Hospital, head of its dementia subspecialty and of the National Health Commission's core advanced cognitive center there; she is a chief young scientist of the Science and Technology Innovation 2030 brain-science megaproject and an executive committee member of the International Frontotemporal Dementia Prevention Alliance. Her signature is using imaging as a microscope for cognitive disorders: trained jointly at the Martinos Center of Massachusetts General Hospital and later a senior research scholar at Mayo Clinic, she studies brain-network abnormalities in AD and epilepsy with newer MRI techniques, looking for imaging signatures that translate. Clinically she targets two easily missed conditions: frontotemporal dementia, which strikes younger and often begins with personality change rather than forgetfulness, and cognitive impairment related to normal pressure hydrocephalus, which can improve with surgery if recognized. She has more than 50 first- or corresponding-author papers in Neurology, JNNP and Alzheimer's & Dementia among others.`,
      note: `医院医生页上的简介仍是多年前版本（写"副教授"），2025 年院方义诊介绍已为"教授、博士生导师、痴呆亚专业组长、核心高级认知中心负责人"，本卡按新者。`
    },
    {
      en: `Zhong Pei`,
      zh: `裴中`,
      country: `中国`,
      countryEn: `China`,
      region: `广东`,
      aff: `中山大学附属第一医院 神经科 · 脑健康管理门诊`,
      affEn: `Department of Neurology, First Affiliated Hospital of Sun Yat-sen University · Brain Health Clinic`,
      role: `研究员、教授、博士生导师 · 广东省重大神经疾病诊治重点实验室副主任`,
      field: `主观认知下降的识别 · 亨廷顿病 · 数字化认知评估`,
      fieldEn: `Identifying subjective cognitive decline · Huntington's disease · digital cognitive assessment`,
      sources: [
        { t: `新华网 全国科普月—2026 世界阿尔茨海默病日大型科普活动启动仪式（裴中通报早筛试点）`, u: `https://www.news.cn/info/20260921/8c15de8d8ac7415c92d9ec325712e6bd/c.html` },
        { t: `中山大学附属第一医院 脑健康门诊：识别阿尔茨海默病早期信号（含 Alzheimer's & Dementia 研究介绍）`, u: `http://mp.weixin.qq.com/s?__biz=MzA5NzY2OTc0MA==&mid=2656105191&idx=1&sn=35fd92e400052dd81ec28ab97b291711` }
      ],
      contribZh: `中山大学附属第一医院神经科研究员、教授，广东省重大神经疾病诊治重点实验室副主任，长期做亨廷顿病、老年痴呆与帕金森病的临床与分子机制研究。他近年盯住的是 AD 最难的一段时间：主观认知下降阶段——人已经觉得"不对劲"，量表却还在正常范围。2026 年团队在 Alzheimer's & Dementia 发表的做法是给记忆测试加"噪音"：同一套记忆测验，先在安静环境做一遍，再在街道施工、交通噪音背景下做一遍，Aβ 阳性组在噪声下的成绩下降 11.17，Aβ 阴性组只下降 6.67，差异由此显现；研究还发现 Aβ 阳性者往往从事过更复杂的职业，认知储备更好，也因此更晚才露出破绽。他同时在中山一院健康管理中心开设脑健康管理门诊，并在全国层面推动认知障碍早筛试点（云南、西安、北京、山东、广东、湖南、上海、深圳）。`,
      contribEn: `Research professor of neurology at the First Affiliated Hospital of Sun Yat-sen University and deputy director of Guangdong's key laboratory of major neurological disease, long engaged in the clinical and molecular study of Huntington's disease, AD and Parkinson's disease. His recent focus is the hardest stretch of AD: subjective cognitive decline, when a person already feels something is wrong while test scores still look normal. In 2026 his team published in Alzheimer's & Dementia a way to add noise to memory testing — the same recognition test given first in silence, then against street-construction and traffic noise; the Aβ-positive group dropped 11.17 points under noise versus 6.67 in the Aβ-negative group, exposing the difference. The study also found that Aβ-positive participants tended to have held more complex jobs, so better cognitive reserve, and thus showed deficit later. He runs a brain health clinic at the hospital's health management center and drives national pilot screening across Yunnan, Xi'an, Beijing, Shandong, Guangdong, Hunan, Shanghai and Shenzhen.`,
      note: `本卡没有把"教授"写成"主任医师"：中山一院对他的岗位表述为"研究员、博士生导师"，与临床科室主任医师是两条不同的职称序列。`
    },
    {
      en: `Yunpeng Cao`,
      zh: `曹云鹏`,
      country: `中国`,
      countryEn: `China`,
      region: `辽宁`,
      aff: `中国医科大学附属第一医院 神经内科 · 记忆障碍专病门诊`,
      affEn: `Department of Neurology, First Hospital of China Medical University · Memory Disorders Clinic`,
      role: `教授、主任医师、博士生导师 · 记忆障碍专病门诊首席专家 · 中国老年医学学会认知障碍分会副会长`,
      field: `记忆障碍与痴呆 · 神经变性病 · AD 分层诊疗`,
      fieldEn: `Memory disorders and dementia · neurodegenerative disease · stratified diagnosis and treatment of AD`,
      sources: [
        { t: `中国医科大学附属第一医院 神经内科 记忆障碍门诊团队介绍（院方发布）`, u: `http://mp.weixin.qq.com/s?__biz=MzIzMjczNzc0NQ==&mid=2247541975&idx=2&sn=686d23dcaf24321fd69959b31ed4ed64` },
        { t: `中国医科大学附属第一医院 官网`, u: `https://www.cmu1h.com/` }
      ],
      contribZh: `中国医科大学附属第一医院神经内科教授、主任医师，记忆障碍专病门诊首席专家，中国老年医学学会认知障碍分会副会长、中国老年保健协会阿尔茨海默病分会（ADC）副主任委员。他自 1995 年起就把主攻方向定在认知障碍与痴呆，是东北地区这条线上扎得最久的人之一：获国家自然科学基金资助 4 项、教育部留学归国基金 1 项，发表论文 100 余篇（SCI 30 余篇），获辽宁省科技进步二等奖 1 项、三等奖 2 项。临床之外，他做的一件有区域意义的事是把"分层诊疗"讲清楚——把 AD 的临床表现、生物标志物检测与对症治疗方案按层级摆开，让基层医院知道先做什么、什么时候该往上级医院转。2022 年，科室获批"国家核心高级认知障碍诊疗中心"及国家认知障碍疾病专科能力建设项目培训基地，记忆障碍专病门诊是其中的落地窗口。`,
      contribEn: `Professor and chief physician of neurology at the First Hospital of China Medical University and chief expert of its memory disorders clinic; he is vice president of the cognitive disorders branch of the Chinese Geriatrics Society and vice chairman of the Alzheimer's Disease Chinese (ADC) association. He fixed his direction on cognitive disorders and dementia in 1995 and is one of the longest-standing figures in this field in northeast China, with four NSFC grants, more than 100 papers (over 30 in SCI) and one second-class and two third-class Liaoning science and technology awards. Beyond the clinic, he has done regionally important work in explaining stratified diagnosis and treatment — laying out clinical presentation, biomarker testing and symptomatic options level by level, so that primary hospitals know what to do first and when to refer upward. In 2022 the department was designated a national core advanced cognitive disorder center and a national training base, with the memory clinic as its front door.`,
      note: `本卡的职务以院方 2026 年发布的团队介绍为准；"神经内科副主任"等表述见于百科类页面，未在院方页面核实，故不写入。`
    },
    {
      en: `Mei Dong`,
      zh: `董梅`,
      country: `中国`,
      countryEn: `China`,
      region: `河北`,
      aff: `河北医科大学第二医院 神经内科（鹿泉院区神经内一科）· 高级认知障碍诊疗中心`,
      affEn: `Department of Neurology, Second Hospital of Hebei Medical University · Advanced Cognitive Disorder Center`,
      role: `教授 · 鹿泉院区神经内一科主任 · 认知障碍亚专业组长 · 高级认知障碍诊疗中心负责人`,
      field: `认知障碍规范化诊疗 · 痴呆的认知训练与康复`,
      fieldEn: `Standardized care of cognitive disorders · cognitive training and rehabilitation in dementia`,
      sources: [
        { t: `河北医科大学第二医院 高级认知障碍诊疗中心`, u: `https://www.hb2h.com/info/13592/107061.htm` },
        { t: `河北医科大学第二医院 2024 年第三季度认知障碍专科人才面授培训会议（院方发布）`, u: `http://mp.weixin.qq.com/s?__biz=MzkyNTQyNjU4OA==&mid=2247490187&idx=2&sn=bbf5653152f6a06e1ae75304dde35a36` }
      ],
      contribZh: `河北医科大学第二医院鹿泉院区神经内一科主任、认知障碍亚专业组长，领衔医院的高级认知障碍诊疗中心——该中心是首批国家高级认知障碍诊疗中心。她把一个"亚专业"做成了完整的诊疗平台：独立的记忆门诊、神经心理测评室与认知障碍病房三件配齐，检查端能做血液 AD 四项筛查、头颅 MRI 与 PET、脑脊液生物标志物与痴呆基因筛查，治疗端覆盖单抗类疾病修饰治疗、认知康复、计算机辅助认知训练与经颅磁刺激。更关键的是人才这一环：中心连续多年承办河北省认知障碍疾病继续教育学习班，并已举办 2 届国家级认知障碍专科人才面授培训班，课程涵盖神经心理测评、痴呆的行为疗法与情绪管理、音乐与运动干预、照护支持等——这些内容在基层医院几乎是空白。中心成员承担国家自然科学基金 1 项、河北省自然科学基金 2 项。`,
      contribEn: `Head of the first neurology ward at the Luquan campus of the Second Hospital of Hebei Medical University and lead of its cognitive disorders subspecialty, she heads the hospital's Advanced Cognitive Disorder Center, one of the first national centers of its kind. She turned a subspecialty into a complete platform: a standalone memory clinic, a neuropsychological assessment room and a cognitive disorders ward, with blood AD screening, MRI and PET, CSF biomarkers and dementia genetic testing on the diagnostic side, and anti-amyloid disease-modifying therapy, cognitive rehabilitation, computer-assisted training and transcranial magnetic stimulation on the treatment side. Equally important is the workforce layer: the center has run Hebei's continuing-education courses on cognitive disorders for years and has held two national training cohorts covering neuropsychological assessment, behavioral therapy and mood management in dementia, music and exercise interventions and caregiver support — subjects that are close to absent in county hospitals. Center members hold one NSFC grant and two Hebei provincial natural science grants.`,
      note: `院方页面只写"教授"与"领衔"，未逐项列出她的主任医师职称与博士生导师身份；本卡不补写未见于官方页的头衔。`
    },
    {
      en: `Yang Li`,
      zh: `李阳`,
      country: `中国`,
      countryEn: `China`,
      region: `山西`,
      aff: `山西医科大学第一医院 神经内科 · 国家核心高级认知中心`,
      affEn: `Department of Neurology, First Hospital of Shanxi Medical University · National Core Advanced Cognitive Center`,
      role: `主任医师、博士生导师 · 山西省医师协会神经内科分会认知障碍疾病专委会主任委员`,
      field: `阿尔茨海默病社区筛查 · 数字化认知评估 · 认知障碍全病程管理`,
      fieldEn: `Community screening for AD · digital cognitive assessment · whole-course management of cognitive disorders`,
      sources: [
        { t: `山西医科大学第一医院 李阳 导师简介`, u: `https://www.sydyy.com/info/1224/7064.htm` },
        { t: `山西医科大学第一医院 三项成果亮相 AAIC 2026（2026-07）`, u: `https://www.sydyy.com/info/1199/11274.htm` }
      ],
      contribZh: `山西医科大学第一医院神经内科主任医师、博士生导师，中国医师协会神经内科分会认知障碍疾病专委会委员、中国老年保健协会阿尔茨海默病分会常务委员、山西省医师协会神经内科分会认知障碍疾病专委会主任委员。他做的是"把一个省的老人在哪里、筛什么、怎么筛"这件事：牵头山西省老年期痴呆社区筛查及全病程管理项目，覆盖全省 6 个社区、累计收集 1083 名 65 岁及以上老年人的多维健康、多模态行为学与认知量表数据，并据此建立基层 AD 分级诊断流程。2026 年 7 月，团队 3 项成果入选 AAIC 2026（1 项口头发言、2 项壁报）：基于机器学习的中国北方社区老年人认知障碍风险预测模型、多模态数字筛查工具的有效性验证、山西省老年复杂图形测验常模的构建与信效度分析——分别对应风险分层、客观筛查与本土化评估三个环节，拼成一条从初筛到精查的链条。`,
      contribEn: `Chief physician and doctoral supervisor of neurology at the First Hospital of Shanxi Medical University, a member of the cognitive disorders committee of the Chinese Medical Doctor Association's neurology branch, and chair of the cognitive disorders committee of the Shanxi neurology physicians association. His work answers a provincial question: where are the older adults, what should be screened, and how. He leads Shanxi's community screening and whole-course management programme for late-life dementia, covering six communities and 1,083 people aged 65 and over with multidimensional health, behavioural and cognitive data, on which a tiered diagnostic pathway for primary care is built. In July 2026 three of his team's studies were accepted at AAIC 2026 — one oral and two posters: a machine-learning risk prediction model for cognitive impairment in northern Chinese communities, validation of a multimodal digital screening tool, and norms plus reliability and validity for a Shanxi version of the complex figure test — corresponding to risk stratification, objective screening and localised assessment, forming a chain from first screen to confirmatory workup.`
    }
  );
})();
