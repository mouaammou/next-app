import "@styles/globals.css";

export const metadata = {
  title: "promps of the revolution AI",
  description: "Discover & share AI prompts",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="descriptio" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}
