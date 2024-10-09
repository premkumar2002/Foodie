import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>About Us</h2>
      
      <h3 style={styles.subHeader}>Our Mission</h3>
      <p style={styles.paragraph}>
        At <strong>Foodie</strong>, we believe that food is more than just sustenance; it's a celebration of culture, creativity, and community. Our mission is to inspire food lovers everywhere to explore new flavors, share their culinary experiences, and connect with others who share their passion for all things delicious.
      </p>
      
      <h3 style={styles.subHeader}>Who We Are</h3>
      <p style={styles.paragraph}>
        Founded by a team of passionate food enthusiasts, <strong>Foodie</strong> is a vibrant online platform dedicated to all things food. Whether you're a seasoned chef, a home cook, or someone who just loves to eat, our site is designed for you. We are committed to providing high-quality content that includes:
      </p>
      <ul style={styles.list}>
        <li>🍽️ <strong>Recipes:</strong> Discover a wide array of mouthwatering recipes from around the world, complete with step-by-step instructions and tips.</li>
        <li>📝 <strong>Food Reviews:</strong> Read honest reviews of restaurants, cafes, and food products to help you make informed dining choices.</li>
        <li>👩‍🍳 <strong>Culinary Tips:</strong> Learn essential cooking techniques and kitchen hacks to elevate your culinary skills.</li>
        <li>🌍 <strong>Food Culture:</strong> Explore articles that delve into the rich history and traditions of various cuisines.</li>
      </ul>

      <h3 style={styles.subHeader}>Our Community</h3>
      <p style={styles.paragraph}>
        We believe in the power of community. That's why we encourage our users to share their own recipes, reviews, and experiences. Join our vibrant community of food lovers by signing up for our newsletter or following us on social media. Together, we can create a space where everyone feels welcome to share their love for food!
      </p>

      <h3 style={styles.subHeader}>Join Us on This Culinary Journey</h3>
      <p style={styles.paragraph}>
        Whether you're looking for inspiration for your next meal or seeking advice on cooking techniques, <strong>Your Website Name</strong> is here to guide you every step of the way. Let’s embark on this delicious journey together!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    fontSize: '2em',
    marginBottom: '20px',
  },
  subHeader: {
    fontSize: '1.5em',
    marginTop: '20px',
  },
  paragraph: {
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  list: {
    marginLeft: '20px',
    marginBottom: '15px',
  },
};

export default About;