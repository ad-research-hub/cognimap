/* AD 著名科学家 · 中国科学家补录
 *
 * 与 AAIC 那几批的分工：那边按"有没有拿国际终身成就奖"收，
 * 这边按"在中国 AD 临床与研究体系里是否立得住"收，不要求获奖。
 *
 * 每条都以医院或高校官网的专家页为唯一依据（华山、瑞金、宣武、首都医科大），
 * 页面上的职务、头衔、研究方向的表述照原样收敛，不替他们加光环，
 * 也不把"某协会委员"写成"某领域奠基人"。
 */
(function () {
  if (!window.SCIENTISTS || !window.SCIENTISTS.cn) { return; }

  window.SCIENTISTS.cn.push(

    {
      en: `Jin-Tai Yu`, zh: `郁金泰`,
      country: `中国`, countryEn: `China`,
      aff: `复旦大学附属华山医院 神经内科`,
      affEn: `Huashan Hospital, Fudan University`,
      role: `神经内科副主任 · 国家神经疾病医学中心认知障碍专科带头人`,
      field: `阿尔茨海默病等神经退行性疾病的精准预防、诊断与治疗`,
      fieldEn: `Precision prevention, diagnosis and treatment of Alzheimer's disease and related neurodegenerative disorders`,
      sources: [
        { t: "华山医院官网 专家介绍", u: "https://www.huashan.org.cn/zhuanjia/doctorinfo/3190.html" },
        { t: "国家神经疾病医学中心（华山）报道", u: "https://ncnd.huashan.org.cn/cv/news/detail/4058.html" }
      ],
      contribZh: `华山医院神经内科副主任、教授、主任医师，国家神经疾病医学中心认知障碍专科带头人，中华医学会神经病学分会常委，国家科技创新 2030"脑科学与类脑"痴呆重大项目首席科学家。他牵头联合中、美、英、加、法等国 17 位学者发布全球首个老年痴呆循证预防国际指南；建立老年痴呆血浆 ATN 早期诊断方案，并证明 FAM171A2、TREM2、TREM1 可作为保护性治疗新靶点。近年带队绘制人类健康与疾病血浆蛋白组图谱，建成开放访问的蛋白质组—表型组数据库，据华山官网报道可对 183 种疾病实现 80% 以上预测准确性，成果入选"中国蛋白质组学十大进展"。`,
      contribEn: `Deputy director of the Department of Neurology at Huashan Hospital, Fudan University, professor and chief physician, and lead of the cognitive disorders subspecialty at the National Medical Center for Neurological Diseases. He chaired the international group of 17 experts that produced the world's first evidence-based guideline for dementia prevention, established a plasma ATN (amyloid, tau, neurodegeneration) early diagnostic scheme for Alzheimer's disease, and identified FAM171A2, TREM2 and TREM1 as candidate protective therapeutic targets. His team has mapped a human plasma proteome-phenotype atlas, reported by Huashan to predict more than 80 percent of 183 diseases.`,
      note: `本卡依据华山医院与国家神经疾病医学中心官网；两处对论文数量的表述不同（一处称 100 余篇、一处称成果发表于 Science/Cell 等），此处不合并数字，只写官网上明确的能力与成果。`
    },
    {
      en: `Sheng-Di Chen`, zh: `陈生弟`,
      country: `中国`, countryEn: `China`,
      aff: `上海交通大学医学院附属瑞金医院 神经内科`,
      affEn: `Ruijin Hospital, Shanghai Jiao Tong University School of Medicine`,
      role: `瑞金医院终身教授 · 神经病学研究所前所长`,
      field: `帕金森病与阿尔茨海默病的发病机制、早期诊断与治疗转化`,
      fieldEn: `Pathogenesis, early diagnosis and translational treatment of Parkinson's disease and Alzheimer's disease`,
      sources: [
        { t: "上海交通大学医学院 人物页", u: "https://www.shsmu.edu.cn/xyh/info/1061/1904.htm" },
        { t: "上海交通大学医学院附属瑞金医院 官网", u: "https://www.rjh.com.cn/" }
      ],
      contribZh: `瑞金医院神经病学二级教授、终身教授、主任医师，历任瑞金医院神经内科主任、神经病学教研室主任、上海交通大学医学院神经病学研究所所长，曾任中华医学会神经病学分会副主任委员。在瑞金医院神经内科从医教研 44 年，长期做帕金森病与阿尔茨海默病的诊治转化研究。国内最早用 MPTP 制备帕金森病动物模型（含猴模型），改变了此前仅用 6-OHDA 模型的历史；鉴定了中国 PD 患者（LRRK2、GIGYF2、Parkin、UCH-L1）与 AD 患者（CALHM1、LRP2、Gab2）的基因突变热点；主持制订或修订《中国帕金森病治疗指南》等全国性指南 20 余项。创办并主编英文期刊 Translational Neurodegeneration。`,
      contribEn: `Second-tier professor of neurology and lifetime professor at Ruijin Hospital, chief physician and doctoral supervisor; former director of the Department of Neurology at Ruijin, former director of the Institute of Neurology at Shanghai Jiao Tong University School of Medicine, and former vice chairman of the Chinese Medical Association's Neurology Branch. Over 44 years at Ruijin he has worked on the translation of Parkinson's and Alzheimer's research into care. He established MPTP-based Parkinson's animal models in China, including monkey models, identified mutation hotspots in Chinese PD patients (LRRK2, GIGYF2, Parkin, UCH-L1) and AD patients (CALHM1, LRP2, Gab2), and led the drafting or revision of more than 20 national guidelines including the Chinese Parkinson's disease treatment guideline. He founded and edits Translational Neurodegeneration.`,
      note: `本卡依据上海交通大学医学院与瑞金医院官网。他不属"神经内科任职学组"这一条线索，而是学科层面的带头人，故单列。`
    },
    {
      en: `Yi Tang`, zh: `唐毅`,
      country: `中国`, countryEn: `China`,
      aff: `首都医科大学宣武医院 神经内科`,
      affEn: `Xuanwu Hospital, Capital Medical University`,
      role: `主任医师、教授 · 神经内科党总支书记`,
      field: `认知障碍疾病的早期诊断与早期干预`,
      fieldEn: `Early diagnosis and early intervention in cognitive disorders`,
      sources: [
        { t: "宣武医院神经内科 专家介绍", u: "https://neurology.xwhosp.com.cn/Html/Hospitals/Doctors/Index45.html" },
        { t: "首都医科大学 人才页", u: "https://www.ccmu.edu.cn/old/rczy_6468/gjjrc/fa2396f00ac8411e8032a0bccb5362f5.htm" }
      ],
      contribZh: `宣武医院神经内科主任医师、教授、博士生导师，医院党委副书记兼神经内科党总支书记。中国协和医科大学医学博士（M.D.）与理学博士（Ph.D.）双学位，美国康奈尔大学医学院/纽约长老会医院神经病学与神经科学系博士后。主要做认知障碍疾病的早期诊断与早期干预。学术任职横跨国内外：中华医学会神经病学分会青年副主任委员、痴呆与认知障碍学组委员，北京医学会痴呆与认知障碍学组副组长；国际方面曾任阿尔茨海默协会非药物干预 PIA 项目主席（2015–2019），现任 Alzheimer's & Dementia 杂志 Senior Associate Editor、Journal of Alzheimer's Disease 副主编。首都医科大学官网记为发表 SCI 论文 100 余篇。`,
      contribEn: `Chief physician and professor of neurology at Xuanwu Hospital, Capital Medical University, and secretary of the hospital's neurology party branch. He holds dual M.D. and Ph.D. degrees from Peking Union Medical College and trained as a postdoctoral fellow in neurology and neuroscience at Weill Cornell Medicine / New York-Presbyterian Hospital. His research focuses on early diagnosis and early intervention in cognitive disorders. He serves as a council member of the Chinese Medical Association's Neurology Branch and as deputy head of its dementia and cognitive disorders group, was program chair of the Alzheimer's Association Non-Pharmacological Intervention PIA from 2015 to 2019, and is Senior Associate Editor of Alzheimer's & Dementia and associate editor of the Journal of Alzheimer's Disease.`,
      note: `本卡依据宣武医院与首都医科大学官网。两处对 SCI 论文数表述不同（55 篇 / 100 余篇，发布时间不同），此处取较新的校方口径并注明，不取平均值。`
    }
  );
})();
