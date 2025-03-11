import { useNavigate, useLocation } from "react-router-dom";

export default function GraphicSpecsheet() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { formData, selectedTemplate } = state;

  return (
    <div className="fixed inset-0 bg-white p-8 overflow-y-auto">
      <h2>Project Specsheet</h2>
      <div className="border p-4 rounded bg-gray-50">
        {Object.entries(formData).map(
          ([key, value]) =>
            value && (
              <div key={key} className="mb-3">
                <h3>{key.replace(/([A-Z])/g, " $1")}</h3>
                {Array.isArray(value) ? (
                  <ul>
                    {value.map((item) => (
                      <li key={item}>✅ {item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>✅ {value}</p>
                )}
              </div>
            )
        )}

        <div className="mt-4">
          <h3>Template: {`Template ${selectedTemplate}`}</h3>
          <img
            src={`/images/template${selectedTemplate}.jpg`}
            alt={`Template ${selectedTemplate}`}
            className="w-48 h-32 object-cover mt-2"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={() =>
            navigate("/graphic-template", {
              state: { formData, selectedTemplate },
            })
          }
          className="p-2 border rounded"
        >
          Back
        </button>
        <button
          onClick={() => alert("Form Submitted!")}
          className="p-2 bg-green-400 text-white rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
