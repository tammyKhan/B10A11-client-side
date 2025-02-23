import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            className="p-6  bg-gray-800 text-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-3">Reduce Food Waste</h3>
            <p className="">Join our platform and help reduce food waste by sharing surplus food.Reducing food waste lessens the strain on landfills and lowers greenhouse gas emissions.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="p-6 bg-gray-800 text-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
            <p className="">Be a part of a caring community that believes in helping others.Community-driven initiatives empower local groups to take control of planning and resource allocation.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="p-6 bg-gray-800 text-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-3">Easy & Free</h3>
            <p className="">Share or receive food effortlessly with just a few clicks.It's surprisingly easy and completely free to access a wealth of online educational resources.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
