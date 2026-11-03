import { Arrow, Reveal } from './ui.jsx';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal as="p" className="mono" style={{ color: 'var(--c1)' }}>Your turn</Reveal>
        <Reveal as="h2">Have a project <span className="gt">in mind?</span></Reveal>
        <Reveal as="p">I’m always interested in thoughtful projects, new challenges, and chances to make the web better.</Reveal>
        <Reveal as="a" className="btn p" style={{ display: 'inline-flex' }} href="mailto:su853844@gmail.com">
          su853844@gmail.com <Arrow />
        </Reveal>
      </div>
    </section>
  );
}
