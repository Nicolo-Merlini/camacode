import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { Dialog, Transition } from "@headlessui/react";
import { SendMail } from "iconoir-react";
import React, { FC } from "react";
import { Fragment } from "react";

const ConfirmEmailModal: FC<{
  isOpen: boolean;
  handleCloseButton: () => void;
}> = ({ isOpen, handleCloseButton }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleCloseButton}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div
            className={`flex  items-center justify-center p-4 min-h-full text-center`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full  transform overflow-hidden rounded-[30px] max-w-md bg-white p-6 text-left align-middle shadow-xl transition-all`}
              >
                <Box textAlign={"center"} display={"grid"}>
                  <VStack gap={[5, 5, 8]} color={"dark"}>
                    <SendMail className="h-16 w-16 mt-1" />
                    <Text
                      fontSize={"4xl"}
                      fontWeight={"black"}
                      color={"dark"}
                      lineHeight={"6"}
                    >
                      Grazie!
                    </Text>
                    <Text
                      fontSize={"16px"}
                      fontWeight={"regular"}
                      color={"gray700"}
                      lineHeight={"short"}
                    >
                      La tua richiesta e’ stata inviata con successo. In questi
                      giorni verrai contattato da un membro del nostro team.
                    </Text>

                    <Button
                      fontWeight={"bold"}
                      onClick={handleCloseButton}
                      size={"lg"}
                      width={"full"}
                      borderRadius={"30px"}
                      variant={"green"}
                    >
                      affare fatto!
                    </Button>
                  </VStack>
                </Box>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ConfirmEmailModal;
