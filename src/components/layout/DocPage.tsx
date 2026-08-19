import type { ReactNode } from "react";

/**
 * Plain documents — legal notices, a 404, an error. Same type and palette as
 * the rest of the site, set narrow, with no visual machinery.
 */
export function DocPage({
  eyebrow,
  title,
  intro,
  actions,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="section" aria-labelledby="doc-h">
      <div className="container-tight" style={{ display: "grid", gap: 22 }}>
        <p className="meta meta--accent">{eyebrow}</p>
        <h1 id="doc-h">{title}</h1>
        <hr className="rule rule--strong" style={{ maxWidth: 72 }} />
        {intro ? <p className="lede" style={{ maxWidth: "none" }}>{intro}</p> : null}
        {children}
        {actions ? (
          <div className="row" style={{ marginTop: 10 }}>
            {actions}
          </div>
        ) : null}
      </div>
    </section>
  );
}
