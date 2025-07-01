import styles from '../../nextweb/styles/comp/JupiterLanding.module.css';

export default function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Instant Code Generation',
      description:
        'Generate complete applications, components, and functions using natural language. Jupiter understands your intent and creates production-ready code.',
    },
    {
      icon: '🧠',
      title: 'AI-Powered Intelligence',
      description:
        'Leveraging advanced AI models to understand context, suggest optimizations, and write code that follows best practices.',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description:
        'Optimized for speed with instant completions and real-time suggestions. No more waiting for slow code generation.',
    },
    {
      icon: '🔧',
      title: 'Multi-Language Support',
      description:
        'Works seamlessly with JavaScript, TypeScript, Python, Go, Rust, and more. Jupiter adapts to your preferred stack.',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description:
        'Built-in security scanning, vulnerability detection, and compliance checks ensure your code meets the highest standards.',
    },
    {
      icon: '📊',
      title: 'Smart Analytics',
      description:
        'Real-time performance monitoring and optimization suggestions help you maintain peak application efficiency.',
    },
  ];

  return (
    <section className={styles.features} id="features">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Powerful Features</h2>
        <p className={styles.sectionSubtitle}>
          Everything you need to accelerate your development
        </p>
      </div>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div className={styles.featureCard} key={index}>
            <div className={styles.featureIcon}>{feature.icon}</div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
