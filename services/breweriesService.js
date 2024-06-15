const BreweriesEntry = require("../models/BreweriesEntry");

async function createEntry(req, res) {
  try {
    const { breweryId, rating, description, reviewerName, reviewerProfilePic } =
      req.body;

    const newEntry = new BreweriesEntry({
      breweryId,
      rating,
      description,
      reviewerName,
      reviewerProfilePic,
    });

    await newEntry.save();

    res.json(newEntry);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

async function getEntries(req, res) {
  try {
    const entryId = `${req.params.id}`; 
    const entries = await BreweriesEntry.find({
      breweryId:  entryId ,
    });
    res.json(entries);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

async function getEntryById(req, res) {
  try {
    const entryId = req.params.id;
    const entry = await BreweriesEntry.findById(entryId);
    if (!entry) {
      return res.status(404).json({ message: "Diary entry not found" });
    }

    // Checking if the entry belongs to the specific user
    if (entry.user.toString() !== req.user.id) {
      return res.status(404).json({ message: "Diary entry not found" });
    }

    res.json(entry);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

async function updateEntry(req, res) {
  try {
    const entryId = req.params.id;
    console.log(entryId)
    const {   rating, description, likes, dislikes } = req.body;


    const updatedEntry = await BreweriesEntry.findByIdAndUpdate(
      entryId,
      {   rating, description, likes, dislikes },
      { new: true }
    );


    res.json(updatedEntry);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}



module.exports = {
  createEntry,
  getEntries,
  getEntryById,
  updateEntry
};
