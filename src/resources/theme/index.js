import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    bgCategory: "#1DB779",
    bgFooter: "#1E1E1E",
    bgBlue: "#00C4C1",
    gray1: "#D1D3D4",
    gray2: "#9B9B9B",
    bgWhite: "#F5F5F5",
  },
};

const styles = {
  global: {
    "html, body": {
      bg: "white",
    },
  },
};

export const theme = extendTheme({ colors, styles });
