// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: Array<string>;
  page: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("listings req query", req.query);
  const currentPage = req?.query?.page ? req.query.page : 1;
  res.status(200).json({
    data: ["test1", "test2", "test3", "test4", "test5", "test6"],
    page: currentPage,
  });
}
