"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  organization: string;
  designation: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  organization?: string;
  designation?: string;
}

export default function RegisterPopup({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    organization: "",
    designation: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    setSubmitError(null); // Reset submission error when validating

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!phoneRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid mobile number";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Organization is required";
    } else if (formData.organization.length < 2) {
      newErrors.organization = "Organization name is too short";
    }

    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise((resolve, reject) => setTimeout(() => reject("Something went wrong!"), 1000));

      setShowSuccess(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      setFormData({
        name: "",
        email: "",
        mobile: "",
        organization: "",
        designation: ""
      });

      setIsOpen(false);
    } catch (error) {
      setSubmitError(error as string);
    } finally {
      setIsSubmitting(false);
      setShowSuccess(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="bg-[#1c212f] text-white p-6 rounded-xl shadow-lg w-full max-w-md mx-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Register for Event</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-gray-700 p-1 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white hover:text-red-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {["name", "email", "mobile", "organization", "designation"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                    className={`w-full p-2 mt-1 rounded bg-gray-800 text-white border ${
                      errors[field as keyof FormErrors] ? "border-red-500" : "border-gray-700"
                    } focus:border-blue-500 focus:outline-none transition-colors`}
                  />
                  {errors[field as keyof FormErrors] && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors[field as keyof FormErrors]}
                    </motion.p>
                  )}
                </div>
              ))}

              {submitError && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm text-center"
                >
                  {submitError}
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1c212f] relative ${
                  isSubmitting ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting && !showSuccess && (
                    <motion.div
                      key="submitting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </motion.div>
                  )}
                  {showSuccess && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center text-white"
                    >
                      <Check className="w-5 h-5" />
                    </motion.div>
                  )}
                  <span className={isSubmitting || showSuccess ? "opacity-0" : "opacity-100"}>
                    Submit
                  </span>
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
