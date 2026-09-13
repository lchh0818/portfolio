window.projectData.push({
  id: 'junction',
  name: 'Phonch',
  en: 'PHONCH',
  category: 'APP · 스마트폰 센서 게임',
  role: '앱 개발 일부 참여 · 영어 최종 발표',
  color: '#dce2f0',
  ink: '#364b83',
  image: 'projects/junction/images/phonch.png',
  gallery: [],
  summary: '스마트폰 센서 기반 복싱 게임',
  description: 'Phonch는 스마트폰의 내장 센서를 활용해 복싱 동작을 인식하는 운동 게임 앱입니다. 별도의 운동 장비 없이 스마트폰을 손에 쥐고 스트레이트·훅·바디 동작을 수행하며, 실내에서도 게임처럼 운동을 즐길 수 있도록 제작했습니다.',
  problem: '별도의 운동 장비 없이도 실내에서 복싱 동작을 재미있게 연습하고 운동할 수 있는 경험을 만들고자 했습니다.',
  approach: '스마트폰의 중력·가속도·자이로 센서 데이터를 활용해 움직임의 방향과 회전을 분석하고, 음성 안내와 진동 피드백을 결합했습니다.',
  details: [
    { title: '샌드박스 모드', text: '자유롭게 펀치를 연습하고 동작에 따른 진동 피드백을 받을 수 있습니다.' },
    { title: '챌린지 모드', text: '1분 동안 무작위 음성 안내에 맞춰 펀치를 수행합니다. 요청한 동작을 인식해야 다음 동작으로 넘어가며, 제한 시간 안에 기록을 높이는 방식입니다.' },
    { title: '랭킹', text: '챌린지 기록을 다른 사용자와 비교하며 반복적인 참여를 유도합니다.' },
    { title: '기술적 접근', text: '중력·가속도·자이로 센서 데이터로 움직임의 방향과 회전을 분석하고, 궤적이 다른 스트레이트·훅·바디 동작을 구분하도록 구현했습니다.' },
    { title: '담당 업무 및 경험', text: '앱 개발에 일부 참여했으며, 스마트폰 센서를 사용자 경험으로 연결하는 개발 과정과 국제 해커톤에서 서비스의 가치와 구현 방식을 전달하는 경험을 쌓았습니다.' }
  ],
  competition: {
    title: 'Junction Asia 2024',
    description: 'Apple 트랙으로 출품한 스마트폰 센서 기반 복싱 게임 앱입니다.',
    result: 'Apple 트랙 파이널리스트 선정 · 영어 최종 발표'
  },
  tech: ['Gravity Sensor', 'Accelerometer', 'Gyroscope', 'Voice Guidance', 'Haptic Feedback'],
  link: '',
  github: ''
});
