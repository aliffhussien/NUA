import type { ResidentStatus } from '@/lib/types/mock-data';

interface StatusBadgeProps {
  status: ResidentStatus;
  className?: string;
}

const statusConfig: Record<ResidentStatus, { label: string; className: string }> = {
  stable: {
    label: 'Stable',
    className: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  },
  warning: {
    label: 'Warning',
    className: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  },
  alert: {
    label: 'Alert',
    className: 'bg-orange-500/20 text-orange-400 border border-orange-500/30',
  },
  critical: {
    label: 'Critical',
    className: 'bg-red-500/20 text-red-400 border border-red-500/30',
  },
};

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const { label, className: statusClass } = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-inter tracking-wide ${statusClass} ${className}`}
    >
      {label}
    </span>
  );
}
