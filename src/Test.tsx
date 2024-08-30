// MultiStageForm.tsx
import React, { useState } from "react";
import "./MultiStageForm.css"; // Import CSS for styles
import { AirtimeInfoForm, PaymentForm, ReceiptForm } from "./FormStages"; // Import form components

type Stage = "info" | "payment" | "receipt";

const MultiStageForm: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<Stage>("info");
  const [formData, setFormData] = useState({
    provider: "",
    phone: "",
    amount: "",
    pin: "",
  });

  const [isValid, setIsValid] = useState(false);

  // Function to move to the next stage
  const nextStage = () => {
    if (currentStage === "info") setCurrentStage("payment");
    else if (currentStage === "payment") setCurrentStage("receipt");
  };

  // Function to validate form data for each stage
  const validateStage = (stage: Stage) => {
    switch (stage) {
      case "info":
        // Simple validation for demo purposes
        const { provider, phone, amount, pin } = formData;
        if (provider && phone && amount && pin) setIsValid(true);
        else setIsValid(false);
        break;
      // Additional validation can be added for other stages if necessary
      default:
        setIsValid(true);
    }
  };

  // Update form data and validate
  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData({ ...formData, ...data });
    validateStage(currentStage);
  };

  return (
    <div className="multi-stage-form">
      {/* Progress Indicators */}
      <div className="progress-indicators">
        <div className={`stage ${currentStage === "info" ? "active" : ""}`}>
          Fill Info
        </div>
        <div className={`stage ${currentStage === "payment" ? "active" : ""}`}>
          Make Payment
        </div>
        <div className={`stage ${currentStage === "receipt" ? "active" : ""}`}>
          View Receipt
        </div>
      </div>
      <div className="progress-bar">
        <div
          className={`progress ${
            currentStage === "info"
              ? "stage1"
              : currentStage === "payment"
              ? "stage2"
              : "stage3"
          }`}
        ></div>
      </div>
      {/* Conditional Rendering of Form Stages */}
      {currentStage === "info" && (
        <AirtimeInfoForm onProceed={nextStage} updateData={updateFormData} />
      )}
      {currentStage === "payment" && <PaymentForm onProceed={nextStage} />}
      {currentStage === "receipt" && <ReceiptForm />}
    </div>
  );
};

export default MultiStageForm;
