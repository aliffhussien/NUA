export interface WaitlistRow {
  id: string;
  email: string;
  name: string | null;
  role: string | null;
  source: string;
  created_at: string;
}

export interface ContentBlockRow {
  id: string;
  key: string;
  value: Record<string, unknown>;
  description: string | null;
  updated_by: string | null;
  updated_at: string;
  created_at: string;
}

type EmptyRelationships = {
  foreignKeyName: string;
  columns: string[];
  isOneToOne?: boolean;
  referencedRelation: string;
  referencedColumns: string[];
}[];

export interface Database {
  public: {
    Tables: {
      waitlist: {
        Row: WaitlistRow;
        Insert: Omit<WaitlistRow, 'id' | 'created_at'>;
        Update: Partial<Omit<WaitlistRow, 'id' | 'created_at'>>;
        Relationships: EmptyRelationships;
      };
      content_block: {
        Row: ContentBlockRow;
        Insert: Omit<ContentBlockRow, 'id' | 'created_at'>;
        Update: Partial<Omit<ContentBlockRow, 'id' | 'created_at'>>;
        Relationships: EmptyRelationships;
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
