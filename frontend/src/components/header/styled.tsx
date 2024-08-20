import styled from "styled-components";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  gap: "1rem",
  background: theme.colors.background,
  borderTop: `2px solid #ccc`,
}))


export const NavMenu = styled("ul")(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
}))


export const NavItem = styled("li")(({ theme }) => ({
  listStyle: "none",
}))


export const Link = styled("a")(({ theme, active }) => ({
  color: theme.colors.text,
  fontWeight: "bold",
  textDecoration: "none",

  '&:hover': {
    color: theme.colors.primary
  },

  ...(active && {
    borderBottom: `2px solid ${theme.colors.primary}`,
  }),
}))