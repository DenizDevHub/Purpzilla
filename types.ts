export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface TokenStat {
  label: string;
  value: string;
  trend?: 'up' | 'down';
}

export interface RoadmapItem {
  phase: string;
  title: string;
  items: string[];
  status: 'completed' | 'current' | 'upcoming';
}