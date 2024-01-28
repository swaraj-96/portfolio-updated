import React from "react";

const ProjectSnapshot = ({ snapshots }) => {
  return <div className="grid md:grid-cols-2 gap-4 container-max px-4 mt-8">
    {snapshots.map((screeenshot, index) => (
        <div className="work shadow-xl">
          <img key={index} src={screeenshot} alt={`Screenshot ${index + 1}`}/>
        </div>
        
    ))}

  </div>;
};

export default ProjectSnapshot;
