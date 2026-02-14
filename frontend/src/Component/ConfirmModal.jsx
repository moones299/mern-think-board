import "./ConfirmModal.css";

function ConfirmModal({ isOpen, title, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="confirm-overlay">
      <div className="confirm-modal">
        <h3>Delete "{title}"?</h3>
        <p>This action can’t be undone.</p>

        <div className="confirm-actions">
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>

          <button className="delete-btn" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
