import styled from "styled-components";

export const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  gap: "1rem",
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
    cursor: "pointer",

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

    "> div": {
      display: "flex",
      alignItems: "center",
      gap: "1rem",

      "> p": {
        color: theme.colors.text,
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "1rem",
      },

      "> button": {
        backgroundColor: theme.colors.secondary,
        color: theme.colors.background,
        border: "none",
        outline: "none",
        padding: "0.5rem",
        borderRadius: "2px",
        cursor: "pointer",

        "&:hover": {
          backgroundColor: theme.colors.primary,
        },

        '&.trashIcon': {
          'svg': {
            width: "14px",
            height: "14px",
          },
          backgroundColor: theme.colors.background,
          color: theme.colors.primary,
          padding: "0",
          margin: "0",
          cursor: "pointer",
        }
      }
    },
  },

  "img": {
    width: "100px",
    height: "100px",
    borderRadius: "0.5rem",
  }
}))


export const Orders = styled("div")(({ theme }) => ({
  display: "flex",
  width: "35%",
  padding: "0.5rem",
  backgroundColor: theme.colors.background,
  color: theme.colors.text,
  border: `2px solid ${theme.colors.primary}`,
  borderRadius: "2px",
  position: "fixed",
  bottom: "1rem",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",

  "> h1": {
    fontSize: "16px",
    textTransform: "capitalize",
    fontWeight: "600",
    lineHeight: "1.5rem",
  },

  "> p": {
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "1rem",
  },

  "> button": {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.background,
    border: "none",
    outline: "none",
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "2px",
    transition: "all 0.2s ease-in-out",
    fontWeight: "600",

    "&:hover": {
      backgroundColor: theme.colors.background,
      color: theme.colors.text,
    },
  },

  "@media (max-width: 768px)": {
    width: "90%",
  }
}))