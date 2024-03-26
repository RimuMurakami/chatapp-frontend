"use client";

import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { FaGithub as GitHubIcon, FaGoogle as GoogleIcon, FaTwitter as TwitterIcon } from "react-icons/fa";
import axios from "@/app/lib/axios";
import { Link } from "@chakra-ui/next-js";

const providers = [
  {
    name: "Google",
    icon: (
      <Link href={`${process.env.BACKEND_URL}/auth/google`}>
        <GoogleIcon color={"orange"} />
      </Link>
    ),
  },
  { name: "Twitter", icon: <TwitterIcon color={"blue"} /> },
  { name: "GitHub", icon: <GitHubIcon /> },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="secondary" spacing="4">
    {/* {providers.map(({ name, icon }) => (
      <Button key={name} flexGrow={1} variant={"outline"} size={"lg"} w={100}>
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))} */}
    <Link href={`${process.env.BACKEND_URL}/auth/google`}>
      <Button flexGrow={1} variant={"outline"} size={"lg"} w={100}>
        <GoogleIcon color={"orange"} />
      </Button>
    </Link>
    {/* <Link href={`${process.env.BACKEND_URL}/auth/google`}>
      <Button flexGrow={1} variant={"outline"} size={"lg"} w={100} disabled>
        <TwitterIcon color={"blue"} />
      </Button>
    </Link>
    <Link href={`${process.env.BACKEND_URL}/auth/google`}>
      <Button flexGrow={1} variant={"outline"} size={"lg"} w={100}>
        <GitHubIcon color={""} />
      </Button>
    </Link> */}
  </ButtonGroup>
);
