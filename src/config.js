'use strict';

module.exports = {
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  title: 'Blog by John Doe',
  subtitle: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    }
  ],
  author: {
    name: 'Felipe Cardozo',
    photo: '/photo.jpg',
    bio: `${calculateAge(new Date('1997-03-07'))} Years old. Developer and enthusiast of .NET and JS/TS. Studying Computer Engineering and writing applications in his free time.`,
    contacts: {
      email: '',
      facebook: '',
      telegram: '',
      twitter: 'fraidev',
      github: 'fraifelipe',
      rss: '',
      vkontakte: '',
      linkedin: 'fraifelipe',
      instagram: 'fraifelipe',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: ''
    }
  }
};

function calculateAge(birthday) { // birthday is a date
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
