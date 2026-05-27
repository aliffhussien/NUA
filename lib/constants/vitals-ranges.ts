export const VITALS_RANGES = {
  heartRate: {
    unit: 'bpm',
    normal: { min: 60, max: 100 },
    elderly: { min: 50, max: 100 },
    label: 'Heart Rate',
    icon: '♥',
  },
  spo2: {
    unit: '%',
    normal: { min: 95, max: 100 },
    critical: 90,
    label: 'SpO₂',
    icon: '○',
  },
  bloodPressure: {
    unit: 'mmHg',
    systolic: { normal: { min: 90, max: 140 }, high: 160 },
    diastolic: { normal: { min: 60, max: 90 }, high: 100 },
    label: 'Blood Pressure',
    icon: '⊕',
  },
  temperature: {
    unit: '°C',
    normal: { min: 36.1, max: 37.2 },
    fever: 38.0,
    label: 'Temperature',
    icon: '≡',
  },
} as const;
