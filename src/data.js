import PP from './profile.png';

export const CVData = {
  personalData: {
    name: 'Reşat Memiş',
    title: 'Software Developer',
    image: PP,
    contacts: [
      { type: 'email', value: 'info@resatmemis.com' },
      { type: 'phone', value: '+90 (545) 362 22 25'},
      { type: 'location', value: 'Ankara' },
      { type: 'website', value: 'resatmemis.com' },
      { type: 'linkedin', value: 'linkedin.com/in/resat-memis-7b9996150/' },
      { type: 'twitter', value: 'twitter.com/ReatMemi1' },
      { type: 'github', value: 'github.com/softyak' }
    ]
  },
  sections: [
    {
      type: 'text',
      title: 'Career Profile',
      content: 'I am a Software Developer who is curious about many parts of Software Development Job as Full Stack. I am currently working on Web Development area as Junior Front End Developer. Back End development, Developing Mobile Applications, DevOps operations and some other parts of software are also my interesting areas. However, Front End Development is enjoyable area for me and I prefer to focus on this area. Briefly, you can know me as an Eager to Learn, Curious and fast learner Software Developer. ',
      icon: 'usertie'
    },
    {
      type: 'common-list',
      title: 'Education',
      icon: 'graduation',
      items: [
        {
          title: 'Computer Education and Instructional Technology (BS)',
          authority: 'Middle East Technical University (ODTU)',
          authorityWebSite: 'https://metu.edu.tr',
          rightSide: '2015 - Present'
        }
      ]
    },
    {
      type: 'experiences-list',
      title: 'Experiences',
      description: 'Optional',
      icon: 'archive',
      items: [
        {
          title: 'Front End Developer',
          company: 'JotForm',
          description: 'I\'m working as a Front End Developer being member of a Software Team.',
          companyWebSite: 'http://www.jotform.com',
          companyMeta: '',
          datesBetween: '2019.10 - Present',
          descriptionTags: ['Javascript', 'React', 'Redux', 'Jquery', 'PHP']
        },
        {
          title: 'Software Developer Intern',
          company: 'JotForm',
          description: 'I was working as an Full Stack Web Development Intern. I completed 3 project. You can reach all 3 project from my GitHub account.',
          companyWebSite: 'http://www.jotform.com',
          datesBetween: '2019.07 - 2019.09',
          descriptionTags: ['Javascript', 'React', 'Redux', 'Jquery', 'PHP', 'Node.js', 'REST']
        },
        {
          title: 'IT Support Specialist',
          company: 'Middle East Technical University (ODTU)',
          description: 'I am working as an IT support specialist at the department of Modern Languages in Middle East Technical University.',
          companyWebSite: 'http://metu.edu.tr',
          datesBetween: '2018.11 - 2019.11'
        }
      ]
    },
    {
      type: 'common-list',
      title: 'Languages',
      icon: 'language',
      items: [
        {
          authority: 'English',
          authorityMeta: 'Professional'
        },
        {
          authority: 'Russian',
          authorityMeta: 'Beginner'
        },
        {
          authority: 'Turkish',
          authorityMeta: 'Native'
        }
      ]
    },
    {
      type: 'tag-list',
      title: 'Skills Proficiency',
      icon: 'rocket',
      items: ['JavaScript', 'TypeScript', 'React', 'Webpack', 'CSS', 'C', 'Java', 'Python', 'NPM', 'GIT', 'SOLID Principles', 'ANSII Common LISP', 'Front End Development', 'Desing Patterns', 'SEO', 'OOP', 'Functional Programming']
    },
    {
      type: 'tag-list',
      title: 'Hobbies & Interests',
      icon: 'cubes',
      items: ['Literature', 'Political History', 'History', 'Cooking', 'Model Car Collection']
    }
  ]
}
