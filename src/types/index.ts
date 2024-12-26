export type User = {
  id: string;
  email: string;
  role: 'user' | 'translator' | 'admin';
  created_at: string;
};

export type TranslationOrder = {
  id: string;
  user_id: string;
  source_language: string;
  target_language: string;
  document_url: string;
  translated_url?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  price: number;
  urgency: 'normal' | 'urgent' | 'express';
  created_at: string;
  updated_at: string;
};