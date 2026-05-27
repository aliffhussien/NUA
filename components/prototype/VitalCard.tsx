'use client';

import { motion } from 'framer-motion';
import type { VitalReading, BloodPressureReading, VitalStatus } from '@/lib/types/mock-data';

interface VitalCardProps {
  label: string;
  icon: React.ReactNode;
  reading: VitalReading | BloodPressureReading;
  isHeartRate?: boolean;
  bpm?: number;
}

const statusColors: Record<VitalStatus, string> = {
  normal: '#00D4B8',
  low: '#F5A623',
  high: '#FF7722',
  critical: '#FF4444',
};

function isBP(r: VitalReading | BloodPressureReading): r is BloodPressureReading {
  return 'systolic' in r;
}

export function VitalCard({ label, icon, reading, isHeartRate = false, bpm }: VitalCardProps) {
  const status = reading.status;
  const color = statusColors[status];

  const displayValue = isBP(reading)
    ? `${reading.systolic}/${reading.diastolic}`
    : String(reading.value);

  const unit = isBP(reading) ? 'mmHg' : reading.unit;

  const pulseDuration = isHeartRate && bpm ? 60 / bpm : 1;

  return (
    <div
      className="card-glass rounded-xl p-4 flex flex-col gap-2"
      style={{ borderColor: `${color}30` }}
    >
      <div className="flex items-center justify-between">
        <span className="text-white/50 text-xs font-inter uppercase tracking-wider">{label}</span>
        <span className="text-white/40 text-base">{icon}</span>
      </div>

      <div className="flex items-end gap-1.5">
        {isHeartRate ? (
          <motion.span
            className="font-syne font-bold text-2xl"
            style={{ color }}
            animate={{ scale: [1, 1.06, 1, 1.04, 1] }}
            transition={{
              duration: pulseDuration,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.14, 0.28, 0.42, 1],
            }}
          >
            {displayValue}
          </motion.span>
        ) : (
          <span className="font-syne font-bold text-2xl" style={{ color }}>
            {displayValue}
          </span>
        )}
        <span className="text-white/40 text-xs font-inter pb-0.5">{unit}</span>
      </div>

      {status !== 'normal' && (
        <span
          className="text-xs font-inter font-semibold uppercase tracking-wide"
          style={{ color }}
        >
          {status === 'low' ? '↓ Low' : status === 'high' ? '↑ High' : '⚠ Critical'}
        </span>
      )}
    </div>
  );
}
