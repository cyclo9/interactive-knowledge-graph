import db from "../../../lib/mongo";

export default async function handler(req, res) {
    const collection = db.collection("nodes");

    const response = req.query;

    const filter = {
        id: response.id
    }

    const update = {
        $set: {
            location: response.location,
            label: response.label
        }
    }

    // await collection.updateOne(filter, update);

    // this just has to exist in order for the api to work
    res.status(200).json(response);
}