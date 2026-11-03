/* AD 著名科学家 · 补录 ①：2021 / 2023 / 2024 三届 AAIC 终身成就奖
 *
 * 单独一个文件，是因为主数据文件已经够长，而这三届是"后补"的——
 * 分开写，以后补 2027 届就再加一个文件，不用动老数据。
 *
 * 全部 9 位的依据都是 Alzheimer's Association 当年发布的颁奖稿原文
 * （releases_2021 / releases_2023 / releases-2024 三个 awards.asp），
 * 中英文贡献段是照原文写的，没有加入原文之外的评价。
 */
(function () {
  if (!window.SCIENTISTS || !window.SCIENTISTS.aaic) { return; }

  window.SCIENTISTS.aaic.push(

    /* ---------------- 2021 ---------------- */
    {
      en: `Michael W. Weiner`, zh: `迈克尔·韦纳`,
      country: `美国`, countryEn: `United States`,
      aff: `加州大学旧金山分校 放射与生物医学影像系`,
      affEn: `University of California, San Francisco`,
      year: `2021`, award: `Henry Wisniewski 终身成就奖`,
      role: `影像与生物标志物研究 · ADNI 首席研究员`,
      sources: [
        { t: "AAIC 2021 颁奖稿（官方）", u: "https://www.alz.org/aaic/releases_2021/awards.asp" },
        { t: "加州大学旧金山分校", u: "https://www.ucsf.edu/" }
      ],
      contribZh: `加州大学旧金山分校放射与生物医学影像、内科、精神科与神经科教授，阿尔茨海默病神经影像计划（ADNI）首席研究员——这是全球规模最大的阿尔茨海默病观察性研究。他把 MRI、PET 与血液生物标志物三类方法打通，用于神经退行性疾病的诊断、治疗过程中的患者监测，以及在症状出现之前识别阿尔茨海默病。ADNI 的价值不只在技术：它把影像与体液标志物标准化、公开共享，使全世界的研究者能在同一套数据上做验证。`,
      contribEn: `Professor in Residence in Radiology and Biomedical Imaging, Medicine, Psychiatry and Neurology at UCSF, and Principal Investigator of the Alzheimer's Disease Neuroimaging Initiative, the largest observational study in the world concerning Alzheimer's disease. His work with MRI, PET and blood-based biomarker methods has contributed greatly to the diagnosis of neurodegenerative disorders, monitoring of patients under treatment and detection of Alzheimer's disease before symptoms arise.`
    },
    {
      en: `Michal Novák`, zh: `米哈尔·诺瓦克`,
      country: `斯洛伐克`, countryEn: `Slovakia`,
      aff: `斯洛伐克科学院 神经免疫研究所（前所长）`,
      affEn: `Institute of Neuroimmunology, Slovak Academy of Sciences`,
      year: `2021`, award: `Khalid Iqbal 终身成就奖`,
      role: `神经免疫学家 · Axon Neuroscience 创始人`,
      sources: [
        { t: "AAIC 2021 颁奖稿（官方）", u: "https://www.alz.org/aaic/releases_2021/awards.asp" },
        { t: "斯洛伐克科学院", u: "https://www.sav.sk/?lang=en" }
      ],
      contribZh: `在确立"tau 蛋白是神经原纤维缠结的构成成分"这一发现中起了关键作用，并推动学界认识到 tau 在阿尔茨海默病中的主要致病地位。他是生物技术公司 Axon Neuroscience 的创始人，该公司专攻以 tau 为靶点的临床治疗；此前担任斯洛伐克科学院神经免疫研究所所长。把一个蛋白从病理切片里的"配角"变成药物靶点，这条链条上有他的一段。`,
      contribEn: `He played a crucial part in the discovery of tau as the constituent of neurofibrillary tangles and the protein's major role in Alzheimer's disease. Novák is the founder of Axon Neuroscience, a company focused on developing clinical therapies targeting tau, and is the former director of the Institute of Neuroimmunology at the Slovak Academy of Sciences.`
    },
    {
      en: `Hilkka Soininen`, zh: `希尔卡·索伊宁恩`,
      country: `芬兰`, countryEn: `Finland`,
      aff: `东芬兰大学 神经病学`,
      affEn: `University of Eastern Finland`,
      year: `2021`, award: `Bengt Winblad 终身成就奖`,
      role: `神经病学教授`,
      sources: [
        { t: "AAIC 2021 颁奖稿（官方）", u: "https://www.alz.org/aaic/releases_2021/awards.asp" },
        { t: "东芬兰大学", u: "https://www.uef.fi/en" }
      ],
      contribZh: `东芬兰大学神经病学教授。主持过多项国家级、国际及欧盟层面的研究项目与联合体，并作为主要研究者参与 15 项阿尔茨海默病或轻度认知障碍的药物试验。她的研究重心是改善阿尔茨海默病的诊断、治疗与预防——北欧人群队列与临床试验的结合，是她这批工作的底色。`,
      contribEn: `Professor of Neurology at the University of Eastern Finland. Soininen has led numerous national, international and European Union projects and consortia, and has been principal investigator of 15 drug trials in Alzheimer's disease or mild cognitive impairment. Her current focus of research is improving diagnosis, therapy and prevention of Alzheimer's disease.`
    },

    /* ---------------- 2023 ---------------- */
    {
      en: `Bruce Miller`, zh: `布鲁斯·米勒`,
      country: `美国`, countryEn: `United States`,
      aff: `加州大学旧金山分校 记忆与衰老中心`,
      affEn: `UCSF Memory and Aging Center`,
      year: `2023`, award: `Henry Wisniewski 终身成就奖`,
      role: `A.W. and Mary Margaret Clausen 讲席教授 · 中心主任`,
      sources: [
        { t: "AAIC 2023 颁奖稿（官方）", u: "https://www.alz.org/aaic/releases_2023/awards.asp" },
        { t: "UCSF 记忆与衰老中心", u: "https://memory.ucsf.edu/" }
      ],
      contribZh: `加州大学旧金山分校神经病学 A.W. and Mary Margaret Clausen 讲席教授，UCSF 记忆与衰老中心主任，也是该校全球脑健康研究所（Global Brain Health Institute）的创始主任，并参与领导 Tau 联盟与 Bluefield 基金会。他创建了 UCSF 的行为神经病学专科培训，每年指导 50 余名来自海外的学者；全球脑健康研究所则是一个面向各国脑健康领导者的培训项目，目标是降低痴呆在全球的规模与影响。`,
      contribEn: `Miller holds the A.W. and Mary Margaret Clausen Distinguished Professorship in Neurology at UCSF, directs the UCSF Memory and Aging Center and is the founding director of the Global Brain Health Institute. He helps lead the Tau Consortium and The Bluefield Foundation, founded the Behavioral Neurology Fellowship at UCSF, oversees visits of more than 50 foreign scholars every year, and co-directs a training program for global leaders in brain health to reduce the scale and impact of dementia around the world.`
    },
    {
      en: `Anne Fagan`, zh: `安妮·费根`,
      country: `美国`, countryEn: `United States`,
      aff: `华盛顿大学（圣路易斯）神经病学`,
      affEn: `Washington University in St. Louis`,
      year: `2023`, award: `Khalid Iqbal 终身成就奖`,
      role: `神经病学教授 · 体液生物标志物核心负责人`,
      sources: [
        { t: "AAIC 2023 颁奖稿（官方）", u: "https://www.alz.org/aaic/releases_2023/awards.asp" },
        { t: "华盛顿大学（圣路易斯）", u: "https://www.wustl.edu/" }
      ],
      contribZh: `华盛顿大学（圣路易斯）神经病学教授、体液生物标志物核心负责人，是最早系统评估脑脊液标志物作为阿尔茨海默病理指标的人之一。她与同事发起了多项前瞻性纵向研究，检验各类体液指标能否作为临床前阿尔茨海默病理的标志物、能否预测老年人与高危中年人群未来的认知下降——研究对象还包括常染色体显性遗传家系与唐氏综合征人群。这些标志物后来成为散发性与遗传性高危人群中评估疾病修饰疗法的工具。`,
      contribEn: `Professor of Neurology and the Fluid Biomarker Core Leader at Washington University in St. Louis, where she pioneered the evaluation of cerebrospinal fluid biomarkers as markers of underlying Alzheimer pathology. With colleagues she initiated longitudinal studies investigating fluid measures as biomarkers of preclinical Alzheimer's pathology and their role in predicting future cognitive decline in elderly and at-risk middle-aged cohorts, individuals with autosomal-dominant Alzheimer's disease mutations and those with Down Syndrome.`
    },
    {
      en: `Philip Scheltens`, zh: `菲利普·谢尔滕斯`,
      country: `荷兰`, countryEn: `Netherlands`,
      aff: `阿姆斯特丹阿尔茨海默中心（创始主任）`,
      affEn: `Alzheimer Center Amsterdam`,
      year: `2023`, award: `Bengt Winblad 终身成就奖`,
      role: `神经病学荣休教授`,
      sources: [
        { t: "AAIC 2023 颁奖稿（官方）", u: "https://www.alz.org/aaic/releases_2023/awards.asp" },
        { t: "阿姆斯特丹大学医学中心", u: "https://www.amsterdamumc.org/en" }
      ],
      contribZh: `阿姆斯特丹阿尔茨海默中心的创始人与前主任，神经病学荣休教授。他以国家或国际主要研究者的身份主持过 35 项以上研究，涵盖 I、II、III 期多中心临床试验；创办并主持荷兰国家痴呆计划，任理事会主席至 2021 年；2021 年起任世界痴呆理事会主席。2016 年获欧洲阿尔茨海默研究大奖，其后因在痴呆领域的一生工作获荷兰狮勋章骑士勋位。`,
      contribEn: `Professor of neurology, emeritus, and founder/former director of the Alzheimer Center Amsterdam. He has been the national or international Principal Investigator for more than 35 studies, including Phase I, II and III multicenter clinical trials. Scheltens founded and led the Dutch National Dementia Plan, has chaired the World Dementia Council since 2021, was awarded the European Grand Prix for Alzheimer's Research in 2016 and was knighted in the Order of the Netherlands Lion.`
    },

    /* ---------------- 2024 ---------------- */
    {
      en: `Ralph A. Nixon`, zh: `拉尔夫·尼克松`,
      country: `美国`, countryEn: `United States`,
      aff: `纽约大学格罗斯曼医学院 / Nathan S. Kline 研究所`,
      affEn: `NYU Grossman School of Medicine; Nathan S. Kline Institute`,
      year: `2024`, award: `Khalid Iqbal 终身成就奖`,
      role: `精神科与细胞生物学教授 · 痴呆研究中心主任`,
      sources: [
        { t: "AAIC 2024 颁奖稿（官方）", u: "https://aaic.alz.org/releases-2024/awards.asp" },
        { t: "纽约大学格罗斯曼医学院", u: "https://med.nyu.edu/" }
      ],
      contribZh: `纽约大学格罗斯曼医学院精神科与细胞生物学教授，Nathan S. Kline 研究所痴呆研究中心主任。主攻蛋白清除系统的生物学——内体-溶酶体、自噬以及 calpain-calpastatin 系统。他的团队在这些清除机制中找到了与阿尔茨海默病及相关疾病发病密切相关的分子缺陷，并将其视为有希望的治疗靶点；另一条长期研究线是神经元轴突运输、细胞骨架蛋白的组装与更新，以及它们在痴呆中的失调。持有 8 项专利，发表论文 325 篇以上。`,
      contribEn: `Professor of Psychiatry and Cell Biology at NYU Grossman School of Medicine and director of the Center for Dementia Research at the Nathan S. Kline Institute. Nixon's principal research focuses on the biology of protein clearance by endosomal-lysosomal, autophagy and calpain-calpastatin systems; his team has identified molecular defects in these clearance mechanisms central to the pathogenesis of Alzheimer's disease and related disorders. A second longstanding program focuses on axonal transport, assembly and turnover of neuronal cytoskeletal proteins.`
    },
    {
      en: `Ricardo Nitrini`, zh: `里卡多·尼特里尼`,
      country: `巴西`, countryEn: `Brazil`,
      aff: `圣保罗大学医学院附属医院 神经内科`,
      affEn: `Hospital das Clínicas da FMUSP, University of São Paulo`,
      year: `2024`, award: `Henry Wisniewski 终身成就奖`,
      role: `神经内科高级教授 · 神经临床部主任`,
      sources: [
        { t: "AAIC 2024 颁奖稿（官方）", u: "https://aaic.alz.org/releases-2024/awards.asp" },
        { t: "圣保罗大学医学院", u: "https://www.fm.usp.br/" }
      ],
      contribZh: `圣保罗大学医学院附属医院神经内科高级教授、神经临床部主任，主攻认知与行为神经病学，重点在痴呆。他是该院认知与行为神经病学组的创始人与联席主任，也是认知障碍参考中心的创办者；创办并主编期刊《Dementia & Neuropsychologia》，现任巴西神经病学学会科学委员会主席。已发表论文 386 篇，主编或组织专著 39 部，撰写 book chapter 139 章。拉丁美洲的痴呆研究能进入国际视野，他这条线是绕不开的。`,
      contribEn: `Senior professor in the department of neurology and head of the Neurological Clinical Division at Hospital das Clínicas da FMUSP. His main area of research is cognitive and behavioral neurology with an emphasis on dementia. He is founder and co-director of the Cognitive and Behavioral Neurology Group, founder of the Reference Center for Cognitive Disorders, founder and editor-in-chief of Dementia & Neuropsychologia and current president of the Scientific Committee of the Brazilian Academy of Neurology.`
    },
    {
      en: `Goldie S. Byrd`, zh: `戈尔迪·伯德`,
      country: `美国`, countryEn: `United States`,
      aff: `维克森林大学医学院 Maya Angelou 健康公平中心`,
      affEn: `Wake Forest University School of Medicine`,
      year: `2024`, award: `Bengt Winblad 终身成就奖`,
      role: `社会科学与卫生政策教授 · 中心主任`,
      sources: [
        { t: "AAIC 2024 颁奖稿（官方）", u: "https://aaic.alz.org/releases-2024/awards.asp" },
        { t: "维克森林大学医学院", u: "https://school.wakehealth.edu/" }
      ],
      contribZh: `维克森林大学医学院社会科学与卫生政策教授、Maya Angelou 健康公平中心主任，研究非洲裔人群的阿尔茨海默病遗传学。她最核心的关切是让特殊人群——尤其是非洲裔美国人——真正进入阿尔茨海默研究与临床试验。在北卡罗来纳农工州立大学期间，她创办了阿尔茨海默衰老与社区健康外展中心，目的是在少数族裔社区提高对疾病的认知，并把这些社区与研究连接起来。她因这类社区参与式研究多次获奖，其中包括联合国支持的"最具影响力非洲裔人士"荣誉。`,
      contribEn: `Professor of social sciences and health policy and director of the Maya Angelou Center for Health Equity at Wake Forest University School of Medicine. She conducts research on the genetics of Alzheimer's disease in persons of African descent, with a primary focus on the inclusion of special populations in Alzheimer's research and clinical trials. At North Carolina A&T State University she founded the Center for Outreach in Alzheimer's Aging and Community Health to increase awareness in minoritized communities and connect them to research.`
    }
  );
})();
