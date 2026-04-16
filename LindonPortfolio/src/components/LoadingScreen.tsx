import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ opacity: progress >= 100 ? 0 : 1 }}
    >
      <h1 className="text-3xl md:text-5xl font-bold font-heading mb-8 tracking-wider">
        <span className="text-foreground">LINDOKUHLE </span>
        <span className="text-gradient">NDULI</span>
      </h1>

      <div className="w-48 md:w-64 h-1.5 bg-muted rounded-full overflow-hidden mb-4">
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, hsl(175, 50%, 42%), hsl(290, 35%, 60%), hsl(340, 60%, 70%))",
          }}
        />
      </div>

      <p className="text-muted-foreground font-mono text-sm">
        ✦ Loading Portfolio...
      </p>
    </div>
  );
};

export default LoadingScreen;
