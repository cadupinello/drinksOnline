import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;

      background: string;
      backgroundInput: string;
      text: string;
      textDescription: string;
    }
  }
}