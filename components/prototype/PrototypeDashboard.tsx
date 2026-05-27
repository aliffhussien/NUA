'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ResidentCard } from './ResidentCard';
import { VitalsPanel } from './VitalsPanel';
import { ResidentModal } from './ResidentModal';
import { mockResidents } from '@/lib/mock-data';

export function PrototypeDashboard() {
  const [selectedId, setSelectedId] = useState<string>(mockResidents[2].id);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalResident, setModalResident] = useState<(typeof mockResidents)[0] | null>(null);

  const selectedResident = mockResidents.find((r) => r.id === selectedId) ?? mockResidents[0];

  const alertCount = mockResidents.filter(
    (r) => r.status === 'alert' || r.status === 'critical'
  ).length;

  function handleCardClick(id: string) {
    setSelectedId(id);
    const resident = mockResidents.find((r) => r.id === id);
    if (resident) {
      setModalResident(resident);
      if (window.innerWidth < 768) {
        setModalOpen(true);
      }
    }
  }

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#0D1E36]/80 backdrop-blur-md">
      {/* Dashboard header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div>
          <p className="font-syne font-bold text-white text-sm">N.U.A OS</p>
          <p className="text-white/40 text-xs font-inter">Sunrise Care Home · 6 Residents</p>
        </div>
        {alertCount > 0 && (
          <motion.div
            className="flex items-center gap-2 bg-red-500/15 border border-red-500/30 rounded-full px-3 py-1"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-red-400 text-xs font-semibold font-inter">
              {alertCount} Active Alert{alertCount > 1 ? 's' : ''}
            </span>
          </motion.div>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:min-h-[420px]">
        {/* Resident list */}
        <div className="md:w-64 lg:w-72 border-b md:border-b-0 md:border-r border-white/10 p-3 flex flex-col gap-2 overflow-y-auto max-h-80 md:max-h-none">
          <p className="text-white/30 text-xs font-inter uppercase tracking-widest px-2 pt-1 pb-1">
            Residents
          </p>
          {mockResidents.map((resident) => (
            <ResidentCard
              key={resident.id}
              resident={resident}
              isSelected={selectedId === resident.id}
              onClick={() => handleCardClick(resident.id)}
            />
          ))}
        </div>

        {/* Vitals detail panel — desktop only */}
        <div className="hidden md:block flex-1 p-5 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="h-full"
            >
              <VitalsPanel resident={selectedResident} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile modal */}
      <ResidentModal
        resident={modalResident}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
