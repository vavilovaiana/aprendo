import { useState } from "react";
import { Search } from "lucide-react";
import { VerbCard } from "./components/VerbCard";
import { VerbDetail } from "./components/VerbDetail";
import { verbs } from "./data/verbs";
import { Verb } from "./types/verb";

function OnboardingWelcome({ onStart }: { onStart: () => void }) {
  return (
    <div className="bg-black relative min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center px-8 py-16 max-w-2xl mx-auto text-center">
        {/* Nike-style logo/branding */}
        <div className="mb-12">
          <div className="w-20 h-1 bg-[#00ff87] mb-8 mx-auto" />
          <h1 className="font-['Helvetica_Neue',_'Arial',_sans-serif] font-black text-[64px] md:text-[80px] leading-[0.85] tracking-[-0.03em] uppercase text-white mb-6">
            Maestro de<br />Verbos
          </h1>
          <p className="font-['Helvetica_Neue',_'Arial',_sans-serif] font-medium text-[16px] tracking-[0.1em] uppercase text-[#00ff87] mb-8">
            Spanish Verb Training
          </p>
        </div>

        <p className="font-['Helvetica_Neue',_'Arial',_sans-serif] font-normal text-[18px] leading-[1.6] text-white/70 mb-12 max-w-md">
          Domina los verbos esenciales en español con un entrenamiento enfocado y efectivo.
        </p>

        <button
          onClick={onStart}
          className="bg-[#00ff87] hover:bg-[#00dd6f] text-black font-['Helvetica_Neue',_'Arial',_sans-serif] font-bold text-[15px] uppercase tracking-[0.1em] px-12 py-5 transition-all hover:scale-105 active:scale-95"
        >
          Comenzar Entrenamiento
        </button>

        <p className="font-['Helvetica_Neue',_'Arial',_sans-serif] font-normal text-[13px] text-white/40 mt-8 uppercase tracking-widest">
          Just Do It
        </p>
      </div>
    </div>
  );
}

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar verbo..."
        className="w-full bg-[#1a1a1a] border border-white/10 text-white placeholder:text-white/30 px-12 py-4 font-['Helvetica_Neue',_'Arial',_sans-serif] font-medium text-[15px] focus:outline-none focus:border-[#00ff87] transition-colors"
      />
    </div>
  );
}

function MainContent({
  searchQuery,
  setSearchQuery,
  filteredVerbs,
  onVerbClick,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredVerbs: Verb[];
  onVerbClick: (verb: Verb) => void;
}) {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Hero Section */}
      <div className="border-b border-white/10 p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00ff87] uppercase tracking-[0.15em] mb-3 font-['Helvetica_Neue',_'Arial',_sans-serif] font-bold text-[11px]">
            Entrenamiento
          </p>
          <h2 className="font-['Helvetica_Neue',_'Arial',_sans-serif] font-black text-[48px] md:text-[64px] leading-[0.9] tracking-[-0.03em] uppercase text-white mb-6">
            Verbos<br />Esenciales
          </h2>
          <p className="font-['Helvetica_Neue',_'Arial',_sans-serif] font-normal text-[15px] text-white/60 max-w-md mb-8">
            {verbs.length} verbos seleccionados para tu entrenamiento
          </p>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </div>

      {/* Verb Grid */}
      <div className="p-6 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVerbs.map((verb) => (
            <VerbCard key={verb.id} verb={verb} onClick={() => onVerbClick(verb)} />
          ))}
        </div>
        {filteredVerbs.length === 0 && (
          <div className="text-center py-20">
            <p className="font-['Helvetica_Neue',_'Arial',_sans-serif] font-medium text-[15px] text-white/40 uppercase tracking-wide">
              No se encontraron verbos
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [selectedVerb, setSelectedVerb] = useState<Verb | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVerbs = verbs.filter(
    (verb) =>
      verb.infinitive.toLowerCase().includes(searchQuery.toLowerCase()) ||
      verb.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (showOnboarding) {
    return <OnboardingWelcome onStart={() => setShowOnboarding(false)} />;
  }

  if (selectedVerb) {
    return <VerbDetail verb={selectedVerb} onClose={() => setSelectedVerb(null)} />;
  }

  return (
    <div className="bg-black flex flex-col h-screen w-full">
      <MainContent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredVerbs={filteredVerbs}
        onVerbClick={setSelectedVerb}
      />
    </div>
  );
}