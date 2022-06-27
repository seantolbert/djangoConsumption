import React from "react";
import { color, fontWeight, height, styled } from "@mui/system";

export default function Footer() {

  const FooterContainer = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: '500px, 0',
    height: '20vh',
    background: '#474747',
    color: 'white',
    fontWeight: 'bold'
  });

  return <FooterContainer>Sample Front End</FooterContainer>;
}
