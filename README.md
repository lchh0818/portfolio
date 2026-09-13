# 포트폴리오 수정 안내

별도 설치 없이 `index.html`을 브라우저로 열 수 있습니다.

- `content.js`: 이름, 직위(`title`), 소개, 역할, 연락처 수정
- 프로젝트 정보: 각 프로젝트 폴더의 `project.js`에서 프로젝트별 정보 수정
- 프로젝트 표시 순서: `content.js`의 `projectOrder` 배열 순서 수정
- 프로젝트 폴더: `projects/donghaeng/`, `projects/luna-four/`처럼 프로젝트별로 구분
- 프로젝트 이미지: 각 프로젝트 폴더의 `images/`에 대표 이미지와 상세 이미지를 저장
- 소개 사진: 이미지를 `assets/profile/` 폴더에 넣고 `photo`에 경로 지정
- 프로젝트 대표 이미지: 해당 프로젝트의 `images/`에 넣고 `image`에 경로 지정
- 프로젝트 상세 이미지: 같은 `images/`에 넣고 `gallery` 배열에 경로 지정
- 프로젝트 이미지 입력 예시: `image: 'projects/donghaeng/images/cover.jpg'`, `gallery: ['projects/donghaeng/images/detail-1.jpg']`
- 경험 사진: `experiences/images/` 폴더에 넣고 `content.js`의 경험 항목에 `image`와 `gallery` 경로 지정
- 경험 사진 입력 예시: `image: 'experiences/images/demo-day.jpg'`, `gallery: ['experiences/images/demo-day-1.jpg']`
- 경험 상세 페이지: 경험 카드를 누르면 `experience.html`에서 상세 내용이 표시됩니다.
- 경험별 정보: `experiences/` 폴더의 경험별 JavaScript 파일에서 기간, 제목, 설명, 이미지를 수정합니다.
- 경험 영상: 경험 파일의 `videos` 배열에 `{ type: 'youtube', url: 'https://youtu.be/영상ID' }` 또는 `{ type: 'local', src: 'video-file.mp4' }`를 추가합니다. 로컬 영상은 `experiences/images/` 폴더에 넣으면 상세 페이지에서 재생할 수 있습니다.
- 영상 제작 경험: `experiences/video-production.js`에서 제목, 설명과 제작 영상 목록을 수정합니다.
- 상세 설명: 각 `project.js`의 `details`에 `{ title: '소제목', text: '상세 내용' }` 추가
- 출품대회 탭: 각 `project.js`의 `competition`에 대회명, 설명, 결과 입력
- 파일명만 입력하면 폴더 위치가 자동으로 연결됩니다. 기존처럼 `assets/...` 전체 경로를 입력해도 됩니다.
- 기술: 프로젝트별 `tech: ['React', 'Next.js']` 형식으로 실제 사용 기술 기입
- 링크: `github`, `link`에 https://로 시작하는 실제 주소 입력
- 비어 있는 연락처는 등록 예정으로 표시되며 링크가 생성되지 않습니다.
- 사진을 지정하기 전 프로젝트명 표지가 표시됩니다. 실제 제품 화면을 의미하지 않습니다.
- 디자인은 `styles.css`, 페이지 구조는 `index.html`, `project.html`, `app.js`에서 수정합니다.

프로젝트별 참여 범위는 제공한 정보를 기준으로 기재했습니다. 확인되지 않은 성과 수치나 개발 기술은 추가하지 않았습니다.
