import ThemeCard from "@/src/components/shared/themes/Card";

const ChapterNotice = ({ message }: { message: string }) => {
    if (!message) return null;
  
    return (
      <ThemeCard 
      color="ink-soft"
      shadow="theme"
      className="fixed bottom-25.5 left-1/2 z-25 -translate-x-1/2 rounded-[13px]"

      >
        {message}
      </ThemeCard>
    );
  };
  
  export default ChapterNotice;
  