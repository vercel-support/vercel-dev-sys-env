module.exports = (req, res) => {
  console.log(process.env.VERCEL_URL);
  const { name = "World" } = req.query;
  res.status(200).send(`Hello ${name}!`);
};
