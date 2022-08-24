import React, { useState } from "react";

export const useForm = (callback: any, initialState = {
  Nome: "",
    Fabricante: "",
    Serie: "",
}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values, [event.target.name]:
        event.target.value
    });
  };

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({
      ...values, [event.target.name]:
        event.target.value
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
  };
  return {
    onChange,
    onChangeSelect,
    onSubmit,
    values,
  };
}