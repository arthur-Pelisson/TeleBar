import React from "react";
import {
  Button,
  FormControl,
  Input,
  Modal,
  Pressable,
  Text,
} from "native-base";
import { useState } from "react";
export const ModalPassword = () => {
  const [showModal, setShowModal] = useState(false);

  function usePass() {
    setShowModal(false);
  }

  return (
    <>
      <Pressable onPress={() => setShowModal(true)} pt={4}>
        <Text textAlign={"right"} thin fontSize={"15px"}>
          J’ai oublié mon mot de passe
        </Text>
      </Pressable>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            <Text fontSize={20} bold color={"primary.red"}>
              Obtenir un mail de récupération
            </Text>
          </Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>
                Nous allons vous envoyer un mail pour pouvoir réinitilaiser
                votre mot de passe.
              </FormControl.Label>
              <Input placeholder="Veuillez saisir votre e-mail..."></Input>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost">
              <Button bg={"primary.odark"} onPress={() => usePass()}>
                <Text bold color={"white"}>
                  Validez
                </Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default () => {
  return <ModalPassword />;
};
