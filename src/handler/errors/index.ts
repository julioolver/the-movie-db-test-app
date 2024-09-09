import { toast } from "vue3-toastify";

const catchErrors = (error: any) => {
  const messageError = catchStatusCodeErrors(error);

  toast.error(messageError);
};

const catchStatusCodeErrors = (error: any): string => {
  if (error.response && error.response.status === 422) {
    return Object.values(error.response.data.errors).flat().join("<br>");
  }

  if (error.code === "ERR_NETWORK") {
    return "Ocorreu uma inconsistência oa estabelecer a conexão com o servidor.";
  }

  return error.message;
};

export { catchErrors };
