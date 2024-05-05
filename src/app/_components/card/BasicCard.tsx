"use client";

import React, { type ReactElement } from "react";
import { Avatar, Button, Card } from "antd";
import { CommentOutlined, SmileOutlined } from "@ant-design/icons";

interface BasicCardProps {
  title: string;
  children?: ReactElement;
}

export function BasicCard({ title, children }: BasicCardProps) {
  return (
    <Card className="w-[500px]" title={title}>
      {children}

      <div className="absolute bottom-2 flex w-[90%] justify-between">
        <Avatar icon={<SmileOutlined />} />
        <Button icon={<CommentOutlined />}>3</Button>
      </div>
    </Card>
  );
}
