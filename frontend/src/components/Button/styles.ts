import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#ffff',
    backgroundColor: '#198754',
    '&:hover': {
      backgroundColor: '#198754',
    },
  }));

  