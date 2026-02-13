export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center px-6">
      <div className="card w-full max-w-lg p-8">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-muted mt-3">The page you are looking for doesn&apos;t exist.</p>
        <a
          href="/en"
          className="mt-6 inline-flex rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-black hover:opacity-90"
        >
          Go to home
        </a>
      </div>
    </div>
  );
}
