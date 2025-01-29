import "./technical.css";
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';

export default function Technical(){
  return (
    <>
      <main className='h-full w-full'>
        <div className='flex flex-col gap-20'>
          <About />
          <Skills />
          <Projects />
        </div>
      </main>
    </>
  );
}
