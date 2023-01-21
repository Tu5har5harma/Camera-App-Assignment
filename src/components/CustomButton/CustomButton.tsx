import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import AppStyles from '../../config/styles';

export type CustomButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: any;
  variant: string;
};

export const CustomButton = ({
  label,
  onClick,
  disabled,
  variant,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onClick}
      style={
        variant === 'secondary'
          ? styles.secondaryStyle
          : disabled
          ? styles.disabled
          : styles.primaryStyle
      }>
      <Text
        style={[
          styles.text,
          variant === 'secondary' ? styles.secondaryText : styles.primaryText,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  variant: 'primary',
};

const styles = StyleSheet.create({
  primaryStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    width: '90%',
    height: 56,
    backgroundColor: AppStyles.color.COLOR_PRIMARY,
  },
  secondaryStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    width: '90%',
    height: 56,
    backgroundColor: AppStyles.color.COLOR_WHITE_LIGHT,
    borderWidth: 1.2,
    borderColor: AppStyles.color.COLOR_PRIMARY,
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
  primaryText: {
    color: AppStyles.color.COLOR_WHITE_LIGHT,
  },
  secondaryText: {
    color: AppStyles.color.COLOR_BLACK,
  },
  disabled: {
    backgroundColor: 'grey',
  },
});
