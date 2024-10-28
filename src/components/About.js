import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">About Us</h2>
        
        <h3 className="text-2xl font-semibold text-blue-600 mt-6">Our Mission</h3>
        <p className="text-lg mt-4 leading-relaxed">
          At <span className="font-bold">Foodie</span>, we believe that food is more than just sustenance; it's a celebration of culture, creativity, and community. Our mission is to inspire food lovers everywhere to explore new flavors, share their culinary experiences, and connect with others who share their passion for all things delicious.
        </p>
        
        <h3 className="text-2xl font-semibold text-blue-600 mt-8">Who We Are</h3>
        <p className="text-lg mt-4 leading-relaxed">
          Founded by a team of passionate food enthusiasts, <span className="font-bold">Foodie</span> is a vibrant online platform dedicated to all things food. Whether you're a seasoned chef, a home cook, or simply love to eat, we are committed to providing high-quality content including:
        </p>
        <ul className="mt-4 list-disc list-inside space-y-2">
          <li><strong>🍽️ Recipes:</strong> Discover a variety of mouthwatering recipes with step-by-step instructions.</li>
          <li><strong>📝 Food Reviews:</strong> Honest reviews of restaurants, cafes, and food products.</li>
          <li><strong>👩‍🍳 Culinary Tips:</strong> Learn cooking techniques and kitchen hacks.</li>
          <li><strong>🌍 Food Culture:</strong> Articles that explore the history and traditions of global cuisines.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-600 mt-8">Our Community</h3>
        <p className="text-lg mt-4 leading-relaxed">
          We believe in the power of community. Join our vibrant food lover community, share recipes, reviews, and experiences. Connect with us on social media to start sharing your culinary journey!
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mt-8">Join Us on This Culinary Journey</h3>
        <p className="text-lg mt-4 leading-relaxed">
          Whether you're seeking inspiration or advice, <span className="font-bold">Foodie</span> is here to guide you every step of the way. Let’s embark on this delicious journey together!
        </p>
      </div>
    </div>
  );
};

export default About;
