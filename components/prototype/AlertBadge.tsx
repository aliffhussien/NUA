'use client';

import { motion } from 'framer-motion';
import type { ResidentStatus } from '@/lib/types/mock-data';

interface AlertBadgeProps {
  status: ResidentStatus;
}

export function AlertBadge({ status }: AlertBadgeProps) {
  if (status === 'stable' || status === 'warning') return null;

  const color = status === 'critical' ? '#FF4444' : '#FF7722';

  return (
    <span className="relative flex h-3 w-3">
      <motion.span
        className="absolute inline-flex h-full w-full rounded-full"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
      />
      <span
        className="relative inline-flex rounded-full h-3 w-3"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}
