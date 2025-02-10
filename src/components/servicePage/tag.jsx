import React, { useState } from "react";

const TagSelector = ({ tags, onAddTag, onRemoveTag }) => {
  const [newTag, setNewTag] = useState("");

  const handleAdd = () => {
    if (newTag.trim()) {
      onAddTag(newTag.trim());
      setNewTag("");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm bg-green-500 text-white px-3 py-1 rounded-lg flex items-center"
          >
            {tag}
            <button
              onClick={() => onRemoveTag(tag)}
              className="ml-2 text-sm font-bold"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          className="lg:text-base text-sm px-3 py-1 text-white bg-transparent border-b border-gray-300 outline-none focus:ring-0 focus:border-gray-300"
          placeholder="Add a tag"
        />

        <button
          onClick={handleAdd}
          className="bg-green-500 lg:text-base text-sm text-white px-3 py-1 rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TagSelector;
