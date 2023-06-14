import React from "react";

import { useMediaDevices } from "../../hooks/useMediaDevices";

function Template() {
  const state = useMediaDevices();

  // return <pre>{JSON.stringify(null, null, 2)}</pre>;
  return;
}

export const ListDevices = Template.bind({});

export default Template;
