import styled from "styled-components";

export const Layout = styled("div")(({ theme }) => ({
  backgroundColor: theme.colors.background,
  color: theme.colors.text,

  width: "100%",
  height: "100vh",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}))