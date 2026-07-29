import { teamMembers } from './team';

export const aiConfig = {
  companyName: 'TornadoallyDev',
  companyDescription: 'TornadoallyDev is a Unity development and Blender art studio focused on game-ready visuals, technical art, and small-team production support.',
  location: 'Open for work',
  email: 'hello@tornadoallydev.com',
  phone: '+1 (405) 709-8512',
  
  services: [
    {
      name: 'C# Programming',
      description: 'Gameplay logic, tool scripts, editor utilities, and clean C# systems for Unity projects.'
    },
    {
      name: 'Shader development',
      description: 'Unity shader work and material support for stylized or technical visuals.'
    },
    {
      name: 'Hard-surface modeling',
      description: 'Game-ready hard-surface assets, props, and environment pieces built in Blender.'
    },
    {
      name: 'Texturing',
      description: 'Flexible texturing support in any style, from realistic surfaces to stylized game assets.'
    }
  ],

  team: teamMembers.map(m => ({
    name: m.name,
    role: m.role,
    expertise: m.description
  })),

  features: [
    '5 years of experience',
    'Open to collaboration or independent work',
    'Available full time',
    'Payment via PayPal',
    'Negotiable per-task or hourly pricing'
  ],

  packages: [
    {
      name: 'Custom',
      price: '$30/hr',
      description: 'Per-task pricing is also available and negotiable. Payment via PayPal.'
    }
  ],

  process: [
    {
      step: 1,
      name: 'Discovery & Scope',
      description: 'Discuss the game, art style, technical needs, and delivery expectations.'
    },
    {
      step: 2,
      name: 'Production Plan',
      description: 'Define milestones, tools, and handoff requirements before work begins.'
    },
    {
      step: 3,
      name: 'Production',
      description: 'Build the Unity systems or Blender assets with iteration and feedback.'
    },
    {
      step: 4,
      name: 'Review & Polish',
      description: 'Refine quality, performance, and presentation before delivery.'
    },
    {
      step: 5,
      name: 'Delivery',
      description: 'Hand off the final work and stay available for follow-up support if needed.'
    }
  ],

  whyChooseUs: [
    'Focused craftsmanship for game and 3D production work.',
    'Flexible collaboration model for solo or team-based projects.',
    'Transparent communication and practical delivery.',
    'Studio-quality output with an independent workflow.'
  ],

  systemPrompt: `You are TornadoallyDev's core AI assistant. TornadoallyDev is a Unity development and Blender art studio.
Your task is to warmly and professionally assist website visitors and provide clear information about TornadoallyDev's capabilities.
Always present TornadoallyDev as a focused, practical studio.

Information you possess:
- TornadoallyDev provides Unity development, Blender art, C# programming, shader development, hard-surface modeling, and texturing.
- The creator has 5 years of experience.
- Availability is full time and open for work.
- Pricing is $30/hr or per-task by negotiation, with payment via PayPal.
- Contact: use the contact page for a free consultation or [DISCORD_USERNAME] for direct Discord messages.
- Working style: open to collaboration or independent work.
- Tone: professional, concise, and practical.
- Use Markdown **bolding** to emphasize services or availability.`,
};

export const getSystemContext = () => {
  return `${aiConfig.systemPrompt}

**TornadoallyDev Master Database:**
- Name: ${aiConfig.companyName}
- Tagline: ${aiConfig.companyDescription}
- Operations: ${aiConfig.location}
- Direct Lines: ${aiConfig.email} | ${aiConfig.phone}
- Team: ${aiConfig.team.map(t => `${t.name} (${t.role})`).join(', ')}

**Detailed Services List:**
${aiConfig.services.map(s => `- ${s.name}: ${s.description}`).join('\n')}

**Our Blueprint to Success:**
${aiConfig.process.map(p => `${p.step}. ${p.name}: ${p.description}`).join('\n')}

**Differentiators (Why Us):**
${aiConfig.whyChooseUs.map(w => `- ${w}`).join('\n')}
`;
};
