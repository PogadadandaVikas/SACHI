const speakers = [
  {
    id: 'kavita-rao',
    name: 'Dr. Kavita Rao',
    role: 'CEO',
    org: 'Women Tech Foundation',
    category: 'Corporate',
    bio: 'Driving inclusive leadership and innovation in healthcare.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    linkedin: 'https://linkedin.com',
    story:
      'Dr. Kavita Rao has led national initiatives that connect women in STEM with mentorship, funding, and global networks. Her focus is on scaling inclusive healthcare technology across India.',
    achievements: [
      'Launched 3 national leadership programs for women in STEM',
      'Built cross-sector partnerships across 12 states',
      "Recognized among India's top 50 women leaders",
    ],
    message: 'Lead with courage, and your voice will open doors for others.',
  },
  {
    id: 'nisha-patel',
    name: 'Nisha Patel',
    role: 'Founder',
    org: 'SheInnovates',
    category: 'Entrepreneur',
    bio: 'Breaking barriers for women-led startups in emerging tech.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
    linkedin: 'https://linkedin.com',
    story:
      'Nisha Patel founded SheInnovates to help women founders access investors, tech talent, and product labs. Her community has supported over 600 women-led ventures.',
    achievements: [
      'Raised $12M for women-led founders',
      'Mentored 400+ early-stage entrepreneurs',
      "Created India's first female founder demo day series",
    ],
    message: 'Every idea is powerful when you back it with action and community.',
  },
  {
    id: 'anju-sharma',
    name: 'Anju Sharma',
    role: 'Director',
    org: 'Women in Business',
    category: 'Corporate',
    bio: 'Advocating for women in corporate leadership pipelines.',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    linkedin: 'https://linkedin.com',
    story:
      'Anju Sharma leads enterprise programs that build equitable leadership pipelines across Fortune 500 partners, with a focus on executive readiness and sponsorship.',
    achievements: [
      'Built a leadership accelerator impacting 2,000 professionals',
      'Designed DEI policy frameworks for 30+ organizations',
      'Speaker at 50+ leadership conferences',
    ],
    message: 'Your growth accelerates when you invest in yourself every day.',
  },
  {
    id: 'meera-joshi',
    name: 'Meera Joshi',
    role: 'Social Activist',
    org: 'Sakhi Collective',
    category: 'Social Leader',
    bio: 'Championing safety, education, and opportunity for women.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    linkedin: 'https://linkedin.com',
    story:
      'Meera Joshi has spent two decades working in rural India, building safe spaces for women and delivering education pathways for young leaders.',
    achievements: [
      'Established 120 community learning hubs',
      'Secured scholarships for 3,000 young women',
      'Led policy advocacy on gender safety',
    ],
    message: 'Empowerment begins when communities listen and act together.',
  },
  {
    id: 'vidya-mehta',
    name: 'Vidya Mehta',
    role: 'Entrepreneur',
    org: 'Rural Spark',
    category: 'Entrepreneur',
    bio: 'Building sustainable businesses for rural women founders.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    linkedin: 'https://linkedin.com',
    story:
      'Vidya Mehta created Rural Spark to connect women-led microbusinesses with digital storefronts and supply chain partners.',
    achievements: [
      'Enabled 1,200 rural entrepreneurs to scale',
      'Partnered with 80+ artisan cooperatives',
      'Won the Emerging Enterprise Award 2023',
    ],
    message: 'Progress happens when opportunity reaches every corner.',
  },
  {
    id: 'ritu-malhotra',
    name: 'Ritu Malhotra',
    role: 'Corporate Executive',
    org: 'Horizon Finance',
    category: 'Corporate',
    bio: 'Designing inclusive finance products for women leaders.',
    image:
      'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=900&q=80',
    linkedin: 'https://linkedin.com',
    story:
      'Ritu oversees a nationwide portfolio that supports women-led SMEs with financial literacy, credit access, and growth capital.',
    achievements: [
      'Launched 5 tailored finance products for women founders',
      'Grew women-led SME portfolio by 60%',
      "Featured in India Business Women's Forum",
    ],
    message: 'Confidence grows when resources and knowledge meet ambition.',
  },
  {
    id: 'priya-iyer',
    name: 'Priya Iyer',
    role: 'Social Entrepreneur',
    org: 'YouthRise',
    category: 'Social Leader',
    bio: 'Inspiring young women to lead in community development.',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80',
    linkedin: 'https://linkedin.com',
    story:
      'Priya Iyer runs leadership labs for young women, combining civic projects with mentorship and storytelling initiatives.',
    achievements: [
      'Trained 5,000 young women leaders',
      'Launched 200 community impact projects',
      'Awarded Social Change Catalyst 2024',
    ],
    message: 'Your leadership is strongest when it uplifts the next generation.',
  },
  {
    id: 'sonia-agarwal',
    name: 'Sonia Agarwal',
    role: 'NGO Founder',
    org: 'Udaan Collective',
    category: 'Social Leader',
    bio: 'Empowering underprivileged women through education.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    linkedin: 'https://linkedin.com',
    story:
      'Sonia Agarwal established Udaan Collective to provide education, job readiness, and health support for women in low-income communities.',
    achievements: [
      'Opened 25 learning centers across India',
      'Placed 1,000 women in leadership roles',
      'Built partnerships with 40 civic organizations',
    ],
    message: 'Education is the strongest platform for lasting change.',
  },
  {
    id: 'deepa-nair',
    name: 'Deepa Nair',
    role: 'Innovation Advocate',
    org: 'GreenSpark Labs',
    category: 'Corporate',
    bio: 'Advancing sustainable technology with diverse teams.',
    image:
      'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=900&q=80',
    linkedin: 'https://linkedin.com',
    story:
      'Deepa Nair works with R and D teams to build sustainable innovations and drives inclusion programs across multiple industry sectors.',
    achievements: [
      'Scaled a clean-tech initiative across 4 cities',
      'Mentored 200 women engineers',
      'Published research on inclusive innovation',
    ],
    message: 'Sustainability and inclusion must advance together.',
  },
  {
    id: 'neha-kapoor',
    name: 'Neha Kapoor',
    role: 'Human Rights Lawyer',
    org: 'Justice Forward',
    category: 'Social Leader',
    bio: 'Defending gender equity and workplace rights.',
    image:
      'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=900&q=80',
    linkedin: 'https://linkedin.com',
    story:
      'Neha Kapoor advocates for gender-safe workplaces and has supported policy improvements across public and private sectors.',
    achievements: [
      'Led landmark workplace safety cases',
      'Advised 15 organizations on policy reform',
      'Recognized for pro-bono impact work',
    ],
    message: 'Justice creates the space where women can truly thrive.',
  },
]

export default speakers
