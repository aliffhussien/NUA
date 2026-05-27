'use client';

import { useCmsStore } from '@/lib/stores/cms-store';
import type { ContentBlockKey } from '@/lib/types/cms';

interface EditableBlockProps {
  blockKey: ContentBlockKey;
  children: React.ReactNode;
  className?: string;
}

export function EditableBlock({ blockKey: _blockKey, children, className }: EditableBlockProps) {
  const isEditMode = useCmsStore((s) => s.isEditMode);

  if (!isEditMode) {
    return <div className={className}>{children}</div>;
  }

  // TODO: inline edit UI — render editor on click, save via server action
  return (
    <div className={`group relative cursor-pointer ring-2 ring-[#00D4B8]/40 ring-offset-1 ring-offset-transparent rounded-sm ${className ?? ''}`}>
      <span className="absolute -top-5 left-0 text-[10px] font-inter text-[#00D4B8] bg-[#0A1628] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        Click to edit
      </span>
      {children}
    </div>
  );
}
