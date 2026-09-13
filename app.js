const data=window.portfolio;
const sectionOrder=['about','role','projects','record','experiences','contact'];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safe=s=>/^(https?:\/\/|\.\/|\/|assets\/|projects\/)/i.test(s)?esc(s):'';
const assetPath=(value,folder)=>{if(!value)return '';return /^(https?:\/\/|\.\/|\/|assets\/|projects\/)/i.test(value)?value:`assets/${folder}/${value}`;};
const imageSource=(value,folder)=>{const path=assetPath(value,folder);if(!path)return '';const cacheBuster=/^(https?:\/\/)/i.test(path)?'':`?v=${Date.now()}`;return safe(`${path}${cacheBuster}`);};
const tags=a=>a.map(s=>`<span class="tag">${esc(s)}</span>`).join('');
const cover=(p,detail=false)=>{const image=imageSource(p.image,'projects');return `<div class="cover ${detail?'detail-cover':''}" style="--cover:${p.color};--cover-ink:${p.ink}">${image?`<img src="${image}" alt="${esc(p.name)} 프로젝트 이미지">`:`<span class="cover-meta">${esc(p.category)}</span><span class="cover-title">${esc(p.en)}</span><span class="cover-foot">${esc(p.name)}</span>`}</div>`;};
document.querySelector('#header').innerHTML='<div class="nav"><a class="brand" href="index.html">ChanHyeok Lee</a><nav aria-label="Main navigation"><a href="index.html#about">About</a><a href="index.html#projects">Projects</a><a href="index.html#record">Record</a><a href="index.html#experiences">Experiences</a><a href="index.html#contact">Contact</a></nav></div>';
document.querySelector('#footer').innerHTML='<span>Development · Product planning · Execution</span><span>ChanHyeok Lee</span>';
if(document.body.dataset.page==='home'){
 const projects=[...(data.projects||[])].sort((a,b)=>(data.projectOrder||[]).indexOf(a.id)-(data.projectOrder||[]).indexOf(b.id));
 const roleLines=Array.isArray(data.role)?data.role:[data.role||data.title||'개발자 · 서비스 기획자'];
 const roleTitle=role=>typeof role==='string'?role:(role.title||'');
 const rolePeriod=role=>typeof role==='string'?'':(role.period||role.date||'');
 const profileImage=imageSource(data.photo,'profile');
 const experienceImages=(item,index)=>{
  const coverImage=item.image?`<img class="experience-image" src="${imageSource(item.image,'experiences/images')}" alt="${esc(item.title)} 사진">`:'';
  const gallery=(item.gallery||[]).filter(Boolean).map((image,galleryIndex)=>`<img loading="lazy" src="${imageSource(image,'experiences/images')}" alt="${esc(item.title)} 상세 사진 ${galleryIndex+1}">`).join('');
  return coverImage||gallery?`<div class="experience-media">${coverImage}${gallery}</div>`:'';
 };
 document.querySelector('#about').innerHTML=`<div><p class="eyebrow">DEVELOPER & CREATOR</p><h1>ChanHyeok Lee</h1><p class="intro">${esc(data.intro)}</p><p class="about-label">Role</p><div class="tags">${roleLines.map(role=>`<span class="tag">${esc(roleTitle(role))}</span>`).join('')}</div><p class="about-label">Skills</p><div class="tags skill-tags">${tags(data.skills)}</div><p class="school">${esc(data.school)}</p></div><figure><div class="portrait">${profileImage?`<img src="${profileImage}" alt="${esc(data.name)} profile photo">`:'<div class="photo-label"><strong>＋</strong>Profile photo</div>'}</div><figcaption class="portrait-label"><strong>${esc(data.name)}</strong> · ${esc(data.title||roleLines.map(roleTitle).join(' · ')||'Developer · Product Planner')}</figcaption></figure>`;
 const experiences=data.experiences||[];
 const main=document.querySelector('main');
 const record=main.querySelector('#record');
 document.querySelector('#projects').insertAdjacentHTML('afterend',`<section id="role" class="role-section"><div class="section-head"><h2>Role</h2><small>Role</small></div><article class="role-card"><span class="role-period">Role</span><div class="role-list">${roleLines.map(role=>`<div class="role-line"><h3>${esc(roleTitle(role))}</h3>${rolePeriod(role)?`<span class="role-date">${esc(rolePeriod(role))}</span>`:''}</div>`).join('')}</div></article></section><section id="experiences" class="experiences-section"><div class="section-head"><h2>경험</h2><small>경험</small></div><div class="experience-list">${experiences.map((item,index)=>`<article class="experience-card"><span class="role-period">${esc(item.period)}</span><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p>${experienceImages(item,index)}</article>`).join('')}</div></section>`);
 const sectionMap={about:document.querySelector('#about'),projects:document.querySelector('#projects'),role:document.querySelector('#role'),experiences:document.querySelector('#experiences'),record,contact:document.querySelector('#contact')};
 const sectionFragment=document.createDocumentFragment();
 sectionOrder.forEach(name=>{if(sectionMap[name])sectionFragment.append(sectionMap[name]);});
 main.insertBefore(sectionFragment,main.querySelector('noscript'));
 document.querySelector('#project-grid').innerHTML=projects.map(p=>`<a class="card" href="project.html?id=${encodeURIComponent(p.id)}" aria-label="${esc(p.name)} 프로젝트 자세히 보기">${cover(p)}<div class="card-info"><div><h3>${esc(p.name)}</h3><p>${esc(p.summary)}</p></div><span class="arrow" aria-hidden="true">↗</span></div></a>`).join('');
 const info=[['Email',data.email,data.email?'mailto:'+encodeURIComponent(data.email):''],['GitHub',data.github,/^https?:\/\//.test(data.github)?data.github:''],['Phone',data.phone,data.phone?'tel:'+data.phone.replace(/[^+0-9]/g,''):'']];
 document.querySelector('#contacts').innerHTML=info.map(([label,value,url])=>`<div class="contact-row"><span>${label}</span>${value&&url?`<a href="${esc(url)}" ${label==='GitHub'?'target="_blank" rel="noopener noreferrer"':''}>${esc(value)}</a>`:'<span class="empty">등록 예정</span>'}</div>`).join('');
}else{
 const projects=[...(data.projects||[])].sort((a,b)=>(data.projectOrder||[]).indexOf(a.id)-(data.projectOrder||[]).indexOf(b.id));
 const p=projects.find(p=>p.id===new URLSearchParams(location.search).get('id'));
 if(!p){document.querySelector('main').innerHTML='<a class="back" href="index.html#projects">← 프로젝트 목록</a><h1>프로젝트를 찾을 수 없습니다.</h1>';}
 else{document.title=p.name+' | Development & Product Portfolio';document.querySelector('meta[name="description"]').content=p.description;
 const n=projects[(projects.indexOf(p)+1)%projects.length];
 const gallery=(p.gallery||[]).filter(Boolean).map((s,i)=>`<img loading="lazy" src="${imageSource(s,'projects/gallery')}" alt="${esc(p.name)} 상세 이미지 ${i+1}">`).join('');
 const details=(p.details||[]).map(item=>`<section class="detail-extra"><h2>${esc(item.title)}</h2><p>${esc(item.text)}</p></section>`).join('');
 const competition=p.competition||{title:'출품대회 정보 입력 예정',description:'출품한 대회명, 출품 분야, 심사 결과와 발표 내용을 입력할 수 있습니다.',result:''};
 document.querySelector('#detail').innerHTML=`<div class="detail-head"><p class="eyebrow">${esc(p.category)}</p><h1>${esc(p.name)}</h1><p class="intro">${esc(p.summary)}</p></div>${cover(p,true)}<div class="detail-tabs" role="tablist" aria-label="프로젝트 상세 메뉴"><button class="detail-tab is-active" type="button" role="tab" aria-selected="true" data-tab="overview">프로젝트 소개</button><button class="detail-tab" type="button" role="tab" aria-selected="false" data-tab="competition">출품대회</button></div><div class="detail-body"><aside><strong>참여 역할</strong>${esc(p.role)}${p.tech.length?`<strong style="margin-top:24px">사용 기술</strong><div class="tags">${tags(p.tech)}</div>`:''}<div class="detail-links">${[['서비스 보기',p.link],['GitHub',p.github]].filter(x=>/^https?:\/\//.test(x[1])).map(([t,u])=>`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${t} ↗</a>`).join('')}</div></aside><article><div class="detail-panel is-active" data-panel="overview"><h2>프로젝트 소개</h2><p>${esc(p.description)}</p><h2>시작한 이유</h2><p>${esc(p.problem)}</p><h2>참여 내용</h2><p>${esc(p.approach)}</p>${details}<div class="gallery">${gallery}</div></div><div class="detail-panel" data-panel="competition"><h2>${esc(competition.title)}</h2><p>${esc(competition.description)}</p>${competition.result?`<h2>결과</h2><p>${esc(competition.result)}</p>`:''}</div></article></div></div><div class="end-nav"><a href="index.html#projects">← 전체 프로젝트</a><a href="project.html?id=${encodeURIComponent(n.id)}">다음: ${esc(n.name)} →</a></div>`;
 document.querySelectorAll('.detail-tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.detail-tab').forEach(item=>{item.classList.toggle('is-active',item===tab);item.setAttribute('aria-selected',item===tab?'true':'false');});document.querySelectorAll('.detail-panel').forEach(panel=>panel.classList.toggle('is-active',panel.dataset.panel===tab.dataset.tab));}));
 }
}
