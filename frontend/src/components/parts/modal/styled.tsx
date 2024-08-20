import styled from "styled-components";

export const Container = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0, 0, 0, 0.5)",

  zIndex: 9999,

  "> div": {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    margin: "1rem",
    gap: "1rem",
    color: theme.colors.text,
    background: theme.colors.background,
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
  
    "> div": {
      display: "flex",
      gap: "1rem",
      alignItems: "center",
    }
  }
}))