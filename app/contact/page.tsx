"use client";
import { courses } from "@/constants/general.constant";
import { createStudent } from "@/lib/action";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

const Contact = () => {
  return (
    <Box className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          course: "",
          mobileNumber: "",
          message: "",
        }}
        validationSchema={yup.object({
          fullName: yup
            .string()
            .required("Full name is required.")
            .trim()
            .max(100, "Full name cannot be greater than 100 characters."),
          email: yup
            .string()
            .email("Must be a valid email.")
            .required("Email is required.")
            .trim()
            .max(100, "Email cannot be greater than 100 characters."),
          course: yup
            .string()
            .required("Course is required.")
            .trim()
            .oneOf(courses),
          mobileNumber: yup
            .string()
            .required("Mobile number is required.")
            .trim()
            .max(100, "Mobile number cannot be greater than 100 characters."),
          message: yup
            .string()
            .required("Message is required.")
            .trim()
            .max(100, "Message cannot be greater than 1000 characters."),
        })}
        onSubmit={async (values) => {
          const response = await fetch("/api/createStudent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          const data = await response.json();
          console.log(data);

          if (response.ok) {
            // setStatus("Form submitted successfully!");
          } else {
            // setStatus(data.error || "Something went wrong!");
          }
        }}
      >
        {({ handleSubmit, getFieldProps, errors, touched }) => {
          return (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Typography
                variant="h5"
                className="text-center text-2xl font-semibold text-gray-800 mb-6"
              >
                Send Your Enquiry
              </Typography>

              <Typography className="text-center text-xl  text-gray-800 mb-12">
                Fill this enquiry form. We will get back to you very soon.
              </Typography>

              <FormControl fullWidth className="space-y-2">
                <TextField
                  required
                  label="Fullname"
                  {...getFieldProps("fullName")}
                  variant="outlined"
                  fullWidth
                  className="p-2 "
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#A1A1AA",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3B82F6",
                      },
                    },
                  }}
                />
                {touched.fullName && errors.fullName && (
                  <FormHelperText className="error-message">
                    {errors.fullName}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl fullWidth className="space-y-2">
                <TextField
                  required
                  label="Email"
                  {...getFieldProps("email")}
                  variant="outlined"
                  fullWidth
                  className="p-2 "
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#A1A1AA",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3B82F6",
                      },
                    },
                  }}
                />
                {touched.email && errors.email && (
                  <FormHelperText className="error-message">
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl fullWidth className="space-y-2">
                <TextField
                  required
                  label="Course"
                  {...getFieldProps("course")}
                  variant="outlined"
                  fullWidth
                  className="p-2 "
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#A1A1AA",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3B82F6",
                      },
                    },
                  }}
                />
                {touched.course && errors.course && (
                  <FormHelperText className="error-message">
                    {errors.course}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl fullWidth className="space-y-2">
                <TextField
                  required
                  label="Phone Number"
                  {...getFieldProps("mobileNumber")}
                  variant="outlined"
                  fullWidth
                  className="p-2 "
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#A1A1AA",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3B82F6",
                      },
                    },
                  }}
                />
                {touched.mobileNumber && errors.mobileNumber && (
                  <FormHelperText className="error-message">
                    {errors.mobileNumber}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl fullWidth className="space-y-2">
                <TextField
                  required
                  label="Message"
                  multiline
                  minRows={3}
                  maxRows={6}
                  {...getFieldProps("message")}
                  variant="outlined"
                  fullWidth
                  className="p-2 "
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#A1A1AA",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3B82F6",
                      },
                    },
                  }}
                />
                {touched.message && errors.message && (
                  <FormHelperText className="error-message">
                    {errors.message}
                  </FormHelperText>
                )}
              </FormControl>

              <Button
                variant="contained"
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                sx={{
                  "&:hover": {
                    backgroundColor: "#2563EB", // Slightly darker blue on hover
                  },
                }}
              >
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Contact;
