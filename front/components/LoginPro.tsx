import {
  Button,
  extendTheme,
  FormControl,
  Input,
  NativeBaseProvider,
  Stack,
  Text,
} from "native-base";
import * as React from "react";
import ForgotPassword from "./ForgotPassword";
import { StyleSheet, ScrollView } from "react-native";

const LoginPro = (props) => {
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
  const handleClick = () => setShow(!show);

  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView>
        <Stack px={16} safeArea mt={6}>
          <Text bold fontSize={"41px"} color={"primary.red"}>
            Se connecter à un compte pro
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
              />
              <FormControl.HelperText>
                <ForgotPassword />
              </FormControl.HelperText>
              <FormControl.ErrorMessage>
                Veuillez rentrer un mot de passe valide.
              </FormControl.ErrorMessage>
            </FormControl>

            <Button
              rounded="xl"
              w={"75%"}
              bg={"primary.red"}
              alignSelf="flex-end"
            >
              <Text color={"white"}>Se connecter</Text>
            </Button>
            <Text pt={7} fontSize={"24px"} bold color={"primary.orange"}>
              Vous souhaitez vous connecter à votre compte client ?
            </Text>
            <Button
              alignSelf="center"
              rounded="xl"
              w={"75%"}
              bg={"primary.grey"}
              onPress={() => props.onChange("customer")}
            >
              <Text color={"white"}>Se connecter à mon compte</Text>
            </Button>
          </Stack>
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default LoginPro;
