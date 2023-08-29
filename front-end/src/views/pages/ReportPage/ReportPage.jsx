import React, { useEffect, useState } from "react";

//service
import { getReport } from "../../../services/articlesService";

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

  const generateLast30Days = () => {
    const result = [];
    for (let i = 0; i < 30; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      result.push(d.toISOString().split("T")[0]);
    }
    return result.reverse();
  };

  const labels = generateLast30Days();
  const articleCounts = labels.map((label) => {
    const articleCount = reportData?.dailyArticleCounts.find(
      (ac) => ac._id === label
    );
    return articleCount ? articleCount.count : 0;
  });

  const articleData = {
    labels,
    datasets: [
      {
        label: "Articles in Last 30 Days",
        data: articleCounts,
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

  console.log(reportData?.topAuthors);
  console.log(reportData);

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          title: (context) => {
            return `Count: ${context[0].formattedValue}`;
          },
          label: (context) => {
            return `Author: ${context.label}`;
          },
        },
      },
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
