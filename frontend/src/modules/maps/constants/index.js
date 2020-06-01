import markOrange from "static/mark-orange.png";
import markBlack from "static/mark-black.png";
import markRed from "static/mark-red.png";
import markGreen from "static/mark-green.png";

export const MARK_TYPES = {
  high: {
    label: "High priority",
    image: markRed
  },
  medium: {
    label: "Medium priority",
    image: markOrange
  },
  low: {
    label: "Low priority",
    image: markBlack
  },
  resolved: {
    label: "Resolved",
    image: markGreen
  }
};
