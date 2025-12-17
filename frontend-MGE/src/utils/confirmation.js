import Swal from "sweetalert2";

export const confirmDelete = async ({
  title = "Delete data?",
  text = "This action cannot be undone.",
  confirmText = "Delete",
  cancelText = "Cancel",
} = {}) => {
  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#6b7280",
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    reverseButtons: true,
  });

  return result.isConfirmed;
};
