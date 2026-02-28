export default function handler(req, res) {
  const n = parseInt(req.query.n, 10);

  if (isNaN(n) || n < 0 || n > 20) {
    return res.status(400).json({ error: "Please provide n between 0 and 20" });
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  res.status(200).json({ n, factorial: result });
}
