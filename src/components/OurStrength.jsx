import React from "react";
import { motion } from "framer-motion";

const strengths = [
  {
    image: "https://i.ibb.co.com/nsyVtrr5/photo-1544120379-4428412e6568-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg",
    title: "Fast Food",
    description: "Professionally fabricate e-business vortals and impactful core competencies. Compellingly impact technically sound solutions.",
  },
  {
    image: "https://i.ibb.co.com/n8bgCH69/photo-1540189549336-e6e99c3679fe-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg",
    title: "Healthy Foods",
    description: "Professionally fabricate e-business vortals and impactful core competencies. Compellingly impact technically sound solutions.",
  },
  {
    image: "https://i.ibb.co.com/Rpz9XHbg/photo-1567620832903-9fc6debc209f-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg",
    title: "Hygienic Foods",
    description: "Professionally fabricate e-business vortals and impactful core competencies. Compellingly impact technically sound solutions.",
  },
];

const OurStrength = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          💪 Our Strength
        </motion.h2>

        {/* Strength Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStrength;
