import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Props {
  id: number;
  title: string;
  contentList: string[];
}

const SyllabusSection = ({ title, contentList }: Props) => {
  return (
    <Box className="w-full max-w-4xl mx-auto mt-4">
      <Accordion className="border border-gray-300 shadow-sm rounded-lg">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-gray-600" />}
          className="px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-all rounded-t-lg"
        >
          <Typography variant="h6" className="font-semibold">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="p-4 bg-white border-t border-gray-200">
          <ul className="space-y-3">
            {contentList.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircleIcon className="text-teal-600" />
                <Typography variant="body1" className="text-gray-800">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SyllabusSection;
