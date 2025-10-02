import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnyARecord } from "dns";

const JobDescription = ({ onHandleInputChange }: any) => {
  return (
    <div className="border rounded-2xl p-10">
      <div>
        <label>Job Title</label>
        <Input
          placeholder="Position"
          onChange={(e) => onHandleInputChange("jobTitle", e.target.value)}
        />
      </div>
      <div className="mt-6">
        <label>Job Description</label>
        <Textarea
          placeholder="Enter your description here."
          className="h-[200px]"
          onChange={(e) => onHandleInputChange("jobDescription", e.target.value)}
        />
      </div>
    </div>
  );
};

export default JobDescription;
