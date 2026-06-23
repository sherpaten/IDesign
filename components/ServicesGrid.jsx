
'use client';
import { motion } from 'framer-motion';

export default function ServicesGrid() {
  const services = [
    { 
      num: '01 // ENGINEERING', 
      title: 'Custom Web Architecture', 
      desc: 'Turning intricate visual concepts into responsive single-page web platforms built with fast rendering layers and structural code stability.', 
      tags: ['Next.js', 'React', 'Tailwind v4'], 
      size: 'bento-md-2' 
    },
    { 
      num: '02 // SYSTEMS', 
      title: 'User Interface Architecture', 
      desc: 'High-end interaction blueprints constructed to keep active user metrics rising continuously.', 
      tags: ['Figma', 'Prototyping'], 
      size: 'bento-md-1' 
    },
    { 
      num: '03 // DEVELOPMENT', 
      title: 'Custom Software Engineering', 
      desc: 'Building resilient, scalable desktop and corporate database applications tailored specifically to automate complex operational workflows.', 
      tags: ['Python', 'Node.js', 'PostgreSQL'], 
      size: 'bento-md-1' 
    },
    { 
      num: '04 // MARKETING', 
      title: 'Digital Marketing & Brand Growth', 
      desc: 'Data-backed social optimization, target audience acquisition campaigns, and continuous conversion strategy to dominate digital channels.', 
      tags: ['Growth Marketing', 'Meta Ads', 'Content Strategy'], 
      size: 'bento-md-2' 
    },
    { 
      num: '05 // PIPELINES', 
      title: 'Cloud Optimization & DevOps', 
      desc: 'Automated staging deployments, modern server performance monitoring, and pristine routing pathways.', 
      tags: ['Vercel', 'AWS'], 
      size: 'bento-md-2' 
    },
    { 
      num: '06 // AUDITING', 
      title: 'SEO Strategy & Core Analytics', 
      desc: 'Strategic data updates and search-engine adjustments structured to scale long-term organic discovery indexes across local markets.', 
      tags: ['SEO Engineering', 'Analytics'], 
      size: 'bento-md-1' 
    }
  ];

  return (
    <section className="services-section pt-16 md:pt-24">
      <span className="services-tag">Capabilities</span>
      <h2 className="services-heading !leading-tight mt-4">We Engineer Full Suite Solutions.</h2>
      <div className="bento-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: index * 0.05 }} 
            whileHover={{ y: -5 }} 
            className={`bento-card ${service.size}`}
          >
            <div className="card-glow" />
            <div>
              <div className="service-num">{service.num}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
            <div className="tech-pill-wrapper">
              {service.tags.map((tag, i) => <span key={i} className="tech-pill">{tag}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

