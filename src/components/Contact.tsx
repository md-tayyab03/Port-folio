import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-subtitle">Get in Touch</p>
          <h2 className="section-title">Contact Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-8"
        >
          <a
            href="mailto:mohammedtayyab242@gmail.com"
            className="group relative"
            title="Email Me"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-all duration-500" />
            <img
              src="/assets/email.png"
              alt="Email"
              className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-all duration-300 relative hover:scale-110 transform"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/md-tayyab03/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            title="Connect on LinkedIn"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-all duration-500" />
            <img
              src="/assets/linkedin.png"
              alt="LinkedIn"
              className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-all duration-300 relative hover:scale-110 transform"
            />
          </a>

          <a
            href="https://www.instagram.com/md_tayyab03/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            title="Follow on Instagram"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-all duration-500" />
            <img
              src="/assets/instagram.png"
              alt="Instagram"
              className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-all duration-300 relative hover:scale-110 transform"
            />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            title="Follow on Twitter"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-all duration-500" />
            <img
              src="/assets/twitter.png"
              alt="Twitter"
              className="w-12 h-12 opacity-80 group-hover:opacity-100 transition-all duration-300 relative hover:scale-110 transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 