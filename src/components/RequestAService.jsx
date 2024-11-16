import React, { useState } from "react";
import { Upload } from "lucide-react";

export default function ServiceRequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    requestType: "",
    contactMethod: "",
    projectDetails: "",
  });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.requestType)
      newErrors.requestType = "Request type is required";
    if (!formData.contactMethod)
      newErrors.contactMethod = "Contact method is required";
    if (!formData.projectDetails.trim())
      newErrors.projectDetails = "Project details are required";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit the data here
      console.log("Form data:", formData);
      console.log("File:", file);
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        requestType: "",
        contactMethod: "",
        projectDetails: "",
      });
      setFile(null);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 font-inter dark:bg-[#2C375A]  p-4 md:p-8">
      <div className="mx-auto max-w-3xl bg-white dark:bg-slate-900/50 rounded-lg shadow-md overflow-hidden">
        <div className="bg-sky-500 dark:bg-slate-800 py-8 px-6 text-white">
          <h2 className="text-2xl font-semibold text-center">
            Request a Service
          </h2>
          <p className="text-center text-sky-100 dark:text-slate-300">
            Message Us and We Will Get Back To You
          </p>
        </div>
        <div className="p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter Full Name"
                  className={`w-full px-3 py-2 bg-slate-100 dark:bg-slate-800/50 border ${errors.fullName ? "border-red-500" : "border-slate-200 dark:border-slate-700"} rounded-md text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email Address"
                  className={`w-full px-3 py-2 bg-slate-100 dark:bg-slate-800/50 border ${errors.email ? "border-red-500" : "border-slate-200 dark:border-slate-700"} rounded-md text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Phone Number"
                  className={`w-full px-3 py-2 bg-slate-100 dark:bg-slate-800/50 border ${errors.phone ? "border-red-500" : "border-slate-200 dark:border-slate-700"} rounded-md text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500`}
                />
                {errors.phone && (
                  <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter Company's Name"
                  className={`w-full px-3 py-2 bg-slate-100 dark:bg-slate-800/50 border ${errors.company ? "border-red-500" : "border-slate-200 dark:border-slate-700"} rounded-md text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500`}
                />
                {errors.company && (
                  <p className="mt-1 text-red-500 text-sm">{errors.company}</p>
                )}
              </div>
              <div>
                <select
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-slate-100 dark:bg-slate-800/50 border ${errors.requestType ? "border-red-500" : "border-slate-200 dark:border-slate-700"} rounded-md text-slate-900 dark:text-white`}
                >
                  <option value="">Request type</option>
                  <option value="consulting">Consulting</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="other">Other</option>
                </select>
                {errors.requestType && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.requestType}
                  </p>
                )}
              </div>
              <div>
                <select
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 bg-slate-100 dark:bg-slate-800/50 border ${errors.contactMethod ? "border-red-500" : "border-slate-200 dark:border-slate-700"} rounded-md text-slate-900 dark:text-white`}
                >
                  <option value="">Preferred contact method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
                {errors.contactMethod && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.contactMethod}
                  </p>
                )}
              </div>
            </div>

            <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 px-4 py-2 rounded-md inline-flex items-center"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload a file
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {file ? file.name : "No File Chosen"}
                </p>
              </div>
            </div>

            <div>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                placeholder="Project Details"
                className={`w-full px-3 py-2 min-h-[150px] bg-slate-100 dark:bg-slate-800/50 border ${errors.projectDetails ? "border-red-500" : "border-slate-200 dark:border-slate-700"} rounded-md text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500`}
              ></textarea>
              {errors.projectDetails && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.projectDetails}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md transition duration-300"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
