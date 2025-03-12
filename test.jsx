<div className="mt-5 flex items-center justify-center p-4">
  <div className="grid md:grid-cols-2 gap-10 lg:max-w-5xl max-w-2xl w-full">
    {/* Checklist Section */}
    <div className="lg:mt-10">
      <span className="lg:text-4xl text-2xl font-serif font-semibold lg:leading-11 tracking-wider bg-gradient-to-r from-[#9AE7DF] via-[#83FF97] to-[#9AE7DF] bg-clip-text text-transparent">
        Take a Overview <br /> of your Specsheet
      </span>
      <div className="flex lg:gap-10 gap-5 lg:mt-10 mt-5">
        <button className="text-black lg:text-sm text-[10px] cursor-pointer bg-[#2cef80] lg:px-7 px-6 lg:py-2 py-1 rounded-lg font-semibold">
          Confirm
        </button>
        <button className="text-white lg:text-sm text-[10px] border-1 cursor-pointer border-[#37f9a270] lg:px-10 px-7 lg:py-2 py-1 rounded-lg font-semibold">
          Edit
        </button>
      </div>
    </div>

    {/* Spec Sheet Section */}
    <div className="bg-[#102525] lg:p-10 p-5 rounded-lg shadow-lg text-white">
      <h2 className="lg:text-xl text-base text-center font-serif tracking-widest font-semibold lg:mb-4 mb-2">
        SPECSHEET
      </h2>
      <p className="text-sm text-center lg:mb-7 mb-3">
        This sheet has all the scope of work listed below based on the questions
        you answered previously.{" "}
      </p>
      <div className="text-sm lg:mb-7 mb-4">
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

      <div className="mt-4 text-sm">
        <h3 className="font-medium mb-2">Order Details</h3>
        <p>Order Number: __________</p>
        <p>Order Date: __________</p>
        <p>Invoice Details: __________</p>
      </div>
    </div>
  </div>
</div>;
