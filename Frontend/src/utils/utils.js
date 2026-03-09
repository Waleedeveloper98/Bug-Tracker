export const statusShow = (s) => {
    switch (s) {
        case "open":
            return "warning";

        case "resolved":
            return "success";

        case "in-progress":
            return "danger";

        default:
            return "";
    }
};
export const priorityShow = (p) => {
    switch (p) {
        case "high":
            return "warning";

        case "low":
            return "success";

        case "medium":
            return "danger";

        default:
            return "";
    }
};