import styled from "styled-components";

export const Container = styled("div")(({ theme }) => ({
  backgroundColor: theme.colors.background,
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
  
  '@media (max-width: 768px)': {
    width: "100%",
    height: "100%",
  },

  width: "40%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
}))