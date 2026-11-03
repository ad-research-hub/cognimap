/* AD 著名科学家 · 模块渲染
 *
 * 为什么单独放一个文件：主站 index.html 已经 85 万字符，再往里插三百行渲染逻辑，
 * 以后改这个模块就得在巨文件里定位，风险高。这里只做三件事——
 * 注入样式、造一个 #page-scientists 挂在 #page-home 旁边、把数据渲染进去。
 * 主站那套 navigate() 不用动：它靠 page-<name> 这个 id 找页面，我们的 div 满足条件。
 *
 * 两条设计取舍，先说清楚：
 * ① 不放照片。用户要求"有官方的才放"，而这些科学家的官方肖像分散在各校新闻页，
 *    热链接随时会挂（多数站点禁外链），下载再用又涉及授权。与其放一张来路不明的头像，
 *    不如用姓名首字母徽标——它明显是排版元素，不会被误当成本人照片。
 * ② 中英双语都常显，不做折叠。这是"对照"模块，折叠起来就失去意义了。
 */
(function () {
  'use strict';

  var S = window.SCIENTISTS;
  if (!S) { return; }

  /* 全部数据文件加载完之后再排一次序。
     分片装载（scientists_data → sci_aaic_more → legacy1..4 → cn_more）意味着
     数组的原始顺序是"我写文件的时间顺序"，不是读者想看的顺序。
     按获奖年份倒序排，最新的在最前；同一年按英文姓氏排，避免同年内顺序随机。 */
  S.aaic.sort(function (a, b) {
    var ya = parseInt(a.year, 10) || 0, yb = parseInt(b.year, 10) || 0;
    if (ya !== yb) { return yb - ya; }
    return String(a.en).localeCompare(String(b.en));
  });

  /* ---------------- 样式 ---------------- */
  var CSS = [
    '#page-scientists{padding-bottom:60px}',
    '.sci-head{background:linear-gradient(135deg,#0f2557 0%,#1e40af 55%,#7c3aed 100%);',
    '  border-radius:20px;padding:34px 32px;color:#fff;margin-bottom:22px;position:relative;overflow:hidden}',
    '.sci-head::after{content:"";position:absolute;right:-60px;top:-60px;width:220px;height:220px;',
    '  border-radius:50%;background:rgba(255,255,255,.07)}',
    '.sci-head h2{font-size:26px;margin:0 0 6px;letter-spacing:.5px}',
    '.sci-back{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.16);',
    '  border:none;color:#fff;padding:7px 15px;border-radius:9px;font-size:13px;cursor:pointer;',
    '  font-family:inherit;margin:0 0 16px;transition:background .18s}',
    '.sci-back:hover{background:rgba(255,255,255,.28)}',
    '.sci-head .sci-sub{font-size:13px;opacity:.82;letter-spacing:1.2px;text-transform:uppercase}',
    '.sci-head .sci-lead{font-size:13.5px;line-height:1.8;opacity:.92;margin:14px 0 0;max-width:820px}',
    '.sci-stats{display:flex;gap:28px;margin-top:18px;flex-wrap:wrap}',
    '.sci-stat b{font-size:22px;font-weight:700;display:block;line-height:1.2}',
    '.sci-stat span{font-size:11.5px;opacity:.75}',

    '.sci-tabs{display:flex;gap:10px;margin:0 0 18px;flex-wrap:wrap}',
    '.sci-tabs button{background:#fff;border:1px solid var(--border);border-radius:12px;',
    '  padding:11px 18px;font-size:14px;color:var(--text-light);cursor:pointer;',
    '  font-family:inherit;transition:all .18s;display:flex;align-items:center;gap:8px}',
    '.sci-tabs button b{font-size:11px;background:#eef2f7;color:#64748b;border-radius:20px;padding:1px 7px;font-weight:600}',
    '.sci-tabs button:hover{border-color:#c7d7ea}',
    '.sci-tabs button.on{background:var(--primary);color:#fff;border-color:var(--primary);box-shadow:0 6px 18px rgba(15,37,87,.22)}',
    '.sci-tabs button.on b{background:rgba(255,255,255,.22);color:#fff}',

    '.sci-note{background:#fff;border:1px solid var(--border);border-left:3px solid var(--accent);',
    '  border-radius:10px;padding:13px 16px;font-size:12.5px;line-height:1.75;color:var(--text-light);margin-bottom:20px}',
    '.sci-note b{color:var(--text)}',
    '.sci-note a{color:var(--accent)}',

    '.sci-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(430px,1fr));gap:18px}',
    '.sci-card{background:#fff;border:1px solid var(--border);border-radius:16px;padding:22px 22px 16px;',
    '  display:flex;flex-direction:column;transition:box-shadow .2s,transform .2s}',
    '.sci-card:hover{box-shadow:0 10px 30px rgba(15,37,87,.1);transform:translateY(-2px)}',
    '.sci-top{display:flex;gap:14px;align-items:flex-start;margin-bottom:14px}',
    '.sci-mono{flex:none;width:50px;height:50px;border-radius:14px;display:flex;align-items:center;',
    '  justify-content:center;font-size:17px;font-weight:700;color:#fff;letter-spacing:.5px;',
    '  background:linear-gradient(135deg,#1e40af,#7c3aed)}',
    '.sci-card.cn .sci-mono{background:linear-gradient(135deg,#b91c1c,#ea580c)}',
    '.sci-name{font-size:16.5px;font-weight:700;color:var(--text);margin:0 0 3px;line-height:1.35}',
    '.sci-name em{font-style:normal;font-size:12.5px;font-weight:500;color:var(--text-light);margin-left:7px}',
    '.sci-meta{font-size:12px;color:var(--text-light);line-height:1.7}',
    '.sci-badge{display:inline-block;background:#eef4ff;color:#1e40af;border-radius:6px;',
    '  padding:1px 7px;font-size:11px;font-weight:700;margin-right:6px;letter-spacing:.3px}',
    '.sci-badge.gold{background:#fef3c7;color:#b45309}',

    '.sci-body{font-size:13.5px;line-height:1.85;color:var(--text);flex:1}',
    '.sci-body .en{display:block;margin-top:10px;padding-top:10px;border-top:1px dashed var(--border);',
    '  font-size:12.5px;line-height:1.75;color:#5a6b82;font-family:-apple-system,"Segoe UI",Roboto,sans-serif}',
    '.sci-field{font-size:12px;color:var(--text-light);margin-top:10px;padding-top:9px;border-top:1px dashed var(--border)}',
    '.sci-field span{color:#334155}',

    '.sci-src{margin-top:13px;padding-top:11px;border-top:1px solid var(--border);font-size:11.5px;color:#94a3b8;line-height:1.9}',
    '.sci-src a{color:#2563eb;text-decoration:none;border-bottom:1px dotted #bfd4f5}',
    '.sci-src a:hover{color:#1d4ed8;border-bottom-color:#1d4ed8}',

    /* 名录 */
    '.sci-roster{background:#fff;border:1px solid var(--border);border-radius:16px;padding:22px;margin-top:22px}',
    '.sci-roster h3{font-size:15px;margin:0 0 4px;color:var(--text)}',
    '.sci-roster .rsub{font-size:12px;color:var(--text-light);margin-bottom:14px;line-height:1.7}',
    '.sci-search{width:100%;max-width:320px;border:1px solid var(--border);border-radius:9px;',
    '  padding:9px 12px;font-size:13px;font-family:inherit;outline:none;margin-bottom:16px}',
    '.sci-search:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(59,130,246,.1)}',
    '.sci-decade{font-size:11.5px;font-weight:700;color:#94a3b8;letter-spacing:1px;margin:16px 0 8px}',
    '.sci-decade:first-of-type{margin-top:0}',
    '.sci-chips{display:flex;flex-wrap:wrap;gap:6px}',
    '.sci-chip{font-size:12px;background:#f6f9fc;border:1px solid #e8eef6;border-radius:7px;',
    '  padding:4px 9px;color:#475569;white-space:nowrap}',
    '.sci-chip b{color:#94a3b8;font-weight:600;margin-right:5px;font-variant-numeric:tabular-nums}',
    '.sci-chip.has{background:#eef4ff;border-color:#c7dbff;color:#1e40af;cursor:pointer}',
    '.sci-chip.has:hover{background:#dbeafe;border-color:#93b8f8}',
    '.sci-chip.has b{color:#3b82f6}',
    '.sci-empty{font-size:13px;color:#94a3b8;padding:10px 0}',

    '@media(max-width:760px){',
    '  .sci-grid{grid-template-columns:1fr}',
    '  .sci-head{padding:26px 20px}',
    '  .sci-head h2{font-size:21px}',
    '  .sci-card{padding:18px 16px 14px}',
    '  .sci-body{font-size:13.5px;line-height:1.82}',
    '  .sci-stats{gap:18px}',
    '}'
  ].join('\n');

  function injectCSS() {
    if (document.getElementById('sci-css')) { return; }
    var st = document.createElement('style');
    st.id = 'sci-css';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  /* ---------------- 小工具 ---------------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* 首字母徽标：英文名取首尾两个词的首字母，形如 VD / JJ */
  function monogram(en) {
    var parts = String(en).replace(/[.,]/g, '').split(/\s+/).filter(Boolean);
    if (parts.length === 1) { return parts[0].slice(0, 2).toUpperCase(); }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function srcLine(list) {
    if (!list || !list.length) { return ''; }
    return '来源：' + list.map(function (s) {
      return '<a href="' + esc(s.u) + '" target="_blank" rel="noopener">' + esc(s.t) + '</a>';
    }).join(' · ');
  }

  /* ---------------- 卡片 ---------------- */
  function cardAAIC(p, i) {
    return '<article class="sci-card" data-idx="' + i + '">'
      + '<div class="sci-top">'
      +   '<div class="sci-mono">' + monogram(p.en) + '</div>'
      +   '<div style="min-width:0">'
      +     '<h3 class="sci-name">' + esc(p.zh) + '<em>' + esc(p.en) + '</em></h3>'
      +     '<div class="sci-meta"><span class="sci-badge gold">' + esc(p.year) + '</span>'
      +       esc(p.award) + '<br>' + esc(p.country) + ' · ' + esc(p.aff)
      +       (p.role ? ' · ' + esc(p.role) : '') + '</div>'
      +   '</div>'
      + '</div>'
      + '<div class="sci-body">' + esc(p.contribZh)
      +   '<span class="en">' + esc(p.contribEn) + '</span>'
      +   noteHTML(p)
      + '</div>'
      + '<div class="sci-src">' + srcLine(p.sources) + '</div>'
      + '</article>';
  }

  /* 备注只在真有额外说明时才出现（比如两度获奖、中文名为音译）。
     不写"暂无"——空字段就是空字段，不留占位符。 */
  function noteHTML(p) {
    return p.note ? '<div class="sci-field">备注：<span>' + esc(p.note) + '</span></div>' : '';
  }

  function cardCN(p) {
    return '<article class="sci-card cn">'
      + '<div class="sci-top">'
      +   '<div class="sci-mono">' + monogram(p.en) + '</div>'
      +   '<div style="min-width:0">'
      +     '<h3 class="sci-name">' + esc(p.zh) + '<em>' + esc(p.en) + '</em></h3>'
      +     '<div class="sci-meta"><span class="sci-badge">' + esc(p.country) + '</span>'
      +       esc(p.aff) + '<br>' + esc(p.role) + '</div>'
      +   '</div>'
      + '</div>'
      + '<div class="sci-body">' + esc(p.contribZh)
      +   '<span class="en">' + esc(p.contribEn) + '</span>'
      +   '<div class="sci-field">研究领域 / Research focus：<span>' + esc(p.field)
      +     '</span><br><span style="color:#7c8ba1">' + esc(p.fieldEn) + '</span></div>'
      +   (p.note ? '<div class="sci-field">说明：<span>' + esc(p.note) + '</span></div>' : '')
      + '</div>'
      + '<div class="sci-src">' + srcLine(p.sources) + '</div>'
      + '</article>';
  }

  /* 名录用「姓, 名」（Selkoe, Dennis），档案用「名 姓」（Dennis J. Selkoe），
     而且官方名录常常省略中间名首字母——"排过序的词集合"这种严格相等会漏掉一半人。
     实际要判断的是"同一个人"，所以拆成两个条件：
       ① 姓（逗号左边）在档案全名里以整词出现；② 名（逗号右边的第一个词）也在。
     这样 "Selkoe, Dennis" 能对上 "Dennis J. Selkoe"，
     "de Leon, Mony" 能对上 "Mony J. de Leon"（姓是两个词也不影响），
     而 "Braak, Eva" 不会被错配到 "Heiko Braak"——因为名对不上。 */
  function tokens(s) {
    return String(s == null ? '' : s)
      .replace(/[.,]/g, ' ')
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);
  }

  function hasWord(hay, needle) {
    if (!needle) { return false; }
    var re = new RegExp('(^|\\s)' + needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(\\s|$)');
    return re.test(hay);
  }

  /* 返回该名录行对应的档案下标，没有档案返回 -1 */
  function matchIdx(rosterName) {
    var parts = String(rosterName).split(',');
    var sur = tokens(parts[0]).join(' ');
    var giv = parts[1] ? tokens(parts[1])[0] : '';
    for (var i = 0; i < S.aaic.length; i++) {
      var ct = tokens(S.aaic[i].en);
      if (hasWord(' ' + ct.join(' ') + ' ', sur) && ct.indexOf(giv) >= 0) { return i; }
    }
    return -1;
  }

  /* ---------------- 名录 ---------------- */
  function rosterHTML() {
    var html = '<div class="sci-roster">'
      + '<h3>完整获奖名录 · 1988–2026</h3>'
      + '<div class="rsub">' + esc(S.rosterNote) + '</div>'
      + '<input class="sci-search" id="sciSearch" placeholder="输入姓名或年份筛选，例如 Hardy / 2011" autocomplete="off">'
      + '<div id="sciRosterBody"></div>'
      + '</div>';
    return html;
  }

  function renderRoster(kw) {
    var box = document.getElementById('sciRosterBody');
    if (!box) { return; }
    var k = (kw || '').trim().toLowerCase();
    var rows = S.roster.filter(function (r) {
      if (!k) { return true; }
      return String(r[0]).indexOf(k) >= 0 || r[1].toLowerCase().indexOf(k) >= 0;
    });

    if (!rows.length) {
      box.innerHTML = '<div class="sci-empty">没有匹配的记录</div>';
      return;
    }

    /* 按年代分组：一百来号人平铺成一片没法扫读，分十年代一眼能定位 */
    var groups = {};
    rows.forEach(function (r) {
      var d = Math.floor(r[0] / 10) * 10;
      (groups[d] = groups[d] || []).push(r);
    });

    var keys = Object.keys(groups).map(Number).sort(function (a, b) { return a - b; });
    box.innerHTML = keys.map(function (d) {
      var chips = groups[d].sort(function (a, b) { return a[0] - b[0]; }).map(function (r) {
        var idx = matchIdx(r[1]);
        return '<span class="sci-chip' + (idx >= 0 ? ' has' : '') + '"'
          + (idx >= 0 ? ' data-idx="' + idx + '" title="已有中英文档案，点击定位"' : '')
          + '><b>' + r[0] + '</b>' + esc(r[1]) + '</span>';
      }).join('');
      return '<div class="sci-decade">' + d + 's</div><div class="sci-chips">' + chips + '</div>';
    }).join('');
  }

  /* ---------------- 组装 ---------------- */
  function build() {
    var home = document.getElementById('page-home');
    if (!home || document.getElementById('page-scientists')) { return; }

    var page = document.createElement('div');
    page.id = 'page-scientists';
    page.className = 'page';
    page.innerHTML =
      '<div class="sci-head">'
      + '<button class="sci-back" onclick="navigate(\'home\')">← 返回首页</button>'
      + '<h2>AD 著名科学家</h2>'
      + '<div class="sci-sub">Distinguished Scientists in Alzheimer\'s Research</div>'
      + '<p class="sci-lead">收录标准：先收全 AAIC（阿尔茨海默病协会国际会议）终身成就奖得主；'
      + '另设中国科学家专栏。每位科学家的任职机构、主要贡献均可点开官方页面核对——'
      + '这里不放没有出处的说法，也不放来路不明的照片。</p>'
      + '<div class="sci-stats">'
      +   '<div class="sci-stat"><b>' + S.roster.length + '</b><span>AAIC 获奖记录</span></div>'
      +   '<div class="sci-stat"><b>' + S.aaic.length + '</b><span>中英文深度档案</span></div>'
      +   '<div class="sci-stat"><b>' + S.cn.length + '</b><span>中国科学家</span></div>'
      +   '<div class="sci-stat"><b>1988</b><span>奖项起始年</span></div>'
      + '</div>'
      + '</div>'
      + '<div class="sci-tabs">'
      +   '<button class="on" data-pane="aaic">AAIC 终身成就奖 <b>' + S.aaic.length + '</b></button>'
      +   '<button data-pane="cn">中国科学家 <b>' + S.cn.length + '</b></button>'
      + '</div>'
      + '<div id="sciPaneAAIC">'
      +   '<div class="sci-note"><b>这批档案的边界，先说清楚：</b>'
      +     '2020 年以后（AAIC 2020/2021/2022/2023/2024/2025/2026）的得主，'
      +     '阿尔茨海默病协会每年发一篇颁奖稿、逐人给整段传记，档案直接据此写成；'
      +     '1988–2019 年的得主没有这样的逐届稿件，每条落到其所在院校或机构的官方页'
      +     '（洛克菲勒、宾大、UCL、卡罗林斯卡、梅奥、杜克……），机构与职务以该页当下的表述为准。'
      +     '两类来源都在每张卡片底部可点开核对。尚未整理的人先列在下方完整名录里，'
      +     '标注已建档者可跳查——不做"凭印象补一段"的填充。照片一律待有明确官方来源再上。</div>'
      +   '<div class="sci-grid">' + S.aaic.map(cardAAIC).join('') + '</div>'
      +   rosterHTML()
      + '</div>'
      + '<div id="sciPaneCN" style="display:none">'
      +   '<div class="sci-note"><b>收录说明：</b>中国科学家一栏不按获奖与否筛选，'
      +     '而是收在中国 AD 临床与研究体系里真正立住了的人。每位都给出官方页面'
      +     '（医院或高校官网）作为出处；名字与单位均按官方页面核对过，'
      +     '与坊间常见写法不一致的地方在卡片里注明了。</div>'
      +   '<div class="sci-grid">' + S.cn.map(cardCN).join('') + '</div>'
      + '</div>';

    home.parentNode.appendChild(page);

    /* 标签切换 */
    page.querySelectorAll('.sci-tabs button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        page.querySelectorAll('.sci-tabs button').forEach(function (b) { b.classList.remove('on'); });
        btn.classList.add('on');
        var isAAIC = btn.getAttribute('data-pane') === 'aaic';
        document.getElementById('sciPaneAAIC').style.display = isAAIC ? '' : 'none';
        document.getElementById('sciPaneCN').style.display = isAAIC ? 'none' : '';
      });
    });

    renderRoster('');
    var inp = document.getElementById('sciSearch');
    if (inp) {
      inp.addEventListener('input', function () { renderRoster(inp.value); });
    }

    /* 名录里高亮的那颗 chip 点一下，直接滚到对应卡片并闪一下。
       没有这一步，"已有档案"只是个颜色，读者还得自己往上翻几百行。 */
    var body = document.getElementById('sciRosterBody');
    if (body) {
      body.addEventListener('click', function (ev) {
        var chip = ev.target.closest ? ev.target.closest('.sci-chip.has') : null;
        if (!chip) { return; }
        var card = page.querySelector('.sci-card[data-idx="' + chip.getAttribute('data-idx') + '"]');
        if (!card) { return; }
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.style.transition = 'box-shadow .3s, transform .3s';
        card.style.boxShadow = '0 0 0 3px rgba(59,130,246,.45)';
        setTimeout(function () { card.style.boxShadow = ''; }, 1400);
      });
    }
  }

  injectCSS();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
