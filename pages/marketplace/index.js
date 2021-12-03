import { CourseList } from "../../components/ui/course";
import { BaseLayout } from "../../components/ui/layout";
import { getAllCourses } from "../../content/fetcher";
import { WalletBar } from "../../components/ui/web3";
import { useAccount, useNetwork } from "../../components/hooks";

export default function Marketplace({ courses }) {
  const { account } = useAccount();
  const { network } = useNetwork();
  console.log(network);
  return (
    <>
      <div className="py-4">
        <WalletBar address={account.data} network={network.data} />
      </div>
      <CourseList courses={courses} />
    </>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}

Marketplace.Layout = BaseLayout;
