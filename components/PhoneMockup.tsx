import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow achter telefoon */}
      <div className="absolute inset-0 bg-[#E8611A]/15 blur-3xl rounded-full scale-75 pointer-events-none" />

      {/* iPhone frame */}
      <div className="relative w-[260px] sm:w-[300px] mx-auto">
        <div className="relative bg-[#1C1C1E] rounded-[52px] p-[10px] shadow-2xl shadow-black/60 border border-white/10">
          {/* Scherm met echte screenshot — camera zit al in de screenshot */}
          <div className="rounded-[44px] overflow-hidden aspect-[9/19.5] relative bg-white">
            <Image
              src="/screenshot.png"
              alt="OpStap app schermafbeelding"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Zijknoppen */}
        <div className="absolute right-[-3px] top-[90px] w-[3px] h-14 bg-[#2C2C2E] rounded-l-sm" />
        <div className="absolute left-[-3px] top-[80px] w-[3px] h-8 bg-[#2C2C2E] rounded-r-sm" />
        <div className="absolute left-[-3px] top-[100px] w-[3px] h-12 bg-[#2C2C2E] rounded-r-sm" />
        <div className="absolute left-[-3px] top-[124px] w-[3px] h-12 bg-[#2C2C2E] rounded-r-sm" />
      </div>
    </div>
  );
}
