import type { NextApiRequest, NextApiResponse } from 'next';

const API = "http://localhost:3000";
const COOKIE = "PHPSESSID=rfaktvssd448o1t93nvnhh187t";

const deleteSubmission = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = new FormData();
  body.append("id", req.body.id);

  const response = await fetch(`${API}/deleteSubmission`, {
    method: "POST",
    headers: {
      "Cookie": COOKIE,
    },
    body
  });

  if (response.status !== 200) {
    return res.status(response.status).end();
  }

  await response.body?.cancel();
  res.status(200).end();
};

export default deleteSubmission;