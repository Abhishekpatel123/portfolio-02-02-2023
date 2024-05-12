import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal, BiServer } from 'react-icons/bi';
import { HiDesktopComputer } from 'react-icons/hi';
import { SiStyledcomponents } from 'react-icons/si';
import { BsLink45Deg } from 'react-icons/bs';
import { projectType } from '../constants';
import SkillButton from './SkillButton';

function Project({
  title,
  images,
  description,
  tech_usages,
  liveLink,
  githubLink,
  githubServerLink,
  status,
  type,
}) {
  return (
    <article className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 relative my-10 '>
      {/* left */}
      <div className='relative lg:sticky top-0 h-min  '>
        <div className='flex justify-between items-center'>
          <h1 className=' font-semibold text-lg pt-1'>
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
        <h3 className='text-dark-heading  font-medium pt-4'>
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
        <div className='my-2 flex gap-4 items-center'>
          {/* Github */}
          <div className='flex items-center rounded-md shadow-lg border'>
            <div className='bg-slate-200 p-1'>
              <AiFillGithub fontSize={20} className='' />
            </div>
            {githubLink && (
              <a
                href={githubLink}
                alt='github'
                target='_blank'
                rel='noreferrer'
                className='hover:text-blue-500 hover:scale-110 px-2'
              >
                <HiDesktopComputer
                  fontSize={20}
                  className=''
                />
              </a>
            )}
            {githubServerLink && (
              <a
                href={githubServerLink}
                alt='github'
                target='_blank'
                rel='noreferrer'
                className='hover:text-blue-500 hover:scale-110 px-2'
              >
                <BiServer fontSize={20} className='' />
              </a>
            )}
          </div>
          {/* Link */}
          {liveLink && (
            <div className='flex items-center rounded-md shadow-lg border'>
              <div className='bg-slate-200 p-1'>
                <BiLinkExternal
                  fontSize={20}
                  className=''
                />
              </div>
              <a
                href={liveLink}
                alt='github'
                target='_blank'
                rel='noreferrer'
                className='hover:text-blue-500 hover:scale-110 px-2'
              >
                <BsLink45Deg
                  fontSize={20}
                  className=''
                />
              </a>
            </div>
          )}
        </div>
      </div>
      {/* right */}
      <div
        // className={`${
        //   type === projectType.APP && 'flex flex-wrap justify-between'
        // }`}
        className='flex flex-wrap justify-between items-center gap-x-2'
      >
        {images?.map(({ url, name = 'Default', imageType }, idx) => (
          <div
            // className={`rounded-md shadow-md mb-5 h-min mx-auto  ${
            className={`mb-5 h-min mx-auto  ${
              imageType === projectType.APP && 'max-w-[200px]'
            }`}
            key={`image-project-${idx}`}
          >
            {/* <div className='py-1 pr-2 flex justify-end items-center'>
                <h6 className='text-right text-white text-sm'>{name}</h6>
                <SiStyledcomponents
                  fontSize={25}
                  className='text-blue-600 ml-2'
                />
              </div> */}
            {url ? (
              <img src={url} alt='' loading='lazy' className='object-contain mt-4 lg:mt-1'  />
            ) : (
              <div>Image will be uploaded soon.</div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}

export default Project;
