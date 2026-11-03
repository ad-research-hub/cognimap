/* AD 著名科学家 · 补录 ⑤：1996 / 1998 / 2002 / 2004 年得主（第四批）
 *
 * 这四位都是"改写过教科书"的人，但官方页面形态不一样：
 * Swaab 是荷兰神经科学研究所的机构页，Morris 是 Knight ADRC 的人员页，
 * Roses 用的是杜克大学神经内科发布的讣告，Braak 用的是法兰克福神经科学中心（IZNF）的访谈。
 * 讣告与访谈都算"官方报道"——由他所在机构发布，且叙述具体，比二手总结可靠。
 */
(function () {
  if (!window.SCIENTISTS || !window.SCIENTISTS.aaic) { return; }

  window.SCIENTISTS.aaic.push(

    {
      en: `Allen D. Roses`, zh: `艾伦·罗西斯`,
      country: `美国`, countryEn: `United States`,
      aff: `杜克大学 Bryan 阿尔茨海默病研究中心（创始主任）`,
      affEn: `Duke University, Joseph and Kathleen Bryan ADRC`,
      year: `1996`, award: `AAIC 终身成就奖`,
      role: `Jefferson-Pilot 神经生物学讲席教授 · 神经遗传学奠基者`,
      sources: [
        { t: "杜克大学医学院 讣告（官方）", u: "https://medicine.duke.edu/news/neurologist-allen-roses-has-died" },
        { t: "The Lancet 讣闻", u: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(16)32081-5/fulltext" }
      ],
      contribZh: `杜克大学神经内科 Jefferson-Pilot 神经生物学讲席教授、Bryan 阿尔茨海默病研究中心创始主任，2016 年 9 月因心脏病去世，享年 73 岁。1993 年他的团队报告：载脂蛋白 E 的 ε4 等位基因与晚发型 AD 的发病年龄相关——这是人类基因组里第一个、也是效应最强的晚发型 AD 风险基因。杜克神经内科主任 Richard O'Brien 在讣告里称这是"阿尔茨海默病领域至今最重要的一项观察"。他同时创建了美国第一个快速尸检脑库。因为坚持"斑块是结果而非原因"、不认同淀粉样假说，他在 1997 年失去杜克的资助，转去葛兰素史克十年，2007 年回到杜克。2009 年团队又发现 TOMM40 变异与发病年龄相关。`,
      contribEn: `Jefferson-Pilot Professor of Neurobiology and of Neurology at Duke University and founding director of the Joseph and Kathleen Bryan Alzheimer's Disease Research Center; he died of a heart attack in September 2016 at 73. In 1993 his group reported that the APOE4 variant of apolipoprotein E is associated with increased risk and earlier onset of late-onset Alzheimer's disease — one of the first and most potent risk genes identified for the disease. Duke's neurology chair called it still the most important observation in the field of Alzheimer's disease. He founded the first rapid-autopsy brain bank in the United States. After leaving Duke in 1997 he led genetics research at GlaxoSmithKline and returned in 2007.`
    },
    {
      en: `Heiko Braak`, zh: `海科·布拉克`,
      country: `德国`, countryEn: `Germany`,
      aff: `乌尔姆大学 临床神经解剖学 / 法兰克福歌德大学（前）`,
      affEn: `University of Ulm; Goethe University Frankfurt (former)`,
      year: `1998`, award: `AAIC 终身成就奖`,
      role: `解剖学教授 · Braak 分期体系建立者`,
      sources: [
        { t: "法兰克福神经科学中心（IZNF）官方访谈", u: "https://www.izn-frankfurt.de/en/interviews/a-pioneer-of-brain-research-reports/" },
        { t: "Alzheimer's Association 获奖名录", u: "https://www.alz.org/aaic/about/award-lifetime-list.asp" }
      ],
      contribZh: `1980 年起任法兰克福歌德大学解剖学教授、临床神经解剖研究所所长，2009 年后转至乌尔姆大学临床神经解剖学部门。他与妻子 Eva Braak 一起把 AD 的神经原纤维改变按解剖位置分成六个阶段——即今天全世界病理报告都在用的 Braak 分期：从内嗅区、海马等局限的边缘系统区域起步，逐级推进到新皮层联络区。这套分期的意义不止于分类，它把"AD 在脑内按固定路线扩散"变成了可检验的命题，后来的 tau 传播研究基本都站在这个观察之上。他还在 2003 年为帕金森病提出了类似的分期，2007 年提出"双通道假说"（病原体可能经鼻黏膜与肠黏膜两条路径进入神经系统）。1998 年这一奖项同时授予 Eva Braak（她于 2000 年去世），官方名录中两人并列。`,
      contribEn: `Professor of Anatomy at Goethe University Frankfurt from 1980 and director of its Institute of Clinical Neuroanatomy, later based at the Clinical Neuroanatomy Section, Department of Neurology, University of Ulm. With his wife Eva Braak he introduced the classification of Alzheimer's disease into six pathoanatomical stages, now known as the Braak stages, based on the topographical distribution of neurofibrillary changes spreading from circumscribed parts of the limbic system to the higher neocortical association fields. He proposed a similar classification for idiopathic Parkinson's disease in 2003 and co-authored the dual-hit hypothesis in 2007. The Alzheimer's Association recipient list records the 1998 award for both Heiko and Eva Braak.`
    },
    {
      en: `Dick F. Swaab`, zh: `迪克·斯瓦布`,
      country: `荷兰`, countryEn: `Netherlands`,
      aff: `荷兰神经科学研究所 / 荷兰脑库（创始）`,
      affEn: `Netherlands Institute for Neuroscience; Netherlands Brain Bank`,
      year: `2002`, award: `AAIC 终身成就奖`,
      role: `神经生物学教授 · 荷兰脑库创始人`,
      sources: [
        { t: "荷兰神经科学研究所 官方人物页", u: "https://nin.nl/author/swaab" },
        { t: "荷兰脑库 官方沿革页", u: "https://www.brainbank.nl/about-us/history/" }
      ],
      contribZh: `荷兰神经科学研究所神经生物学教授，Swaab 研究组负责人。他做过一件对整个领域影响深远的基础设施工作：1978 年出任荷兰脑研究所所长后，为了拿到病理记录完整的人脑组织，1985 年正式创建荷兰脑库（NBB）——让生前登记的人在身后捐脑，由专人全年 365 天、每天 24 小时待命取脑，平均死亡到取脑仅 6 小时，组织因此保持新鲜。今天全世界做 AD 人体脑组织研究的人，很多样本来自这里。他自己的研究聚焦下丘脑与 AD 最早期的分子改变，近年同时任职于杭州浙江大学。`,
      contribEn: `Professor of Neurobiology at the Netherlands Institute for Neuroscience in Amsterdam and head of the Swaab Group, dividing his time between Amsterdam and Zhejiang University in Hangzhou. After being appointed director of the Netherlands Institute for Brain Research in 1978, he formally established the Netherlands Brain Bank in 1985 so that well-documented post-mortem human brain tissue would be available for research; the bank performs brain autopsies 365 days a year with an average of only six hours between death and removal of the brain. His own research focuses on the hypothalamus and on the earliest stages of Alzheimer's disease.`
    },
    {
      en: `John C. Morris`, zh: `约翰·莫里斯`,
      country: `美国`, countryEn: `United States`,
      aff: `华盛顿大学（圣路易斯）Knight 阿尔茨海默病研究中心`,
      affEn: `Knight Alzheimer's Disease Research Center, Washington University in St. Louis`,
      year: `2004`, award: `AAIC 终身成就奖`,
      role: `Friedman 神经病学讲席教授 · 中心主任`,
      sources: [
        { t: "华盛顿大学 Knight ADRC 官方人员页", u: "https://knightadrc.wustl.edu/people/john-c-morris-md/" },
        { t: "华盛顿大学 DIAN 观察队列", u: "https://dian.wustl.edu/?p=34705" }
      ],
      contribZh: `华盛顿大学（圣路易斯）Harvey A. and Dorismae Hacker Friedman 神经病学讲席教授，Knight 阿尔茨海默病研究中心主任，并主持该中心两个项目（健康老化与老年痴呆研究、成人子女研究）。他的研究重心是"把诊断往前挪"：改善早期 AD 的诊断、做痴呆疾病的临床-病理对照、并借助生物标志物与影像识别临床前阶段。他参与建立的显性遗传阿尔茨海默病网络（DIAN）队列，让"在症状出现前多年追踪同一批人"成为可能。发表同行评议论文约 500 篇，另获 MetLife 奖与 Potamkin 奖。`,
      contribEn: `Harvey A. and Dorismae Hacker Friedman Distinguished Professor of Neurology at Washington University School of Medicine, where he directs the Knight Alzheimer's Disease Research Center and its two program projects, Healthy Aging and Senile Dementia and the Adult Children Study. His research focuses on improving the diagnosis of early-stage Alzheimer's disease, clinicopathological correlations in dementing disorders, establishing phenotypes for inherited forms of the disease, and identifying preclinical stages by biomarker and neuroimaging studies. He has approximately 500 peer-reviewed publications and has received both the MetLife and Potamkin awards.`
    }
  );
})();
