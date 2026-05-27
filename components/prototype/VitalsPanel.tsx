'use client';

import { VitalCard } from './VitalCard';
import type { MockResident } from '@/lib/types/mock-data';

interface VitalsPanelProps {
  resident: MockResident;
}

export function VitalsPanel({ resident }: VitalsPanelProps) {
  const { vitals, conditions, name, age, room, status } = resident;

  const statusLabel: Record<typeof status, string> = {
    stable: 'All vitals normal',
    warning: 'Monitor closely',
    alert: 'Immediate attention required',
    critical: 'CRITICAL — Act now',
  };

  const statusColor: Record<typeof status, string> = {
    stable: '#00D4B8',
    warning: '#F5A623',
    alert: '#FF7722',
    critical: '#FF4444',
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-syne font-semibold text-white text-lg">{name}</h3>
          <p className="text-white/50 text-sm font-inter">
            Age {age} · Room {room}
          </p>
        </div>
        <span
          className="text-xs font-semibold font-inter px-2.5 py-1 rounded-full"
          style={{
            color: statusColor[status],
            backgroundColor: `${statusColor[status]}18`,
            border: `1px solid ${statusColor[status]}30`,
          }}
        >
          {statusLabel[status]}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <VitalCard
          label="Heart Rate"
          icon="♥"
          reading={vitals.heartRate}
          isHeartRate
          bpm={vitals.heartRate.value}
        />
        <VitalCard label="SpO₂" icon="○" reading={vitals.spo2} />
        <VitalCard label="Blood Pressure" icon="⊕" reading={vitals.bloodPressure} />
        <VitalCard label="Temperature" icon="≡" reading={vitals.temperature} />
      </div>

      {conditions.length > 0 && (
        <div className="card-glass rounded-xl p-4">
          <p className="text-white/50 text-xs font-inter uppercase tracking-wider mb-2">
            Known Conditions
          </p>
          <div className="flex flex-wrap gap-2">
            {conditions.map((c) => (
              <span
                key={c}
                className="text-xs font-inter text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
