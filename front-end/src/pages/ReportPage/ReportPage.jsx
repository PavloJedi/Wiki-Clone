import React, { useEffect, useState } from "react";

//service
import { getReport } from "../../services/articlesService";

//styles
import styles from "./ReportPage.module.scss";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ReportPage = () => {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await getReport("2023-01-01", "2023-12-31");
        setReportData(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchReport();
  }, []);

  const articleData = {
    labels: [...Array(30).keys()].map((i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Articles in Last 30 Days",
        data: reportData?.dailyArticleCounts,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: false,
      },
    ],
  };

  const authorData = {
    labels: reportData?.topAuthors.map((author) => author.name),
    datasets: [
      {
        label: "Top Authors",
        data: reportData?.topAuthors.map((author) => author.count),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        color: "white",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", color: "white" }}>Loading...</div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <Line
          data={articleData}
          options={{ ...options, title: { text: "Articles in Last 30 Days" } }}
        />
      </div>
      <div className={styles.chart}>
        <Line
          data={authorData}
          options={{ ...options, title: { text: "Top Authors" } }}
        />
      </div>
    </div>
  );
};

export default ReportPage;
