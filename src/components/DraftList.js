function DraftList() {
  return (
    <div>
      <h2>Saved Drafts</h2>

      <div className="draft">
        <h3>My First Draft</h3>

        <p>
          This is a sample draft. Your saved drafts will appear here.
        </p>

        <div className="actions">
          <button>✏ Edit</button>
          <button className="delete-btn">🗑 Delete</button>
        </div>
      </div>
    </div>
  );
}

export default DraftList;