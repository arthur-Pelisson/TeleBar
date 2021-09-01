import { extendTheme, NativeBaseProvider } from "native-base";
import * as React from "react";
import LoginCustomer from "../components/LoginCustomer";
import LoginPro from "../components/LoginPro";
import Signup from "../components/Signup";

export default function LoginScreen() {
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

  const [page, setPage] = React.useState("customer");

  function handlePage(pageToSet: React.SetStateAction<string>) {
    setPage(pageToSet);
  }

  if (page == "pro") {
    return (
      <NativeBaseProvider theme={theme}>
        <LoginPro onChange={handlePage}></LoginPro>
      </NativeBaseProvider>
    );
  } else if (page == "signup") {
    return (
      <NativeBaseProvider theme={theme}>
        <Signup onChange={handlePage}></Signup>
      </NativeBaseProvider>
    );
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <LoginCustomer onChange={handlePage}></LoginCustomer>
      </NativeBaseProvider>
    );
  }
}
