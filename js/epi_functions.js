// Epidemiology module JS - fixed version
// EPI_NAME_MAP: display name -> ISO code
window.EPI_NAME_MAP = {
  'China': 'CHN', 'United States': 'USA', 'Japan': 'JPN', 'Germany': 'DEU',
  'France': 'FRA', 'United Kingdom': 'GBR', 'Italy': 'ITA', 'Spain': 'ESP',
  'South Korea': 'KOR', 'Korea': 'KOR', 'India': 'IND', 'Brazil': 'BRA', 'Russia': 'RUS',
  'Canada': 'CAN', 'Australia': 'AUS', 'Mexico': 'MEX', 'Indonesia': 'IDN',
  'Turkey': 'TUR', 'Egypt': 'EGY', 'Nigeria': 'NGA', 'South Africa': 'ZAF',
  'Sweden': 'SWE', 'Netherlands': 'NLD', 'Poland': 'POL', 'Portugal': 'PRT',
  'Greece': 'GRC', 'Argentina': 'ARG', 'Thailand': 'THA', 'Vietnam': 'VNM',
  'Iran': 'IRN', 'Saudi Arabia': 'SAU', 'Israel': 'ISR', 'Norway': 'NOR',
  'Belgium': 'BEL', 'Austria': 'AUT', 'Switzerland': 'CHE', 'Denmark': 'DNK',
  'Finland': 'FIN', 'Ireland': 'IRL', 'Czechia': 'CZE', 'Hungary': 'HUN',
  'Romania': 'ROU', 'Ukraine': 'UKR', 'Colombia': 'COL', 'Peru': 'PER',
  'Chile': 'CHL', 'Philippines': 'PHL', 'Malaysia': 'MYS', 'Pakistan': 'PAK',
  'Bangladesh': 'BGD', 'Ethiopia': 'ETH', 'Morocco': 'MAR', 'New Zealand': 'NZL',
  'Singapore': 'SGP', 'Hong Kong': 'HKG'
};

// ISO to ECharts map name (ECharts world map uses specific names)
window.EPI_ISO_TO_ECHARTS = {
  'CHN': 'China', 'USA': 'United States', 'JPN': 'Japan', 'DEU': 'Germany',
  'FRA': 'France', 'GBR': 'United Kingdom', 'ITA': 'Italy', 'ESP': 'Spain',
  'KOR': 'Korea', 'IND': 'India', 'BRA': 'Brazil', 'RUS': 'Russia',
  'CAN': 'Canada', 'AUS': 'Australia', 'MEX': 'Mexico', 'IDN': 'Indonesia',
  'TUR': 'Turkey', 'EGY': 'Egypt', 'NGA': 'Nigeria', 'ZAF': 'South Africa',
  'SWE': 'Sweden', 'NLD': 'Netherlands', 'POL': 'Poland', 'PRT': 'Portugal',
  'GRC': 'Greece', 'ARG': 'Argentina', 'THA': 'Thailand', 'VNM': 'Vietnam',
  'IRN': 'Iran', 'SAU': 'Saudi Arabia', 'ISR': 'Israel', 'NOR': 'Norway',
  'BEL': 'Belgium', 'AUT': 'Austria', 'CHE': 'Switzerland', 'DNK': 'Denmark',
  'FIN': 'Finland', 'IRL': 'Ireland', 'CZE': 'Czechia', 'HUN': 'Hungary',
  'ROU': 'Romania', 'UKR': 'Ukraine', 'COL': 'Colombia', 'PER': 'Peru',
  'CHL': 'Chile', 'PHL': 'Philippines', 'MYS': 'Malaysia', 'PAK': 'Pakistan',
  'BGD': 'Bangladesh', 'ETH': 'Ethiopia', 'MAR': 'Morocco', 'NZL': 'New Zealand',
  'SGP': 'Singapore', 'HKG': 'Hong Kong'
};

function getEpiCountryByISO(iso) {
  return window.EPI_DATA.find(function(c) { return c.iso === iso; });
}

function getEpiCountryByName(name) {
  var iso = window.EPI_NAME_MAP[name];
  if (iso) return getEpiCountryByISO(iso);
  return window.EPI_DATA.find(function(c) { return c.name_en === name || c.name_cn === name; });
}

function getEpiIndicatorValue(country, indicator, year) {
  if (!country) return 0;
  if (indicator === 'prevalence') return country.prevalence_gbd || 0;
  if (indicator === 'cases') {
    if (year === '2019') return country.cases_2019 || 0;
    if (year === '2030') return country.cases_2030 || 0;
    if (year === '2050') return country.cases_2050 || 0;
    return country.cases_2024 || 0;
  }
  if (indicator === 'gbd_prevalence') return country.gbd_prevalence || 0;
  if (indicator === 'incidence') return country.incidence || 0;
  if (indicator === 'mortality') return country.mortality || 0;
  return 0;
}

function initEpiMap() {
  var mapDom = document.getElementById('epiWorldMap');
  if (!mapDom) return;
  if (typeof echarts === 'undefined') {
    mapDom.innerHTML = '<div class="epi-map-loading">ECharts加载中...</div>';
    setTimeout(initEpiMap, 500);
    return;
  }
  // Dispose existing
  if (window.epiChartInstance) {
    try { window.epiChartInstance.dispose(); } catch(e) {}
    window.epiChartInstance = null;
  }
  // Clear
  while (mapDom.firstChild) mapDom.removeChild(mapDom.firstChild);
  if (mapDom.offsetHeight === 0) mapDom.style.height = '500px';
  
  window.epiChartInstance = echarts.init(mapDom);
  
  if (!window.epiMapRegistered) {
    echarts.registerMap('world', window.EPI_WORLD_MAP);
    window.epiMapRegistered = true;
  }
  
  updateEpiMap();
  
  window.epiChartInstance.on('click', function(params) {
    if (params.componentType === 'series') {
      var country = getEpiCountryByName(params.name);
      if (country) showEpiCountryDetail(country.iso);
    }
  });
  
  window.addEventListener('resize', function() {
    if (window.epiChartInstance) window.epiChartInstance.resize();
  });
  setTimeout(function() { if (window.epiChartInstance) window.epiChartInstance.resize(); }, 200);
}

function updateEpiMap() {
  if (!window.epiChartInstance) return;
  var indicator = document.getElementById('epiIndicator').value;
  var year = document.getElementById('epiYear').value;
  
  var data = window.EPI_DATA.map(function(c) {
    var value = getEpiIndicatorValue(c, indicator, year);
    var mapName = window.EPI_ISO_TO_ECHARTS[c.iso] || c.name_en;
    return { name: mapName, value: value, iso: c.iso };
  }).filter(function(d) { return d.name && d.value > 0; });

  var values = data.map(function(d) { return d.value; });
  var maxVal = values.length > 0 ? Math.max.apply(null, values) : 10;
  var minVal = values.length > 0 ? Math.min.apply(null, values.filter(function(v) { return v > 0; })) : 0;
  if (!isFinite(minVal) || minVal <= 0) minVal = 0;

  var indicatorLabels = {
    prevalence: '患病率 (%)', cases: '患病人数 (万)', gbd_prevalence: 'GBD标化患病率 (/10万)',
    incidence: '发病率 (/10万)', mortality: '死亡率 (/10万)'
  };

  window.epiChartInstance.setOption({
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        var country = getEpiCountryByName(params.name);
        if (!country) return params.name + '<br/>暂无数据';
        var val = getEpiIndicatorValue(country, indicator, year);
        return '<b>' + country.name_cn + ' (' + country.name_en + ')</b><br/>' +
          indicatorLabels[indicator] + ': <b>' + val + '</b><br/>' +
          '人口: ' + country.population + '万<br/>' +
          '老龄化率: ' + country.aging_rate + '%<br/>' +
          '<span style="color:#2563eb">点击查看详情 →</span>';
      }
    },
    visualMap: {
      min: minVal, max: maxVal,
      left: 'left', bottom: '5%',
      text: ['高', '低'],
      inRange: { color: ['#dbeafe', '#93c5fd', '#3b82f6', '#1d4ed8', '#1e3a8a'] },
      calculable: true
    },
    series: [{
      name: indicatorLabels[indicator],
      type: 'map',
      map: 'world',
      roam: true,
      emphasis: { label: { show: true }, itemStyle: { areaColor: '#fbbf24' } },
      data: data
    }]
  }, true);
}

function renderEpiGlobalStats() {
  var container = document.getElementById('epiGlobalStats');
  if (!container) return;
  var stats = [
    { value: '0.6亿', label: '2024全球痴呆患者' },
    { value: '1.4亿', label: '2050预测患者数' },
    { value: '$1.3万亿', label: '2019全球经济成本' },
    { value: '162万', label: '2019年死亡人数' },
    { value: '133亿', label: '年照护工时 (小时)' },
    { value: '1.2秒', label: '每新增1例间隔' }
  ];
  container.innerHTML = stats.map(function(s) {
    return '<div class="epi-stat-card"><div class="epi-stat-value">' + s.value + '</div><div class="epi-stat-label">' + s.label + '</div></div>';
  }).join('');
}

function showEpiCountryDetail(iso) {
  var country = getEpiCountryByISO(iso);
  if (!country) return;
  // Navigate to country detail page
  var pages = document.querySelectorAll('.page');
  pages.forEach(function(p) { p.classList.remove('active'); });
  var detailPage = document.getElementById('epi-country-detail');
  if (detailPage) {
    detailPage.classList.add('active');
  } else {
    // Fallback: try page-epidemiology-country or similar
    var alt = document.querySelector('[id*="epi-country"]');
    if (alt) alt.classList.add('active');
  }
  setTimeout(function() { renderEpiCountryDetail(country); }, 100);
}

function renderEpiCountryDetail(country) {
  var container = document.getElementById('epiCountryDetail');
  if (!container) {
    // Try alternate IDs
    container = document.querySelector('[id*="epiCountryDetail"], [id*="epi-country-detail-content"]');
  }
  if (!container) return;

  var html = '<div class="epi-detail-header">' +
    '<h2>' + country.name_cn + ' (' + country.name_en + ')</h2>' +
    '<div class="epi-detail-meta">' +
    '<span>📍 ' + country.region + '</span>' +
    '<span>💰 ' + country.income + '</span>' +
    '<span>👥 人口' + country.population + '万</span>' +
    '<span>👴 老龄化率' + country.aging_rate + '%</span>' +
    '<span>❤️ 预期寿命' + country.life_expectancy + '岁</span>' +
    '</div></div>';

  // Multi-source data table
  html += '<div class="epi-section"><div class="epi-section-title">📊 多口径数据并列展示</div>' +
    '<table class="epi-data-table"><thead><tr>' +
    '<th>数据来源</th><th>患病率</th><th>患病人数</th><th>年份</th><th>口径说明</th>' +
    '</tr></thead><tbody>' +
    '<tr><td>GBD 2019</td><td>' + country.prevalence_gbd + '% (标化)</td><td>' + country.cases_2019 + '万</td><td>2019</td><td>全球疾病负担研究，建模估算，全年龄标化率</td></tr>' +
    '<tr><td>各国研究</td><td>' + (country.prevalence_national || '-') + '%</td><td>' + (country.cases_national || '-') + '万</td><td>' + (country.year_national || '-') + '</td><td>' + (country.note_national || '-') + '</td></tr>' +
    '<tr><td>AD专项</td><td>' + (country.ad_prevalence || '-') + '%</td><td>-</td><td>2024</td><td>仅阿尔茨海默病（不含其他痴呆）</td></tr>' +
    '<tr><td>发病率</td><td colspan="4">' + country.incidence + '/10万</td></tr>' +
    '<tr><td>死亡率</td><td colspan="4">' + country.mortality + '/10万</td></tr>' +
    '</tbody></table></div>';

  // Trend chart container
  html += '<div class="epi-section"><div class="epi-section-title">📈 患病人数时间趋势 (2019-2050)</div>' +
    '<canvas id="epiTrendChart" height="100"></canvas></div>';

  // Burden chart
  html += '<div class="epi-section"><div class="epi-section-title">💰 疾病负担构成</div>' +
    '<canvas id="epiBurdenChart" height="100"></canvas></div>';

  // Policy timeline
  html += '<div class="epi-section"><div class="epi-section-title">📜 AD相关政策时间线</div>' +
    '<div class="epi-timeline">' +
    '<div class="epi-timeline-item"><span class="epi-timeline-year">2015</span><span class="epi-timeline-text">《中国痴呆与认知障碍诊治指南》发布</span></div>' +
    '<div class="epi-timeline-item"><span class="epi-timeline-year">2019</span><span class="epi-timeline-text">国家卫健委启动老年健康促进行动</span></div>' +
    '<div class="epi-timeline-item"><span class="epi-timeline-year">2020</span><span class="epi-timeline-text">AD纳入国家慢性病综合防控</span></div>' +
    '<div class="epi-timeline-item"><span class="epi-timeline-year">2023</span><span class="epi-timeline-text">认知障碍纳入基本公共卫生服务</span></div>' +
    '</div></div>';

  // Data sources
  html += '<div class="epi-section"><div class="epi-section-title">📚 数据来源</div>' +
    '<div class="epi-source-list">' +
    '• GBD 2019 Study (IHME) - <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9588915/" target="_blank">Global, regional, and national burden of Alzheimer\'s disease and other dementias, 1990-2019</a><br>' +
    '• WHO Global Status Report on Dementia 2021 - <a href="https://www.who.int/publications/i/item/9789240035019" target="_blank">WHO官网</a><br>' +
    '• Alzheimer\'s Disease International (ADI) World Alzheimer Report - <a href="https://www.alz.co.uk/research/world-report" target="_blank">ADI官网</a><br>' +
    '• 《中国阿尔茨海默病报告2024》- 中国疾病预防控制中心<br>' +
    '• 各国官方统计（日本厚劳省、美国CDC、英国NHS等）' +
    '</div></div>';

  container.innerHTML = html;

  // Render trend chart
  setTimeout(function() {
    var trendCtx = document.getElementById('epiTrendChart');
    if (trendCtx && typeof Chart !== 'undefined') {
      new Chart(trendCtx, {
        type: 'line',
        data: {
          labels: ['2019', '2024', '2030', '2050'],
          datasets: [{
            label: '患病人数 (万)',
            data: [country.cases_2019, country.cases_2024, country.cases_2030, country.cases_2050],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59,130,246,0.1)',
            fill: true,
            tension: 0.3,
            pointRadius: 5,
            pointBackgroundColor: '#3b82f6'
          }]
        },
        options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
      });
    }
    var burdenCtx = document.getElementById('epiBurdenChart');
    if (burdenCtx && typeof Chart !== 'undefined') {
      new Chart(burdenCtx, {
        type: 'doughnut',
        data: {
          labels: ['非正式照护成本', '直接医疗成本', '社会成本'],
          datasets: [{
            data: [60, 25, 15],
            backgroundColor: ['#f59e0b', '#3b82f6', '#10b981']
          }]
        },
        options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
      });
    }
  }, 200);
}

function showEpiRanking() {
  // Navigate to ranking page if exists, otherwise show alert
  var rankingPage = document.getElementById('epi-ranking');
  if (rankingPage) {
    document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
    rankingPage.classList.add('active');
    renderEpiRanking();
  } else {
    alert('排行榜功能开发中');
  }
}

function renderEpiRanking() {
  var container = document.getElementById('epiRankingContent');
  if (!container) return;
  var indicator = document.getElementById('epiIndicator') ? document.getElementById('epiIndicator').value : 'prevalence';
  var year = document.getElementById('epiYear') ? document.getElementById('epiYear').value : '2024';
  
  var sorted = window.EPI_DATA.slice().sort(function(a, b) {
    return getEpiIndicatorValue(b, indicator, year) - getEpiIndicatorValue(a, indicator, year);
  });
  
  var html = '<table class="epi-data-table"><thead><tr><th>排名</th><th>国家</th><th>指标值</th><th>人口(万)</th><th>老龄化率</th><th>操作</th></tr></thead><tbody>';
  sorted.forEach(function(c, i) {
    var val = getEpiIndicatorValue(c, indicator, year);
    var medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i+1);
    var highlight = c.iso === 'CHN' ? 'style="background:#fef3c7;font-weight:bold"' : '';
    html += '<tr ' + highlight + '><td>' + medal + '</td><td>' + c.name_cn + '</td><td>' + val + '</td><td>' + c.population + '</td><td>' + c.aging_rate + '%</td>' +
      '<td><button onclick="showEpiCountryDetail(\'' + c.iso + '\')">详情</button></td></tr>';
  });
  html += '</tbody></table>';
  container.innerHTML = html;
}

// Auto-initialize when epidemiology page is shown
window.epiAutoInitCount = 0;
window.epiAutoInitInterval = setInterval(function() {
  window.epiAutoInitCount++;
  var epiPage = document.getElementById('page-epidemiology');
  if (epiPage && epiPage.classList.contains('active') && !window.epiChartInstance) {
    if (typeof echarts !== 'undefined' && window.EPI_DATA && window.EPI_WORLD_MAP) {
      clearInterval(window.epiAutoInitInterval);
      initEpiMap();
      renderEpiGlobalStats();
    }
  }
  if (window.epiAutoInitCount > 200) {
    clearInterval(window.epiAutoInitInterval);
  }
}, 300);

console.log('Epidemiology module JS loaded successfully');
