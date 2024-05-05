"use client";

import {Typography} from "antd";

const {Title} = Typography


export function HeaderView() {

  return (
    <header className="px-16 pt-4 border-b-2 shadow-md">
      <Title className="m-0" level={2}>App title</Title>
    </header>
  );
}
