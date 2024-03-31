export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="max-w-64 m-auto text-xl w-full text-center">{children}</h1>
  );
}
