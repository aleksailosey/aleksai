export default function ConditionalShow({
  pathname,
  loadingLanguage,
  children
}) {
  return (
    <div
      style={{
        opacity: pathname.includes('[language]') && loadingLanguage ? 0 : 1,
        pointerEvents:
          pathname.includes('[language]') && loadingLanguage ? 'none' : 'all'
      }}
    >
      {children}
    </div>
  );
}
