export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    try {
      // Call your email service to subscribe the user
      

      return res.status(200).json({ message: 'Subscribed successfully' });
    } catch (error) {
      console.error('Error subscribing:', error.message);

      return res.status(500).json({ error: 'Failed to subscribe' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
