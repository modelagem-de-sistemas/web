import React from 'react';
import { CgWebsite, CgBriefcase } from 'react-icons/cg';
import { FiBook, FiFolder, FiHome, FiSettings, FiUser, FiMail } from 'react-icons/fi';

const profileSidebar: SidebarProps = {
  title: 'Profile',
  items: [
    {
      title: 'Home',
      icon: <FiHome />,
      url: '/admin'
    },
    {
      title: 'Profile',
      icon: <FiUser />,
      url: '/admin/profile',
      items: [
        {
          title: 'My Account',
          url: '/admin/profile/my-account'
        },
        {
          title: 'Contact',
          url: '/admin/profile/contact'
        }
      ]
    },
    {
      title: 'Messages',
      icon: <FiMail />,
      url: '/admin/messages'
    }
  ]
};

const exploreSidebar: SidebarProps = {
  title: 'Explore',
  items: [
    {
      title: 'Homepage',
      icon: <CgWebsite />,
      url: '/admin/explore/homepage'
    },
    {
      title: 'Educations',
      icon: <FiBook />,
      url: '/admin/explore/educations'
    },
    {
      title: 'Skills',
      icon: <FiSettings />,
      url: '/admin/explore/skills'
    },
    {
      title: 'Jobs',
      icon: <CgBriefcase />,
      url: '/admin/explore/jobs'
    },
    {
      title: 'Projects',
      icon: <FiFolder />,
      url: '/admin/explore/projects'
    }
  ]
};

const adminSidebar: SidebarProps[] = [profileSidebar, exploreSidebar];

export { adminSidebar };
