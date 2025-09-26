export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--surface-border)] bg-[var(--module-background)] py-8 md:py-12">
      <div className="container mx-auto max-w-[52rem] px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-sm text-[var(--text-secondary)]">
            © 罗里叭说 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
