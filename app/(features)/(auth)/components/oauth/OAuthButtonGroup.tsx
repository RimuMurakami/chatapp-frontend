import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { FaGithub as GitHubIcon, FaGoogle as GoogleIcon, FaTwitter as TwitterIcon } from "react-icons/fa";

const providers = [
  { name: "Google", icon: <GoogleIcon color={"orange"} /> },
  { name: "Twitter", icon: <TwitterIcon color={"blue"} /> },
  { name: "GitHub", icon: <GitHubIcon /> },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="secondary" spacing="4">
    {providers.map(({ name, icon }) => (
      <Button key={name} flexGrow={1} variant={"outline"} size={"lg"} w={100}>
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);
