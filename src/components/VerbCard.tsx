import { useState } from "react";
import { Verb } from "../types/verb";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronRight } from "lucide-react";

interface VerbCardProps {
  verb: Verb;
  onClick: () => void;
}

export function VerbCard({ verb, onClick }: VerbCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative w-full h-[320px] cursor-pointer perspective-1000 group"
      onClick={onClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 backface-hidden rounded-none overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <ImageWithFallback
            src={verb.imageUrl}
            alt={verb.infinitive}
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[#00ff87] uppercase tracking-[0.15em] mb-2 font-['Helvetica_Neue',_'Arial',_sans-serif] font-bold text-[11px]">
                  Verbo
                </p>
                <p className="text-white font-['Helvetica_Neue',_'Arial',_sans-serif] font-black text-[32px] leading-[0.9] tracking-[-0.02em] uppercase mb-1">
                  {verb.translation.replace("to ", "")}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-white/60 font-['Helvetica_Neue',_'Arial',_sans-serif] font-medium text-[13px] tracking-wide">
                    TAP TO EXPLORE
                  </span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleFlip}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-2.5 transition-all border border-white/20"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              strokeWidth="2.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 backface-hidden rounded-none overflow-hidden bg-black flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)] border border-white/10"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="text-[#00ff87] uppercase tracking-[0.15em] mb-4 font-['Helvetica_Neue',_'Arial',_sans-serif] font-bold text-[11px]">
            Infinitivo
          </p>
          <p className="text-white font-['Helvetica_Neue',_'Arial',_sans-serif] font-black text-[48px] leading-[0.9] tracking-[-0.02em] uppercase mb-6">
            {verb.infinitive}
          </p>
          <div className="w-16 h-0.5 bg-[#00ff87] mb-6" />
          <p className="text-white/60 font-['Helvetica_Neue',_'Arial',_sans-serif] font-medium text-center text-[13px] tracking-wide uppercase">
            Tap card for details
          </p>
          <button
            onClick={handleFlip}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2.5 transition-all border border-white/20"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              strokeWidth="2.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}