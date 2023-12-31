import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { Form } from '../forms/form';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const styleButton = {
  
}

interface CadastroProps {
  onSalvar: (formData: any) => void;
}

export const Cadastro: React.FC<CadastroProps> = ({ onSalvar}) => {

  const [formulario, setFormulario] = React.useState({
    cliente: '',
    data: '',
    email: '',
    celular: '',
  });

  const handleSalvar = () => {
    const dadosFormulario = formulario
    onSalvar(dadosFormulario);
    handleClose();
  };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
      // Limpar o formulário ao fechar o modal
      setFormulario({
        cliente: '',
        data: '',
        email: '',
        celular: '',
      });
    };

      // Função para atualizar o estado do formulário com base nas mudanças nos campos do formulário
  const handleChange = (campo: any, valor: any) => {
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [campo]: valor,
    }));
  };

  
    return(
        <div>
        <Button onClick={handleOpen}>Cadastro</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} >
            <span className="modal-close"  onClick={handleClose} id="modalClose">&#10006;</span>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Novo Cliente
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Form onChange={handleChange} />
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleSalvar}>Salvar</Button>
            </Typography>
          </Box>
        </Modal>
      </div>
);
}