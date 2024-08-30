// FormStages.tsx
import React, { useState } from "react";

interface AirtimeInfoFormProps {
  onProceed: () => void;
  updateData: (data: {
    provider: string;
    phone: string;
    amount: string;
    pin: string;
  }) => void;
}

export const AirtimeInfoForm: React.FC<AirtimeInfoFormProps> = ({
  onProceed,
  updateData,
}) => {
  const [formData, setFormData] = useState({
    provider: "",
    phone: "",
    amount: "",
    pin: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    updateData({ [name]: value });
  };

  return (
    <div>
      <h3>Airtime to Cash Conversion</h3>
      <select
        name="provider"
        value={formData.provider}
        onChange={handleChange}
        required
      >
        <option value="">Select Provider</option>
        <option value="MTN">MTN</option>
        <option value="Glo">Glo</option>
        <option value="Airtel">Airtel</option>
        <option value="9mobile">9mobile</option>
      </select>
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount (₦)"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="pin"
        placeholder="Airtime Share PIN"
        onChange={handleChange}
        required
      />
      <button type="button" onClick={onProceed}>
        Proceed
      </button>
    </div>
  );
};

// PaymentForm component
export const PaymentForm: React.FC<{ onProceed: () => void }> = ({
  onProceed,
}) => {
  return (
    <div>
      <h3>Payment</h3>
      {/* Payment form fields here */}
      <button type="button" onClick={onProceed}>
        Proceed
      </button>
    </div>
  );
};

// ReceiptForm component
export const ReceiptForm: React.FC = () => {
  return (
    <div>
      <h3>Receipt</h3>
      <p>Your transaction is complete. Here is your receipt.</p>
      {/* Display receipt details */}
    </div>
  );
};
