export interface Hexagram {
  id: number;
  name: string;
  chineseName: string;
  symbol: string;
  lines: boolean[]; // true = yang (solid), false = yin (broken)
  keywords: string[];
  meaning: string;
  interpretation: string;
  advice: string;
  relationships: string;
  career: string;
  health: string;
  changingLines: { [key: number]: string };
}

export const hexagrams: Hexagram[] = [
  {
    id: 1,
    name: "The Creative",
    chineseName: "乾 (Qián)",
    symbol: "☰",
    lines: [true, true, true, true, true, true],
    keywords: ["creativity", "heaven", "strength", "leadership"],
    meaning: "Pure yang energy, the creative force of the universe. Represents heaven, leadership, and divine power.",
    interpretation: "The Creative represents the primal creative force. It is the beginning of all things, the source of energy and inspiration. This hexagram indicates a time of great potential and creative power.",
    advice: "Trust in your creative abilities and leadership qualities. Take initiative and act with confidence. The time is right for new beginnings and bold actions.",
    relationships: "In relationships, this hexagram suggests taking the lead and being the driving force. Show strength and reliability to your partner.",
    career: "Excellent time for leadership roles and creative projects. Your natural authority and vision will guide you to success.",
    health: "Strong vital energy and good health. Maintain your strength through proper rest and nutrition.",
    changingLines: {
      1: "Hidden dragon. Do not act yet. Build your strength in preparation.",
      2: "Dragon appears in the field. Seek guidance from wise mentors.",
      3: "Active throughout the day. Be cautious of pride and overconfidence.",
      4: "Leap across the abyss. Take calculated risks with wisdom.",
      5: "Flying dragon in the heavens. Your leadership reaches its peak.",
      6: "Arrogant dragon will have regrets. Avoid excessive pride."
    }
  },
  {
    id: 2,
    name: "The Receptive",
    chineseName: "坤 (Kūn)",
    symbol: "☷",
    lines: [false, false, false, false, false, false],
    keywords: ["receptivity", "earth", "nurturing", "devotion"],
    meaning: "Pure yin energy, the receptive force of the earth. Represents nurturing, devotion, and supportive strength.",
    interpretation: "The Receptive represents the complementary force to The Creative. It is about receiving, nurturing, and supporting. This hexagram indicates a time for patience and careful cultivation.",
    advice: "Practice patience and receptivity. Support others and allow situations to develop naturally. Your strength lies in your ability to adapt and nurture.",
    relationships: "Focus on supporting and nurturing your partner. Create a stable foundation for love to grow.",
    career: "Success comes through collaboration and supporting others. Avoid forcing situations and instead work with the natural flow.",
    health: "Focus on rest, nutrition, and gentle healing practices. Listen to your body's needs.",
    changingLines: {
      1: "Frost underfoot. Winter approaches. Prepare for challenges ahead.",
      2: "Straight, square, great. Natural goodness without effort.",
      3: "Hidden excellence. Maintain your virtues in private.",
      4: "Tied sack. Discretion prevents mistakes.",
      5: "Yellow lower garment. Modesty brings supreme good fortune.",
      6: "Dragons fight in the wilderness. Avoid confrontation between extremes."
    }
  },
  {
    id: 3,
    name: "Difficulty at the Beginning",
    chineseName: "屯 (Zhūn)",
    symbol: "☵",
    lines: [true, false, false, false, true, false],
    keywords: ["difficulty", "perseverance", "growth", "patience"],
    meaning: "Initial difficulties that require patience and perseverance. Like a plant struggling to break through the soil.",
    interpretation: "This hexagram represents the natural difficulties that arise at the beginning of any endeavor. Like birth pangs, these challenges are necessary for growth and development.",
    advice: "Be patient and persistent. Seek help from others when needed. Focus on building a strong foundation rather than rushing toward your goals.",
    relationships: "New relationships may face initial challenges. Work through difficulties with patience and understanding.",
    career: "New projects or career changes may face obstacles. Stay committed to your vision and work steadily toward your goals.",
    health: "Recovery from illness or establishing new health habits requires patience and consistency.",
    changingLines: {
      1: "Hesitation and hindrance. Seek assistance from others.",
      2: "Obstacles pile up. Persistence will eventually overcome them.",
      3: "Pursuing without guidance leads to humiliation. Seek wise counsel.",
      4: "Reaching out for help. Assistance comes from unexpected sources.",
      5: "Small obstacles to your kindness. Continue with good intentions.",
      6: "Horse and cart part ways. Some relationships cannot be forced."
    }
  },
  {
    id: 4,
    name: "Youthful Folly",
    chineseName: "蒙 (Méng)",
    symbol: "☶",
    lines: [false, true, false, false, false, true],
    keywords: ["learning", "youth", "inexperience", "guidance"],
    meaning: "The inexperience of youth seeking wisdom. Represents the natural learning process and the need for guidance.",
    interpretation: "This hexagram represents the student's mind - eager to learn but lacking experience. It emphasizes the importance of proper guidance and the willingness to learn from mistakes.",
    advice: "Approach situations with humility and openness to learning. Seek guidance from experienced mentors. Be patient with your own learning process.",
    relationships: "Approach love with sincerity and openness to learning. Avoid making the same mistakes repeatedly.",
    career: "Invest in learning and skill development. Seek mentorship and be willing to start from the beginning.",
    health: "Listen to medical advice and learn about your body's needs. Avoid self-diagnosis and seek professional guidance.",
    changingLines: {
      1: "Disciplining folly. Set clear boundaries and expectations.",
      2: "Tolerating folly with kindness. Patience with beginners pays off.",
      3: "Do not marry a maiden who loses herself. Avoid relationships based on infatuation.",
      4: "Bound by folly. Fantasies and illusions lead to suffering.",
      5: "Childlike folly. Innocence and simplicity bring good fortune.",
      6: "Punishing folly. Sometimes harsh lessons are necessary for growth."
    }
  },
  {
    id: 5,
    name: "Waiting",
    chineseName: "需 (Xū)",
    symbol: "☰",
    lines: [false, true, false, true, true, true],
    keywords: ["patience", "waiting", "nourishment", "preparation"],
    meaning: "The wisdom of waiting for the right moment. Represents patience, preparation, and trust in divine timing.",
    interpretation: "This hexagram teaches the art of patient waiting. It's not passive inaction, but active preparation while trusting in the natural timing of events.",
    advice: "Cultivate patience and use waiting time for preparation. Trust that the right opportunity will come. Maintain your strength through proper nourishment.",
    relationships: "Allow relationships to develop naturally. Don't force outcomes but remain available and prepared.",
    career: "Prepare yourself for opportunities while waiting for the right moment to act. Networking and skill-building are favorable.",
    health: "Focus on building and maintaining your strength. Preventive care is more important than reactive treatment.",
    changingLines: {
      1: "Waiting in the meadow. Stay prepared at a safe distance.",
      2: "Waiting on the sand. Some gossip arises but patience prevails.",
      3: "Waiting in the mud. Careless actions attract difficulties.",
      4: "Waiting in blood. Escape from danger through acceptance.",
      5: "Waiting at the banquet. Nourish yourself while waiting.",
      6: "Falling into the pit. Unexpected guests bring opportunities."
    }
  },
  {
    id: 6,
    name: "Conflict",
    chineseName: "訟 (Sòng)",
    symbol: "☰",
    lines: [true, true, true, false, true, false],
    keywords: ["conflict", "opposition", "caution", "mediation"],
    meaning: "Inner conflict and external disputes. Represents the tension between opposing forces and the need for resolution.",
    interpretation: "This hexagram warns of conflicts arising from opposing interests or misunderstandings. It counsels caution and the seeking of mediation rather than direct confrontation.",
    advice: "Avoid unnecessary conflicts and seek mediation when disputes arise. Focus on understanding different perspectives. Compromise may be necessary.",
    relationships: "Address conflicts early before they escalate. Seek to understand your partner's perspective and find common ground.",
    career: "Workplace conflicts may arise. Stay professional and seek resolution through proper channels. Avoid taking sides unnecessarily.",
    health: "Stress from conflicts can affect health. Practice stress management and avoid unnecessary arguments.",
    changingLines: {
      1: "Do not pursue the conflict. Let the matter drop quickly.",
      2: "Cannot engage in conflict. Return home and avoid confrontation.",
      3: "Living on past merits. Rely on established virtues for security.",
      4: "Cannot engage in conflict. Accept the situation and find peace.",
      5: "Conflict resolved through mediation. Great good fortune.",
      6: "Winning through conflict. Victory brings no lasting satisfaction."
    }
  }
  // Add more hexagrams as needed - this is a sample of 6 out of 64
];

export function getHexagram(id: number): Hexagram | undefined {
  return hexagrams.find(h => h.id === id);
}

export function generateRandomHexagram(): Hexagram {
  const randomId = Math.floor(Math.random() * hexagrams.length) + 1;
  return hexagrams.find(h => h.id === randomId) || hexagrams[0];
}

export function getHexagramByLines(lines: boolean[]): Hexagram | undefined {
  return hexagrams.find(h => 
    h.lines.every((line, index) => line === lines[index])
  );
}