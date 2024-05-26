import Image from "next/image";

const StoryThumbnail = (props) => {
  const { topic, index, thumbnail, setActiveStory } = props;
  return (
    <button
      className="flex flex-col items-center mx-2"
      onClick={() => setActiveStory(index)}
    >
      <Image
        width={800}
        height={800}
        className="w-14 h-14 ring-neutral-400 dark:ring-neutral-600 rounded-full ring-1 object-cover hover:ring-2 hover:transition-all duration-200 ease-in-out p-1 "
        src={thumbnail.src}
        alt={topic}
      />
      <div className="text-neutral-700 dark:text-neutral-600 text-sm mt-2 font-Interegular">
        {topic}
      </div>
    </button>
  );
};

export default StoryThumbnail;
