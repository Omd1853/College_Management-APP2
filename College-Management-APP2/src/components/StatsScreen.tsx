import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { getCollegeStats } from "../services/api";
import type { CollegeStats } from "../types";

export function StatsScreen({ isPublic = false }) {
  const [stats, setStats] = React.useState<CollegeStats | null>(null);

  React.useEffect(() => {
    const fetchStats = async () => {
      const data = await getCollegeStats();
      setStats(data);
    };
    fetchStats();
  }, []);

  if (!stats) {
    return (
      <flexboxLayout style={styles.container}>
        <activityIndicator busy={true} />
      </flexboxLayout>
    );
  }

  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-6 font-bold">
        College Statistics {isPublic ? "(Public View)" : ""}
      </label>

      <gridLayout rows="auto, auto, auto" columns="*, *" className="w-full p-4">
        <label row={0} col={0} className="text-lg">Faculty Count:</label>
        <label row={0} col={1} className="text-lg font-bold">{stats.facultyCount}</label>
        
        <label row={1} col={0} className="text-lg">Student Count:</label>
        <label row={1} col={1} className="text-lg font-bold">{stats.studentCount}</label>
        
        <label row={2} col={0} className="text-lg">Pass Percentage:</label>
        <label row={2} col={1} className="text-lg font-bold">{stats.passPercentage}%</label>
      </gridLayout>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
});