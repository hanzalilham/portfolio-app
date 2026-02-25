export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Razi Abdelhak
        </p>
        <p className="text-xs text-text-muted">Nice, France</p>
      </div>
    </footer>
  );
}
