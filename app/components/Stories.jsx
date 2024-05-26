import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Story from "./Story";
import StoryThumbnail from "./StoryThumbnail";

import stories from "../utils/stories";

const Stories = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const activeStory = stories[activeStoryIndex];
  const isModalOpenRef = useRef(false);

  const handleKeyPress = useCallback((e) => {
    if (e.key === "Escape") {
      handleModalClose();
    }
  }, []);

  const handleModalOpen = (index) => {
    isModalOpenRef.current = true;
    setActiveStoryIndex(index);
    window.addEventListener("keyup", handleKeyPress);
  };

  const handleModalClose = () => {
    setActiveStoryIndex(null);
  };

  return (
    <div className="flex">
      {!activeStory ? (
        stories?.map((story, index) => {
          return (
            <StoryThumbnail
              key={index}
              index={index}
              topic={story.topic}
              thumbnail={story.thumbnail}
              setActiveStory={handleModalOpen}
            />
          );
        })
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
                stiffness: "7000",
                type: "spring",
                damping: "3000",
              },
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 left-0 bottom-0 backdrop-blur-lg h-full flex justify-center items-center z-50 bg-black/70 p-3 overflow-hidden"
          >
            <div className="h-full lg:w-1/4  w-96 border border-neutral-700 rounded-lg">
              <Story
                story={activeStory}
                goToPrevStory={() => setActiveStoryIndex(activeStoryIndex - 1)}
                goToNextStory={() => setActiveStoryIndex(activeStoryIndex + 1)}
                handleCloseClick={handleModalClose}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Stories;
