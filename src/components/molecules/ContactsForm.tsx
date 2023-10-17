import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import ConfirmEmailModal from "./ConfirmEmailModal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EmailTemplateProps } from "../email/email-template";

export const ContactsForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, watch, reset } =
    useForm<EmailTemplateProps>();
  const onSubmit = handleSubmit(() => sendEmail());

  const sendEmail = async () => {
    const endpoint = `/api/send-email?firstName=${watch(
      "firstName"
    )}&lastName=${watch("lastName")}&email=${watch("email")}&company=${watch(
      "company"
    )}&project=${watch("project")}&budget=${watch("budget")}&info=${watch(
      "info"
    )}`;
    try {
      await fetch(endpoint);
      setIsOpen(true);
      reset();
    } catch {
      console.log("errore");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Box className="md:w-1/2 mx-auto mt-10">
          <Box className="grid md:grid-cols-2 gap-[20px]">
            <Input
              type="text"
              placeholder="Nome"
              borderRadius="15px"
              size="lg"
              {...register("firstName", { required: true })}
            />
            <Input
              type="text"
              placeholder="Cognome"
              borderRadius="15px"
              size="lg"
              {...register("lastName", { required: true })}
            />
            <Input
              type="email"
              placeholder="Email"
              borderRadius="15px"
              size="lg"
              {...register("email", { required: true })}
            />
            <Input
              type="text"
              placeholder="Nome società"
              borderRadius="15px"
              size="lg"
              {...register("company", { required: true })}
            />
            <Input
              type="text"
              placeholder="Tipologia Progetto"
              borderRadius="15px"
              size="lg"
              {...register("project", { required: true })}
            />
            <Input
              type="text"
              placeholder="budget"
              borderRadius="15px"
              size="lg"
              {...register("budget", { required: true })}
            />
          </Box>
          <Textarea
            className="mt-[20px]"
            placeholder="Informazioni aggiuntive"
            borderRadius="15px"
            size="lg"
            minH={"150px"}
            {...register("info")}
          />
        </Box>
        <Button
          type="submit"
          borderRadius="15px"
          className="my-10 md:w-1/2"
          variant="black"
        >
          Contattaci!
        </Button>
      </form>
      <ConfirmEmailModal
        isOpen={isOpen}
        handleCloseButton={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};

export default ContactsForm;
