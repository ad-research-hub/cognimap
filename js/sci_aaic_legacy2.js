/* AD 著名科学家 · 补录 ③：2012–2019 年 AAIC 终身成就奖得主（第二批）
 *
 * 写法同 legacy1：只写院校官网/机构官方页上写得住的内容。
 * 这一批的特点是"人还在世、职务在变"，所以 aff 一律写官方页面当下的表述
 * （比如荣休就写荣休），不凭印象往前推。
 */
(function () {
  if (!window.SCIENTISTS || !window.SCIENTISTS.aaic) { return; }

  window.SCIENTISTS.aaic.push(

    {
      en: `Bradley T. Hyman`, zh: `布拉德利·海曼`,
      country: `美国`, countryEn: `United States`,
      aff: `哈佛医学院 / 麻省总医院 阿尔茨海默病研究中心`,
      affEn: `Harvard Medical School; Massachusetts General Hospital`,
      year: `2012`, award: `AAIC 终身成就奖`,
      role: `John B. Penney, Jr. 神经病学讲席教授 · 中心主任`,
      sources: [
        { t: "麻省总医院 医生页（官方）", u: "https://www.massgeneral.org/doctors/16822/bradley-hyman" },
        { t: "麻省总医院 MIND 研究所", u: "https://www.massgeneral.org/neurology/mind/about/leadership" }
      ],
      contribZh: `哈佛医学院 John B. Penney, Jr. 神经病学讲席教授，麻省总医院神经退行性疾病研究所（MIND）阿尔茨海默研究单元主任、麻省阿尔茨海默病研究中心主任。他的实验室用双光子显微镜在活体小鼠脑内连续观察，把"斑块形成之后神经元到底怎么坏掉"从静态切片变成动态过程；同时用抗体治疗实验证明斑块可以被清除。研究对象覆盖 AD 与路易体痴呆，并延伸到 α-突触核蛋白。发表论文逾 600 篇，曾任美国国立老龄研究所咨询委员会委员。`,
      contribEn: `John B. Penney, Jr. Professor of Neurology at Harvard Medical School and Massachusetts General Hospital, where he directs the Alzheimer's unit at the MassGeneral Institute for Neurodegenerative Diseases and the Massachusetts Alzheimer's Disease Research Center. His laboratory developed in vivo imaging with two-photon microscopy, enabling observation of neurons in the intact, functioning mouse brain and tracking of the pathological changes that occur during disease; his research has shown that plaques can be reversed by therapeutic application of antibodies. He has published over 600 papers and serves on the National Institute on Aging's council.`
    },
    {
      en: `Ronald C. Petersen`, zh: `罗纳德·彼得森`,
      country: `美国`, countryEn: `United States`,
      aff: `梅奥诊所 阿尔茨海默病研究中心 / 衰老研究`,
      affEn: `Mayo Clinic, Rochester`,
      year: `2013`, award: `Henry Wisniewski 终身成就奖`,
      role: `Cora Kanow 阿尔茨海默研究讲席教授 · 衰老研究主任`,
      sources: [
        { t: "梅奥诊所 研究者页（官方）", u: "https://www.mayo.edu/research/faculty/bio-00078363" },
        { t: "梅奥诊所 医生简介", u: "https://www.mayoclinic.org/biographies/petersen-ronald-c-m-d-ph-d/bio-20054548" }
      ],
      contribZh: `梅奥诊所 Cora Kanow 阿尔茨海默研究讲席教授、衰老研究（Mayo Clinic Study of Aging）主任，1992–2025 年间任梅奥阿尔茨海默病研究中心主任。他把"轻度认知障碍（MCI）"从一个含糊说法做成一个可操作的诊断类别——1999 年那项研究用 76 例 MCI、234 名健康对照与 106 例轻度 AD 患者做对照，证明 MCI 在记忆表现上接近极早期 AD、又能与健康老化区分开，构成一个可以入组干预的临床实体。此后 AD 试验的入组窗口整体前移，与这一步直接相关。2011–2017 年任美国《国家阿尔茨海默计划法》研究、照护与服务咨询委员会主席。`,
      contribEn: `Cora Kanow Professor of Alzheimer's Disease Research at Mayo Clinic, director of the Mayo Clinic Study of Aging and director of the Mayo Clinic Alzheimer's Disease Research Center from 1992 to 2025. He is best known for establishing mild cognitive impairment as a recognized diagnostic category between normal aging and dementia; his 1999 study comparing 76 consecutively evaluated MCI subjects with 234 healthy controls and 106 patients with mild Alzheimer's disease concluded that patients meeting MCI criteria constitute a clinical entity that can be characterized for treatment interventions. He chaired the Advisory Council on Alzheimer's Research, Care, and Services under the National Alzheimer's Project Act from 2011 to 2017.`
    },
    {
      en: `Alison M. Goate`, zh: `艾莉森·戈特`,
      country: `美国`, countryEn: `United States`,
      aff: `西奈山伊坎医学院 遗传与基因组科学系`,
      affEn: `Icahn School of Medicine at Mount Sinai`,
      year: `2015`, award: `Khalid Iqbal 终身成就奖`,
      role: `Jean C. and James W. Crystal 基因组学讲席教授 · 系主任`,
      sources: [
        { t: "西奈山 官方人物页", u: "https://www.mountsinai.org/profiles/alison-m-goate" },
        { t: "西奈山 Loeb 阿尔茨海默病中心", u: "https://www.mountsinai.org/patient-care/service-areas/alzheimers-center" }
      ],
      contribZh: `西奈山伊坎医学院 Jean C. and James W. Crystal 基因组学讲席教授、遗传与基因组科学系主任，Ronald M. Loeb 阿尔茨海默病中心创始主任。1987 年起做神经退行性疾病遗传学，在伦敦帝国理工学院期间报告了第一个导致家族性阿尔茨海默病的突变；在华盛顿大学期间鉴定了哥伦比亚家系中的遗传突变，该家系后来成为阿尔茨海默预防倡议（API）临床试验的核心队列；她也参与了额颞叶痴呆 MAPT 突变的首批报道。晚发型 AD 方面，她的团队用整合基因组学方法找到 TREM2 这一风险基因，并证明 AD 风险变异富集于小胶质细胞的增强子区域——把遗传信号落到了脑内免疫细胞的调控元件上。`,
      contribEn: `Jean C. and James W. Crystal Professor of Genomics, Chair of the Department of Genetics and Genomic Sciences and professor of Neuroscience and Neurology at the Icahn School of Medicine at Mount Sinai, and founding director of the Ronald M. Loeb Center for Alzheimer's Disease. Working on the genetics of neurodegenerative disease since 1987, she reported the first mutation to cause familial Alzheimer's disease while at Imperial College London, and her early studies at Washington University identified a genetic mutation in Colombian families now part of the Alzheimer's Prevention Initiative. Her work led to identification of TREM2 as a risk factor and highlighted the enrichment of Alzheimer's risk variants in microglial enhancers.`
    },
    {
      en: `Bengt Winblad`, zh: `本特·温布拉德`,
      country: `瑞典`, countryEn: `Sweden`,
      aff: `卡罗林斯卡学院 神经老年医学`,
      affEn: `Karolinska Institutet`,
      year: `2016`, award: `AAIC 终身成就奖`,
      role: `老年医学教授 · Bengt Winblad 奖命名人`,
      sources: [
        { t: "卡罗林斯卡学院 官方人物页", u: "https://ki.se/en/people/Bengt-Winblad" },
        { t: "欧洲神经退行性疾病研究联盟 理事页", u: "https://www.neurodegenerationresearch.eu/sl/board-member/bengt-winblad/" }
      ],
      contribZh: `卡罗林斯卡学院神经生物学、照护科学与社会系神经老年医学教授，也是 AAIC 三大终身成就奖之一"Bengt Winblad 奖"的命名人——他与 Henry Wisniewski、Khalid Iqbal 共同创办了国际阿尔茨海默病会议（ICAD），即 AAIC 的前身。学术上他推动了两件事：一是美金刚与多奈哌齐用于重度 AD 的临床证据（1999 年美金刚重度痴呆研究、2006 年多奈哌齐重度 AD 试验），把"重度阶段也值得治"变成有据可依；二是 2004 年主持国际工作组，把轻度认知障碍的概念从争议中拉向共识。1988–2010 年任卡罗林斯卡诺贝尔生理学或医学奖评奖委员会成员。`,
      contribEn: `Professor of Geriatric Medicine at the Karolinska Institutet, Department of Neurobiology, Care Sciences and Society, Division of Neurogeriatrics. With Henry Wisniewski and Khalid Iqbal he co-founded the International Conference on Alzheimer's Disease, now AAIC, and one of its three lifetime achievement awards carries his name. He took the initiative regarding pharmaceutical treatment of patients with severe Alzheimer's disease, with memantine and later donepezil, and chaired the international working group whose 2004 report moved mild cognitive impairment from controversy toward consensus. He was a member of the Nobel Assembly at Karolinska Institutet from 1988 to 2010 and has been a tutor for more than 150 PhD dissertations.`
    },
    {
      en: `John Q. Trojanowski`, zh: `约翰·特罗亚诺夫斯基`,
      country: `美国`, countryEn: `United States`,
      aff: `宾夕法尼亚大学 佩雷尔曼医学院 病理与实验医学系`,
      affEn: `Perelman School of Medicine, University of Pennsylvania`,
      year: `2018`, award: `AAIC 终身成就奖`,
      role: `William Maul Measey 讲席教授 · 衰老研究所前所长`,
      sources: [
        { t: "宾大佩雷尔曼医学院 讣告（官方）", u: "https://www.med.upenn.edu/evpdeancommunications/2022-02-10-303.html" },
        { t: "宾大病理系 纪念页", u: "https://pathology.med.upenn.edu/print/1607" }
      ],
      contribZh: `宾大佩雷尔曼医学院 William Maul Measey–Truman G. Schnabel, Jr. 老年医学与老年学讲席教授，衰老研究所前所长，2022 年 2 月去世，享年 75 岁。1991 年他与妻子、终身科研伙伴 Virginia Lee 一起发现 AD 脑内的缠结由 tau 构成；随后两人与宾大同事证明"特定疾病蛋白的聚集与细胞间扩散"是 AD 及相关疾病共有的机制。他还主导了 ADNI 的生物标志物核心，改变了患者诊断方式。1980 年代他刚入行时，资深教授劝他们别碰 AD，说那是"毁职业生涯的题目"——他们没听。发表论文约 1400 篇。`,
      contribEn: `The William Maul Measey - Truman G. Schnabel, Jr., MD, Professor of Geriatric Medicine and Gerontology in the Department of Pathology and Laboratory Medicine at Penn's Perelman School of Medicine, and former director of the Penn Institute on Aging; he died in February 2022 at 75. Along with his wife and lifelong scientific partner Virginia M.-Y. Lee, he made the seminal discovery in 1991 that the tangles in Alzheimer's disease were formed from tau, and their teams went on to show that aggregation and cell-to-cell spread of specific disease proteins is a common mechanism underlying Alzheimer's and related disorders. He led the Biomarker Core of the Alzheimer's Disease Neuroimaging Initiative.`
    },
    {
      en: `Jeffrey L. Cummings`, zh: `杰弗里·卡明斯`,
      country: `美国`, countryEn: `United States`,
      aff: `内华达大学拉斯维加斯分校 脑健康系`,
      affEn: `University of Nevada, Las Vegas`,
      year: `2018`, award: `Bengt Winblad 终身成就奖`,
      role: `Joy Chambers-Grundy 脑科学讲席教授 · 中心主任`,
      sources: [
        { t: "UNLV 官方专家页", u: "https://unlv.edu/news/expert/dr-jeffrey-l-cummings" },
        { t: "UNLV 教师页", u: "https://www.unlv.edu/people/jeffrey-l-cummings-md-scd" }
      ],
      contribZh: `内华达大学拉斯维加斯分校 Joy Chambers-Grundy 脑科学讲席教授、Chambers-Grundy 转化神经科学中心主任。他做的是这个领域里少有人愿意长期做的"记账"工作：从 2016 年起主持 UNLV 临床试验观察站，逐年清点全球所有在研 AD 药物，发布年度管线报告——这是全世界唯一专门分析 AD 临床试验管线的机构；另设生物标志物观察站，跟踪血检、脑影像与数字设备的新证据。2019 年加入 UNLV 前，他是克利夫兰诊所 Lou Ruvo 脑健康中心、UCLA 玛丽·伊斯顿阿尔茨海默研究中心的创始主任。著书 43 部、论文 900 余篇。`,
      contribEn: `Joy Chambers-Grundy Professor of Brain Science and director of the Chambers-Grundy Center for Transformative Neuroscience at the Kirk Kerkorian School of Medicine at UNLV. He leads the UNLV Clinical Trials Observatory, the world's only research observatory devoted exclusively to analyzing the pipeline of Alzheimer's drugs in clinical trials, and heads a biomarker observatory covering blood tests, brain scans and digital devices. Before joining UNLV in 2019 he was founding director of the Cleveland Clinic Lou Ruvo Center for Brain Health and of two UCLA centers, the Mary S. Easton Center for Alzheimer's Disease Research and the Deane F. Johnson Center for Neurotherapeutics.`
    },
    {
      en: `Ann C. McKee`, zh: `安·麦基`,
      country: `美国`, countryEn: `United States`,
      aff: `波士顿大学 阿尔茨海默病研究中心 / CTE 中心`,
      affEn: `Boston University; VA Boston Healthcare System`,
      year: `2018`, award: `Henry Wisniewski 终身成就奖`,
      role: `William Fairfield Warren 讲席教授 · 两个中心主任`,
      sources: [
        { t: "波士顿大学 CTE 中心 官方人物页", u: "https://www.bu.edu/cte/profile/ann-mckee/" },
        { t: "波士顿大学 AD 研究中心", u: "https://www.bu.edu/alzresearch?p=9911" }
      ],
      contribZh: `波士顿大学 William Fairfield Warren 神经病学与病理学讲席教授，同时执掌波士顿大学阿尔茨海默病研究中心与 CTE 中心，并任 VA 波士顿医疗系统神经病理主任。2009 年她发表首篇 CTE 报道之后，基本是以一己之力把这套病理说清楚：定义 CTE 的全谱病理改变，建立至今仍在用的 McKee 诊断与分期标准，两个 NINDS 共识专家组据此确认 CTE 是独立的 tau 蛋白病。她创建并主持 UNITE（VA-BU-CLF）脑库，是全球最大的重复性脑创伤脑组织库，存量逾 900 例；并证明了橄榄球年限与 CTE 风险之间存在剂量-反应关系。她也是最早报道 CTE 与 ALS 关联的人。`,
      contribEn: `William Fairfield Warren Distinguished Professor of Neurology and Pathology at Boston University, director of the BU Alzheimer's Disease Research Center and the BU CTE Center, and chief of Neuropathology at VA Boston Healthcare System. Since her first publication on CTE in 2009 she has identified the key neuropathological and clinical components of the tau-based neurodegeneration, defined the full spectrum of neuropathological abnormalities in CTE and developed the McKee criteria for diagnosis and staging, which two NINDS consensus panels used to confirm CTE as a unique tauopathy. She created and directs the UNITE (VA-BU-CLF) brain bank, the world's largest repository of brains from individuals exposed to traumatic brain injury.`
    },
    {
      en: `Lars Lannfelt`, zh: `拉尔斯·兰费尔特`,
      country: `瑞典`, countryEn: `Sweden`,
      aff: `乌普萨拉大学 公共卫生与照护科学系`,
      affEn: `Uppsala University`,
      year: `2019`, award: `AAIC 终身成就奖`,
      role: `老年医学荣休教授 · BioArctic 联合创始人`,
      sources: [
        { t: "乌普萨拉大学 官方新闻", u: "https://www.uu.se/en/news/2022/2022-10-28-the-antibody-that-can-slow-down-alzheimers" },
        { t: "DZNE 官方新闻（2025 获奖）", u: "https://www.dzne.de/en/news/press-releases/press/award-for-lars-lannfelt-who-paved-the-way-for-the-alzheimers-drug-lecanemab" }
      ],
      contribZh: `乌普萨拉大学老年医学荣休教授，BioArctic 联合创始人。1992 年他在瑞典中部一个大家族中找到导致 AD 的基因改变，即"瑞典突变"——这是第一次有清晰证据指向"是 Aβ 引发了 AD"；随后在瑞典最北部一个家系中发现"北极突变"，其特点是促进可溶性原纤维（protofibril）生成。1999 年他定下思路：用抗体去打这些原纤维。二十多年后，这条路走出来的是仑卡奈单抗（lecanemab）：2022 年 III 期结果公布，2023 年获 FDA 批准，2025 年 4 月在欧盟获批用于早期 AD。一个家系、一个突变、一个分子设计，接上了。`,
      contribEn: `Professor emeritus of Geriatrics at Uppsala University and co-founder of the biotech company BioArctic. In 1992 he found a genetic change in a large Swedish family with Alzheimer's disease, known as the Swedish mutation, the first clear evidence that amyloid beta causes the disease; a few years later he identified the Arctic mutation in a family from northernmost Sweden, which increases formation of soluble protofibrils. In 1999 he conceived the idea of attacking those precursors with antibodies — the path that eventually produced lecanemab, developed with Eisai, approved in the United States in 2023 and authorised in the European Union in April 2025.`
    }
  );
})();
