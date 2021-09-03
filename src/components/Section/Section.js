import s from './Section.module.css';

import React from 'react';

function Section({ title, children }) {
  return (
    <section className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;
