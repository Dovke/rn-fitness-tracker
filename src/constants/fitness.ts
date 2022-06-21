import { FitnessDataType, HealthKitKeyWithUnit } from '../types';
import { HealthDataType, UnitType } from '../enums';

export const HealthKitKeyUnitByKey: {
  [key in FitnessDataType]: HealthKitKeyWithUnit;
} = {
  [FitnessDataType.Distance]: {
    key: HealthDataType.DistanceWalkingRunning,
    unit: UnitType.meters,
  },
  [FitnessDataType.Height]: {
    key: HealthDataType.Height,
    unit: UnitType.meters,
  },
  [FitnessDataType.Steps]: {
    key: HealthDataType.StepCount,
    unit: UnitType.count,
  },
  [FitnessDataType.Weight]: {
    key: HealthDataType.BodyMass,
    unit: UnitType.kilograms,
  },
};
