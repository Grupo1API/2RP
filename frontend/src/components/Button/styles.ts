import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 'normal',
  color: '#ffff',
    backgroundColor: '#198754',
    '&:hover': {
      color: '#ffff',
      backgroundColor: '#156e44',
    },
  }));

  