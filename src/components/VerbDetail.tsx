import { Verb } from "../types/verb";
import { X, ArrowLeft } from "lucide-react";

interface VerbDetailProps {
  verb: Verb;
  onClose: () => void;
}

export function VerbDetail({ verb, onClose }: VerbDetailProps) {
  const tenses = [
    { key: "presente", label: "Presente" },
    { key: "preterito", label: "Pretérito" },
    { key: "imperfecto", label: "Imperfecto" },
    { key: "futuro", label: "Futuro" },
    { key: "condicional", label: "Condicional" },
  ];

  const pronouns = [
    { key: "yo", label: "Yo" },
    { key: "tu", label: "Tú" },
    { key: "el", label: "Él/Ella/Usted" },
    { key: "nosotros", label: "Nosotros" },
    { key: "vosotros", label: "Vosotros" },
    { key: "ellos", label: "Ellos/Ellas/Ustedes" },
  ];

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-black z-10 border-b border-white/10">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-white hover:text-[#00ff87] transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 text-center">
            <p className="font-['Helvetica_Neue',_'Arial',_sans-serif] font-black text-[24px] text-white uppercase tracking-[-0.02em]">
              {verb.infinitive}
            </p>
            <p className="font-['Helvetica_Neue',_'Arial',_sans-serif] font-medium text-[13px] text-[#00ff87] uppercase tracking-[0.1em]">
              {verb.translation}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white rounded-full p-2 transition-colors hover:bg-white/5"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 pb-24">
        {tenses.map((tense, idx) => (
          <div
            key={tense.key}
            className="bg-[#1a1a1a] border border-white/10 p-6 relative overflow-hidden group hover:border-[#00ff87]/30 transition-colors"
          >
            {/* Accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00ff87] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
            
            <h3 className="font-['Helvetica_Neue',_'Arial',_sans-serif] font-black text-[20px] text-white uppercase tracking-[-0.02em] mb-6 pl-4">
              {tense.label}
            </h3>
            <div className="space-y-4 pl-4">
              {pronouns.map((pronoun) => (
                <div
                  key={pronoun.key}
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0 group/item"
                >
                  <span className="font-['Helvetica_Neue',_'Arial',_sans-serif] font-medium text-[13px] text-white/50 uppercase tracking-[0.1em] min-w-[140px]">
                    {pronoun.label}
                  </span>
                  <span className="font-['Helvetica_Neue',_'Arial',_sans-serif] font-bold text-[18px] text-white group-hover/item:text-[#00ff87] transition-colors">
                    {
                      verb.conjugations[
                        tense.key as keyof typeof verb.conjugations
                      ][pronoun.key as keyof (typeof verb.conjugations.presente)]
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom spacing */}
      <div className="h-20" />
    </div>
  );
}