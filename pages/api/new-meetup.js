import { MongoClient } from "mongodb";

// POST /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // connect to database
    const client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gmsmy.mongodb.net/NextJS?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection("NextJS");

    // add the meetup data
    const result = await meetupsCollection.insertOne(data);
    console.log("result", result);

    client.close();

    // api response
    res.status(201).json({ message: "Meetup created!" });
  }
};

export default handler;
