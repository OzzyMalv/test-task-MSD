"use client";

import {Button, Card, Typography} from "antd";
import {AlignRightOutlined, DownloadOutlined, FilterOutlined} from "@ant-design/icons";

const {Title} = Typography


export function GraphsView() {

  return (
    <div className="px-40 py-10">
      <div className="flex justify-between">
        <Title className="m-0" level={4}>Page title</Title>
        <div className="flex gap-6">
          <Button icon={<DownloadOutlined />}>
            Export to PDF
          </Button>
          <Button icon={<AlignRightOutlined />}>
            Notes <span className="text-gray-400">(3)</span>
          </Button>
          <Button icon={<FilterOutlined />}>
            Filter
          </Button>
        </div>
      </div>

      <div className="flex justify-center gap-8 pt-4">
        <Card title="Chart title" style={{ width: 300 }}>
          <p>In progress</p>
        </Card>
        <Card title="Chart title" style={{ width: 300 }} >
          <p>In progress</p>
        </Card>
      </div>
    </div>
  );
}
