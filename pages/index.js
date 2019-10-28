import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import App from "../components/App";
import { Stack, Box, Heading } from "@chakra-ui/core";

const Home = ({ activities }) => {
  return (
    <App>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack>
        {activities.map(activity => (
          <Box key={activity.ref["@ref"].id}>
            <Heading size="sm">{activity.data.name}</Heading>
          </Box>
        ))}
      </Stack>
    </App>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api");
  const data = await res.json();

  return { activities: data };
};

export default Home;
