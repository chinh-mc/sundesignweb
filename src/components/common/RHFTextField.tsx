import React, { FC, ReactNode, useState } from 'react';
import { TextField, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
// component
import { Controller, useFormContext } from 'react-hook-form';
import Iconify from './Iconify';

interface IRHFTextFieldProps {
  label: string;
  name: string;
  type?: string;
  password?: boolean,
  disabled?: boolean,
  required?: boolean,
  readOnly?: boolean,
  onClick?: (event?: any) => void,
  multiline?: boolean
  rows?: number,
  maxRows?: number,
  defaultValue?: string,
  size?: "small" | "medium" | undefined;
  placeholder?: string;
  maxLength?: number;
  sx?: any;
  isOutlineInput?: boolean;
  onRef?: any;
  isFocus?: boolean;
  disableunderline?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onKeyUp?: (event?: any) => void,
  variant?: "standard" | "outlined" | undefined | any
}

const RHFTextField: FC<IRHFTextFieldProps> = (props) => {
  const { onKeyUp,
    isFocus,
    onRef,
    label,
    name,
    type = 'text',
    password,
    maxLength,
    defaultValue = '',
    disabled,
    readOnly = false,
    required,
    isOutlineInput = false,
    placeholder,
    startAdornment,
    endAdornment,
    disableunderline = undefined,
    ...other
  } = props

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const { control } = useFormContext();
  if (isOutlineInput) {
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => (
          <OutlinedInput {...field}
            fullWidth
            size="small"
            error={!!error}
            {...other}
            placeholder={placeholder}
            disabled={disabled}
            type={type}
            required={required}
            readOnly={readOnly}
            inputRef={(input) => {
              if (input != null && isFocus) {
                input.focus();
              } else if (input != null && !isFocus && onRef) {
                onRef(input);
              }
            }}
            
            inputProps={{
              maxLength: maxLength,
              // disableUnderline: disableunderline
            }}
            sx={{
              typography: 'h6',
              '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
            }}
            
          />
        )}
      />)
  }
  if (password) {
    return (<Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field}
          fullWidth error={!!error}
          helperText={error?.message}
          {...other}
          label={label}
          disabled={disabled}
          required={required}
          inputRef={(input) => {
            if (input != null && isFocus) {
              input.focus();
            } else if (input != null && !isFocus && onRef) {
              onRef(input);
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
            // disableUnderline: disableunderline
          }}
          type={showPassword ? 'text' : 'password'}
        />
      )}
    />)
  }
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field}
          fullWidth error={!!error}
          helperText={error?.message}
          {...other}
          label={label}
          disabled={disabled}
          type={type}
          required={required}
          placeholder={placeholder}
          inputRef={(input) => {
            if (input != null && isFocus) {
              input.focus();
            } else if (input != null && !isFocus && onRef) {
              onRef(input);
            }
          }}
          inputProps={{
            maxLength: maxLength,
          }}
          // variant={variant}
          onKeyUp={onKeyUp}

          InputProps={{
            startAdornment: startAdornment,
            endAdornment: endAdornment,
            // disableUnderline: disableunderline
          }}
        />
      )}
    />
  );
};

export default RHFTextField;
