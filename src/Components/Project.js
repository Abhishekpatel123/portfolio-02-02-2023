import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";
import SkillButton from "./SkillButton";

function Project({
  title,
  images,
  description,
  tech_usages,
  liveLink,
  githubLink,
  status,
  type,
}) {
  return (
    <article className='grid grid-cols-1 md:grid-cols-2 gap-x-6 relative my-10 '>
      {/* left */}
      <div className='relative md:sticky top-0 h-min min-h-[400px] '>
        <div className='flex justify-between items-center'>
          <h1 className='dark:text-light-heading font-semibold text-lg pt-1'>
            {title}
          </h1>
          <div
            className={`${
              status === 'Completed' ? 'bg-green-100' : 'bg-red-100'
            } py-0.5 px-2 rounded-md shadow-sm text-sm`}
          >
            {status}
          </div>
        </div>
        <p className='text-content pt-1 font-light'>{description}</p>
        <h3 className='text-dark-heading dark:text-light-heading font-medium pt-4'>
          {/* Tech Stack : <span className="font-light">{tech_usages.join(",")}</span> */}
          Tech Stack :{' '}
          <div className='my-2 flex flex-wrap'>
            {tech_usages?.map(({ Icon, label }, idx) => (
              <SkillButton
                key={`skill-button-${label}-${idx}`}
                Icon={Icon}
                label={label}
              />
            ))}
          </div>
        </h3>
        <div className='my-2 flex gap-2'>
          <a
            href={githubLink}
            alt='github'
            target='_blank'
            rel='noreferrer'
            className='hover:text-blue-500 hover:scale-110'
          >
            <AiFillGithub fontSize={20} />
          </a>
          <a
            href={liveLink}
            rel='noreferrer'
            target='_blank'
            alt='project link'
            className='hover:text-blue-500 hover:scale-110'
          >
            <BiLinkExternal fontSize={20} />
          </a>
        </div>
      </div>
      {/* right */}
      <div>
        {[...images, ...images, ...images]?.map(
          ({ url, name = 'Default' }, idx) => (
            <div
              className='rounded-md shadow-md mb-5 bg-slate-900'
              key={`image-project-${idx}`}
            >
              <div className='py-1 pr-2 flex justify-end items-center'>
                <h6 className='text-right text-white text-sm'>{name}</h6>
                <SiStyledcomponents
                  fontSize={25}
                  className='text-blue-600 ml-2'
                />
              </div>
              {url ? (
                <img src={url} alt='' loading='lazy' className='' />
              ) : (
                <div>Image will be uploaded soon.</div>
              )}
            </div>
          )
        )}
      </div>
    </article>
  );
}

export default Project;
