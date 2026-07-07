import cron from "node-cron";
import { Event } from "../models/event.models.js";
import sendEmail from "../utils/sendemail.js";
import { reminderTemplate } from "../templates/reminder.js";

cron.schedule("0 0 * * *", async () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const events = await Event.find({ date: tomorrow }).populate("userId");

  for (const event of events) {
    if (!event.userId?.email) continue;

    await sendEmail({
      to: event.userId.email,
      subject: "Event Reminder",
      html: reminderTemplate(event)
    });
  }

  console.log("✅ Reminder emails sent for tomorrow’s events");
});