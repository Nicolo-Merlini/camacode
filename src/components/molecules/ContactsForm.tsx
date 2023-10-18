import { Box, Button, ButtonGroup, Input, Select, Text, Textarea } from "@chakra-ui/react";
import ConfirmEmailModal from "./ConfirmEmailModal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EmailTemplateProps } from "../email/email-template";
import Link from "next/link";

export const ContactsForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState<string | undefined>()
  const [budget, setBudget] = useState<string | undefined>()

  const { register, handleSubmit, watch, reset, formState: { isValid } } =
    useForm<EmailTemplateProps>();
  const onSubmit = handleSubmit(() => sendEmail());

  const sendEmail = async () => {
    const endpoint = `/api/send-email?firstName=${watch(
      "firstName"
    )}&lastName=${watch("lastName")}&email=${watch("email")}&company=${watch(
      "company"
    )}&project=${project}&budget=${budget}&info=${watch(
      "info"
    )}`;
    try {
      await fetch(endpoint);
      setIsOpen(true);
      reset();
      setProject(undefined);
      setBudget(undefined);
    } catch {
      console.log("errore");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Box className="md:w-9/12 lg:w-8/12 mx-auto pt-[30px] lg:pt-[50px] pb-[35vh]"
        >
          <Box className="grid md:grid-cols-2 gap-[20px]">
            <Input
              type="text"
              placeholder="Nome"
              borderRadius="20px"
              size="lg"
              {...register("firstName", { required: true })}
              bg={'white'}
              borderWidth={'1px'}
              borderColor={'gray300'}
              height={'60px'}
              color={'dark'}
              _placeholder={{
                color: "gray700",
              }}
              fontWeight={'500'}
            />
            <Input
              type="text"
              placeholder="Cognome"
              borderRadius="20px"
              size="lg"
              {...register("lastName", { required: true })}
              bg={'white'}
              borderWidth={'1px'}
              borderColor={'gray300'}
              height={'60px'}
              color={'dark'}
              _placeholder={{
                color: "gray700",
              }}
              fontWeight={'500'}
            />
            <Input
              type="email"
              placeholder="Email"
              borderRadius="20px"
              size="lg"
              {...register("email", { required: true })}
              bg={'white'}
              borderWidth={'1px'}
              borderColor={'gray300'}
              height={'60px'}
              color={'dark'}
              _placeholder={{
                color: "gray700",
              }}
              fontWeight={'500'}
            />
            <Input
              type="text"
              placeholder="Nome società"
              borderRadius="20px"
              size="lg"
              {...register("company", { required: true })}
              bg={'white'}
              borderWidth={'1px'}
              borderColor={'gray300'}
              height={'60px'}
              color={'dark'}
              _placeholder={{
                color: "gray700",
              }}
              fontWeight={'500'}
            />
            <Select
              bg={'white'}
              borderWidth={'1px'}
              borderColor={'gray300'}
              height={'60px'}
              color={'dark'}
              _placeholder={{
                color: "gray700",
              }}
              fontWeight={'500'}
              borderRadius="20px"
              size="lg"
              placeholder='Tipologia Progetto'
              value={project}
              defaultValue={''}
              onChange={(e) => {
                setProject(e.target.value)
              }}
            >
              <option value='App'>App</option>
              <option value='e-commerce'>E-commerce</option>
              <option value='gestionale'>Gestionale</option>
              <option value='big data'>Big Data</option>
              <option value='ai'>AI</option>
              <option value='servizi customizzati'>Servizi Customizzati</option>
              <option value='altro'>Altro</option>
            </Select>

            <Select
              bg={'white'}
              borderWidth={'1px'}
              borderColor={'gray300'}
              height={'60px'}
              color={'dark'}
              _placeholder={{
                color: "gray700",
              }}
              fontWeight={'500'}
              borderRadius="20px"
              size="lg"
              placeholder='Budget'
              value={budget}
              defaultValue={''}
              onChange={(e) => {
                setBudget(e.target.value)
              }}
            >
              <option value='{< 10.000€'>{'< 10.000€'}</option>
              <option value='da 10.000€ a 30.000€'>da 10.000€ a 30.000€</option>
              <option value='da 30.000€ a 100.000€'>{'da 30.000€ a 100.000€'}</option>
              <option value='> 100.000'>{'> 100.000'}</option>
              <option value='non lo so'>{'non lo so'}</option>
            </Select>
          </Box>
          <Textarea
            className="mt-[20px]"
            placeholder="Informazioni aggiuntive"
            borderRadius="20px"
            size="lg"
            minH={"150px"}
            {...register("info")}
            bg={'white'}
            borderWidth={'1px'}
            borderColor={'gray300'}
            height={'60px'}
            color={'dark'}
            _placeholder={{
              color: "gray700",
            }}
            fontWeight={'500'}
          />

          <Button
            type="submit"
            borderRadius="20px"
            className="my-[20px]"
            variant="black"
            size={'lg'}
            width={'full'}
            isDisabled={!isValid || !project || !budget}
            bg={'dark'}
            _disabled={{
              bg: 'gray700',
              color: 'white'
            }}
            _hover={{
              bg: 'gray700',
              color: 'white'

            }}
          >
            Compila il form
          </Button>
          <Text
            fontStyle={'italic'}
            textStyle={'h5'}
            fontWeight={'500'}
            color={'gray700'}
          >
            Oppure
          </Text>
          <Link
            href={"https://calendly.com/camacode/introductory-meeting"}
            target="_blank"
          >
            <Button
              type="button"
              borderRadius="20px"
              className="my-[20px]"
              variant={["green", "green", "green", "white"]}
              size={'lg'}
              width={'full'}

            >
              Schedula un meeting
            </Button>
          </Link>


        </Box>

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
