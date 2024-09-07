import styled from "styled-components";

export const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  gap: "1rem",
  overflowY: "auto",

  "&::-webkit-scrollbar": {
    width: "0.5rem",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "#00000039",
    borderRadius: "0.5rem",
  }
}))


export const Title = styled("h1")(({ theme }) => ({
  color: theme.colors.primary,
  fontSize: "2.5rem",
  textTransform: "capitalize",
  fontWeight: "600",
  lineHeight: "3rem",
}))


export const List = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
}))


export const Item = styled("div")(({ theme }) => ({
  display: "flex",
  paddingTop: "1rem",

  "> div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: "1",
    gap: "1.5rem",

    "> h1": {
      color: theme.colors.text,
      fontSize: "1.5rem",
      textTransform: "capitalize",
      fontWeight: "600",
      lineHeight: "1.5rem",
    },

    "> span": {
      color: theme.title === 'light' ? theme.colors.textDescription : theme.colors.text,
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "1rem",
    },

    "> p": {
      color: theme.colors.text,
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "1rem",
    },
  },

  "img": {
    width: "100px",
    height: "100px",
    borderRadius: "0.5rem",
  }
}))