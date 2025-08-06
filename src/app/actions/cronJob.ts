import cron from "node-cron";
import { updateGoldPricesCron } from "../api/gold/price/route";

// Run every 30 minutes
const task = cron.schedule(
  "*/30 * * * *",
  async () => {
    console.log("Running scheduled gold price update...");
    try {
      await updateGoldPricesCron();
    } catch (error) {
      console.error("Cron job failed:", error);
    }
  },
  {
    timezone: "UTC",
  }
);

// Start the task (this replaces the 'scheduled: true' option)
task.start();

console.log("Gold price cron job scheduled - runs every 30 minutes");

// Optional: Stop the task gracefully on process termination
process.on("SIGINT", () => {
  console.log("Stopping cron job...");
  task.stop();
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("Stopping cron job...");
  task.stop();
  process.exit(0);
});
