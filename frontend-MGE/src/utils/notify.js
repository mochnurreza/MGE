import { toast } from "./toast";

export const notifySuccess = (message) =>
  toast.fire({ icon: "success", title: message });

export const notifyError = (message) =>
  toast.fire({ icon: "error", title: message });
