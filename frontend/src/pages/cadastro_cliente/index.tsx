import { useForm } from "react-hook-form";
import React from "react";
import {FormLabel,FormControl,Input,Button} from '@chakra-ui/react';

export default function Cliente() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();


  const onSubmit = async (data: any) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    const response = await fetch('http://localhost:3001/cliente', requestOptions);
    const jsonData = await response.json();

    console.log(jsonData);
}

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
     
      <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="nome">Razão Social</FormLabel>
            <Input
                id="nome"
                type="text"
                placeholder="Nome"
                {...register("nome", {
                required: true,
                })}
              />

        <FormLabel htmlFor="cnpj">CNPJ</FormLabel>
            <Input
                id="cnpj"
                type="text"
                required={true}
                placeholder="XX.XXX.XXX/XXXX-XX"
                {...register("cnpj", {
                required: true,
                })}
              />

      <Button w= '80px' h = '40px' mt={50} color="#00000" bg="#1a83ff" isLoading={isSubmitting} type="submit">
        Enviar
      </Button>
        </FormControl>


    </form>

  );
}
