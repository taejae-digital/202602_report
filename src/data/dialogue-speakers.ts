export interface DialogueSpeaker {
  photoFile: string
  nameKr: string
  nameEn: string
  lines: string[]
  attribution?: string
}

export interface SectionDialogue {
  sectionId: string
  speakers: DialogueSpeaker[]
}

const SECTION_DIALOGUES: SectionDialogue[] = [
  {
    sectionId: 'sec-1',
    speakers: [
      {
        photoFile: 'perez.jpg', nameKr: '카를로타 페레즈', nameEn: 'Carlota Perez',
        lines: ['기술의 혜택이 사회 전체로 퍼진 황금기는', '제도적 재편에 성공한 경우에만 도달했다.'],
        attribution: '— Technological Revolutions (2002)',
      },
      {
        photoFile: 'acemoglu.jpg', nameKr: '대런 아세모글루', nameEn: 'Daron Acemoglu',
        lines: ['기술 발전이 자동으로 번영을 가져오지 않는다.', '제도적 선택이 결과를 결정한다.'],
        attribution: '— Power and Progress (2023)',
      },
      {
        photoFile: 'johnson.jpg', nameKr: '사이먼 존슨', nameEn: 'Simon Johnson',
        lines: ['기술은 사회적 선택에 따라', '진보가 될 수도, 재앙이 될 수도 있다.'],
        attribution: '— Power and Progress (2023)',
      },
      {
        photoFile: 'zuboff.jpg', nameKr: '쇼샤나 주보프', nameEn: 'Shoshana Zuboff',
        lines: ['인간의 경험이 데이터라는 원료로', '전환되는 구조를 멈춰야 한다.'],
        attribution: '— Surveillance Capitalism (2019)',
      },
    ],
  },
  {
    sectionId: 'sec-2',
    speakers: [
      {
        photoFile: 'smith.jpg', nameKr: '애덤 스미스', nameEn: 'Adam Smith',
        lines: ['각자가 자기 이익을 추구하는 과정에서', '의도하지 않은 사회적 질서가 생겨난다.'],
        attribution: '— The Wealth of Nations (1776)',
      },
      {
        photoFile: 'polanyi.jpg', nameKr: '칼 폴라니', nameEn: 'Karl Polanyi',
        lines: ['시장이 사회를 삼키려 하면,', '사회가 자기보호 운동으로 반격한다.'],
        attribution: '— The Great Transformation (1944)',
      },
      {
        photoFile: 'eucken.jpg', nameKr: '발터 오이켄', nameEn: 'Walter Eucken',
        lines: ['경제 질서와 정치 질서는', '서로 맞물려 있다.'],
        attribution: '— Grundsätze (1952)',
      },
      {
        photoFile: 'sarewitz.jpg', nameKr: '대니얼 사레위츠', nameEn: 'Daniel Sarewitz',
        lines: ['기술 혁신은 민주적 숙의 없이는', '공공선으로 이어지지 않는다.'],
        attribution: '— Frontiers of Illusion (1996)',
      },
    ],
  },
  {
    sectionId: 'sec-3',
    speakers: [
      {
        photoFile: 'bengio.jpg', nameKr: '요슈아 벤지오', nameEn: 'Yoshua Bengio',
        lines: ['충분한 안전장치 없이는', 'AI가 인간의 통제를 벗어날 위험이 있다.'],
      },
      {
        photoFile: 'hinton.jpg', nameKr: '제프리 힌튼', nameEn: 'Geoffrey Hinton',
        lines: ['AI가 인간보다 더 많이 알게 될 때,', '통제력을 유지할 수 있는가?'],
        attribution: '— Nobel Lecture (2024)',
      },
      {
        photoFile: 'russell.jpg', nameKr: '스튜어트 러셀', nameEn: 'Stuart Russell',
        lines: ['인간의 목표와 어긋나는 AI의 행동을', '사후에 바로잡기 어렵다.'],
        attribution: '— Human Compatible (2019)',
      },
      {
        photoFile: 'suleyman.jpg', nameKr: '무스타파 술레이만', nameEn: 'Mustafa Suleyman',
        lines: ['일단 널리 퍼진 기술을', '다시 통제하기 어려울 수 있다.'],
        attribution: '— The Coming Wave (2023)',
      },
    ],
  },
  {
    sectionId: 'sec-4',
    speakers: [
      {
        photoFile: 'crawford.jpg', nameKr: '케이트 크로포드', nameEn: 'Kate Crawford',
        lines: ['AI는 지능이 아니라', '권력의 시스템이다.'],
        attribution: '— Atlas of AI (2021)',
      },
      {
        photoFile: 'nussbaum.jpg', nameKr: '마사 누스바움', nameEn: 'Martha Nussbaum',
        lines: ['인간다운 삶을 위한', '실질적 조건을 정의해야 한다.'],
        attribution: '— Creating Capabilities (2011)',
      },
      {
        photoFile: 'floridi.jpg', nameKr: '루치아노 플로리디', nameEn: 'Luciano Floridi',
        lines: ['데이터 권리, 설명 가능성,', '인간 심의에 대한 권리가 필요하다.'],
        attribution: '— The Ethics of AI (2023)',
      },
      {
        photoFile: 'standing.jpg', nameKr: '가이 스탠딩', nameEn: 'Guy Standing',
        lines: ['프레카리아트의 권리를', '제도적으로 보장해야 한다.'],
        attribution: '— The Precariat (2011)',
      },
    ],
  },
  {
    sectionId: 'sec-5',
    speakers: [
      {
        photoFile: 'sen.jpg', nameKr: '아마르티아 센', nameEn: 'Amartya Sen',
        lines: ['인간의 가치를 소득이 아니라', "'할 수 있고 될 수 있는 것'으로 측정하라."],
        attribution: '— Development as Freedom (1999)',
      },
      {
        photoFile: 'sandel.jpg', nameKr: '마이클 샌델', nameEn: 'Michael Sandel',
        lines: ['생산성이 아니라 공동선에 대한', '기여가 가치의 기준이다.'],
        attribution: '— The Tyranny of Merit (2020)',
      },
      {
        photoFile: 'harari.jpg', nameKr: '유발 하라리', nameEn: 'Yuval Harari',
        lines: ['AI가 노동을 대체하면, 일자리를 잃은', '사람들의 지위가 위협받는다.'],
        attribution: '— Homo Deus (2017)',
      },
      {
        photoFile: 'piketty.jpg', nameKr: '토마 피케티', nameEn: 'Thomas Piketty',
        lines: ['자본 수익률이 성장률을 초과하면', '불평등은 구조적으로 심화된다.'],
        attribution: '— Capital (2014)',
      },
    ],
  },
]

export function getDialogueBySectionId(sectionId: string): SectionDialogue | undefined {
  return SECTION_DIALOGUES.find(d => d.sectionId === sectionId)
}
