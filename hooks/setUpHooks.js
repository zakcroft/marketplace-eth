import { createUseAccount } from "./useAccount";
import { createUseNetwork } from "./useNetwork";

const setupHooks = (...deps) => {
  return {
    useAccount: createUseAccount(...deps),
    useNetwork: createUseNetwork(...deps),
  };
};

export default setupHooks;
