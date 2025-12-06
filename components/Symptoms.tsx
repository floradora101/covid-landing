import Image from "next/image";

export default function Symptoms() {
  return (
    <section id="symptoms" className="bg-brand-soft scroll-mt-3">
      <div className="mx-auto max-w-6xl px-4 text-center py-14 ">
        <p className="text-xl font-extrabold text-brand-accent  ">Covid-19</p>
        <h2 className="mt-3 font-redhat text-5xl font-extrabold text-brand-teal leading-tight">
          Symptomps
        </h2>

        <p className=" mx-auto  mt-4 max-w-2xl font-body text-[16px] text-body capitalize ">
          Corona Viruses Are A Type Of Virus. There Are Many Different Kinds,
          And Some Cause Disease. A Newly Identified Type Has Caused A Recent
          Outbreak Of Respiratory
        </p>

        <div className="mt-14 flex justify-center">
          <Image
            src="/Group 15444.png"
            alt="Symptoms diagram"
            width={900}
            height={520}
            className="h-auto w-full max-w-[900px]"
          />
        </div>
      </div>
    </section>
  );
}
