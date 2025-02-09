// import { useState } from "react";

// export default function TagSelector() {
//   const [tags, setTags] = useState([
//     "UI/UX Design",
//     "React.js",
//     "Responsive Design",
//     "Next.js",
//     "SaaS Development",
//   ]);
//   const [input, setInput] = useState("");

//   const addTag = () => {
//     const newTag = input.trim();
//     if (newTag !== "" && !tags.includes(newTag)) {
//       setTags([...tags, newTag]);
//     }
//     setInput("");
//   };

//   const removeTag = (tag) => {
//     setTags(tags.filter((t) => t !== tag));
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-6 text-left">
//       <div className="flex flex-wrap gap-4 mt-2">
//         {tags.map((tag, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-5 bg-white text-black px-3 py-1 rounded-full"
//           >
//             <span>{tag}</span>
//             <button
//               onClick={() => removeTag(tag)}
//               className="text-gray-500 hover:text-red-500 font-bold"
//             >
//               ✕
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="mt-3 flex items-center gap-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Add your tags"
//           className="bg-transparent border-b  focus:outline-none text-white px-2 py-1"
//           onKeyPress={(e) => e.key === "Enter" && addTag()}
//         />
//         <button
//           onClick={addTag}
//           className="text-green-400 hover:text-green-300 font-semibold"
//         >
//           + Add
//         </button>
//       </div>
//     </div>
//   );
// }
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
            className="bg-green-500 text-white px-3 py-1 rounded-lg flex items-center"
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
          className="px-3 py-1 text-white bg-transparent border-b border-gray-300 outline-none focus:ring-0 focus:border-gray-300"
          placeholder="Add a tag"
        />

        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-3 py-1 rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TagSelector;
