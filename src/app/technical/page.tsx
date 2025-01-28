import "./technical.css";
import Hero from '../../components/Hero';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';

export default function Technical(){
  return (
    <>
      <main className='h-full w-full'>
        <div className='flex flex-col gap-20'>
          <Hero />
          <Skills />
          <Projects />
        </div>
      </main>
    </>
  );
}
