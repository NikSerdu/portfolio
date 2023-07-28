import SingleWork from "@/components/screens/SingleWork";
import { NextPage } from "next";

const SingleWorkPage: NextPage<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <SingleWork id={+id} />
    </div>
  );
};

export default SingleWorkPage;
