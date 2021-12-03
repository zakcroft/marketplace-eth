import { useEffect } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0xcd26da2fc12d98e8c7a757c877011d3a59c80536a0ddef5d66da4073f058e77d": true,
};

export const createUseAccount = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => web3 ?? "web/accounts",
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [mutate]);

  return {
    account: {
      data,
      isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
      mutate,
      ...rest,
    },
  };
};
