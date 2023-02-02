import React from "react";

function SkillButton({ Icon, label }) {
  return (
    <div className="flex items-center bg-slate-900 rounded-md px-2 py-1 mr-2 mb-2 shadow-xl">
      {Icon && <Icon className="mr-2 text-blue-500" fontSize={20} />}
      <h6 className="text-white font-sans italic ">{label}</h6>
    </div>
  );
}

export default SkillButton;
