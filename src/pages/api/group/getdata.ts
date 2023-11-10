import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method != "GET") return res.status(405).send("Method not allowed");
  console.log(req.query.id);
  //logica para ver se o grupo existe e se a pessoa está no grupo

  if (req.query.id == "122") {
    console.log('caiu no if');
    
    res.redirect(403, "/qwe");
  }

  res.status(200).send("Created successfully");
}
