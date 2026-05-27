'use client';

import { motion } from 'framer-motion';
import { AlertBadge } from './AlertBadge';
import { StatusBadge } from '@/components/ui/StatusBadge';
import type { MockResident } from '@/lib/types/mock-data';

interface ResidentCardProps {
  resident: MockResident;
  isSelected: boolean;
  onClick: () => void;
}

export function ResidentCard({ resident, isSelected, onClick }: ResidentCardProps) {
  const isAlertState = resident.status === 'alert' || resident.status === 'critical';

  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left rounded-xl p-4 transition-all duration-200 border ${
        isSelected
          ? 'bg-[#00D4B8]/10 border-[#00D4B8]/50'
          : 'card-glass hover:bg-white/5 border-transparent'
      }`}
      animate={
        isAlertState
          ? {
              borderColor: ['rgba(255,68,68,0.5)', 'rgba(255,68,68,0.1)', 'rgba(255,68,68,0.5)'],
            }
          : {}
      }
      transition={isAlertState ? { duration: 1.5, repeat: Infinity } : {}}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-inter font-semibold text-white text-sm truncate">{resident.name}</p>
            <AlertBadge status={resident.status} />
          </div>
          <p className="text-white/40 text-xs font-inter mt-0.5">
            Age {resident.age} · Room {resident.room}
          </p>
        </div>
        <StatusBadge status={resident.status} />
      </div>

      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/5">
        <span className="text-xs font-inter text-white/40">
          HR{' '}
          <span
            className={resident.vitals.heartRate.status !== 'normal' ? 'text-orange-400' : 'text-white/70'}
          >
            {resident.vitals.heartRate.value}
          </span>
        </span>
        <span className="text-xs font-inter text-white/40">
          SpO₂{' '}
          <span
            className={
              resident.vitals.spo2.status !== 'normal'
                ? resident.vitals.spo2.status === 'critical'
                  ? 'text-red-400'
                  : 'text-orange-400'
                : 'text-white/70'
            }
          >
            {resident.vitals.spo2.value}%
          </span>
        </span>
        <span className="text-xs font-inter text-white/30 ml-auto">{resident.lastUpdated}</span>
      </div>
    </motion.button>
  );
}
