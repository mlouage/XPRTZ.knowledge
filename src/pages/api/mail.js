const handler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      const body = JSON.parse(req.body);
      const { email } = body;
      res.json({ email });
      break;
    default:
      res.status(405).end();
      break;
  }
}

export default handler;
