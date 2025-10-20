import svgPaths from "./svg-p4j8vg33wc";
import imgAYoungAdultStudyingSpanishVerbsOnATabletInACozyStudyEnvironment from "figma:asset/aaf040e18f8561781eebfbd83f953ca4263e1169.png";
import imgAStudentStudyingSpanishVerbsWithANotebookAndPenAtAWoodenDeskInABrightClassroom from "figma:asset/f64d8d2b2874ae1b721fcb79638590af89cdaa1e.png";
import imgAYoungWomanStudyingSpanishVerbsWithANotebookAndAPenAtAWoodenTable from "figma:asset/12a5a2a447734574c3c7b16fcea292f354c18b49.png";
import imgAPersonJoyfullyDancingInAVibrantOutdoorSettingSurroundedByColorfulDecorations from "figma:asset/481eb5a8a5bd5a1fff06ae6ae767a19dbb90a54b.png";
import imgAPersonJoggingAlongAPathInAVibrantGreenParkSurroundedByTreesAndABrightBlueSky from "figma:asset/b3f0d68936742ec915046676ffc8b87c9e478ef6.png";
import imgAYoungWomanJoyfullyDancingInAColorfulDressInAVibrantOutdoorSetting from "figma:asset/830d8f3e86dc2ebea25c28f6dfec2fd743464a58.png";
import imgAPersonJumpingInTheAirWithExcitementAgainstABrightBlueSky from "figma:asset/c0d5f94924e432ff828e0ff0088c8ba89abee0b8.png";

function TableHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between pb-[4px] pt-[24px] px-[16px] relative w-full">
          <p className="basis-0 font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#494949] text-[28px] tracking-[-0.56px]">Aprender Verbos en Español</p>
        </div>
      </div>
    </div>
  );
}

function TableTitleHuge() {
  return (
    <div className="bg-[#f7f5f4] content-stretch flex flex-col items-start relative shrink-0 w-full z-[3]" data-name="Table Title Huge">
      <TableHeader />
    </div>
  );
}

function AYoungAdultStudyingSpanishVerbsOnATabletInACozyStudyEnvironment() {
  return (
    <div className="relative rounded-[170px] shrink-0 size-[338px]" data-name="A young adult studying Spanish verbs on a tablet in a cozy study environment.">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[170px] size-full" src={imgAYoungAdultStudyingSpanishVerbsOnATabletInACozyStudyEnvironment} />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center leading-[0] relative shrink-0 text-[#494949] text-center w-full" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold justify-end relative shrink-0 text-[34px] tracking-[-0.68px] w-full">
        <p className="leading-[normal]">Maestro de Verbos</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',_sans-serif] font-normal justify-end relative shrink-0 text-[22px] tracking-[-0.44px] w-full">
        <p className="leading-[1.3]">Conquista los Verbos en Español</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-end not-italic relative shrink-0 text-[17px] w-full">
        <p className="leading-[1.35]">Domina los verbos esenciales en español con facilidad.</p>
      </div>
    </div>
  );
}

function OnboardingWelcome() {
  return (
    <div className="bg-[#f7f5f4] relative shrink-0 w-full z-[5]" data-name="Onboarding Welcome">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[46px] items-center justify-center px-[16px] py-[46px] relative w-full">
          <AYoungAdultStudyingSpanishVerbsOnATabletInACozyStudyEnvironment />
          <Container />
        </div>
      </div>
    </div>
  );
}

function TextFieldAtom() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[20px] shrink-0 w-full" data-name="Text Field Atom">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] text-[rgba(73,73,73,0.5)] text-nowrap">
            <p className="[white-space-collapse:collapse] leading-[1.35] overflow-ellipsis overflow-hidden">Buscar un verbo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="bg-[#f7f5f4] relative shrink-0 w-full z-[4]" data-name="Text Field">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[16px] py-[8px] relative w-full">
          <TextFieldAtom />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow h-[52px] items-start min-h-px min-w-px relative shrink-0 text-nowrap whitespace-pre" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:Bold',_sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#494949] text-[22px] tracking-[-0.44px]">Verbos Populares</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.35] not-italic relative shrink-0 text-[15px] text-[rgba(73,73,73,0.5)]">Ver Todos</p>
    </div>
  );
}

function Forward() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Forward">
          <path clipRule="evenodd" d={svgPaths.p3170ab00} fill="var(--fill-0, #6B6B6A)" fillOpacity="0.5" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pb-[4px] pt-[24px] px-[16px] relative w-full">
          <Frame />
          <Forward />
        </div>
      </div>
    </div>
  );
}

function TableTitleEmphasizedWithSubtitleAndTrailingChevron() {
  return (
    <div className="bg-[#f7f5f4] content-stretch flex flex-col items-start relative shrink-0 w-full z-[3]" data-name="Table Title Emphasized with Subtitle and Trailing Chevron">
      <TableHeader1 />
    </div>
  );
}

function AStudentStudyingSpanishVerbsWithANotebookAndPenAtAWoodenDeskInABrightClassroom() {
  return (
    <div className="basis-0 grow h-[176px] min-h-px min-w-[370px] relative shrink-0" data-name="A student studying Spanish verbs with a notebook and pen at a wooden desk in a bright classroom.">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAStudentStudyingSpanishVerbsWithANotebookAndPenAtAWoodenDeskInABrightClassroom} />
    </div>
  );
}

function AYoungWomanStudyingSpanishVerbsWithANotebookAndAPenAtAWoodenTable() {
  return (
    <div className="basis-0 grow h-[176px] min-h-px min-w-[128px] relative rounded-[12px] shrink-0" data-name="A young woman studying Spanish verbs with a notebook and a pen at a wooden table.">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgAYoungWomanStudyingSpanishVerbsWithANotebookAndAPenAtAWoodenTable} />
    </div>
  );
}

function APersonJoyfullyDancingInAVibrantOutdoorSettingSurroundedByColorfulDecorations() {
  return (
    <div className="basis-0 grow h-[176px] min-h-px min-w-[250px] relative rounded-[12px] shrink-0" data-name="A person joyfully dancing in a vibrant outdoor setting surrounded by colorful decorations.">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgAPersonJoyfullyDancingInAVibrantOutdoorSettingSurroundedByColorfulDecorations} />
    </div>
  );
}

function APersonJoggingAlongAPathInAVibrantGreenParkSurroundedByTreesAndABrightBlueSky() {
  return (
    <div className="basis-0 grow h-[176px] min-h-px min-w-[370px] relative shrink-0" data-name="A person jogging along a path in a vibrant green park surrounded by trees and a bright blue sky.">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAPersonJoggingAlongAPathInAVibrantGreenParkSurroundedByTreesAndABrightBlueSky} />
    </div>
  );
}

function AYoungWomanJoyfullyDancingInAColorfulDressInAVibrantOutdoorSetting() {
  return (
    <div className="basis-0 grow h-[176px] min-h-px min-w-[250px] relative rounded-[12px] shrink-0" data-name="A young woman joyfully dancing in a colorful dress in a vibrant outdoor setting.">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgAYoungWomanJoyfullyDancingInAColorfulDressInAVibrantOutdoorSetting} />
    </div>
  );
}

function APersonJumpingInTheAirWithExcitementAgainstABrightBlueSky() {
  return (
    <div className="basis-0 grow h-[176px] min-h-px min-w-[128px] relative rounded-[12px] shrink-0" data-name="A person jumping in the air with excitement against a bright blue sky.">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgAPersonJumpingInTheAirWithExcitementAgainstABrightBlueSky} />
    </div>
  );
}

function ImageGridDynamicSizes() {
  return (
    <div className="bg-[#f7f5f4] box-border content-start flex flex-wrap gap-[4px] items-start px-0 py-[4px] relative shrink-0 w-full z-[2]" data-name="Image Grid Dynamic Sizes">
      <AStudentStudyingSpanishVerbsWithANotebookAndPenAtAWoodenDeskInABrightClassroom />
      <AYoungWomanStudyingSpanishVerbsWithANotebookAndAPenAtAWoodenTable />
      <APersonJoyfullyDancingInAVibrantOutdoorSettingSurroundedByColorfulDecorations />
      <APersonJoggingAlongAPathInAVibrantGreenParkSurroundedByTreesAndABrightBlueSky />
      <AYoungWomanJoyfullyDancingInAColorfulDressInAVibrantOutdoorSetting />
      <APersonJumpingInTheAirWithExcitementAgainstABrightBlueSky />
    </div>
  );
}

function ButtonLargePrimary() {
  return (
    <div className="basis-0 bg-[#6b6b6a] grow h-[50px] min-h-px min-w-px relative rounded-[48px] shrink-0" data-name="Button Large Primary">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[50px] items-center justify-center px-[16px] py-[14px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[1.35] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] text-center text-nowrap text-white">Empieza a Aprender Ahora</p>
        </div>
      </div>
    </div>
  );
}

function SingleButtonPrimaryLarge() {
  return (
    <div className="bg-[#f7f5f4] relative shrink-0 w-full z-[1]" data-name="Single Button Primary Large">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
          <ButtonLargePrimary />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col isolate items-start min-h-[1598px] relative shrink-0 w-full z-[2]" data-name="Main Content">
      <OnboardingWelcome />
      <TextField />
      <TableTitleEmphasizedWithSubtitleAndTrailingChevron />
      <ImageGridDynamicSizes />
      <SingleButtonPrimaryLarge />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[calc(50%-0.5px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p7c40700} fill="var(--fill-0, #6B6B6A)" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Tab1() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="tab1">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[calc(50%-0.5px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p87e6a00} fill="var(--fill-0, #6B6B6A)" fillOpacity="0.5" fillRule="evenodd" id="Icon_2" />
        </g>
      </svg>
    </div>
  );
}

function Tab2() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="tab2">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[calc(50%-0.5px)] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Icon_2">
            <path d={svgPaths.p6834ef0} fill="var(--fill-0, #6B6B6A)" fillOpacity="0.5" />
            <path d={svgPaths.p120fab00} fill="var(--fill-0, #6B6B6A)" fillOpacity="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tab3() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="tab3?">
      <Icon2 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Tabs">
      <Tab1 />
      <Tab2 />
      <Tab3 />
    </div>
  );
}

function GestureIndicatorBar() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Gesture Indicator Bar">
      <div className="absolute bg-[rgba(0,0,0,0.04)] bottom-[8px] h-[4px] left-[calc(50%+0.5px)] rounded-[360px] translate-x-[-50%] w-[120px]" data-name="Rectangle" />
    </div>
  );
}

function BottomTabBar() {
  return (
    <div className="bg-[#f7f5f4] box-border content-stretch flex flex-col gap-[4px] items-start overflow-clip pb-0 pt-[4px] px-0 relative shrink-0 w-full z-[1]" data-name="Bottom Tab Bar">
      <Tabs />
      <GestureIndicatorBar />
    </div>
  );
}

export default function CreateAnAppForLearningSpanishVerbs() {
  return (
    <div className="bg-[#f7f5f4] content-stretch flex flex-col isolate items-start relative size-full" data-name="Create an app for learning spanish verbs">
      <TableTitleHuge />
      <MainContent />
      <BottomTabBar />
    </div>
  );
}