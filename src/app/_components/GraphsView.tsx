"use client";

import { Button, Typography } from "antd";
import {
  AlignRightOutlined,
  DownloadOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { BarChart, PieChart } from "@mui/x-charts";
import { BasicCard } from "~/app/_components/card/BasicCard";

const { Title } = Typography;

type covidCasesT = {
  id: number;
  date: Date;
  amount: number;
};
type virusCasesT = {
  id: number;
  cases: number;
  name: string;
};

interface GraphsViewProps {
  covidCases?: Array<covidCasesT>;
  virusCases?: Array<virusCasesT>;
}

export function GraphsView({
  covidCases = [],
  virusCases = [],
}: GraphsViewProps) {
  const formattedCovidCasesDates = covidCases.map((covidCase) =>
    covidCase.date.toLocaleDateString(),
  );

  const formattedCovidCasesAmounts = covidCases.map(
    (covidCase) => covidCase.amount,
  );

  const formattedVirusCases = virusCases.map((virusCase) => ({
    value: virusCase.cases,
    label: virusCase.name,
  }));

  return (
    <div className="px-2 py-2 lg:px-20 lg:py-5 xl:px-40 xl:py-10">
      <div className="flex flex-wrap justify-between">
        <Title className="m-0" level={4}>
          Statistics page about viruses (UKHSA uk.gov)
        </Title>
        <div className="flex gap-6">
          <Button icon={<DownloadOutlined />}>Export to PDF</Button>
          <Button icon={<AlignRightOutlined />}>
            Notes <span className="text-gray-400">(3)</span>
          </Button>
          <Button icon={<FilterOutlined />}>Filter</Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 pt-4 lg:flex-nowrap">
        <BasicCard title="Covid cases">
          <BarChart
            className="w-10/12"
            xAxis={[
              {
                id: "barCategories",
                data: formattedCovidCasesDates,
                scaleType: "band",
              },
            ]}
            series={[
              {
                data: formattedCovidCasesAmounts,
              },
            ]}
            height={300}
          />
        </BasicCard>
        <BasicCard title="Other viruses cases">
          <PieChart
            series={[
              {
                data: formattedVirusCases,
              },
            ]}
            height={200}
          />
        </BasicCard>
      </div>
    </div>
  );
}
