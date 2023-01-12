import React from 'react';
import { CgWebsite, CgBriefcase } from 'react-icons/cg';
import { FiBook, FiFolder, FiHome, FiSettings, FiUser, FiMail } from 'react-icons/fi';

const profileSidebar: SidebarProps = {
  label: 'Profile',
  items: [
    {
      label: 'Home',
      icon: <FiHome />,
      href: '/admin'
    },
    {
      label: 'Profile',
      icon: <FiUser />,
      href: '/admin/profile',
      items: [
        {
          label: 'My Account',
          href: '/admin/profile/my-account'
        },
        {
          label: 'Contact',
          href: '/admin/profile/contact'
        }
      ]
    },
    {
      label: 'Messages',
      icon: <FiMail />,
      href: '/admin/messages'
    }
  ]
};

const exploreSidebar: SidebarProps = {
  label: 'Explore',
  items: [
    {
      label: 'Homepage',
      icon: <CgWebsite />,
      href: '/admin/explore/homepage'
    },
    {
      label: 'Educations',
      icon: <FiBook />,
      href: '/admin/explore/educations'
    },
    {
      label: 'Skills',
      icon: <FiSettings />,
      href: '/admin/explore/skills'
    },
    {
      label: 'Jobs',
      icon: <CgBriefcase />,
      href: '/admin/explore/jobs'
    },
    {
      label: 'Projects',
      icon: <FiFolder />,
      href: '/admin/explore/projects'
    }
  ]
};

const adminSidebar: SidebarProps[] = [profileSidebar, exploreSidebar];

export { adminSidebar };
