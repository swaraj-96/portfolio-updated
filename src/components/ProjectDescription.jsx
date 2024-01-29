import React from 'react'

const ProjectDescription = ({projectDescription}) => {
  return (
    <div className="container-max px-4 mt-8 flex">
        <div className="w-1/2 px-2 space-y-2 items-center">
          <h1 className="font-bold text-xl text-blue-800">
            Project Description
          </h1>
          <p className='dark:text-gray-400'>{projectDescription.info || projectDescription}</p>
        </div>
        <div className="w-1/2 px-2 space-y-2 items-center">
          <h1 className="font-bold text-xl text-blue-800">Tech Stack:</h1>
          <p className='dark:text-gray-400'>{projectDescription.techStack}</p>
          <h1 className="font-bold text-xl text-blue-800">Key Features:</h1>
          <p className='dark:text-gray-400'>{projectDescription.keyFeatures}</p>
        </div>
      </div>
  )
}

export default ProjectDescription