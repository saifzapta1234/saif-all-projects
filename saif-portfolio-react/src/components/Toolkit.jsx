import { Label, Reveal } from './ui.jsx';
import { TOOLS, PILLS } from '../data.js';

export default function Toolkit() {
  return (
    <section id="toolkit">
      <div className="wrap">
        <Reveal className="sh">
          <div>
            <Label>Toolkit</Label>
            <h2>Tools I use to make <span className="gt">things real.</span></h2>
          </div>
          <p>A practical toolkit for building, refining and maintaining modern websites.</p>
        </Reveal>
        <Reveal className="tools">
          {TOOLS.map(([title, text]) => (
            <div className="tool" key={title}><h3>{title}</h3><p>{text}</p></div>
          ))}
        </Reveal>
        <Reveal className="pills">{PILLS.map((x) => <span key={x}>{x}</span>)}</Reveal>
      </div>
    </section>
  );
}
