import styled from "styled-components";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  background: theme.colors.background,
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",

  'img': {
    width: "400px",
    height: "400px",
    alignSelf: "center",

    '@media (max-width: 768px)': {
      width: "300px",
      height: "300px",

    },
  },
}))

export const Title = styled("h1")(({ theme }) => ({
  color: theme.colors.primary,
  fontSize: "3rem",
  textTransform: "capitalize",
  fontWeight: "600",
  lineHeight: "3rem",

  '@media (max-width: 768px)': {
    fontSize: "2.5rem",
  },

}))

export const Text = styled("p")(({ theme }) => ({
  color: theme.colors.secondary,
  fontSize: "12px",
  fontWeight: "600",
  marginTop: "15px",
}))

export const Address = styled("p")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  color: theme.colors.text,
  fontSize: "1rem",
  fontWeight: "600",
  marginTop: "15px",

  "svg": {
    color: theme.colors.primary
  }
}))

export const Link = styled("a")(({ theme }) => ({
  color: theme.colors.secondary,
  textDecoration: "none",

  ".social-medias": {
    color: theme.colors.primary,
    fontSize: "1rem",
  }
}))

export const SocialMedias = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "15px",
  gap: "15px",

  'div': {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "5px 0",

    'svg': {
      width: "20px",
      height: "20px",
      color: theme.colors.primary
    },
  }
}))

export const Button = styled("button")(({ theme }) => ({
  background: theme.colors.primary,
  color: theme.colors.background,
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  marginTop: "15px",
  cursor: "pointer",
}))