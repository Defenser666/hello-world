import * as React from "react";
import Navbarx from './navbar'
import Cardx from './cards'
import Dropdownx from './dropdown'
import Loadingx from './loading'
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <Navbarx />
      <Cardx />
      <Dropdownx />
      <Loadingx />
    </NextUIProvider>
  );
}

export default App