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
import { ScrollView, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

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
  const [date, setDate] = React.useState(new Date(Date.now()));
  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView>
        <Stack px={16} safeArea my={6}>
          <Text bold fontSize={"41px"} color={"primary.red"}>
            Créer mon compte
          </Text>
          <Stack space={4} pt={12}>
            <FormControl isRequired>
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
            <FormControl isRequired>
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
              <FormControl.ErrorMessage>
                Veuillez rentrer un mot de passe valide.
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label>
                <Text thin fontSize={"20px"} color={"primary.orange"}>
                  Confirmation de mot de passe
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
              <FormControl.ErrorMessage>
                Veuillez rentrer un mot de passe valide.
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text thin fontSize={"20px"} color={"primary.orange"}>
                  Nom
                </Text>
              </FormControl.Label>
              <Input
                variant="rounded"
                _focus={{ borderColor: "primary.orange" }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text thin fontSize={"20px"} color={"primary.orange"}>
                  Prénom
                </Text>
              </FormControl.Label>
              <Input
                variant="rounded"
                _focus={{ borderColor: "primary.orange" }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text thin fontSize={"20px"} color={"primary.orange"}>
                  Numéro de téléphone
                </Text>
              </FormControl.Label>
              <Input
                variant="rounded"
                _focus={{ borderColor: "primary.orange" }}
                keyboardType="number-pad"
                maxLength={10}
              />
              <FormControl.ErrorMessage>
                Veuillez rentrer un numéro valide.
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text thin fontSize={"20px"} color={"primary.orange"}>
                  Date de naissance
                </Text>
              </FormControl.Label>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                display="default"
                locale="fr"
                maximumDate={new Date(Date.now())}
              />
            </FormControl>

            <Button
              rounded="xl"
              w={"75%"}
              bg={"primary.red"}
              alignSelf="flex-end"
            >
              <Text color={"white"}>S'inscrire</Text>
            </Button>
            <Text pt={7} fontSize={"24px"} bold color={"primary.orange"}>
              Vous avez déjà un compte ?
            </Text>
            <Button
              alignSelf="center"
              rounded="xl"
              w={"75%"}
              bg={"primary.grey"}
              onPress={() => props.onChange("customer")}
            >
              <Text color={"white"}>Se connecter</Text>
            </Button>
          </Stack>
        </Stack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({});

export default LoginPro;
