/* AD 著名科学家 · 补录 ②：1988–2011 年 AAIC 终身成就奖得主（第一批）
 *
 * 为什么这批和 2020 年以后那批写法不一样：
 * 2020 年起，Alzheimer's Association 每年发一篇颁奖稿，逐人给整段传记，直接照着写就行；
 * 1988–2019 年没有这样的逐届稿件，只能落到各人所在院校/机构的官方页面。
 * 所以下面每条 sources 都是院校官网（洛克菲勒、宾大、UCL、卡罗林斯卡……），
 * 机构名、职务、贡献范围都以该页面写的为准，页面没写的（比如某人的私生活、传闻）一概不收。
 *
 * 一条底线：中文译名是音译，不冒充"本人中文名"。像 Virginia Lee 这样
 * 有中文背景但不公开中文名的，卡片上只给音译并在 note 里说明，不硬编一个中文名。
 */
(function () {
  if (!window.SCIENTISTS || !window.SCIENTISTS.aaic) { return; }

  window.SCIENTISTS.aaic.push(

    {
      en: `Zaven Khachaturian`, zh: `扎文·哈恰图良`,
      country: `美国`, countryEn: `United States`,
      aff: `美国国立卫生研究院 阿尔茨海默病办公室（前主任）`,
      affEn: `Office of Alzheimer's Disease Research, NIH (former director)`,
      year: `1988`, award: `首届 AAIC 终身成就奖`,
      role: `AD 研究体系的规划者 · Alzheimer's & Dementia 创刊主编`,
      sources: [
        { t: "罗德岛大学 荣誉学位页（官方）", u: "https://web.uri.edu/commencement?p=14961" },
        { t: "Alzheimer's Association 获奖名录", u: "https://www.alz.org/aaic/about/award-lifetime-list.asp" }
      ],
      contribZh: `1988 年首届终身成就奖得主。1977–1995 年在国立卫生研究院任职，同时担任 NIH 阿尔茨海默病办公室主任与 NIA 衰老神经科学项目主任，掌管全美 AD 与脑老化研究的经费分配与战略规划。他主持设计了美国 AD 研究的整套基础设施——阿尔茨海默病中心体系、CERAD 登记联盟、ADCS 协作研究，并推动 AD 从"正常衰老的一部分"变成国家层面的研究优先事项，联邦经费由此打开。罗德岛大学在授予他荣誉博士时称他为"现代阿尔茨海默病研究之父"。他也是期刊 Alzheimer's & Dementia 的创刊主编。`,
      contribEn: `Recipient of the first lifetime achievement award in 1988. During his tenure at the National Institutes of Health (1977-1995) he held the dual role of director of the Office of Alzheimer's Disease at NIH and director of the Neuroscience of Aging Program at NIA, with responsibility for strategic planning and funding decisions across national research programs on Alzheimer's disease and brain aging. He was responsible for launching major national research programs, including the Alzheimer's Disease Centers, CERAD and ADCS, and was instrumental in making Alzheimer's disease a top government priority and unlocking federal research funding. The University of Rhode Island, awarding him an honorary doctorate, called him widely recognized as the father of modern Alzheimer's disease research. He is the emeritus founding editor-in-chief of Alzheimer's & Dementia.`
    },
    {
      en: `Paul Greengard`, zh: `保罗·格林加德`,
      country: `美国`, countryEn: `United States`,
      aff: `洛克菲勒大学 分子与细胞神经科学实验室`,
      affEn: `The Rockefeller University`,
      year: `1990`, award: `AAIC 终身成就奖`,
      role: `Vincent Astor 教授 · 2000 年诺贝尔生理学或医学奖`,
      sources: [
        { t: "洛克菲勒大学 官方人物页", u: "https://www.rockefeller.edu/our-scientists/paul-greengard/2389-nobel-prize" },
        { t: "洛克菲勒大学 Conte 中心", u: "https://conte.rockefeller.edu/about/director.php" }
      ],
      contribZh: `洛克菲勒大学 Vincent Astor 教授、分子与细胞神经科学实验室主任，2000 年诺贝尔生理学或医学奖得主（与 Arvid Carlsson、Eric Kandel 共享）。他在 1980 年代阐明了神经递质作用于靶神经元之后到底发生了什么：受体激活细胞膜上的酶，生成第二信使 cAMP，再激活蛋白激酶，激酶通过磷酸化开启或关闭其他蛋白——即"慢突触传递"。他发现的 DARPP-32 是第一个被证明既能当激酶、又能当磷酸酶抑制剂的分子。1995 年起他主持洛克菲勒大学 Fisher 阿尔茨海默病研究中心；AD 领域大量药物靶点所依赖的磷酸化调控框架，源头在这条线上。`,
      contribEn: `Vincent Astor Professor and head of the Laboratory of Molecular and Cellular Neuroscience at The Rockefeller University, and a 2000 Nobel laureate in Physiology or Medicine. In the 1980s he revealed how a neurotransmitter, on reaching its target neuron, activates enzymes in the cell membrane that initiate the second messenger cyclic AMP, which in turn activates a protein kinase that phosphorylates other proteins, switching them on or off — slow synaptic transmission. He discovered DARPP-32, the first demonstrated molecule that can act as either a protein kinase or a phosphatase inhibitor. Since 1995 he has directed the Fisher Center for Alzheimer's Disease Research at Rockefeller.`
    },
    {
      en: `Colin Masters`, zh: `科林·马斯特斯`,
      country: `澳大利亚`, countryEn: `Australia`,
      aff: `墨尔本大学 / Florey 神经科学与精神健康研究所`,
      affEn: `University of Melbourne; The Florey Institute`,
      year: `2006`, award: `AAIC 终身成就奖`,
      role: `Laureate Professor · 资深副主任`,
      sources: [
        { t: "澳大利亚健康与医学科学院 院士页（官方）", u: "https://aahms.org/fellowship/professor-colin-masters/" },
        { t: "Florey 研究所", u: "https://florey.edu.au/news/2023/11/florey-researchers-listed-in-the-top-1-for-neuroscience-and-behaviour/" }
      ],
      contribZh: `墨尔本大学 Laureate Professor、Florey 研究所资深副主任。他与康拉德·拜罗伊特（Konrad Beyreuther）合作，首次鉴定出构成阿尔茨海默病脑内斑块与唐氏综合征脑内同样沉积物的淀粉样蛋白——Aβ，并查明它是从淀粉样前体蛋白（APP）经蛋白酶切而来；APP 基因随后被定位到 21 号染色体上唐氏综合征相关的区域，两条线索就此接上。此后他转向把这一发现做成诊断与治疗策略，包括抑制 β、γ 分泌酶，以及干预金属离子与 Aβ 的相互作用。`,
      contribEn: `Laureate Professor at the University of Melbourne and Senior Deputy Director of The Florey Institute. His collaborative studies with Konrad Beyreuther discovered the proteolytic neuronal origin of the Abeta amyloid protein that causes Alzheimer's disease — the first characterization of the amyloid protein forming the cerebral plaques seen in Alzheimer's disease and Down's syndrome, with APP subsequently mapped to the chromosome 21 region altered in trisomy 21. Masters has continued to identify and develop rational therapeutic and diagnostic strategies for disease modification, including suppression of the secretases that cleave APP and modification of metal ion-Abeta interactions.`
    },
    {
      en: `Dennis J. Selkoe`, zh: `丹尼斯·塞尔科`,
      country: `美国`, countryEn: `United States`,
      aff: `哈佛医学院 / 布莱根妇女医院 神经疾病中心`,
      affEn: `Harvard Medical School; Brigham and Women's Hospital`,
      year: `2008`, award: `AAIC 终身成就奖`,
      role: `Vincent and Stella Coates 神经疾病讲席教授 · 中心联席主任`,
      sources: [
        { t: "布莱根妇女医院 神经科学项目（官方）", u: "https://www.bwhneurosciences.org/leadership/dennis-selkoe" },
        { t: "哈佛医学院 PIN 项目", u: "https://pinphd.hms.harvard.edu/people/dennis-j-selkoe" }
      ],
      contribZh: `哈佛医学院 Vincent and Stella Coates 神经疾病讲席教授、布莱根妇女医院神经疾病中心联席主任。他先是从 AD 脑内分离出神经原纤维缠结，发现其异常不溶性以及同 tau 的抗原关系；随后转向淀粉样前体蛋白与 Aβ 的代谢，参与提出"淀粉样假说"。1992 年他与同事证明 Aβ 是正常细胞在一生中持续产生的，这一条让 Aβ 的生成机制和抑制剂筛选第一次可以在培养皿里动态研究；此后又证明 APP 与早老素突变通过增加 Aβ 生成致病，并与 Michael Wolfe 一起把早老素鉴定为 γ-分泌酶的催化中心。`,
      contribEn: `Vincent and Stella Coates Professor of Neurologic Diseases at Harvard Medical School and Brigham and Women's Hospital, and co-director of the Ann Romney Center for Neurologic Diseases. Selkoe and coworkers isolated the neurofibrillary tangles of Alzheimer's disease and discovered their unusual insolubility and antigenic relationship to tau. In 1992 his group discovered that Abeta is produced by normal cells throughout life, enabling dynamic study of Abeta generation and screens for Abeta inhibitors. The lab showed that mutations in APP and later presenilin cause disease by increasing Abeta production, and with Michael Wolfe identified presenilin as the active site of gamma-secretase.`
    },
    {
      en: `Virginia Man-Yee Lee`, zh: `弗吉尼娅·M.-Y. 李`,
      country: `美国`, countryEn: `United States`,
      aff: `宾夕法尼亚大学 神经退行性疾病研究中心`,
      affEn: `Center for Neurodegenerative Disease Research, University of Pennsylvania`,
      year: `2009`, award: `AAIC 终身成就奖`,
      role: `John H. Ware 3rd 阿尔茨海默研究讲席教授 · 中心主任`,
      sources: [
        { t: "宾夕法尼亚大学 佩雷尔曼医学院 教师页（官方）", u: "https://www.med.upenn.edu/apps/faculty/index.php/g330/p12536" },
        { t: "美国国家科学院 院士名录", u: "https://www.nasonline.org/directory-entry/virginia-m-y-lee-i1fy0s" }
      ],
      contribZh: `宾大佩雷尔曼医学院 John H. Ware 3rd 阿尔茨海默研究讲席教授、神经退行性疾病研究中心（CNDR）主任。她把"哪种蛋白构成了病理包涵体"这件事逐一说清：AD 神经原纤维缠结里的 tau、帕金森病路易体里的 α-突触核蛋白、额颞叶变性与肌萎缩侧索硬化里泛素阳性包涵体中的 TDP-43。这三条线合起来，支撑了"不同脑病共享同一套蛋白聚集机制"的判断；她随后建立相应动物模型，证明病理蛋白可以在细胞间传递。2020 年获科学突破奖。她在香港长大，先后在伦敦皇家音乐学院与伦敦大学学习，1973 年在 UCSF 获生物化学博士。`,
      contribEn: `John H. Ware 3rd Endowed Professor in Alzheimer's Research and director of the Center for Neurodegenerative Disease Research at the Perelman School of Medicine, University of Pennsylvania. Her work demonstrated that tau, alpha-synuclein and TDP-43 form unique brain aggregates in Alzheimer's disease, Parkinson's disease and frontotemporal degeneration/ALS respectively, providing critical evidence that aggregation of brain proteins is a common mechanistic theme across neurodegenerative diseases. She generated animal models for these diseases and showed that cell-to-cell transmission of pathologic tau, alpha-synuclein and TDP-43 is a shared mechanism of pathogenesis. She received the Breakthrough Prize in 2020.`,
      note: `中文名为音译。她生于中国、在香港长大，官方页面只给英文名 Virginia Man-Yee Lee，未见公开的本人中文名，故不臆造。`
    },
    {
      en: `M. Marsel Mesulam`, zh: `马塞尔·梅苏拉姆`,
      country: `美国`, countryEn: `United States`,
      aff: `西北大学 范伯格医学院 认知神经病学与阿尔茨海默病中心`,
      affEn: `Northwestern University Feinberg School of Medicine`,
      year: `2010`, award: `Bengt Winblad 终身成就奖`,
      role: `Ruth Dunbar Davee 神经科学讲席教授 · 行为神经病学主任`,
      sources: [
        { t: "西北大学 范伯格医学院 教师页（官方）", u: "https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=11876" },
        { t: "西北大学 认知神经病学中心", u: "https://cnlr.northwestern.edu?p=55/" }
      ],
      contribZh: `西北大学 Ruth Dunbar Davee 神经科学讲席教授、行为神经病学主任，认知神经病学与阿尔茨海默病中心（后以其姓名命名）主任。他做过三件在方法上留下痕迹的事：引入以轴突运输追踪神经通路的新方法；在灵长类脑内定位皮层胆碱能投射的来源；以及把一种以语言受损为首发、记忆相对保留的痴呆单独描述出来——原发性进行性失语（PPA）。他提出的"大型神经认知网络"框架，把认知功能从"脑区定位"推向"网络定位"。2014 年获 Potamkin 奖。`,
      contribEn: `Ruth Dunbar Davee Professor of Neuroscience and chief of Behavioral Neurology at Northwestern University Feinberg School of Medicine, and director of its multidepartmental Cognitive Neurology and Alzheimer's Disease Center. His research has addressed the connectivity of the monkey brain, the organization of human cholinergic pathways, the representation of cognitive functions by large-scale neurocognitive networks, and the neurobiology of dementias. He introduced a new method for tracing neural pathways by axonal transport, identified the source of cortical cholinergic pathways in the primate brain, and characterized a unique form of language-based dementia known as primary progressive aphasia.`
    },
    {
      en: `John Hardy`, zh: `约翰·哈迪`,
      country: `英国`, countryEn: `United Kingdom`,
      aff: `伦敦大学学院 皇后广场神经病学研究所`,
      affEn: `UCL Queen Square Institute of Neurology`,
      year: `2011`, award: `AAIC 终身成就奖`,
      role: `神经疾病分子生物学讲席教授 · 英国痴呆研究所`,
      sources: [
        { t: "UCL 官方新闻（2022 授勋）", u: "https://www.ucl.ac.uk/ion/news/2022/jan/pioneering-geneticist-professor-john-hardy-receives-knighthood-new-year-honours-2022" },
        { t: "UCL IRIS 学者档案", u: "https://iris.ucl.ac.uk/iris/browse/profile?upi=JHARD28" }
      ],
      contribZh: `伦敦大学学院皇后广场神经病学研究所神经疾病分子生物学讲席教授。1991 年他与 David Allsop 提出"淀粉样级联假说"——把 Aβ 摆在 AD 病理链条的起点，认为后续的炎症、血管改变、tau 病理与神经元死亡是被它逐级触发的。这条假说主导了此后三十年的 AD 药物研发方向，也一直是最受争议的一条。假说的实验支点来自他手上的家系：1986 年他在圣玛丽医院征集到 Jennings 家族，五年后在该家族中定位到 APP 基因突变。「家族 23」这个编号就写在当年的实验记录本上。2009 年当选皇家学会会士，2016 年获科学突破奖，2018 年分享大脑奖，2022 年受封爵士。`,
      contribEn: `Chair of the Molecular Biology of Neurological Disease at UCL Queen Square Institute of Neurology and a member of the UK Dementia Research Institute at UCL. Together with Gerald Higgins he published the amyloid cascade hypothesis of Alzheimer's disease in the early nineties, still the major theory of how the disease arises, placing amyloid beta at the centre of early harmful changes in the brain. His genetic studies of families with Alzheimer's disease brought the field closer to the root causes of the disease and formed the foundations for many therapies in development. He was elected a Fellow of the Royal Society in 2009, won the Breakthrough Prize in Life Sciences in 2016, shared the Brain Prize in 2018 and was appointed Knight Bachelor in 2022.`
    },
    {
      en: `Kaj Blennow`, zh: `卡伊·布伦诺`,
      country: `瑞典`, countryEn: `Sweden`,
      aff: `哥德堡大学 萨尔格伦斯卡学院 临床神经化学`,
      affEn: `University of Gothenburg; Sahlgrenska University Hospital`,
      year: `2011`, award: `Henry Wisniewski 终身成就奖`,
      role: `临床神经化学教授 · 临床神经化学实验室主任`,
      sources: [
        { t: "Science 作者页（AAAS 官方）", u: "https://www.science.org/content/author/kaj-blennow-md-phd" },
        { t: "哥德堡大学", u: "https://www.gu.se/en" }
      ],
      contribZh: `哥德堡大学临床神经化学教授、萨尔格伦斯卡大学医院临床神经化学实验室主任，同时具备精神病学与临床化学双重专科资质，并持有瑞典皇家科学院 Torsten Söderberg 讲席。他是把脑脊液标志物做成临床可用检测的主力：Aβ42、T-tau、P-tau 这套组合的诊断价值、 cutoff 与质控体系，很大一部分出自他的实验室；他同时主持阿尔茨海默协会脑脊液标志物全球质控计划，并任国际临床化学联合会（IFCC）脑脊液蛋白工作组主席。近年重心转向血液标志物，p-tau217、p-tau181 的临床验证有他的系统性工作。发表原始论文与综述逾 1800 篇。`,
      contribEn: `Professor and academic chair in neurochemistry at the University of Gothenburg and head of the Clinical Neurochemistry Lab at Sahlgrenska University Hospital, with specialist competency in both general psychiatry and clinical chemistry, and holder of the Torsten Söderberg Professorship at the Royal Swedish Academy of Sciences. He is president of the Society for CSF Analysis and Clinical Neurochemistry, head of the Alzheimer's Association quality control program for CSF biomarkers and chair of the IFCC working group for CSF proteins. He has published more than 1,800 original research papers and review articles.`
    }
  );
})();
