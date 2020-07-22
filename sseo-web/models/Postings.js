module.exports = mongoose => {
  const Posting = mongoose.model(
    "posting",
    mongoose.Schema(
      {
        postingDescription: String,
        postingType: String,
        postingPriority: String,
        postingCompleted: Boolean
      },
      { timestamps: true }
    )
  );

  return Posting;
};