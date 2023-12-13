import {TouchableOpacity} from 'react-native';
import CheckOutline from '../assets/check.svg';
import React from 'react';
import CheckCompleted from '../assets/check-completed.svg';

type CheckProps = {
  onPress: () => void;
  isChecked: boolean;
};
export function Check({onPress, isChecked}: CheckProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      {isChecked ? <CheckCompleted /> : <CheckOutline />}
    </TouchableOpacity>
  );
}
