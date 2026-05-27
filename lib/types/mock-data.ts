export type VitalStatus = 'normal' | 'low' | 'high' | 'critical';
export type ResidentStatus = 'stable' | 'warning' | 'alert' | 'critical';

export interface VitalReading {
  value: number;
  unit: string;
  status: VitalStatus;
}

export interface BloodPressureReading {
  systolic: number;
  diastolic: number;
  status: VitalStatus;
}

export interface ResidentVitals {
  heartRate: VitalReading & { unit: 'bpm' };
  spo2: VitalReading & { unit: '%' };
  bloodPressure: BloodPressureReading;
  temperature: VitalReading & { unit: '°C' };
}

export interface MockResident {
  id: string;
  name: string;
  age: number;
  room: string;
  status: ResidentStatus;
  vitals: ResidentVitals;
  conditions: string[];
  lastUpdated: string;
}
