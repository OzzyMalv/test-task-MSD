"use client";

import { Typography } from "antd";

const { Title } = Typography;

export function HeaderView() {
  return (
    <header className="border-b-2 px-16 pt-4 shadow-md">
      <Title className="m-0" level={2}>
        Viruses
      </Title>
    </header>
  );
}
