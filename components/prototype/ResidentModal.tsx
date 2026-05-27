'use client';

import { Modal, ModalContent, ModalHeader, ModalBody } from '@heroui/react';
import { VitalsPanel } from './VitalsPanel';
import type { MockResident } from '@/lib/types/mock-data';

interface ResidentModalProps {
  resident: MockResident | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ResidentModal({ resident, isOpen, onClose }: ResidentModalProps) {
  if (!resident) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      placement="bottom-center"
      classNames={{
        base: 'bg-[#0D1E36] border border-white/10 max-h-[90vh]',
        header: 'border-b border-white/10',
        body: 'overflow-y-auto',
      }}
    >
      <ModalContent>
        <ModalHeader className="font-syne text-white text-base font-semibold">
          Resident Detail
        </ModalHeader>
        <ModalBody className="pb-6">
          <VitalsPanel resident={resident} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
