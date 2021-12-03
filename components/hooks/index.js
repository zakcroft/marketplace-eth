import { useHooks } from "../providers";

export const useAccount = () => {
  return useHooks((hooks) => hooks.useAccount)();
};

export const useNetwork = () => {
  return useHooks((hooks) => hooks.useNetwork)();
};
