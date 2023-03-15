import React from "react";
import Chart from "react-apexcharts";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RepoCard(props) {
  const { repo, user } = props;

  const navigate = useNavigate();
  const getLanguagesName = Object.keys(repo.limbi);

  const seriesData = getLanguagesName.map((language) => {
    return {
      name: language,
      data: [repo.limbi[language]],
    };
  });

  const ApexChartData = {
    series: seriesData,
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },

      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Used languages",
      },
      xaxis: {
        categories: ["repo langs"],

        show: false,
        labels: { show: false },
        axisBorder: { show: false },
        tooltip: { enabled: false },
      },

      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  };

  return (
    <>
      <Card
        key={repo.id}
        className="repository_card"
        sx={{ width: 1, height: 202 }}
        id={repo.id}
        onClick={() => {
          navigate(`/profile/${user?.login}/${repo.name}`, { state: { repo } });
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            ceva aici
          </Typography>
          <Typography variant="h5" component="span">
            {repo.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {repo.limbi &&
              Object.keys(repo.limbi).map((lang) => (
                <i
                  key={lang}
                  className={"programming lang-" + lang.toLowerCase()}
                >
                  {" "}
                </i>
              ))}
          </Typography>
          <Typography>
            <Chart
              options={ApexChartData.options}
              series={ApexChartData.series}
              type="bar"
              height={150}
            />
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
}
