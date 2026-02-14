import NoteList from "./Component/NoteList";
import Create from "./Component/Create";
import Header from "./Component/Header";
import { Toaster, toast } from "react-hot-toast";
import ConfirmModal from "./Component/ConfirmModal";
import { useState, useEffect } from "react";

const App = () => {
  const [addNote, setAddNote] = useState(false);
  const [noteList, setNoteList] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [confirmData, setConfirmData] = useState({
    isOpen: false,
    note: null,
  });

  useEffect(() => {
    fetch("http://localhost:3001/api/notes")
      .then((res) => res.json())
      .then((data) => {
        setNoteList(data.data);
        setIsLoading(false); // لودینگ تمام شد
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to fetch notes!");
        setIsLoading(false);
      });
  }, []);

  const handleAddClick = () => {
    setEditingNote(null);
    setAddNote(true); // وقتی دکمه زده شد، فرم باز بشه
  };

  // تابع جدید برای باز کردن فرم در حالت ویرایش
  const handleEditClick = (note) => {
    setEditingNote(note);
    setAddNote(true);
  };

  const createNoteHandler = async (newNote) => {
    try {
      // POST به بک
      const res = await fetch("http://localhost:3001/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      });
      const data = await res.json();
      setNoteList((prev) => [...prev, data.data]); // استفاده از دیتای بک‌اند برای داشتن ID
      setAddNote(false);
      toast.success("Note created successfully🚀");
    } catch (err) {
      toast.error("Error creating note.");
    }
  };

  // تابع ویرایش نوت
  const updateNoteHandler = async (id, updatedNote) => {
    try {
      const res = await fetch(`http://localhost:3001/api/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedNote),
      });
      const data = await res.json();
      setNoteList((prev) => prev.map((n) => (n._id === id ? data.data : n)));
      setAddNote(false);
      setEditingNote(null);
      toast.success("Note updated successfully!");
    } catch (err) {
      toast.error("Failed to update note.");
    }
  };

  // تابع حذف نوت (با تاییدیه)
  const deleteNoteHandler = (note) => {
    setConfirmData({
      isOpen: true,
      note,
    });
  };

  const confirmDelete = async () => {
    const id = confirmData.note._id;

    try {
      await fetch(`http://localhost:3001/api/notes/${id}`, {
        method: "DELETE",
      });

      setNoteList((prev) => prev.filter((n) => n._id !== id));

      toast.success("Note deleted", {
        action: {
          label: "Undo",
          onClick: () => setNoteList((prev) => [...prev, confirmData.note]),
        },
      });
    } catch {
      toast.error("Error deleting note.");
    }

    setConfirmData({ isOpen: false, note: null });
  };

  // مرتب‌سازی بر اساس جدیدترین
  const sortedNotes = [...noteList].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  // فیلتر کردن لیست برای جستجو
  const filteredNotes = noteList.filter((n) =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <Toaster position="top-center" /> {/* کانتینر پیام‌ها */}
      <Header
        onAddClick={() => {
          setEditingNote(null);
          setAddNote(true);
        }}
        setSearchTerm={setSearchTerm}
      />{" "}
      <NoteList
        noteList={filteredNotes}
        onDelete={deleteNoteHandler}
        onEdit={(note) => {
          setEditingNote(note);
          setAddNote(true);
        }}
        isLoading={isLoading} // ارسال وضعیت لودینگ
      />
      {/* فرم فقط وقتی addNote=true نمایش داده میشه */}
      {addNote && (
        <Create
          addNote={addNote}
          createNoteHandler={createNoteHandler}
          updateNoteHandler={updateNoteHandler}
          editingNote={editingNote}
          onClose={() => {
            setAddNote(false);
            setEditingNote(null);
          }}
        />
      )}
      <ConfirmModal
        isOpen={confirmData.isOpen}
        title={confirmData.note?.title}
        onConfirm={confirmDelete}
        onCancel={() => setConfirmData({ isOpen: false, note: null })}
      />
    </>
  );
};

export default App;
