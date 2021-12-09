// import { useState, useCallback } from "react";
// import { createUseAccount } from "./useAccount";
// import { createUseNetwork } from "./useNetwork";
import { useWeb3 } from "../providers";

// export default function SetUpHooks(...deps) {
//   const [hooks, setState] = useState({});
//
//   useCallback((...deps) => {
//     console.log("RUNNING ++++ setHooks");
//     setState({
//       useAccount: createUseAccount(...deps),
//       useNetwork: createUseNetwork(...deps),
//     });
//   }, []);
//
//   return { ...hooks };
// }

export function useHooks(cb) {
  const { hooks } = useWeb3();
  return cb(hooks);
}

export const useAccount = () => {
  return useHooks((hooks) => {
    return hooks.useAccount;
  })();
};

export const useNetwork = () => {
  return useHooks((hooks) => hooks.useNetwork)();
};
