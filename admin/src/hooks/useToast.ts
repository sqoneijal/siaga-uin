export const useToast = () => {
   return {
      success: (msg: string) => alert(`SUCCESS: ${msg}`),
      error: (msg: string) => alert(`ERROR: ${msg}`),
   };
};
