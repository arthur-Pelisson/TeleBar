import {
  Button,
  extendTheme,
  FormControl,
  Input,
  NativeBaseProvider,
  Stack,
  Text,
  Alert,
  Collapse,
} from "native-base";
import * as React from "react";
import ForgotPassword from "./ForgotPassword";
import { StyleSheet, ScrollView } from "react-native";

const LoginCustomer = (props) => {
  const axios = require("axios").default;

  const theme = extendTheme({
    colors: {
      primary: {
        olight: "#F2AB27",
        odark: "#D94D1A",
        orange: "#D97D0D",
        grey: "#323E40",
        red: "#732002",
      },
    },
  });

  const [show, setShow] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleClick = () => setShow(!show);

  const login = () => {
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://localhost:3000/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.status);
        if (response.data.status == "error") {
          setShowAlert(true);
        } else {
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView>
        <Stack px={16} safeArea mt={6}>
          <Text bold fontSize={"41px"} color={"primary.red"}>
            Se connecter
          </Text>
          <Stack space={4} pt={12}>
            <FormControl>
              <FormControl.Label>
                <Text thin fontSize={"20px"} color={"primary.orange"}>
                  E-mail
                </Text>
              </FormControl.Label>
              <Input
                variant="rounded"
                _focus={{ borderColor: "primary.orange" }}
                onChangeText={(val) => setEmail(val)}
                value={email}
              />
              <FormControl.ErrorMessage>
                Veuillez rentrer un e-mail valide.
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text thin fontSize={"20px"} color={"primary.orange"}>
                  Mot de passe
                </Text>
              </FormControl.Label>
              <Input
                type={show ? "text" : "password"}
                InputRightElement={
                  <Button
                    ml={1}
                    roundedLeft={0}
                    roundedRight="md"
                    onPress={handleClick}
                    backgroundColor={"primary.orange"}
                  >
                    {show ? "Cacher" : "Afficher"}
                  </Button>
                }
                variant="rounded"
                _focus={{ borderColor: "primary.orange" }}
                value={password}
                onChangeText={(val) => setPassword(val)}
              />
              <FormControl.HelperText>
                <ForgotPassword />
              </FormControl.HelperText>
              <FormControl.ErrorMessage>
                Veuillez rentrer un mot de passe valide.
              </FormControl.ErrorMessage>
            </FormControl>
            <Collapse isOpen={showAlert}>
              <Alert status="error" w="100%">
                <Alert.Icon />
                <Alert.Title>Erreur</Alert.Title>
                <Alert.Description>
                  Les identifiants rentrés ne sont pas corrects.
                </Alert.Description>
              </Alert>
            </Collapse>
            <Button
              rounded="xl"
              w={"75%"}
              bg={"primary.red"}
              alignSelf="flex-end"
              onPress={login}
            >
              <Text color={"white"}>Se connecter</Text>
            </Button>
            <Text pt={7} fontSize={"24px"} bold color={"primary.orange"}>
              Vous n’avez toujours pas de compte ?
            </Text>
            <Button
              alignSelf="center"
              rounded="xl"
              w={"75%"}
              bg={"primary.grey"}
              onPress={() => props.onChange("signup")}
            >
              <Text color={"white"}>Créer mon compte</Text>
            </Button>
            <Text pt={7} fontSize={"24px"} bold color={"primary.orange"}>
              Vous êtes un bar partenaire ?
            </Text>
            <Button
              alignSelf="center"
              rounded="xl"
              w={"75%"}
              bg={"primary.grey"}
              onPress={() => props.onChange("pro")}
            >
              <Text color={"white"}>Se connecter à mon bar</Text>
            </Button>
          </Stack>
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default LoginCustomer;
