import { useEffect, useState } from "react";

// Types out a sequence of lines one character at a time, with a pause between lines.
export function useTypewriter(lines, speed = 28, lineDelay = 450) {
  const [output, setOutput] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let currentLines = [];

    async function run() {
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let acc = "";
        for (let c = 0; c < line.length; c++) {
          if (cancelled) return;
          acc += line[c];
          currentLines = [...currentLines.slice(0, i), acc];
          setOutput([...currentLines]);
          await new Promise((r) => setTimeout(r, speed));
        }
        currentLines = [...currentLines.slice(0, i), line];
        await new Promise((r) => setTimeout(r, lineDelay));
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { output, done };
}
