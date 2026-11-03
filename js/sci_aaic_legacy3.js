/* AD 著名科学家 · 补录 ④：2002 / 2010 / 2017 / 2019 年得主（第三批）
 *
 * 这一批有个意外收获：Alzheimer's Association 2019 年的颁奖稿
 * （releases_2019/AAIC19-Sun-award-lifetime.asp）还在线，是官方逐人评语，
 * 所以 Albert 与 de Leon 两条用的是颁奖稿原文，比院校页更贴"获奖理由"。
 */
(function () {
  if (!window.SCIENTISTS || !window.SCIENTISTS.aaic) { return; }

  window.SCIENTISTS.aaic.push(

    {
      en: `Konrad Beyreuther`, zh: `康拉德·拜罗伊特`,
      country: `德国`, countryEn: `Germany`,
      aff: `海德堡大学 分子生物学中心（ZMBH）/ 衰老研究网络`,
      affEn: `Center for Molecular Biology (ZMBH), Heidelberg University`,
      year: `2002`, award: `AAIC 终身成就奖`,
      role: `分子生物学教授 · 衰老研究网络创始主任`,
      sources: [
        { t: "海德堡大学 衰老研究网络 官方页", u: "https://www.nar.uni-heidelberg.de/en/aboutus/beyreuther.html" },
        { t: "海德堡大学", u: "https://uni-heidelberg.de/en/node/32594" }
      ],
      contribZh: `海德堡大学分子生物学中心（ZMBH）教授、1998–2001 年任该中心主任，海德堡大学衰老研究网络创始主任（2006–2023 年在任）。他与科林·马斯特斯一起发现了淀粉样前体蛋白（APP）——AD 病理链条上那个被切出 Aβ 的母体蛋白，两人的合作把"Aβ 从哪来"这一步补全。1988 年他还参与确证朊蛋白是牛海绵状脑病的致病因子。1990 年与 Robert D. Terry 同获 MetLife 阿尔茨海默病研究奖，1990 年与马斯特斯同获 Potamkin 奖，1997 年两人与 James Gusella 同获费萨尔国王国际医学奖。2001–2006 年兼任巴登-符腾堡州政府生命科学国务委员。`,
      contribEn: `Founding Director of the Network Aging Research at Heidelberg University (2006-2023), formerly Professor for Molecular Biology and Director of the Center of Molecular Biology (ZMBH), and Dean of the Faculty of Biology. With Colin L. Masters he discovered the amyloid (Abeta) precursor protein, a key protein in the development of Alzheimer's disease. In 1988 he collaborated with British researchers to establish that proteinaceous pathogens, now called prions, cause bovine spongiform encephalopathy. He shared the MetLife Foundation Award with Robert D. Terry in 1990, the Potamkin Prize with Masters, and the King Faisal International Prize in Medicine with Masters and James F. Gusella in 1997.`
    },
    {
      en: `Takeshi Iwatsubo`, zh: `岩坪威`,
      country: `日本`, countryEn: `Japan`,
      aff: `东京大学医院 / 国立精神·神经医疗研究中心 神经研究所`,
      affEn: `The University of Tokyo Hospital; National Institute of Neuroscience, NCNP`,
      year: `2010`, award: `AAIC 终身成就奖`,
      role: `特任教授 · 神经研究所所长`,
      sources: [
        { t: "东京大学 官方人物页", u: "https://www.u-tokyo.ac.jp/focus/en/people/people002576.html" },
        { t: "CTAD 2025 程序册（官方评语）", u: "https://www.ctad-alzheimer.com/sites/www.ctad-alzheimer.com/files/medias/documents/Final%20Program%20CTAD%202025_Dec1st_App.pdf" }
      ],
      contribZh: `东京大学医院特任教授、国立精神·神经医疗研究中心神经研究所所长，日本痴呆研究会理事长。他证明 Aβ42 是老年斑淀粉样沉积中最早被沉积的分子种——这一条把"Aβ42 更黏、更早"从推测变成病理证据，也解释了为什么 Aβ42/40 比值能当标志物。此外他阐明了 γ-分泌酶复合物的组装过程，并鉴定出磷酸化 α-突触核蛋白是路易体的组成成分。他是日本 AD 神经影像计划（J-ADNI）与 J-TRC 的主要研究者，现主持日本 AD 疾病修饰治疗登记研究。中国同行对他的熟悉多半来自 J-ADNI：亚洲人群的 ADNI 数据，是从这里开始的。`,
      contribEn: `Director of the National Institute of Neuroscience at the National Center of Neurology and Psychiatry, Project Professor of the University of Tokyo, and chairman of the Japan Society for Dementia Research. Trained as a neurologist and neuropathologist, he demonstrated that Abeta42 is the initial species deposited in senile plaque amyloid, elucidated the process of gamma-secretase complex formation, and identified phosphorylated alpha-synuclein as a component of Lewy bodies. He was Principal Investigator of the Japanese Alzheimer's Disease Neuroimaging Initiative (J-ADNI) and of the Japanese Trial Ready Cohort for Prevention of Alzheimer's Disease.`
    },
    {
      en: `Claudia H. Kawas`, zh: `克劳迪娅·卡瓦斯`,
      country: `美国`, countryEn: `United States`,
      aff: `加州大学欧文分校 神经病学 / 90+ 研究`,
      affEn: `University of California, Irvine`,
      year: `2017`, award: `AAIC 终身成就奖`,
      role: `Al and Trish Nichols 临床神经科学讲席教授 · 90+ 研究联席主任`,
      sources: [
        { t: "加州大学欧文分校 教师档案（官方）", u: "https://www.faculty.uci.edu/profile.cfm?faculty_id=4890" },
        { t: "UCI 学习与记忆神经生物学中心", u: "https://cnlm.uci.edu/kawas/" }
      ],
      contribZh: `加州大学欧文分校 Al and Trish Nichols 临床神经科学讲席教授，神经病学与神经生物学及行为学教授，90+ 研究（The 90+ Study）联席主任。这项 2003 年启动的研究盯住一个别人不太愿意碰的人群：90 岁以上。它给出的一组结果屡屡被引用，也屡屡让人意外——90 岁以上人群中痴呆比例超过 40%，但约一半痴呆者脑内的神经病理改变不足以解释其认知丧失；APOE2 携带者临床 AD 风险更低，脑内 AD 病理却反而更多。她的研究路径是从巴尔的摩老龄化纵向研究、Bronx 老化研究一路走过来的。`,
      contribEn: `Al and Trish Nichols Chair in Clinical Neuroscience and Professor of Neurology and of Neurobiology and Behavior at the University of California, Irvine, and co-principal investigator of The 90+ Study, a population-based sample of more than 2,000 people aged 90 and older initiated in 2003. Her work concentrates on the epidemiology of aging and Alzheimer's disease, the determinants of successful aging, and clinical-pathological investigations. Findings from the study include that over 40 percent of people aged 90 and older have dementia while about half of those with dementia lack sufficient neuropathology to explain their cognitive loss.`
    },
    {
      en: `Mony J. de Leon`, zh: `莫尼·德莱昂`,
      country: `美国`, countryEn: `United States`,
      aff: `纽约大学朗格尼医学中心 大脑健康中心`,
      affEn: `NYU Langone Health, Center for Brain Health`,
      year: `2019`, award: `Bengt Winblad 终身成就奖`,
      role: `精神病学教授 · 大脑健康中心创始主任`,
      sources: [
        { t: "AAIC 2019 颁奖稿（官方）", u: "https://alz.org/aaic/releases_2019/AAIC19-Sun-award-lifetime.asp" },
        { t: "纽约大学格罗斯曼医学院 教师页", u: "https://med.nyu.edu/faculty/mony-j-de-leon" }
      ],
      contribZh: `纽约大学朗格尼医学中心精神科教授、大脑健康中心创始主任。官方颁奖理由写得很具体：他发表了最早一批显示 AD 患者海马萎缩与糖代谢改变的研究，也是最早用纵向影像预测"从正常老化走向 AD"的人之一。换句话说，AD 影像学从"看当下"转向"预测以后"，这几篇是起点。他与 Philip Scheltens 在 1996 年大阪 ICAD 上共同发起影像学卫星兴趣组，这就是后来的阿尔茨海默影像联盟（AIC），他本人也由此成为该联盟的创始人之一。近年研究转向脑脊液清除与错折叠蛋白的传播。`,
      contribEn: `Founder and director of the Center for Brain Health in NYU Langone's Department of Psychiatry, and professor of psychiatry at NYU Grossman School of Medicine. As the 2019 award citation states, he published some of the first studies showing early hippocampal atrophy and glucose metabolism alterations in Alzheimer's disease, as well as the first longitudinal imaging reports to predict the transition from normal aging to Alzheimer's. With Philip Scheltens he co-chaired the imaging satellite interest group founded at ICAD 1996, which became the Alzheimer's Imaging Consortium.`
    },
    {
      en: `Marilyn S. Albert`, zh: `玛丽莲·艾伯特`,
      country: `美国`, countryEn: `United States`,
      aff: `约翰斯·霍普金斯医院 认知神经科学部`,
      affEn: `Johns Hopkins Hospital; Johns Hopkins Alzheimer's Disease Research Center`,
      year: `2019`, award: `Henry Wisniewski 终身成就奖`,
      role: `认知神经科学部主任 · AD 研究中心主任`,
      sources: [
        { t: "AAIC 2019 颁奖稿（官方）", u: "https://alz.org/aaic/releases_2019/AAIC19-Sun-award-lifetime.asp" },
        { t: "约翰斯·霍普金斯大学", u: "https://www.hopkinsmedicine.org/" }
      ],
      contribZh: `约翰斯·霍普金斯医院神经内科认知神经科学部主任，约翰斯·霍普金斯阿尔茨海默病研究中心主任。她的工作集中在两件事上：一是把"正常老化会带来哪些认知变化、早期 AD 又会带来哪些"分开描述清楚，这直接支撑了临床前 AD 与 MCI 的判定标准；二是寻找能在老化过程中保住认知能力的生活方式因素。她长期参与美国国立老龄研究所的 AD 诊断框架制定，是"用什么测验、卡在什么分数"这类问题的定调者之一。`,
      contribEn: `Director of the Division of Cognitive Neuroscience in the Department of Neurology at Johns Hopkins Hospital and director of the Johns Hopkins Alzheimer's Disease Research Center. Her work has identified cognitive changes that occur with aging and early Alzheimer's, as well as lifestyle factors that may preserve cognitive abilities during aging. Her research currently focuses on early identification of Alzheimer's and potential methods to monitor disease progression for early intervention.`
    }
  );
})();
