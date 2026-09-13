window.projectData.push({
  id: 'donghaeng',
  name: '동행',
  en: 'DONGHAENG',
  category: 'AI · 보행 분석',
  role: '서비스 기획 및 개발',
  color: '#dce9fb',
  ink: '#234a86',
  image: 'projects/donghaeng/images/donghang.png',
  gallery: [],
  summary: '실시간 영상 기반 보행 이상 탐지 AI',
  description: '동행은 실시간 영상에서 사람의 움직임을 분석해 보행 이상을 탐지하고 알림을 제공하는 인공지능 서비스입니다. 일상에서 보행의 변화를 알아차릴 수 있도록 도와 뇌졸중 의심 징후의 조기 인지를 지원하는 것을 목표로 기획·개발했습니다.',
  problem: '사용자가 직접 앱을 실행하거나 검사를 시작하기 전에도 일상 속 영상에서 보행 이상을 발견할 수 있는 서비스가 필요했습니다.',
  approach: '영상 기반 사람 탐지, 관절 데이터 추출, 예측 모델을 하나의 서비스 흐름으로 연결했습니다.',
  details: [
    { title: '사람 탐지', text: 'YOLOv8을 활용해 실시간 영상 속 보행자를 탐지합니다.' },
    { title: '관절 정보 추출', text: 'MediaPipe로 관절 위치를 추출하고, 오른발과 왼발을 내딛을 때의 움직임 차이를 분석합니다.' },
    { title: '보행 이상 예측', text: 'GAVD 보행 영상 데이터셋을 활용해 좌우 움직임 차이를 입력으로 사용하는 다중 회귀 모델을 학습했습니다.' },
    { title: '이상 징후 알림', text: '보행 이상이 감지되면 알림을 제공해 사용자가 상태를 인지할 수 있도록 구성했습니다.' },
    { title: '기획 방향 및 경험', text: '프로젝트 기획과 개발에 참여하며 영상 기반 사람 탐지, 관절 데이터 추출, 예측 모델을 하나의 서비스 흐름으로 연결하는 경험을 쌓았습니다.' }
  ],
  competition: {
    title: '코드페어공모전 2025',
    description: '본선 발표 후 탈락',
    result: ''
  },
  tech: ['YOLOv8', 'MediaPipe', '다중 회귀 분석'],
  link: '',
  github: ''
});
