// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Select, FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import { ItemValueModel } from '@/interface/common';

// ----------------------------------------------------------------------
interface RHFSelectProps {
  name: string,
  defaultValue?: string | number,
  data: ItemValueModel[],
  label: string,
  handleChange?: Function,
  required?: boolean,
  disabled?: boolean
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function RHFSelectBasic({ name, defaultValue = '', data,disabled, required, label, handleChange, ...other }: RHFSelectProps) {
  const { control } = useFormContext();
  return (
    <FormControl fullWidth variant="outlined" >
      <InputLabel htmlFor={name}>{required ? (label && label + ' *') : label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          const checkError = !!error && value?.length === 0;
          return (
            <>
              <Select
                error={checkError}
                value={value}
                onChange={(e) => {
                  onChange(e)
                  handleChange && handleChange(e.target.value)
                }}
                label={required ? (label && label + ' *') : label}
                labelId={name}
                MenuProps={MenuProps}
                disabled={disabled}
              >
                {data.map((option) => (
                  <MenuItem key={option.value} value={option.value} sx={{lineHeight: '36px'}}>{option.label}</MenuItem>
                ))}
              </Select>
              {
                checkError && (
                  <FormHelperText error sx={{ textTransform: 'capitalize' }}>
                    {error?.message}
                  </FormHelperText>
                )
              }
            </>
          )
        }
        }
        defaultValue={defaultValue} // make sure to set up defaultValue
      />

    </FormControl >
  );
}
