function DraftForm() {
  return (
    <div>
      <h2>Create New Draft</h2>

      <input
        type="text"
        placeholder="Enter Post Title"
      />

      <textarea
        placeholder="Write your draft here..."
      ></textarea>

      <button>💾 Save Draft</button>
    </div>
  );
}

export default DraftForm;