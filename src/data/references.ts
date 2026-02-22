export interface Reference {
  id: string
  author: string
  year: number
  title: string
  type: 'report' | 'article' | 'book' | 'website'
  url?: string
  description: string
}

export interface ApaReference {
  id: string
  citation: string
}

export const references: Reference[] = [
  {
    id: 'mckinsey-agent-commerce',
    author: 'McKinsey & Company',
    year: 2025,
    title: 'Why Agent Commerce Will Be Big',
    type: 'report',
    url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants',
    description: '에이전트 커머스 시장이 2030년까지 3~5조 달러 규모로 성장할 전망 분석',
  },
  {
    id: 'gartner-agentic-ai',
    author: 'Gartner',
    year: 2025,
    title: 'Intelligent Agent in AI: Predictions and Trends',
    type: 'report',
    url: 'https://www.gartner.com/en/articles/intelligent-agent-in-ai',
    description: '2028년까지 일상적 업무 의사결정의 15%가 AI 에이전트에 의해 자율 수행될 전망',
  },
  {
    id: 'anthropic-constitution',
    author: 'Anthropic',
    year: 2026,
    title: 'The Anthropic Guidelines (Claude Constitution)',
    type: 'website',
    url: 'https://www.anthropic.com/news/claude-new-constitution',
    description: 'AI 시스템의 가치 정렬과 헌법적 AI 설계 원칙',
  },
  {
    id: 'eu-ai-act',
    author: 'European Union',
    year: 2024,
    title: 'EU AI Act',
    type: 'website',
    url: 'https://artificialintelligenceact.eu/',
    description: 'AI에 대한 세계 최초의 포괄적 규제 프레임워크',
  },
  {
    id: 'openai-economic-impact',
    author: 'OpenAI',
    year: 2025,
    title: 'Economic Impact of AI',
    type: 'report',
    url: 'https://openai.com/index/economic-impact/',
    description: '상위 AI 사용자는 주당 10시간 이상 절약, 여러 모델을 활용하는 기업 보고서',
  },
  {
    id: '80k-hours-ai',
    author: '80,000 Hours',
    year: 2025,
    title: 'AI Capability Trends',
    type: 'article',
    url: 'https://80000hours.org/problem-profiles/artificial-intelligence/',
    description: 'AI 역량 추세: 2020년 수초 작업에서 2024년 1시간 작업으로 확대',
  },
  {
    id: 'forrester-agents-2025',
    author: 'Forrester',
    year: 2025,
    title: 'Predictions 2025: AI Agents',
    type: 'report',
    url: 'https://www.forrester.com/blogs/predictions-2025-artificial-intelligence/',
    description: 'B2B 판매자 5명 중 1명이 AI 구매 에이전트의 요청에 대응해야 할 전망',
  },
  {
    id: 'adobe-digital-economy',
    author: 'Adobe',
    year: 2025,
    title: 'Digital Economy Index',
    type: 'report',
    url: 'https://business.adobe.com/resources/digital-economy-index.html',
    description: '2025년 블랙프라이데이 소매 사이트 AI 트래픽 전년 대비 1,200% 증가',
  },
  {
    id: 'checkout-agentic-commerce',
    author: 'Checkout.com',
    year: 2025,
    title: 'Agentic Commerce Consumer Survey',
    type: 'report',
    url: 'https://www.checkout.com/blog/agentic-commerce-consumer-intent-merchant-opportunity',
    description: '25~44세 소비자 2/3 이상이 반복 구매를 AI에 위임할 의사 보유',
  },
  {
    id: 'idc-agentic-spending',
    author: 'IDC',
    year: 2025,
    title: 'Agentic AI Spending Forecast',
    type: 'report',
    url: 'https://www.idc.com/getdoc.jsp?containerId=prUS52857525',
    description: '에이전틱 AI가 2029년 IT 예산의 26%, 약 1.3조 달러까지 성장 전망',
  },
  {
    id: 'google-a2a',
    author: 'Google',
    year: 2025,
    title: 'Agent-to-Agent (A2A) Protocol',
    type: 'website',
    url: 'https://a2a-protocol.org/latest/',
    description: '에이전트 간 통신 표준 프로토콜 -- 에이전트 인터넷 시대의 인프라',
  },
]

export const apaReferences: ApaReference[] = [
  { id: 'acemoglu-2023', citation: 'Acemoglu, D., & Johnson, S. (2023). *Power and progress: Our thousand-year struggle over technology and prosperity*. PublicAffairs.' },
  { id: 'anthropic-2026', citation: 'Anthropic. (2026, January 22). Claude\u2019s new constitution. https://www.anthropic.com/news/claude-new-constitution' },
  { id: 'amodei-2024', citation: 'Amodei, D. (2024, October 17). Machines of loving grace. https://darioamodei.com/machines-of-loving-grace' },
  { id: 'amodei-2026', citation: 'Amodei, D. (2026, February 3). The adolescence of technology. https://darioamodei.com/essay/the-adolescence-of-technology' },
  { id: 'aoki-2001', citation: 'Aoki, M. (2001). *Toward a comparative institutional analysis*. MIT Press.' },
  { id: 'bayern-2021', citation: 'Bayern, S. (2021). *Autonomous organizations*. Cambridge University Press.' },
  { id: 'bengio-2023', citation: 'Bengio, Y. (2023, May 7). AI scientists: Safe and useful AI? [Blog post]. https://yoshuabengio.org/2023/05/07/ai-scientists-safe-and-useful-ai/' },
  { id: 'bengio-2024', citation: 'Bengio, Y. (Ed.). (2024). *International scientific report on the safety of advanced AI: Interim report*. UK Department for Science, Innovation and Technology.' },
  { id: 'chopra-2011', citation: 'Chopra, S., & White, L. F. (2011). *A legal theory for autonomous artificial agents*. University of Michigan Press.' },
  { id: 'crawford-2021', citation: 'Crawford, K. (2021). *Atlas of AI: Power, politics, and the planetary costs of artificial intelligence*. Yale University Press.' },
  { id: 'eucken-1952', citation: 'Eucken, W. (1952). *Grundsätze der Wirtschaftspolitik*. Mohr Siebeck.' },
  { id: 'floridi-2023', citation: 'Floridi, L. (2023). *The ethics of artificial intelligence: Principles, challenges, and opportunities*. Oxford University Press.' },
  { id: 'fraser-2013', citation: 'Fraser, N. (2013). A triple movement? Parsing the politics of crisis after Polanyi. *New Left Review*, *81*, 119\u2013132.' },
  { id: 'harari-2017', citation: 'Harari, Y. N. (2017). *Homo Deus: A brief history of tomorrow*. Harper.' },
  { id: 'hayek-1988', citation: 'Hayek, F. A. (1988). *The fatal conceit: The errors of socialism*. University of Chicago Press.' },
  { id: 'hohfeld-1917', citation: 'Hohfeld, W. N. (1917). Fundamental legal conceptions as applied in judicial reasoning. *Yale Law Journal*, *26*(8), 710\u2013770.' },
  { id: 'kolt-2025', citation: 'Kolt, N. (2025). Governing AI agents. *Notre Dame Law Review*, *101* (forthcoming). https://ssrn.com/abstract=4772956' },
  { id: 'lanier-2013', citation: 'Lanier, J. (2013). *Who owns the future?* Simon & Schuster.' },
  { id: 'marx-1859', citation: 'Marx, K. (1859). *Zur Kritik der politischen Ökonomie*. Franz Duncker.' },
  { id: 'mazzucato-2018', citation: 'Mazzucato, M. (2018). *The value of everything: Making and taking in the global economy*. Allen Lane.' },
  { id: 'nussbaum-2011', citation: 'Nussbaum, M. C. (2011). *Creating capabilities: The human development approach*. Harvard University Press.' },
  { id: 'oliver-2021', citation: 'Oliver, M. (2021). Contracting by artificial intelligence: Open offers, unilateral mistakes, and why algorithms are not agents. *ANU Journal of Law and Technology*, *2*(1), 45\u201387.' },
  { id: 'perez-2002', citation: 'Perez, C. (2002). *Technological revolutions and financial capital: The dynamics of bubbles and golden ages*. Edward Elgar.' },
  { id: 'piketty-2014', citation: 'Piketty, T. (2014). *Capital in the twenty-first century* (A. Goldhammer, Trans.). Harvard University Press.' },
  { id: 'polanyi-1944', citation: 'Polanyi, K. (1944). *The great transformation*. Farrar & Rinehart.' },
  { id: 'russell-2019', citation: 'Russell, S. (2019). *Human compatible: Artificial intelligence and the problem of control*. Viking.' },
  { id: 'sandel-2020', citation: 'Sandel, M. J. (2020). *The tyranny of merit: What\u2019s become of the common good?* Farrar, Straus and Giroux.' },
  { id: 'sarewitz-2024', citation: 'Sarewitz, D. (2024, Winter). Economists being economists [Review of *Power and progress*]. *Issues in Science and Technology*, *40*(2).' },
  { id: 'sen-1999', citation: 'Sen, A. (1999). *Development as freedom*. Knopf.' },
  { id: 'smith-1776', citation: 'Smith, A. (1776). *An inquiry into the nature and causes of the wealth of nations*. W. Strahan and T. Cadell.' },
  { id: 'solum-1992', citation: 'Solum, L. B. (1992). Legal personhood for artificial intelligences. *North Carolina Law Review*, *70*(4), 1231\u20131287.' },
  { id: 'suleyman-2023', citation: 'Suleyman, M., & Bhaskar, M. (2023). *The coming wave: Technology, power, and the twenty-first century\u2019s greatest dilemma*. Crown.' },
  { id: 'vanberg-2004', citation: 'Vanberg, V. J. (2004). *The Freiburg School: Walter Eucken and Ordoliberalism* (Freiburg Discussion Papers on Constitutional Economics, No. 04/11). Walter Eucken Institut.' },
  { id: 'vanparijs-1995', citation: 'Van Parijs, P. (1995). *Real freedom for all: What (if anything) can justify capitalism?* Oxford University Press.' },
  { id: 'zuboff-2019', citation: 'Zuboff, S. (2019). *The age of surveillance capitalism: The fight for a human future at the new frontier of power*. PublicAffairs.' },
]
