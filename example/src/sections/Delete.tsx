import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
  HealthKit,
  HealthKitDataType,
  HealthKitUnitType,
} from '@kilohealth/rn-fitness-tracker';
import { HealthDataRecord } from '@kilohealth/rn-fitness-tracker/src/types';

const data = {
  key: HealthKitDataType.HeartRate,
  unit: HealthKitUnitType.BeatsPerMinute,
  amount: 60,
  metadata: {
    HKWasUserEntered: 1,
    logId: 8290,
  },
};

export const Delete = () => {
  const [record, setRecord] = useState<HealthDataRecord | undefined>(undefined);

  const getHeartRateUUIDText = () => {
    const text = record === undefined ? 'undefined' : record.uuid;

    return `Latest heart rate record uuid: ${text}`;
  };

  const fetchHeartRateRecord = async () => {
    const latestRecord = await HealthKit.getLatestDataRecord({
      key: HealthKitDataType.HeartRate,
      unit: HealthKitUnitType.BeatsPerMinute,
    });

    setRecord(latestRecord);
  };

  const writeHeartRateRecord = async () => {
    await HealthKit.writeData(data);
  };

  const deleteHeartRateRecordWithUUID = async () => {
    await HealthKit.deleteRecord({
      key: HealthKitDataType.HeartRate,
      uuid: record?.uuid,
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text testID="heart_rate_uuid">{getHeartRateUUIDText()}</Text>

        <Button
          testID="fetch_heart_rate_record_button"
          title="Fetch latest heart rate record"
          onPress={fetchHeartRateRecord}
        />
        <Button
          testID="write_heart_rate_record_button"
          title="Write heart rate record"
          onPress={writeHeartRateRecord}
        />
        <Button
          testID="delete_heart_rate_record_with_uuid_button"
          title="Delete heart rate record"
          onPress={deleteHeartRateRecordWithUUID}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },
});