/* AD 著名科学家 · 数据
 *
 * 三条硬规矩（写这份数据时一直守着）：
 * 1. 名单只来自 Alzheimer's Association 官方获奖名录
 *    https://www.alz.org/aaic/about/award-lifetime-list.asp  （1988–2026）
 *    —— 不做任何"我觉得他应该也拿过"的补充。
 * 2. 深度档案里每一条事实都能在 sources 里那个官方页面找到出处；
 *    官方页面没写的内容，宁可不写，也不靠印象补。
 * 3. 颁奖稿按年份成组（2020/2022/2025/2026），一场颁奖礼一篇稿，
 *    所以这批档案是"按届"完整的，不是"按名气"挑的。
 */

window.SCIENTISTS = {

  /* ============ 一、AAIC 终身成就奖得主（深度档案） ============ */
  aaic: [
    {
      en: `Linda Van Eldik`, zh: `琳达·范·埃尔迪克`,
      country: `美国`, countryEn: `United States`,
      aff: `肯塔基大学 桑德斯-布朗衰老研究中心`,
      affEn: `Sanders-Brown Center on Aging, University of Kentucky`,
      year: `2026`, award: `Khalid Iqbal 终身成就奖`,
      role: `中心主任 · 神经科学教授`,
      sources: [
        { t: "AAIC 2026 颁奖稿（官方）", u: "https://aaic.alz.org/releases-2026/scientific-awards.asp" },
        { t: "肯塔基大学", u: "https://www.uky.edu/" }
      ],
      contribZh: `现任肯塔基大学桑德斯-布朗衰老研究中心与阿尔茨海默病研究中心主任，兼任肯塔基神经科学研究所联席主任、神经科学教授，同时是美国科学促进会会士、美国国家老龄咨询委员会委员。她以神经炎症机制研究著称，系统揭示了脑内免疫反应在阿尔茨海默病发生发展中的关键作用，并据此开辟了一条新药研发路径：调动大脑自身的免疫系统去削减病理损伤，同时保留免疫细胞正常而有益的功能。她曾获阿尔茨海默协会 Zenith 奖与 Part the Cloud 奖，以及美国国立老龄研究所 MERIT 奖。`,
      contribEn: `She directs the Sanders-Brown Center on Aging and the Alzheimer's Disease Research Center at the University of Kentucky, is co-director of the Kentucky Neuroscience Institute and professor of neuroscience, a fellow of the American Association for the Advancement of Science and a member of the National Advisory Council on Aging. A world-renowned researcher and leader, she has pioneered key insights into the neuroinflammatory mechanisms of Alzheimer's, and her research is paving the way toward novel therapeutics that harness the brain's immune system to reduce Alzheimer's damage while keeping its normal and beneficial functions intact. Her honors include a Zenith Award and a Part the Cloud Award from the Alzheimer's Association and an NIA MERIT award.`
    },
    {
      en: `William Jagust`, zh: `威廉·贾古斯特`,
      country: `美国`, countryEn: `United States`,
      aff: `加州大学伯克利分校 神经科学`,
      affEn: `Helen Wills Neuroscience Institute, UC Berkeley`,
      year: `2026`, award: `Henry Wisniewski 终身成就奖`,
      role: `神经科学教授`,
      sources: [
        { t: "AAIC 2026 颁奖稿（官方）", u: "https://aaic.alz.org/releases-2026/scientific-awards.asp" },
        { t: "加州大学伯克利分校", u: "https://www.berkeley.edu/" }
      ],
      contribZh: `加州大学伯克利分校神经科学教授。神经内科训练出身，随后转向医学影像做博士后，进入加州大学戴维斯分校医学院任教并创立该校阿尔茨海默病研究中心、出任神经内科主任；2003 年转到伯克利，建立以多模态影像工具研究脑老化与阿尔茨海默病的实验室。他创建了伯克利衰老队列研究（Berkeley Aging Cohort Study），追踪脑内改变如何在老化过程中演变、又如何跨过临床门槛；目前担任阿尔茨海默病神经影像倡议（ADNI）PET 核心负责人、SCAN 研究首席研究员。他的分子神经影像工作把淀粉样蛋白与 tau 的 PET 显像确立为界定疾病生物学与进展的核心工具——早在症状出现之前就能看到改变，这一认识直接影响了现代临床试验的设计方式。`,
      contribEn: `Professor of neuroscience at UC Berkeley. Following his training in neurology, Jagust was a postdoctoral fellow in medical imaging and subsequently joined the faculty at the UC Davis School of Medicine, where he founded the Alzheimer's Disease Research Center and served as chair of the Department of Neurology. In 2003 he moved to Berkeley and established his laboratory using multimodal imaging tools to investigate brain aging and Alzheimer's disease. He established the Berkeley Aging Cohort Study, and is currently the leader of the PET Core of the Alzheimer's Disease Neuroimaging Initiative and principal investigator of the SCAN initiative. His work in molecular neuroimaging has transformed how Alzheimer's disease is understood, helping establish amyloid and tau PET as essential tools for defining disease biology and its progression long before clinical symptoms emerge — insights that have shaped modern clinical trial design.`
    },
    {
      en: `Adesola Ogunniyi`, zh: `阿德索拉·奥贡尼伊`,
      country: `尼日利亚`, countryEn: `Nigeria`,
      aff: `伊巴丹大学 医学院（荣休）`,
      affEn: `University of Ibadan, College of Medicine (Emeritus)`,
      year: `2026`, award: `Bengt Winblad 终身成就奖`,
      role: `荣休医学教授`,
      sources: [
        { t: "AAIC 2026 颁奖稿（官方）", u: "https://aaic.alz.org/releases-2026/scientific-awards.asp" },
        { t: "伊巴丹大学", u: "https://www.ui.edu.ng/" }
      ],
      contribZh: `尼日利亚伊巴丹大学荣休医学教授。四十年间主导非洲的跨文化痴呆研究：建立起当地的患病率与发病率数据，识别出危险因素与疾病转归，并把非洲本土人群与非洲裔美国人放在一起比较，其中特别考察了血管因素在认知障碍与痴呆中的作用。这些工作填补了全球痴呆流行病学里长期缺失的一大块地图。他近年致力于把非洲分散的研究者与机构组织进多学科框架，以推进当地的痴呆科研、诊疗与防控；同时在 DAWN 计划中解析不同人群阿尔茨海默病的遗传基础。曾获美国神经病学学会 1991 年 Bruce Schoenberg 奖、2024 年《自然》科学导师奖终身成就奖，为世界痴呆理事会与全球脑健康理事会成员，发表同行评议论文 350 余篇。`,
      contribEn: `Emeritus professor of medicine at the University of Ibadan, Nigeria. He has led groundbreaking cross-cultural studies in Africa spanning four decades: his work has established prevalence and incidence rates, identified risk factors and outcomes, and compared indigenous African populations with African Americans, including the role of vascular factors in cognitive impairment and dementia. His recent focus is on bringing researchers and groups together in a multidisciplinary framework to enhance dementia science, care and control in Africa; he is also working on elucidating the genetic basis of Alzheimer's disease in diverse populations in the DAWN Project. He has received the 1991 Bruce Schoenberg Award of the American Academy of Neurology and the 2024 Lifetime Award of the Nature Awards for Mentoring in Science, is a member of the World Dementia Council and the Global Council on Brain Health, and has authored over 350 peer-reviewed publications.`
    },
    {
      en: `Bart de Strooper`, zh: `巴特·德·斯特鲁珀`,
      country: `比利时 / 英国`, countryEn: `Belgium / United Kingdom`,
      aff: `鲁汶大学 · 英国痴呆研究所（创始主任）`,
      affEn: `KU Leuven · UK Dementia Research Institute (founding director)`,
      year: `2025`, award: `Khalid Iqbal 终身成就奖`,
      role: `痴呆研究教授`,
      sources: [
        { t: "AAIC 2025 颁奖稿（官方）", u: "https://aaic.alz.org/releases-2025/awards.asp" },
        { t: "鲁汶大学", u: "https://www.kuleuven.be/" }
      ],
      contribZh: `比利时鲁汶大学痴呆研究教授、英国痴呆研究所（UK DRI）创始主任。1985 年获医学学位、1992 年在鲁汶大学获博士学位，在 EMBL 随 Carlos Dotti 做博士后后，1998 年在鲁汶建立自己的实验室，2002 年成为正教授；2007 至 2017 年任 VIB 脑与疾病研究中心主任，把它建成世界级研究机构；2017 至 2023 年出任 UK DRI 创始主任，此后在伦敦弗朗西斯·克里克研究所与鲁汶的实验室之间分配时间。他以阿尔茨海默病发病机制的开拓性研究获得国际公认，近年聚焦淀粉样斑块如何激起一场多细胞的神经炎症反应，其中小胶质细胞与星形胶质细胞是主要驱动者。2017 年获阿尔茨海默协会 Zenith 会士奖，2018 年获大脑奖（Brain Prize），持有 20 余项专利、创办两家生物技术公司。`,
      contribEn: `Professor in dementia research at KU Leuven in Belgium and the founding director of the UK Dementia Research Institute. He earned his medical degree in 1985 and a Ph.D. in 1992 at KU Leuven; after postdoctoral work at EMBL with Carlos Dotti he launched his own lab in Leuven in 1998 and became full professor in 2002. He directed the VIB Center for Brain and Disease Research from 2007 to 2017, founding it as a world-leading research center, and from 2017 to 2023 was the founding director of the UK Dementia Research Institute; since 2023 he has split his time between London's Francis Crick Institute and his lab in Leuven. He is internationally recognized for pioneering research into the mechanisms underlying Alzheimer's disease, and his more recent work focuses on how amyloid plaques provoke a pathological multicellular neuroinflammatory response, with microglia and astrocytes as key drivers. He received the Alzheimer's Association Zenith Fellows award in 2017 and the Brain Prize in 2018, holds more than 20 patents and founded two biotech companies.`
    },
    {
      en: `Clifford R. Jack Jr.`, zh: `克利福德·杰克`,
      country: `美国`, countryEn: `United States`,
      aff: `梅奥诊所 放射学`,
      affEn: `Mayo Clinic, Department of Radiology`,
      year: `2025`, award: `Henry Wisniewski 终身成就奖`,
      role: `Alexander Family AD 研究教授`,
      sources: [
        { t: "AAIC 2025 颁奖稿（官方）", u: "https://aaic.alz.org/releases-2025/awards.asp" },
        { t: "梅奥诊所", u: "https://www.mayo.edu/" }
      ],
      contribZh: `美国明尼苏达州罗切斯特梅奥诊所放射学教授（神经放射学方向），并获 Alexander Family 阿尔茨海默病研究教席。他主持的衰老与痴呆影像研究室，核心问题是各种影像指标与神经病理、体液标志物、遗传、心理测量以及认知行为表型之间到底是什么关系；该室同时担任多项大型多中心观察性与干预性研究的 MRI 中心。他因提出一系列影响深远的诊断标准与分期框架而享誉国际——这些框架把神经退行性疾病的生物学客观标志与临床分期整合到一起，其中包括被广泛采用的 AT(N) 研究框架，构成了今天理解这类疾病的基本语言。`,
      contribEn: `Professor of radiology specializing in neuroradiology, and the Alexander Family Professor of Alzheimer's Disease Research at Mayo Clinic in Rochester, Minnesota. His Aging and Dementia Imaging Research lab studies how various imaging measures relate to neuropathology, fluid biomarkers, genetics, psychometric measures and cognitive and behavioral phenotypes, and serves as the Magnetic Resonance Imaging center for large multi-site observational and interventional studies. He is world renowned for influential criteria and frameworks that are fundamental to our current understanding of neurodegenerative disease; his work, alongside experts in the field, has integrated objective hallmarks of neurodegenerative disease biology and clinical disease staging — including the widely adopted AT(N) research framework.`
    },
    {
      en: `Mary Sano`, zh: `玛丽·萨诺`,
      country: `美国`, countryEn: `United States`,
      aff: `西奈山伊坎医学院 阿尔茨海默病研究中心`,
      affEn: `Icahn School of Medicine at Mount Sinai, AD Research Center`,
      year: `2025`, award: `Bengt Winblad 终身成就奖`,
      role: `中心主任 · 精神病学教授`,
      sources: [
        { t: "AAIC 2025 颁奖稿（官方）", u: "https://aaic.alz.org/releases-2025/awards.asp" },
        { t: "西奈山伊坎医学院", u: "https://icahn.mssm.edu/" }
      ],
      contribZh: `纽约西奈山伊坎医学院精神病学教授、阿尔茨海默病研究中心主任。神经心理学家出身，也是一位屡获认可的临床试验专家，研究聚焦老化过程中的认知损害、阿尔茨海默病及相关痴呆。她的工作沿着两条线展开：一是弄清疾病对认知究竟造成什么后果，二是找到能真正改善认知的干预手段；此外她在认知损害常伴随出现的行为与精神症状上有重要建树，并为此类症状设计了专门的干预试验。她还率先把技术手段用于居家评估，使大规模预防试验可以远程开展，让更多人群有机会参与研究。她与西奈山同事一道，参与创建了印度孟买第一家开设在公立医院里的记忆门诊。发表同行评议论文 300 余篇，指导过 100 多名青年科学家与临床医生。`,
      contribEn: `Professor of psychiatry and director of the Alzheimer's Disease Research Center at the Icahn School of Medicine at Mount Sinai in New York City. A neuropsychologist by training and an award-winning clinical trialist, she focuses on cognitive impairment in aging, Alzheimer's disease and related dementias. Her work has addressed the cognitive consequences of disease and the discovery of interventions to improve cognition, and she has made major contributions to understanding the behavioral and psychiatric conditions that co-occur with cognitive impairment, designing trials to improve them. She has pioneered in-home assessment using technologies that permit large-scale prevention trials to occur remotely, widening research participation across populations. With colleagues at Mount Sinai she contributed to establishing the first memory clinic in a public hospital in Mumbai, India. She has authored over 300 peer-reviewed publications and mentored more than 100 young scientists and clinicians.`
    },
    {
      en: `Agneta Nordberg`, zh: `阿格妮塔·努德贝里`,
      country: `瑞典`, countryEn: `Sweden`,
      aff: `卡罗林斯卡医学院 临床神经科学`,
      affEn: `Karolinska Institutet, Clinical Neuroscience`,
      year: `2022`, award: `Henry Wisniewski 终身成就奖`,
      note: `她是极少数两度获此奖的人：2002 年首次获奖，2022 年再度获奖。官方名录中两次均单独列年。`,
      role: `转化分子影像实验室主任`,
      sources: [
        { t: "AAIC 2022 颁奖稿（官方）", u: "https://alz.org/aaic/releases_2022/awards.asp" },
        { t: "卡罗林斯卡医学院", u: "https://ki.se/" }
      ],
      contribZh: `瑞典卡罗林斯卡医学院临床神经科学教授、Nordberg 转化分子影像实验室主任，同时是卡罗林斯卡大学医院老年医学高级顾问。她最早一批阐明了神经递质乙酰胆碱在痴呆中的作用，这一线索至今仍是胆碱酯酶抑制剂类药物的立论基础；此后她率先把脑内淀粉样蛋白 PET 显像推向临床研究，用它把 tau 蛋白异常与反应性星形胶质增生直接"看见"，从而把 AD 的诊断窗口从症状期往前推。她当前的研究方向是开发早期诊断标志物与新的药物靶点。她是极少数两度获得 AAIC 终身成就奖的科学家之一（2002 年与 2022 年）。`,
      contribEn: `Professor of clinical neuroscience and director of the Nordberg Translational Molecular Imaging Lab at Karolinska Institutet, and a senior consultant in geriatric medicine at Karolinska University Hospital. She has contributed greatly to the field's understanding of the neurotransmitter acetylcholine's role in dementia, and has pioneered the use of brain amyloid positron emission tomography imaging to visualize abnormalities in tau protein and reactive astrogliosis. Her research currently focuses on developing early diagnostic biomarkers and new drug targets in Alzheimer's disease and other neurodegenerative disorders. She is one of the few scientists to have received the AAIC Lifetime Achievement Award twice, in 2002 and 2022.`
    },
    {
      en: `Keith Johnson`, zh: `基思·约翰逊`,
      country: `美国`, countryEn: `United States`,
      aff: `哈佛医学院 · 麻省总医院`,
      affEn: `Harvard Medical School · Massachusetts General Hospital`,
      year: `2022`, award: `Khalid Iqbal 终身成就奖`,
      role: `分子神经影像主任`,
      sources: [
        { t: "AAIC 2022 颁奖稿（官方）", u: "https://alz.org/aaic/releases_2022/awards.asp" },
        { t: "哈佛医学院", u: "https://hms.harvard.edu/" }
      ],
      contribZh: `哈佛医学院教授、麻省总医院分子神经影像主任、布莱根妇女医院神经内科医师。他是哈佛衰老脑研究（Harvard Aging Brain Study）的联席首席研究员，并负责阿尔茨海默临床试验联盟（ACTC）的 PET 部分。他的神经影像工作大幅推进了人们对 AD 中 tau 与淀粉样病理的理解，尤其是在临床前与早期阶段——也就是症状尚未出现、但病理已经在累积的那段时间。他近期的研究转向两个更前沿的问题：tau 病理最初起源于深部脑结构的哪些位置，以及如何在 AD 预防试验中把分子影像的读出优化到足以支撑决策。`,
      contribEn: `Professor at Harvard Medical School, director of molecular neuroimaging at Massachusetts General Hospital, and a neurologist at Brigham and Women's Hospital. He is the co-principal investigator of the Harvard Aging Brain Study and leads the PET component of the Alzheimer's Clinical Trials Consortium. His pioneering neuroimaging work has contributed greatly to the understanding of tau and amyloid pathology in Alzheimer's, especially in the preclinical and early stages of the disease. His recent studies have focused on identifying the origins of tau pathology in deep brain structures and optimizing outcomes for molecular imaging in Alzheimer's disease prevention trials.`
    },
    {
      en: `Peggye Dilworth-Anderson`, zh: `佩吉·迪尔沃思-安德森`,
      country: `美国`, countryEn: `United States`,
      aff: `北卡罗来纳大学教堂山分校`,
      affEn: `University of North Carolina at Chapel Hill`,
      year: `2022`, award: `Bengt Winblad 终身成就奖`,
      role: `卫生政策与管理学教授`,
      sources: [
        { t: "AAIC 2022 颁奖稿（官方）", u: "https://alz.org/aaic/releases_2022/awards.asp" },
        { t: "北卡罗来纳大学", u: "https://www.unc.edu/" }
      ],
      contribZh: `北卡罗来纳大学教堂山分校公共卫生学院卫生政策与管理学教授、医学院健康公平中心副研究员，同时是阿尔茨海默协会 New IDEAS 研究的共同研究者——该研究在轻度认知障碍与痴呆的多元人群中考察脑淀粉样蛋白 PET 的表现。她的研究核心是照护中的健康差异：谁在照护、谁被照护、资源如何分配，以及这些差异如何影响研究参与。她发展出一套推进"包容性科学"的方法与策略，使研究能够真正做到文化适切，也让阿尔茨海默病与痴呆的信息能传达到医疗服务不足的人群中去。`,
      contribEn: `Professor of health policy and management in the School of Public Health and associate of the Center for Health Equity in the School of Medicine at the University of North Carolina, Chapel Hill. She is a co-investigator for the Alzheimer's Association's New IDEAS Study, which investigates brain amyloid PET scans in diverse populations with mild cognitive impairment and dementia. Her research on health disparities in caregiving for Alzheimer's and other dementia, and her development of methods and strategies to advance an inclusive science, have greatly informed the conduct of culturally relevant research and enabled wider dissemination of information about Alzheimer's and dementia in medically underserved populations.`
    },
    {
      en: `Steven T. DeKosky`, zh: `史蒂文·德科斯基`,
      country: `美国`, countryEn: `United States`,
      aff: `佛罗里达大学医学院`,
      affEn: `University of Florida College of Medicine`,
      year: `2020`, award: `Henry Wisniewski 终身成就奖`,
      role: `Aerts-Cosper AD 研究教授`,
      sources: [
        { t: "AAIC 2020 颁奖稿（官方 PDF）", u: "https://www.alz.org/aaic/downloads2020/AAIC2020-Awards.pdf" },
        { t: "佛罗里达大学", u: "https://www.ufl.edu/" }
      ],
      contribZh: `佛罗里达大学医学院 Aerts-Cosper 阿尔茨海默研究教授、McKnight 脑研究所副所长、佛罗里达阿尔茨海默病研究中心副主任。他的名字挂在两条重要的研究线索上：一是与同行共同发表了职业橄榄球运动员慢性创伤性脑病（CTE）的最初几份报告，把反复头部撞击与神经退行性病变联系起来；二是担任首个淀粉样蛋白显像剂匹兹堡化合物 B（PiB）临床试验的主要研究者——正是这项技术让医生第一次能在活人体内看到淀粉样斑块。他的专业方向是阿尔茨海默病的神经化学、治疗与预防。`,
      contribEn: `The Aerts-Cosper Professor of Alzheimer's Research at the University of Florida College of Medicine, deputy director of the McKnight Brain Institute and associate director of the Florida Alzheimer's Disease Research Center. He co-authored the first reports of chronic traumatic encephalopathy in professional football players and has published numerous studies on traumatic brain injury. He was also principal investigator of the clinical trials investigating Pittsburgh Compound-B, the first amyloid imaging compound. He specializes in work focusing on understanding the neurochemistry, treatment and prevention of Alzheimer's disease.`
    },
    {
      en: `Christine Van Broeckhoven`, zh: `克里斯蒂娜·范·布勒克霍芬`,
      country: `比利时`, countryEn: `Belgium`,
      aff: `安特卫普大学 · VIB 分子神经病学中心`,
      affEn: `University of Antwerp · VIB Center for Molecular Neurology`,
      year: `2020`, award: `Khalid Iqbal 终身成就奖`,
      role: `神经退行性脑病研究组组长`,
      sources: [
        { t: "AAIC 2020 颁奖稿（官方 PDF）", u: "https://www.alz.org/aaic/downloads2020/AAIC2020-Awards.pdf" },
        { t: "安特卫普大学", u: "https://www.uantwerpen.be/" }
      ],
      contribZh: `比利时安特卫普大学教授、VIB 分子神经病学中心神经退行性脑病研究组组长，研究重心是早发型痴呆的神经遗传学——找出导致疾病的致病基因与风险基因。她的团队证明：在多个大家系中，淀粉样前体蛋白基因与早发型阿尔茨海默病共分离，且这些家系分别可由不同的淀粉样基因突变解释；他们还发现颗粒蛋白前体（progranulin）基因突变频繁出现在额颞叶变性家系中。此后多年，她的团队陆续定位了多个早发型痴呆的致病基因，把疾病通路一条条指了出来。`,
      contribEn: `Professor at the University of Antwerp and group leader of the Neurodegenerative Brain Diseases group at the VIB Center for Molecular Neurology. Her research focuses on the neurogenetics of early-onset dementia, characterizing the causal and risk genes underlying the disease. Her team showed that the amyloid gene segregated with early-onset Alzheimer's disease in extended families explained by different amyloid mutations, and found that mutations in the progranulin gene are frequently involved in families with frontotemporal lobar degeneration. Over the years her teams identified several genes underlying early-onset dementia, pinpointing additional disease pathways leading to disease.`
    },
    {
      en: `Francisco Lopera`, zh: `弗朗西斯科·洛佩拉`,
      country: `哥伦比亚`, countryEn: `Colombia`,
      aff: `安蒂奥基亚大学 神经科学组`,
      affEn: `University of Antioquia, Neuroscience Group of Antioquia`,
      year: `2020`, award: `Bengt Winblad 终身成就奖`,
      role: `神经科学组主任`,
      sources: [
        { t: "AAIC 2020 颁奖稿（官方 PDF）", u: "https://www.alz.org/aaic/downloads2020/AAIC2020-Awards.pdf" },
        { t: "安蒂奥基亚大学", u: "https://www.udea.edu.co/" }
      ],
      contribZh: `哥伦比亚安蒂奥基亚大学教授、安蒂奥基亚神经科学组主任。他在安蒂奥基亚的大家系中工作了三十余年，这些家系携带常染色体显性遗传的早发型阿尔茨海默病，发病年龄比普通人群早得多。正是沿着这些家系，他的工作促成了早老素 1（PSEN1）突变致病这一发现。他还担任阿尔茨海默病预防倡议常染色体显性遗传 AD 试验（API ADAD Colombia Trial）的主要研究者——该试验的核心问题很直接：在症状出现之前就给予抗淀粉样治疗，能不能推迟发病或延缓进展。这个问题也只有像这样"发病时间可预测"的家族队列才回答得了。`,
      contribEn: `Professor and director of the Antioquia Neuroscience Group at the University of Antioquia. He has spent more than 30 years working with large families to understand the genetic basis of Alzheimer's disease, and his work led to the discovery that a mutation in a gene called presenilin 1 (PSEN1) causes early-onset familial Alzheimer's disease. He is a principal investigator for the Alzheimer's Prevention Initiative Autosomal Dominant Alzheimer's Disease (API ADAD) Colombia Trial, investigating whether an anti-amyloid treatment given before symptoms develop may delay onset or slow disease progression.`
    }
  ],

  /* ============ 二、中国科学家 ============ */
  cn: [
    {
      en: `Jianping Jia`, zh: `贾建平`,
      country: `中国`, countryEn: `China`,
      aff: `首都医科大学宣武医院 神经疾病高创中心`,
      affEn: `Xuanwu Hospital, Capital Medical University`,
      role: `中心主任 · 神经病学系主任`,
      field: `阿尔茨海默病遗传机制 · 无症状期标志物 · 精准防控`,
      fieldEn: `AD genetics · preclinical biomarkers · precision prevention`,
      sources: [
        { t: "首都医科大学官网（官方报道）", u: "https://news.ccmu.edu.cn/syyw_12977/03342519682b4fb7872e628e589c44bf.htm" },
        { t: "宣武医院", u: "https://www.xwhosp.com.cn/" }
      ],
      contribZh: `首都医科大学宣武医院神经疾病高创中心主任、首都医科大学神经病学系主任，中国医学科学院学术咨询委员会学部委员、北京学者。他先解决了中国 AD 研究"没有自己的遗传数据"这个前提问题：报道中国首个 AD 家系、两个新致病基因（ZDHHC21 与 SORBS2）及 53 个突变位点，绘出首张中国人 AD 遗传图谱，该图谱被纳入 2021 年世界阿尔茨海默病报告。在诊断端，他历时二十年追踪标志物从无症状期到临床期的演变规律，明确了 AD 可提前 18 年诊断，成果发表于 NEJM 2024 并被纳入最新国际诊断标准；他还发现外周血神经源性外泌体中的病理蛋白能反映脑内病理，提供了替代脑脊液的微创路径。在防控端，他明确了中国 5400 万痴呆与认知障碍的现状及危险因素（Lancet Public Health），并基于近 3 万人、10 年随访证实 6 种健康生活方式可降低发病风险 60% 以上（BMJ 2023）。他牵头制定包括首部中国痴呆指南在内的 31 部指南，连续主编第 6、7、8 版全国统编《神经病学》教材；2021 年获国际阿尔茨海默协会 Zaven 科学成就奖，是首位获此奖的华人学者。`,
      contribEn: `Director of the Neurodegenerative Disease Advanced Innovation Center at Xuanwu Hospital and head of the Department of Neurology at Capital Medical University; a member of the Academic Advisory Committee of the Chinese Academy of Medical Sciences and a Beijing Scholar. He first solved the prerequisite problem that China had no AD genetic data of its own: his team reported China's first AD pedigree, two novel causative genes (ZDHHC21 and SORBS2) and 53 mutation sites, drawing the first genetic atlas of Chinese AD, which was incorporated into the 2021 World Alzheimer Report. On diagnosis, two decades of follow-up defined how biomarkers evolve from the asymptomatic to the clinical stage, establishing that AD can be diagnosed 18 years in advance — work published in NEJM in 2024 and adopted into the latest international diagnostic criteria; he also showed that pathological proteins in blood-derived neuronal exosomes reflect brain pathology, offering a minimally invasive alternative to cerebrospinal fluid. On prevention, he defined the burden of 54 million cases of dementia and cognitive impairment in China and its risk factors (Lancet Public Health), and demonstrated in a cohort of nearly 30,000 people followed for 10 years that six healthy lifestyle factors reduce risk by more than 60% (BMJ 2023). He has led 31 guidelines including China's first dementia guideline, and has edited the 6th, 7th and 8th national neurology textbooks. In 2021 he received the Alzheimer's Association's Zaven Khachaturian Award, the first Chinese scholar to be so honored.`
    },
    {
      en: `Yanjiang Wang`, zh: `王延江`,
      country: `中国`, countryEn: `China`,
      aff: `陆军军医大学大坪医院（陆军特色医学中心）神经内科`,
      affEn: `Daping Hospital (Army Medical Center of PLA), Army Medical University`,
      role: `神经内科主任 · 教授`,
      field: `AD 系统性机制 · 血液标志物 · 免疫治疗`,
      fieldEn: `Systemic mechanisms of AD · blood biomarkers · immunotherapy`,
      sources: [
        { t: "国家卫健委脑卒中防治工程委员会专家页（官方）", u: "https://csp.ncmi.cn/WebManage/StrokeProject/ExpertDetail?Eid=616" },
        { t: "人民网·健康时报 团队介绍", u: "https://doctor.peopledailyhealth.com/topic/event/item/2001" }
      ],
      contribZh: `陆军军医大学大坪医院（陆军特色医学中心）神经内科主任，主任医师、教授、博士生导师；国家杰出青年科学基金获得者，教育部"长江学者"特聘教授，国家"万人计划"领军人才，科技部中青年科技创新领军人才。他做的一件反直觉的事，是把目光从大脑移开：团队发现脑内约 40% 的 Aβ 来自外周血液，据此在国际上提出阿尔茨海默病"系统性机制"的新理论——AD 未必只是大脑的疾病。沿着这条线索，他们尝试在肝细胞中把 APOE4 转为 APOE3，降低血清 LDL-C、提高肝脏对 Aβ 的摄取，从而减轻脑内 Aβ 负担；也在造血干细胞中校正 TREM2 突变，使单核细胞进入大脑、增强 Aβ 清除。他还提出 AD 免疫治疗的"扬灰效应"概念与"分期防治"策略。以通讯作者在 PNAS、Nature Aging、Nature Reviews Neurology、Lancet Infectious Diseases、JAMA Neurology、Neuron、Science Advances 等发表论文 100 余篇，获国家科技进步二等奖，以及第 20 届 Alzheimer Award。`,
      contribEn: `Director of the Department of Neurology at Daping Hospital (Army Medical Center of PLA), Army Medical University; professor and chief physician. He is a recipient of the National Science Fund for Distinguished Young Scholars, a Changjiang Scholar appointed by the Ministry of Education, and a leading talent of the national Ten Thousand Talents Program. His group did something counterintuitive: it looked away from the brain. They found that roughly 40% of Aβ in the brain originates from the periphery, and on that basis proposed the systemic mechanism theory of Alzheimer's disease — the claim that AD is not merely a disease of the brain. Following this lead, they tried converting APOE4 to APOE3 in hepatocytes to lower serum LDL-C and increase hepatic Aβ uptake, thereby reducing cerebral Aβ burden, and corrected TREM2 mutations in hematopoietic stem cells so that monocytes enter the brain and enhance Aβ clearance. He also proposed the ash-scattering effect concept in AD immunotherapy and a staged prevention strategy. He has published over 100 papers as corresponding author in PNAS, Nature Aging, Nature Reviews Neurology, Lancet Infectious Diseases, JAMA Neurology, Neuron and Science Advances, and has received a National Science and Technology Progress Award (second class) and the 20th Alzheimer Award.`
    },
    {
      en: `Jiong Shi`, zh: `施炯`,
      country: `中国`, countryEn: `China`,
      aff: `中国科学技术大学附属第一医院（安徽省立医院）`,
      affEn: `The First Affiliated Hospital of USTC (Anhui Provincial Hospital)`,
      role: `副院长 · 神经内科主任医师`,
      field: `脑衰老与神经退行性疾病机制 · AD 生物标志物 · 临床试验`,
      fieldEn: `Mechanisms of brain aging · AD biomarkers · clinical trials`,
      sources: [
        { t: "中国科大附一院官网（官方）", u: "https://www.ahslyy.com.cn/col18/284" },
        { t: "中国科学技术大学临床医学院", u: "https://lcyx.ustc.edu.cn/2023/0619/c34263a606366/page.htm" }
      ],
      contribZh: `中国科学技术大学附属第一医院（安徽省立医院）副院长，神经内科主任医师、教授、博士生导师。1987 年入上海医科大学临床医学专业，1994 年赴美国佛罗里达大学攻读药物动力学博士。此后长期在美国临床与科研一线：曾任克利夫兰诊所神经临床研究中心主任、圣约瑟医院与巴洛神经病学研究所神经内科主任，并是美国 ADNI 指导委员会成员及分中心负责人；回国后任首都医科大学附属北京天坛医院神经病学中心认知障碍性疾病科主任、国家神经系统疾病临床医学研究中心认知研究中心主任，2022 年 6 月起任现职。学术上，他从基因、蛋白、细胞、动物到临床层面研究脑衰老与神经退行性疾病的分子机制，在 AD 生物标志物与治疗方面获专利；主持参与 50 余项国际多中心 II/III 期临床试验，参与建立中国首个基于 ATN 框架的认知障碍疾病队列（CANDI）。现任中华医学会神经病学分会痴呆与认知障碍学组副组长、中国卒中学会脑健康分会主任委员，以通讯或第一作者在 BMJ、JAMA Neurology 等发表 SCI 论文 90 余篇。`,
      contribEn: `Vice President of the First Affiliated Hospital of USTC (Anhui Provincial Hospital), professor and chief physician of neurology. He entered Shanghai Medical University in 1987 and earned a PhD in pharmacokinetics at the University of Florida in 1994. He then spent years on the US clinical and research front lines: director of the neuroclinical research center at Cleveland Clinic, chair of neurology at St. Joseph's Hospital and Barrow Neurological Institute, and a member of the ADNI Steering Committee and site PI. After returning to China he led the cognitive disorders division at Beijing Tiantan Hospital's Neurology Center and the cognitive research center of the National Clinical Research Center for Neurological Diseases, taking his current post in June 2022. Scientifically he studies the molecular mechanisms of brain aging and neurodegenerative disease from gene, protein, cell, animal and clinical levels, and holds patents on AD biomarkers and treatment; he has led or participated in more than 50 international multicenter phase II/III trials and helped build China's first ATN-based cognitive disorders cohort (CANDI). He is deputy head of the Dementia and Cognitive Disorders Group of the Chinese Medical Association's Neurology Branch and chair of the Brain Health Branch of the Chinese Stroke Association, and has published over 90 SCI papers as corresponding or first author in journals including BMJ and JAMA Neurology.`
    },
    {
      en: `Qihao Guo`, zh: `郭起浩`,
      country: `中国`, countryEn: `China`,
      aff: `上海交通大学医学院附属第六人民医院 老年医学科`,
      affEn: `Shanghai Sixth People's Hospital, Shanghai Jiao Tong University School of Medicine`,
      role: `老年医学科行政主任 · 教授`,
      field: `认知障碍早期诊断 · 神经心理评估 · 脑—行为关系`,
      fieldEn: `Early diagnosis of cognitive disorders · neuropsychological assessment · brain-behavior relations`,
      sources: [
        { t: "上海市第六人民医院官网（官方）", u: "https://www.6thhosp.com/Content/Doctor/13984" },
        { t: "上海交通大学医学院", u: "https://www.shsmu.edu.cn/rlzy/info/1011/2514.htm" }
      ],
      contribZh: `上海交通大学医学院附属第六人民医院老年医学科行政主任，主任医师、教授、博士生导师，兼任香港科技大学—上海市第六人民医院脑科学联合研究中心沪方主任。此前他在复旦大学附属华山医院神经内科任教授，主持华山记忆门诊二十余年、神经内科特需门诊与教授查房十余年。长期方向是老年认知障碍的早期诊断、治疗、预防与"脑—行为"关系研究：临床上累积数万例认知障碍病例，系统总结报道了阿尔茨海默病、血管性认知损害、语义性痴呆、麻痹性痴呆、桥本氏脑病等类型的认知、遗传与影像特征；研究上参加几乎全部改善认知药物的临床试验，共同执笔 9 种神经系统疾病专家共识或指南。他主编的《神经心理评估》已再版 7 次，是这一领域被广泛使用的工具书；发表 SCI 论文 130 余篇，其中影响因子大于 9 分的 5 篇。现任中华医学会神经病学分会痴呆与认知障碍学组委员、上海市医师协会老年医学科医师分会副会长。`,
      contribEn: `Director of the Department of Geriatrics at Shanghai Sixth People's Hospital, Shanghai Jiao Tong University School of Medicine; professor, chief physician and doctoral supervisor, and the Shanghai-side director of the HKUST–Shanghai Sixth People's Hospital Joint Brain Science Research Center. He was previously professor of neurology at Huashan Hospital, Fudan University, where he ran the memory clinic for more than 20 years. His long-term focus is early diagnosis, treatment and prevention of late-life cognitive disorders and brain-behavior relationships: clinically he has accumulated tens of thousands of cognitive disorder cases and characterized the cognitive, genetic and imaging features of Alzheimer's disease, vascular cognitive impairment, semantic dementia, general paresis and Hashimoto's encephalopathy; in research he has taken part in nearly all cognition-enhancing drug trials and co-drafted nine expert consensus statements or guidelines. His textbook Neuropsychological Assessment is in its seventh edition and widely used in the field. He has published over 130 SCI papers, five of them with impact factors above 9, and serves on the Dementia and Cognitive Disorders Group of the Chinese Medical Association's Neurology Branch and as vice president of the Shanghai Medical Doctor Association's Geriatrics Branch.`
    },
    {
      en: `Yongjun Wang`, zh: `王拥军`,
      country: `中国`, countryEn: `China`,
      aff: `首都医科大学附属北京天坛医院`,
      affEn: `Beijing Tiantan Hospital, Capital Medical University`,
      role: `院长 · 神经病学中心首席科学家`,
      field: `缺血性脑血管病 · 复发机制与干预（与血管性认知障碍交叉）`,
      fieldEn: `Ischemic cerebrovascular disease · recurrence and intervention (overlapping with vascular cognitive impairment)`,
      note: `研究方向以卒中为主，与认知障碍在血管性痴呆、脑小血管病层面交叉；收入本栏是因为他在中国神经内科体系中的学科带头人位置。`,
      sources: [
        { t: "北京天坛医院官网（官方）", u: "https://bjtth.cn/Html/Doctors/Main/Index_1031057.html" },
        { t: "首都医科大学", u: "https://www.ccmu.edu.cn/" }
      ],
      contribZh: `2025 年当选中国科学院院士。现任首都医科大学附属北京天坛医院党委副书记、院长，神经病学中心首席科学家、教授、博士生导师，国家神经疾病医学中心主任，国家神经系统疾病医疗质量控制中心主任，中华医学会神经病学分会主任委员，中国卒中学会会长，《Stroke & Vascular Neurology》主编。他的工作把中国卒中诊疗推进了国际前沿：首创缺血性脑血管病短程双通道双效应联合抗血小板方案（CHANCE），使复发风险从 11.7% 降至 8.2%，改写全球脑血管病指南；发现影响 CHANCE 疗效的药物基因，据此建立"绕行基因"精准方案，把风险进一步降到 6.0%；设计把静脉溶栓时间窗扩大到 24 小时的新方案，在不增加症状性颅内出血的前提下把致残率从 33.0% 降到 24.2%；并推动 4 种新型溶栓药物上市，其中 3 种为国产，破解了溶栓药全球短缺与"卡脖子"问题。以第一或通讯作者在 NEJM、Lancet、JAMA、BMJ 等发表论文 300 余篇，两次以第一完成人获国家科技进步二等奖，2022 年获世界卒中组织最高成就"主席奖"、2025 年获美国心脏协会/美国卒中协会"威廉·M·费恩伯格卒中卓越贡献奖"，两项均为设立以来首次授予亚洲学者。`,
      contribEn: `Elected to the Chinese Academy of Sciences in 2025. He is President of Beijing Tiantan Hospital, Capital Medical University, chief scientist of its Neurology Center, director of the National Center for Neurological Diseases, director of the National Center for Neurological Disease Quality Control, president of the Neurology Branch of the Chinese Medical Association, president of the Chinese Stroke Association and editor-in-chief of Stroke & Vascular Neurology. His work moved stroke care in China to the international front: he originated the short-course dual-channel dual-effect antiplatelet regimen (CHANCE) for ischemic cerebrovascular disease, reducing recurrence from 11.7% to 8.2% and changing global stroke guidelines; identified the pharmacogenomic variants that modify CHANCE response and built a precision bypass-gene regimen that cut risk further to 6.0%; designed an intravenous thrombolysis strategy extending the window to 24 hours, lowering disability from 33.0% to 24.2% without increasing symptomatic intracranial hemorrhage; and helped bring four new thrombolytic agents to market, three of them domestically produced, easing a global drug shortage. He has published over 300 papers as first or corresponding author in NEJM, Lancet, JAMA and BMJ, twice received the National Science and Technology Progress Award (second class) as first contributor, and in 2022 received the World Stroke Organization's President's Award and in 2025 the AHA/ASA William M. Feinberg Award for Excellence in Clinical Stroke — both the first ever awarded to an Asian scholar.`
    }
  ],

  /* ============ 三、完整获奖名录（1988–2026，官方名单原样） ============ */
  rosterNote: `下列名单逐条取自 Alzheimer's Association 官方获奖名录页面（1988–2026），共 98 条记录，其中 Nordberg 一人两度获奖故占两行。底色高亮并可点击的，是上方已整理出中英文档案的人，点一下会跳到对应卡片；其余人名先留在这里，档案按届次继续补。`,
  roster: [
    [1988, "Khachaturian, Zaven"],
    [1990, "Greengard, Paul"],
    [1992, "Gajdusek, D. Carleton"],
    [1992, "Roth, Martin"],
    [1992, "Svennerholm, Lars"],
    [1992, "Tomlinson, Bernard"],
    [1994, "Glenner, George G."],
    [1994, "Terry, Robert D."],
    [1994, "Wisniewski, Henry M."],
    [1996, "Hasegawa, Kazuo"],
    [1996, "Imahori, Kazutomo"],
    [1996, "Ishii, Tsuyoshi"],
    [1996, "Nishimura, Tsuyoshi"],
    [1996, "Poirier, Judes"],
    [1996, "Roses, Allen"],
    [1996, "Tateishi, Jun"],
    [1998, "Braak, Eva"],
    [1998, "Braak, Heiko"],
    [1998, "Gottfries, Carl-Gerhard"],
    [1998, "Jellinger, Kurt"],
    [1998, "Kidd, Michael"],
    [2000, "Berg, Leonard"],
    [2000, "Frangione, Blas"],
    [2000, "Grundke-Iqbal, Inge"],
    [2000, "Katzman, Robert"],
    [2000, "Martin, George M."],
    [2002, "Beyreuther, Konrad"],
    [2002, "Brun, Arne"],
    [2002, "Giacobini, Ezio"],
    [2002, "Nordberg, Agneta"],
    [2002, "Swaab, Dick F."],
    [2004, "McGeer, Patrick"],
    [2004, "Morris, John"],
    [2004, "Reisberg, Barry"],
    [2004, "Rogers, Joseph"],
    [2006, "Anderton, Brian"],
    [2006, "Duyckaerts, Charles"],
    [2006, "Hoyer, Siegfried"],
    [2006, "Masters, Colin"],
    [2006, "Pepeu, Giancarlo"],
    [2008, "Cotman, Carl"],
    [2008, "Davies, Peter"],
    [2008, "Ghetti, Bernardino"],
    [2008, "Selkoe, Dennis"],
    [2009, "Lee, Virginia"],
    [2009, "Mayeux, Richard"],
    [2009, "Rossor, Martin"],
    [2010, "Ashe, Karen Hsiao"],
    [2010, "Iwatsubo, Takeshi"],
    [2010, "Mesulam, Marsel"],
    [2011, "Blennow, Kaj"],
    [2011, "Hardy, John"],
    [2011, "Pericak-Vance, Margaret A."],
    [2012, "Breteler, Monique M.B."],
    [2012, "Hyman, Bradley T."],
    [2012, "Mucke, Lennart"],
    [2013, "Fratiglioni, Laura"],
    [2013, "Mandelkow, Eva-Maria"],
    [2013, "Mandelkow, Eckhard"],
    [2013, "Petersen, Ronald"],
    [2014, "Younkin, Steven G."],
    [2015, "Goate, Alison"],
    [2015, "Hodges, John"],
    [2015, "McKeith, Ian"],
    [2015, "Price, Donald"],
    [2016, "Evans, Denis"],
    [2016, "Griffin, Sue"],
    [2016, "Winblad, Bengt"],
    [2017, "Hendrie, Hugh"],
    [2017, "Kawas, Claudia"],
    [2017, "Koo, Edward"],
    [2018, "Cummings, Jeffrey L."],
    [2018, "McKee, Ann C."],
    [2018, "Trojanowski, John Q."],
    [2019, "Albert, Marilyn"],
    [2019, "de Leon, Mony"],
    [2019, "Lannfelt, Lars"],
    [2020, "DeKosky, Steven T."],
    [2020, "Lopera, Francisco"],
    [2020, "Van Broeckhoven, Christine"],
    [2021, "Novák, Michal"],
    [2021, "Soininen, Hilkka"],
    [2021, "Weiner, Michael W."],
    [2022, "Dilworth-Anderson, Peggye"],
    [2022, "Johnson, Keith"],
    [2022, "Nordberg, Agneta"],
    [2023, "Fagan, Anne"],
    [2023, "Miller, Bruce"],
    [2023, "Scheltens, Philip"],
    [2024, "Byrd, Goldie S."],
    [2024, "Nitrini, Ricardo"],
    [2024, "Nixon, Ralph A."],
    [2025, "de Strooper, Bart"],
    [2025, "Jack, Clifford R. Jr."],
    [2025, "Sano, Mary"],
    [2026, "Jagust, William"],
    [2026, "Ogunniyi, Adesola"],
    [2026, "Van Eldik, Linda"]
  ]
};
