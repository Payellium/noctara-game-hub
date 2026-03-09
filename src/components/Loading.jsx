import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">

      <div className="relative flex items-center justify-center w-32 h-32">

        {/* Orbiting Dot */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute w-full h-full"
        >
          <div className="w-3 h-3 bg-purple-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#a855f7]" />
        </motion.div>

        {/* Floating Logo */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 rounded-full border-4 border-purple-500 flex items-center justify-center shadow-[0_0_25px_#a855f7]"
        >
          <span className="text-4xl font-bold text-white">N</span>
        </motion.div>
      </div>

    </div>
  );
};

export default Loading;